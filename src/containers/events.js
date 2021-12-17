import React from 'react'

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
        <div className="my-2">
            <h3 className="text-center font-bold">{
                title
            }</h3>
            <div className="flex justify-between">
                <div className="ml-2">
                    {data.match_events.filter(event =>
                        event.type === type && event.team_id === homeTeamId).sort(function (a, b) {
                            return a.minute - b.minute
                        }).map(event =>
                            <div>
                                <p className="font-bold">
                                    {event.minute}'
                                    {event.player_name.split(',').reverse().join(' ')}:{' '}
                                    {event.result}
                                </p>
                                {event.related_player_name ?
                                    <p>
                                        ({event.related_player_name.split(',').reverse().join(' ')} )
                                    </p>
                                    : null}
                            </div>
                        )}
                </div>
                <div className="w-16">

                </div>
                <div className="mr-2">
                    {data.match_events.filter(event =>
                        event.type === type && event.team_id === awayTeamId).map(event =>
                            <div>
                                <p className="font-bold">
                                    {event.minute}'
                                    {event.player_name.split(',').reverse().join(' ')}:{' '}
                                    {event.result}
                                </p>
                                {event.related_player_name ?
                                    <p>
                                        ({event.related_player_name.split(',').reverse().join(' ')} )
                                    </p>
                                    : null}
                            </div>

                        )}
                </div>

            </div>
        </div>

    )
}


