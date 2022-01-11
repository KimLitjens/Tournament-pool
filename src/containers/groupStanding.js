import React, { useState, useEffect } from 'react'
import useAxios from '../utils/hooks/useAxios'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import { GroupStanding } from '../components';

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
            <GroupStanding.Title >GroupStanding</GroupStanding.Title>
            <GroupStanding.Table >
                <GroupStanding.Thead>
                    <GroupStanding.Tr>
                        <GroupStanding.Th>#</GroupStanding.Th>
                        <GroupStanding.Th></GroupStanding.Th>
                        <GroupStanding.Th>TEAM</GroupStanding.Th>
                        <GroupStanding.ThAbbreviated>PTS</GroupStanding.ThAbbreviated>
                        <GroupStanding.ThAbbreviated>F</GroupStanding.ThAbbreviated>
                        <GroupStanding.ThAbbreviated>A</GroupStanding.ThAbbreviated>
                        <GroupStanding.ThAbbreviated>GD</GroupStanding.ThAbbreviated>
                    </GroupStanding.Tr>
                </GroupStanding.Thead>
                <GroupStanding.Tbody>
                    {groupWithClubInfo && groupWithClubInfo.map(team => <GroupStanding.Tr key={team.team_id}>
                        <GroupStanding.Td>
                            <GroupStanding.TeamPosition>{team.position}: </GroupStanding.TeamPosition>
                        </GroupStanding.Td>
                        <GroupStanding.Td>
                            <GroupStanding.Link to={`/clubs/${team.team_info.name}/${team.team_info.team_id}`}
                                className="flex"
                                target="_blank"
                            >
                                <GroupStanding.Image src={team.team_info.logo} alt="" />
                            </GroupStanding.Link>
                        </GroupStanding.Td>
                        <GroupStanding.Td>
                            <GroupStanding.SubTitle >{team.team_info.name}</GroupStanding.SubTitle>
                        </GroupStanding.Td>
                        <GroupStanding.Td>
                            <GroupStanding.Text >{team.points}</GroupStanding.Text>
                        </GroupStanding.Td>
                        <GroupStanding.Td>
                            <GroupStanding.Text >{team.overall.goals_scored}</GroupStanding.Text>
                        </GroupStanding.Td>
                        <GroupStanding.Td>
                            <GroupStanding.Text >{team.overall.goals_against}</GroupStanding.Text>
                        </GroupStanding.Td>
                        <GroupStanding.Td>
                            <GroupStanding.Text >{team.overall.goals_diff}</GroupStanding.Text>
                        </GroupStanding.Td>
                    </GroupStanding.Tr>)}
                </GroupStanding.Tbody>

            </GroupStanding.Table>
        </>
    )
}


