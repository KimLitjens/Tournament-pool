import React, { useState, useEffect } from 'react'
import useAxios from '../utils/hooks/useAxios'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';

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
        console.log("addedClub: ", addedClubInfo)
        setGroupWithClubInfo(addedClubInfo)
        console.log("got club info")
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
        <div className="mt-8">
            <h1 className="text-center">GroupStanding</h1>
            {groupWithClubInfo && groupWithClubInfo.map(team => <div className="flex" key={team.team_id}>
                <p className="m-2 self-center">{team.position}: </p> <h2 className="w-52 text-center self-center">{team.team_info.name}</h2><p className="self-center">{team.points}</p>
            </div>)}
        </div>
    )
}
