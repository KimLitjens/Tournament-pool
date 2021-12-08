import React, { useState, useEffect } from 'react'
import useAxios from '../utils/hooks/useAxios'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import { Link } from "react-router-dom";


export default function GroupStandingContainer({ teamId }) {
    const [currentGroup, setCurrentGroup] = useState([])
    const [standingsAllGroups, setStandingsAllGroups] = useState()
    const [groupWithClubInfo, setGroupWithClubInfo] = useState([])

    const apiKey = process.env.REACT_APP_SPORTDATAAPI_API_KEY
    const { response, error, loading } = useAxios({
        url: `https://app.sportdataapi.com/api/v1/soccer/standings?apikey=${apiKey}&season_id=1959`,
    });
    const responseData = !loading && response.data.standings

    const getClubInfo = async () => {
        const addedClubInfo = [...currentGroup]
        const querySnapshot = await getDocs(collection(db, "clubs"));
        await querySnapshot.forEach((doc) => {
            const teamInfo = doc.data()
            const addTeamInfo = { "team_info": teamInfo }
            const teamIndex = addedClubInfo.findIndex(team => team.team_id == doc.id)
            if (addedClubInfo[teamIndex]) {
                Object.assign(addedClubInfo[teamIndex], addTeamInfo)
            }
        });
        setGroupWithClubInfo(addedClubInfo)
    }

    const getAllGroups = () => {
        setStandingsAllGroups(responseData)
    }

    const getCurrentGroup = async () => {
        const teamsGroup = standingsAllGroups.filter(group => group.some(team => team.team_id == teamId))[0]
        setCurrentGroup(teamsGroup)
    }

    useEffect(() => {
        getClubInfo()
    }, [currentGroup])

    useEffect(() => {
        getAllGroups()
    }, [responseData])

    useEffect(() => {
        standingsAllGroups && getCurrentGroup()
    }, [standingsAllGroups])
    return (
        <>
            <h1 className="text-center">GroupStanding</h1>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th>#</th>
                        <th></th>
                        <th>TEAM</th>
                        <th className="px-4">PTS</th>
                        <th className="px-4">F</th>
                        <th className="px-4">A</th>
                        <th className="px-4">GD</th>
                    </tr>
                </thead>
                <tbody>
                    {groupWithClubInfo && groupWithClubInfo.map(team => <tr key={team.team_id}>
                        <td>
                            <p className="m-2 self-center">{team.position}: </p>
                        </td>
                        <td>
                            <Link to={`/clubs/${team.team_info.name}/${team.team_info.team_id}`}
                                className="flex"
                                target="_blank"
                            >
                                <img src={team.team_info.logo} alt="" className="w-8 h-8 self-center" />
                            </Link>
                        </td>
                        <td>
                            <h2 className="w-52 text-center self-center">{team.team_info.name}</h2>
                        </td>
                        <td>
                            <p className="self-center text-center">{team.points}</p>
                        </td>
                        <td>
                            <p className="self-center text-center">{team.overall.goals_scored}</p>
                        </td>
                        <td>
                            <p className="self-center text-center">{team.overall.goals_against}</p>
                        </td>
                        <td>
                            <p className="self-center text-center">{team.overall.goals_diff}</p>
                        </td>
                    </tr>)}
                </tbody>

            </table>
        </>
    )
}


