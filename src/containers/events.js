import React from 'react'

import { Events } from '../components'

export default function EventsContainer({ data, homeTeamId, awayTeamId, type }) {
    let title = ""
    switch (type) {
        case "goal":
            title = "Goals";
            break;
        case "substitution":
            title = "Substitutions";
            break;
        case "yellowcard":
            title = "Yellow cards";
            break;
        case "redcard":
            title = "Red cards"
            break

    }
    return (
        <Events>
            <Events.Title >{
                title
            }</Events.Title>
            {/* Show event info */}
            <Events.Info >
                {/* Home team event */}
                <Events.Event >
                    {data.match_events.filter(event =>
                        event.type === type && event.team_id === homeTeamId).sort(function (a, b) {
                            return a.minute - b.minute
                        }).map(event =>
                            <Events.EventInfo>
                                <Events.EventTitle >
                                    {event.minute}'
                                    {event.player_name.split(',').reverse().join(' ')}:{' '}
                                    {event.result}
                                </Events.EventTitle>
                                {event.related_player_name ?
                                    <Events.EventText>
                                        ({event.related_player_name.split(',').reverse().join(' ')} )
                                    </Events.EventText>
                                    : null}
                            </Events.EventInfo>
                        )}
                </Events.Event>

                {/* Away team event */}
                <Events.EventRight >
                    {data.match_events.filter(event =>
                        event.type === type && event.team_id === awayTeamId).map(event =>
                            <Events.EventInfo>
                                <Events.EventTitle >
                                    {event.minute}'
                                    {event.player_name.split(',').reverse().join(' ')}:{' '}
                                    {event.result}
                                </Events.EventTitle>
                                {event.related_player_name ?
                                    <Events.EventText>
                                        ({event.related_player_name.split(',').reverse().join(' ')} )
                                    </Events.EventText>
                                    : null}
                            </Events.EventInfo>

                        )}
                </Events.EventRight>

            </Events.Info>
        </Events>

    )
}


