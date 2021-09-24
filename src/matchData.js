export function seedDatabase(firestore) {

    const matches = [
        {
            "match_id": 371219,
            "status_code": 3,
            "status": "finished",
            "match_start": "2021-09-14 16:45:00",
            "match_start_iso": "2021-09-14T16:45:00+00:00",
            "minute": 90,
            "league_id": 281,
            "season_id": 1959,
            "stage": null,
            "group": null,
            "round": {
                "round_id": 40874,
                "name": "1",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 7100,
                "name": "BSC Young Boys",
                "short_code": "YB",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/93.png",
                "country": {
                    "country_id": 115,
                    "name": "Switzerland",
                    "country_code": "ch",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 2523,
                "name": "Manchester United",
                "short_code": "MNU",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/19.png",
                "country": {
                    "country_id": 42,
                    "name": "England",
                    "country_code": "en",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 2,
                "away_score": 1,
                "ht_score": "0-1",
                "ft_score": "2-1",
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 3217,
                "name": "Stade de Suisse",
                "capacity": 31789,
                "city": "Bern",
                "country_id": 115
            }
        },
        {
            "match_id": 371220,
            "status_code": 3,
            "status": "finished",
            "match_start": "2021-09-14 16:45:00",
            "match_start_iso": "2021-09-14T16:45:00+00:00",
            "minute": 90,
            "league_id": 281,
            "season_id": 1959,
            "stage": null,
            "group": null,
            "round": {
                "round_id": 40874,
                "name": "1",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 3513,
                "name": "FC Sevilla",
                "short_code": "SEV",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/128.png",
                "country": {
                    "country_id": 113,
                    "name": "Spain",
                    "country_code": "es",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 1676,
                "name": "FC Salzburg",
                "short_code": "SAL",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/104.png",
                "country": {
                    "country_id": 16,
                    "name": "Austria",
                    "country_code": "at",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 1,
                "away_score": 1,
                "ht_score": "1-1",
                "ft_score": "1-1",
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1681,
                "name": "Ramon Sanchez Pizjuan",
                "capacity": 45500,
                "city": "Seville",
                "country_id": 113
            }
        },
        {
            "match_id": 371221,
            "status_code": 3,
            "status": "finished",
            "match_start": "2021-09-14 19:00:00",
            "match_start_iso": "2021-09-14T19:00:00+00:00",
            "minute": 90,
            "league_id": 281,
            "season_id": 1959,
            "stage": null,
            "group": null,
            "round": {
                "round_id": 40874,
                "name": "1",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 6534,
                "name": "CF Villarreal",
                "short_code": "VIL",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/123.png",
                "country": {
                    "country_id": 113,
                    "name": "Spain",
                    "country_code": "es",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 3511,
                "name": "Atalanta Bergamasca Calcio",
                "short_code": "ATA",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/109.png",
                "country": {
                    "country_id": 62,
                    "name": "Italy",
                    "country_code": "it",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 2,
                "away_score": 2,
                "ht_score": "1-1",
                "ft_score": "2-2",
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 3095,
                "name": "Estadio de la Ceramica",
                "capacity": 23500,
                "city": "Villarreal",
                "country_id": 113
            }
        },
        {
            "match_id": 371222,
            "status_code": 3,
            "status": "finished",
            "match_start": "2021-09-14 19:00:00",
            "match_start_iso": "2021-09-14T19:00:00+00:00",
            "minute": 90,
            "league_id": 281,
            "season_id": 1959,
            "stage": null,
            "group": null,
            "round": {
                "round_id": 40874,
                "name": "1",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 3790,
                "name": "LOSC Lille",
                "short_code": "LIL",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/97.png",
                "country": {
                    "country_id": 46,
                    "name": "France",
                    "country_code": "fr",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 4069,
                "name": "VfL Wolfsburg",
                "short_code": "WOB",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/2808.png",
                "country": {
                    "country_id": 48,
                    "name": "Germany",
                    "country_code": "de",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": "0-0",
                "ft_score": "0-0",
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1755,
                "name": "Stade Pierre Mauroy",
                "capacity": 50186,
                "city": "Lille",
                "country_id": 46
            }
        },
        {
            "match_id": 371223,
            "status_code": 3,
            "status": "finished",
            "match_start": "2021-09-14 19:00:00",
            "match_start_iso": "2021-09-14T19:00:00+00:00",
            "minute": 90,
            "league_id": 281,
            "season_id": 1959,
            "stage": null,
            "group": null,
            "round": {
                "round_id": 40874,
                "name": "1",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 7441,
                "name": "FC Dynamo Kiev",
                "short_code": "DYK",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/87.png",
                "country": {
                    "country_id": 122,
                    "name": "Ukraine",
                    "country_code": "ua",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 5800,
                "name": "Sl Benfica",
                "short_code": "BEN",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/100.png",
                "country": {
                    "country_id": 98,
                    "name": "Portugal",
                    "country_code": "pt",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": "0-0",
                "ft_score": "0-0",
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1476,
                "name": "Olimpiysky National Sports Complex",
                "capacity": 70050,
                "city": "Kiev",
                "country_id": 122
            }
        },
        {
            "match_id": 371224,
            "status_code": 3,
            "status": "finished",
            "match_start": "2021-09-14 19:00:00",
            "match_start_iso": "2021-09-14T19:00:00+00:00",
            "minute": 90,
            "league_id": 281,
            "season_id": 1959,
            "stage": null,
            "group": null,
            "round": {
                "round_id": 40874,
                "name": "1",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 3406,
                "name": "Malmo FF",
                "short_code": "MAL",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/812.png",
                "country": {
                    "country_id": 114,
                    "name": "Sweden",
                    "country_code": "se",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 4794,
                "name": "Juventus Turin",
                "short_code": "JUV",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/108.png",
                "country": {
                    "country_id": 62,
                    "name": "Italy",
                    "country_code": "it",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 3,
                "ht_score": "0-3",
                "ft_score": "0-3",
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1602,
                "name": "Stadion",
                "capacity": 22500,
                "city": "Malmo",
                "country_id": 114
            }
        },
        {
            "match_id": 371225,
            "status_code": 3,
            "status": "finished",
            "match_start": "2021-09-14 19:00:00",
            "match_start_iso": "2021-09-14T19:00:00+00:00",
            "minute": 90,
            "league_id": 281,
            "season_id": 1959,
            "stage": null,
            "group": null,
            "round": {
                "round_id": 40874,
                "name": "1",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 2524,
                "name": "Chelsea FC",
                "short_code": "CFC",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/20.png",
                "country": {
                    "country_id": 42,
                    "name": "England",
                    "country_code": "en",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 6183,
                "name": "FC Zenit St Petersburg",
                "short_code": "ZEN",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/96.png",
                "country": {
                    "country_id": 102,
                    "name": "Russia",
                    "country_code": "ru",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 1,
                "away_score": 0,
                "ht_score": "0-0",
                "ft_score": "1-0",
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1212,
                "name": "Stamford Bridge",
                "capacity": 41798,
                "city": "London",
                "country_id": 42
            }
        },
        {
            "match_id": 371226,
            "status_code": 3,
            "status": "finished",
            "match_start": "2021-09-14 19:00:00",
            "match_start_iso": "2021-09-14T19:00:00+00:00",
            "minute": 90,
            "league_id": 281,
            "season_id": 1959,
            "stage": null,
            "group": null,
            "round": {
                "round_id": 40874,
                "name": "1",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 6404,
                "name": "FC Barcelona",
                "short_code": "FCB",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/99.png",
                "country": {
                    "country_id": 113,
                    "name": "Spain",
                    "country_code": "es",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 4066,
                "name": "FC Bayern Munich",
                "short_code": "FCB",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/111.png",
                "country": {
                    "country_id": 48,
                    "name": "Germany",
                    "country_code": "de",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 3,
                "ht_score": "0-1",
                "ft_score": "0-3",
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 3080,
                "name": "Camp Nou",
                "capacity": 98787,
                "city": "Barcelona",
                "country_id": 113
            }
        },
        {
            "match_id": 371227,
            "status_code": 3,
            "status": "finished",
            "match_start": "2021-09-15 16:45:00",
            "match_start_iso": "2021-09-15T16:45:00+00:00",
            "minute": 90,
            "league_id": 281,
            "season_id": 1959,
            "stage": null,
            "group": null,
            "round": {
                "round_id": 40874,
                "name": "1",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 5278,
                "name": "FC Sheriff Tiraspol",
                "short_code": "SHF",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/64.png",
                "country": {
                    "country_id": 79,
                    "name": "Moldova",
                    "country_code": "md",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 7440,
                "name": "FC Shakhtar Donetsk",
                "short_code": "SHA",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/110.png",
                "country": {
                    "country_id": 122,
                    "name": "Ukraine",
                    "country_code": "ua",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 2,
                "away_score": 0,
                "ht_score": "1-0",
                "ft_score": "2-0",
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 2479,
                "name": "Sheriff Stadium",
                "capacity": 14000,
                "city": "Tiraspol",
                "country_id": 79
            }
        },
        {
            "match_id": 371228,
            "status_code": 3,
            "status": "finished",
            "match_start": "2021-09-15 16:45:00",
            "match_start_iso": "2021-09-15T16:45:00+00:00",
            "minute": 90,
            "league_id": 281,
            "season_id": 1959,
            "stage": null,
            "group": null,
            "round": {
                "round_id": 40874,
                "name": "1",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 3509,
                "name": "Besiktas",
                "short_code": "BES",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/1031.png",
                "country": {
                    "country_id": 120,
                    "name": "Turkey",
                    "country_code": "tr",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 4074,
                "name": "Borussia Dortmund",
                "short_code": "BVB",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/98.png",
                "country": {
                    "country_id": 48,
                    "name": "Germany",
                    "country_code": "de",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 1,
                "away_score": 2,
                "ht_score": "0-2",
                "ft_score": "1-2",
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1638,
                "name": "Vodafone Park",
                "capacity": 41188,
                "city": "Istanbul",
                "country_id": 120
            }
        },
        {
            "match_id": 371229,
            "status_code": 3,
            "status": "finished",
            "match_start": "2021-09-15 19:00:00",
            "match_start_iso": "2021-09-15T19:00:00+00:00",
            "minute": 90,
            "league_id": 281,
            "season_id": 1959,
            "stage": null,
            "group": null,
            "round": {
                "round_id": 40874,
                "name": "1",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 5801,
                "name": "Sporting CP",
                "short_code": "SPO",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/2297.png",
                "country": {
                    "country_id": 98,
                    "name": "Portugal",
                    "country_code": "pt",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 5324,
                "name": "Ajax Amsterdam",
                "short_code": "AJA",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/85.png",
                "country": {
                    "country_id": 83,
                    "name": "Netherlands",
                    "country_code": "nl",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 1,
                "away_score": 5,
                "ht_score": "1-3",
                "ft_score": "1-5",
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 2742,
                "name": "Jose Alvalade",
                "capacity": 50044,
                "city": "Lisbon",
                "country_id": 98
            }
        },
        {
            "match_id": 371230,
            "status_code": 3,
            "status": "finished",
            "match_start": "2021-09-15 19:00:00",
            "match_start_iso": "2021-09-15T19:00:00+00:00",
            "minute": 90,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2065,
                "group_name": "A"
            },
            "round": {
                "round_id": 40874,
                "name": "1",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 12400,
                "name": "Manchester City",
                "short_code": "MNC",
                "common_name": "Manchester City ",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/4.png",
                "country": {
                    "country_id": 42,
                    "name": "England",
                    "country_code": "en",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 3489,
                "name": "RB Leipzig",
                "short_code": "RBL",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/101.png",
                "country": {
                    "country_id": 48,
                    "name": "Germany",
                    "country_code": "de",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 6,
                "away_score": 3,
                "ht_score": "3-1",
                "ft_score": "6-3",
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1210,
                "name": "Etihad Stadium",
                "capacity": 46708,
                "city": "Manchester",
                "country_id": 42
            }
        },
        {
            "match_id": 371231,
            "status_code": 3,
            "status": "finished",
            "match_start": "2021-09-15 19:00:00",
            "match_start_iso": "2021-09-15T19:00:00+00:00",
            "minute": 90,
            "league_id": 281,
            "season_id": 1959,
            "stage": null,
            "group": null,
            "round": {
                "round_id": 40874,
                "name": "1",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 2509,
                "name": "Liverpool FC",
                "short_code": "LFC",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/1.png",
                "country": {
                    "country_id": 42,
                    "name": "England",
                    "country_code": "en",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 4798,
                "name": "AC Milan",
                "short_code": "ACM",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/391.png",
                "country": {
                    "country_id": 62,
                    "name": "Italy",
                    "country_code": "it",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 3,
                "away_score": 2,
                "ht_score": "1-2",
                "ft_score": "3-2",
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1195,
                "name": "Anfield",
                "capacity": 54074,
                "city": "Liverpool",
                "country_id": 42
            }
        },
        {
            "match_id": 371232,
            "status_code": 3,
            "status": "finished",
            "match_start": "2021-09-15 19:00:00",
            "match_start_iso": "2021-09-15T19:00:00+00:00",
            "minute": 90,
            "league_id": 281,
            "season_id": 1959,
            "stage": null,
            "group": null,
            "round": {
                "round_id": 40874,
                "name": "1",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 4810,
                "name": "Inter Milano",
                "short_code": "INT",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/94.png",
                "country": {
                    "country_id": 62,
                    "name": "Italy",
                    "country_code": "it",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 6402,
                "name": "Real Madrid",
                "short_code": "RMA",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/113.png",
                "country": {
                    "country_id": 113,
                    "name": "Spain",
                    "country_code": "es",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 1,
                "ht_score": "0-0",
                "ft_score": "0-1",
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1533,
                "name": "Giuseppe Meazza",
                "capacity": 80018,
                "city": "Milan",
                "country_id": 62
            }
        },
        {
            "match_id": 371233,
            "status_code": 3,
            "status": "finished",
            "match_start": "2021-09-15 19:00:00",
            "match_start_iso": "2021-09-15T19:00:00+00:00",
            "minute": 90,
            "league_id": 281,
            "season_id": 1959,
            "stage": null,
            "group": null,
            "round": {
                "round_id": 40874,
                "name": "1",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 6406,
                "name": "Atletico Madrid",
                "short_code": "ATM",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/107.png",
                "country": {
                    "country_id": 113,
                    "name": "Spain",
                    "country_code": "es",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 5917,
                "name": "FC Porto",
                "short_code": "FCP",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/89.png",
                "country": {
                    "country_id": 98,
                    "name": "Portugal",
                    "country_code": "pt",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": "0-0",
                "ft_score": "0-0",
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 3061,
                "name": "Wanda Metropolitano",
                "capacity": 67942,
                "city": "Madrid",
                "country_id": 113
            }
        },
        {
            "match_id": 371234,
            "status_code": 3,
            "status": "finished",
            "match_start": "2021-09-15 19:00:00",
            "match_start_iso": "2021-09-15T19:00:00+00:00",
            "minute": 90,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2065,
                "group_name": "A"
            },
            "round": {
                "round_id": 40874,
                "name": "1",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 12409,
                "name": "Club Brugge",
                "short_code": "BRU",
                "common_name": "Club Brugge",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/86.png",
                "country": {
                    "country_id": 21,
                    "name": "Belgium",
                    "country_code": "be",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 3651,
                "name": "Paris Saint-Germain",
                "short_code": "PSG",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/112.png",
                "country": {
                    "country_id": 46,
                    "name": "France",
                    "country_code": "fr",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 1,
                "away_score": 1,
                "ht_score": "1-1",
                "ft_score": "1-1",
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 818,
                "name": "Jan Breydel Stadium",
                "capacity": 29975,
                "city": "Bruges",
                "country_id": 21
            }
        },
        {
            "match_id": 371235,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-09-28 16:45:00",
            "match_start_iso": "2021-09-28T16:45:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2067,
                "group_name": "C"
            },
            "round": {
                "round_id": 40875,
                "name": "2",
                "is_current": 1
            },
            "referee_id": null,
            "home_team": {
                "team_id": 5324,
                "name": "Ajax Amsterdam",
                "short_code": "AJA",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/85.png",
                "country": {
                    "country_id": 83,
                    "name": "Netherlands",
                    "country_code": "nl",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 3509,
                "name": "Besiktas",
                "short_code": "BES",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/1031.png",
                "country": {
                    "country_id": 120,
                    "name": "Turkey",
                    "country_code": "tr",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1509,
                "name": "Johan Cruijff Arena",
                "capacity": 54990,
                "city": "Amsterdam",
                "country_id": 83
            }
        },
        {
            "match_id": 371236,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-09-28 16:45:00",
            "match_start_iso": "2021-09-28T16:45:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2068,
                "group_name": "D"
            },
            "round": {
                "round_id": 40875,
                "name": "2",
                "is_current": 1
            },
            "referee_id": null,
            "home_team": {
                "team_id": 7440,
                "name": "FC Shakhtar Donetsk",
                "short_code": "SHA",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/110.png",
                "country": {
                    "country_id": 122,
                    "name": "Ukraine",
                    "country_code": "ua",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 4810,
                "name": "Inter Milano",
                "short_code": "INT",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/94.png",
                "country": {
                    "country_id": 62,
                    "name": "Italy",
                    "country_code": "it",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1476,
                "name": "Olimpiysky National Sports Complex",
                "capacity": 70050,
                "city": "Kiev",
                "country_id": 122
            }
        },
        {
            "match_id": 371237,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-09-28 19:00:00",
            "match_start_iso": "2021-09-28T19:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2068,
                "group_name": "D"
            },
            "round": {
                "round_id": 40875,
                "name": "2",
                "is_current": 1
            },
            "referee_id": null,
            "home_team": {
                "team_id": 6402,
                "name": "Real Madrid",
                "short_code": "RMA",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/113.png",
                "country": {
                    "country_id": 113,
                    "name": "Spain",
                    "country_code": "es",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 5278,
                "name": "FC Sheriff Tiraspol",
                "short_code": "SHF",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/64.png",
                "country": {
                    "country_id": 79,
                    "name": "Moldova",
                    "country_code": "md",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1521,
                "name": "Santiago Bernabeu",
                "capacity": 81044,
                "city": "Madrid",
                "country_id": 113
            }
        },
        {
            "match_id": 371238,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-09-28 19:00:00",
            "match_start_iso": "2021-09-28T19:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2065,
                "group_name": "A"
            },
            "round": {
                "round_id": 40875,
                "name": "2",
                "is_current": 1
            },
            "referee_id": null,
            "home_team": {
                "team_id": 3651,
                "name": "Paris Saint-Germain",
                "short_code": "PSG",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/112.png",
                "country": {
                    "country_id": 46,
                    "name": "France",
                    "country_code": "fr",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 12400,
                "name": "Manchester City",
                "short_code": "MNC",
                "common_name": "Manchester City ",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/4.png",
                "country": {
                    "country_id": 42,
                    "name": "England",
                    "country_code": "en",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1757,
                "name": "Parc des Princes",
                "capacity": 47929,
                "city": "Paris",
                "country_id": 46
            }
        },
        {
            "match_id": 371239,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-09-28 19:00:00",
            "match_start_iso": "2021-09-28T19:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2065,
                "group_name": "A"
            },
            "round": {
                "round_id": 40875,
                "name": "2",
                "is_current": 1
            },
            "referee_id": null,
            "home_team": {
                "team_id": 3489,
                "name": "RB Leipzig",
                "short_code": "RBL",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/101.png",
                "country": {
                    "country_id": 48,
                    "name": "Germany",
                    "country_code": "de",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 12409,
                "name": "Club Brugge",
                "short_code": "BRU",
                "common_name": "Club Brugge",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/86.png",
                "country": {
                    "country_id": 21,
                    "name": "Belgium",
                    "country_code": "be",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1676,
                "name": "Red Bull Arena",
                "capacity": 42558,
                "city": "Leipzig",
                "country_id": 48
            }
        },
        {
            "match_id": 371240,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-09-28 19:00:00",
            "match_start_iso": "2021-09-28T19:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2067,
                "group_name": "C"
            },
            "round": {
                "round_id": 40875,
                "name": "2",
                "is_current": 1
            },
            "referee_id": null,
            "home_team": {
                "team_id": 4074,
                "name": "Borussia Dortmund",
                "short_code": "BVB",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/98.png",
                "country": {
                    "country_id": 48,
                    "name": "Germany",
                    "country_code": "de",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 5801,
                "name": "Sporting CP",
                "short_code": "SPO",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/2297.png",
                "country": {
                    "country_id": 98,
                    "name": "Portugal",
                    "country_code": "pt",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1932,
                "name": "Signal Iduna Park",
                "capacity": 81365,
                "city": "Dortmund",
                "country_id": 48
            }
        },
        {
            "match_id": 371241,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-09-28 19:00:00",
            "match_start_iso": "2021-09-28T19:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2066,
                "group_name": "B"
            },
            "round": {
                "round_id": 40875,
                "name": "2",
                "is_current": 1
            },
            "referee_id": null,
            "home_team": {
                "team_id": 4798,
                "name": "AC Milan",
                "short_code": "ACM",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/391.png",
                "country": {
                    "country_id": 62,
                    "name": "Italy",
                    "country_code": "it",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 6406,
                "name": "Atletico Madrid",
                "short_code": "ATM",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/107.png",
                "country": {
                    "country_id": 113,
                    "name": "Spain",
                    "country_code": "es",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1533,
                "name": "Giuseppe Meazza",
                "capacity": 80018,
                "city": "Milan",
                "country_id": 62
            }
        },
        {
            "match_id": 371242,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-09-28 19:00:00",
            "match_start_iso": "2021-09-28T19:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2066,
                "group_name": "B"
            },
            "round": {
                "round_id": 40875,
                "name": "2",
                "is_current": 1
            },
            "referee_id": null,
            "home_team": {
                "team_id": 5917,
                "name": "FC Porto",
                "short_code": "FCP",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/89.png",
                "country": {
                    "country_id": 98,
                    "name": "Portugal",
                    "country_code": "pt",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 2509,
                "name": "Liverpool FC",
                "short_code": "LFC",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/1.png",
                "country": {
                    "country_id": 42,
                    "name": "England",
                    "country_code": "en",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 2740,
                "name": "Estadio do Dragao",
                "capacity": 52033,
                "city": "Porto",
                "country_id": 98
            }
        },
        {
            "match_id": 371243,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-09-29 16:45:00",
            "match_start_iso": "2021-09-29T16:45:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2072,
                "group_name": "H"
            },
            "round": {
                "round_id": 40875,
                "name": "2",
                "is_current": 1
            },
            "referee_id": null,
            "home_team": {
                "team_id": 6183,
                "name": "FC Zenit St Petersburg",
                "short_code": "ZEN",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/96.png",
                "country": {
                    "country_id": 102,
                    "name": "Russia",
                    "country_code": "ru",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 3406,
                "name": "Malmo FF",
                "short_code": "MAL",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/812.png",
                "country": {
                    "country_id": 114,
                    "name": "Sweden",
                    "country_code": "se",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 2859,
                "name": "Gazprom Arena",
                "capacity": 70000,
                "city": "Saint Petersburg",
                "country_id": 102
            }
        },
        {
            "match_id": 371244,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-09-29 16:45:00",
            "match_start_iso": "2021-09-29T16:45:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2070,
                "group_name": "F"
            },
            "round": {
                "round_id": 40875,
                "name": "2",
                "is_current": 1
            },
            "referee_id": null,
            "home_team": {
                "team_id": 3511,
                "name": "Atalanta Bergamasca Calcio",
                "short_code": "ATA",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/109.png",
                "country": {
                    "country_id": 62,
                    "name": "Italy",
                    "country_code": "it",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 7100,
                "name": "BSC Young Boys",
                "short_code": "YB",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/93.png",
                "country": {
                    "country_id": 115,
                    "name": "Switzerland",
                    "country_code": "ch",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1562,
                "name": "Gewiss Stadium",
                "capacity": 26393,
                "city": "Bergamo",
                "country_id": 62
            }
        },
        {
            "match_id": 371245,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-09-29 19:00:00",
            "match_start_iso": "2021-09-29T19:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2069,
                "group_name": "E"
            },
            "round": {
                "round_id": 40875,
                "name": "2",
                "is_current": 1
            },
            "referee_id": null,
            "home_team": {
                "team_id": 4066,
                "name": "FC Bayern Munich",
                "short_code": "FCB",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/111.png",
                "country": {
                    "country_id": 48,
                    "name": "Germany",
                    "country_code": "de",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 7441,
                "name": "FC Dynamo Kiev",
                "short_code": "DYK",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/87.png",
                "country": {
                    "country_id": 122,
                    "name": "Ukraine",
                    "country_code": "ua",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1927,
                "name": "Allianz Arena",
                "capacity": 75000,
                "city": "Munich",
                "country_id": 48
            }
        },
        {
            "match_id": 371246,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-09-29 19:00:00",
            "match_start_iso": "2021-09-29T19:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2072,
                "group_name": "H"
            },
            "round": {
                "round_id": 40875,
                "name": "2",
                "is_current": 1
            },
            "referee_id": null,
            "home_team": {
                "team_id": 4794,
                "name": "Juventus Turin",
                "short_code": "JUV",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/108.png",
                "country": {
                    "country_id": 62,
                    "name": "Italy",
                    "country_code": "it",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 2524,
                "name": "Chelsea FC",
                "short_code": "CFC",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/20.png",
                "country": {
                    "country_id": 42,
                    "name": "England",
                    "country_code": "en",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1488,
                "name": "Allianz Stadium",
                "capacity": 41507,
                "city": "Turin",
                "country_id": 62
            }
        },
        {
            "match_id": 371247,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-09-29 19:00:00",
            "match_start_iso": "2021-09-29T19:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2071,
                "group_name": "G"
            },
            "round": {
                "round_id": 40875,
                "name": "2",
                "is_current": 1
            },
            "referee_id": null,
            "home_team": {
                "team_id": 1676,
                "name": "FC Salzburg",
                "short_code": "SAL",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/104.png",
                "country": {
                    "country_id": 16,
                    "name": "Austria",
                    "country_code": "at",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 3790,
                "name": "LOSC Lille",
                "short_code": "LIL",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/97.png",
                "country": {
                    "country_id": 46,
                    "name": "France",
                    "country_code": "fr",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 724,
                "name": "Red Bull Arena",
                "capacity": 30188,
                "city": "Salzburg",
                "country_id": 16
            }
        },
        {
            "match_id": 371248,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-09-29 19:00:00",
            "match_start_iso": "2021-09-29T19:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2071,
                "group_name": "G"
            },
            "round": {
                "round_id": 40875,
                "name": "2",
                "is_current": 1
            },
            "referee_id": null,
            "home_team": {
                "team_id": 4069,
                "name": "VfL Wolfsburg",
                "short_code": "WOB",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/2808.png",
                "country": {
                    "country_id": 48,
                    "name": "Germany",
                    "country_code": "de",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 3513,
                "name": "FC Sevilla",
                "short_code": "SEV",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/128.png",
                "country": {
                    "country_id": 113,
                    "name": "Spain",
                    "country_code": "es",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1929,
                "name": "Volkswagen Arena",
                "capacity": 30000,
                "city": "Wolfsburg",
                "country_id": 48
            }
        },
        {
            "match_id": 371249,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-09-29 19:00:00",
            "match_start_iso": "2021-09-29T19:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2070,
                "group_name": "F"
            },
            "round": {
                "round_id": 40875,
                "name": "2",
                "is_current": 1
            },
            "referee_id": null,
            "home_team": {
                "team_id": 2523,
                "name": "Manchester United",
                "short_code": "MNU",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/19.png",
                "country": {
                    "country_id": 42,
                    "name": "England",
                    "country_code": "en",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 6534,
                "name": "CF Villarreal",
                "short_code": "VIL",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/123.png",
                "country": {
                    "country_id": 113,
                    "name": "Spain",
                    "country_code": "es",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1204,
                "name": "Old Trafford",
                "capacity": 75635,
                "city": "Manchester",
                "country_id": 42
            }
        },
        {
            "match_id": 371250,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-09-29 19:00:00",
            "match_start_iso": "2021-09-29T19:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2069,
                "group_name": "E"
            },
            "round": {
                "round_id": 40875,
                "name": "2",
                "is_current": 1
            },
            "referee_id": null,
            "home_team": {
                "team_id": 5800,
                "name": "Sl Benfica",
                "short_code": "BEN",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/100.png",
                "country": {
                    "country_id": 98,
                    "name": "Portugal",
                    "country_code": "pt",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 6404,
                "name": "FC Barcelona",
                "short_code": "FCB",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/99.png",
                "country": {
                    "country_id": 113,
                    "name": "Spain",
                    "country_code": "es",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1532,
                "name": "Estadio do Sport Lisboa e Benfica",
                "capacity": 64642,
                "city": "Lisbon",
                "country_id": 98
            }
        },
        {
            "match_id": 371251,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-10-19 16:45:00",
            "match_start_iso": "2021-10-19T16:45:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2067,
                "group_name": "C"
            },
            "round": {
                "round_id": 40876,
                "name": "3",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 3509,
                "name": "Besiktas",
                "short_code": "BES",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/1031.png",
                "country": {
                    "country_id": 120,
                    "name": "Turkey",
                    "country_code": "tr",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 5801,
                "name": "Sporting CP",
                "short_code": "SPO",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/2297.png",
                "country": {
                    "country_id": 98,
                    "name": "Portugal",
                    "country_code": "pt",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1638,
                "name": "Vodafone Park",
                "capacity": 41188,
                "city": "Istanbul",
                "country_id": 120
            }
        },
        {
            "match_id": 371252,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-10-19 16:45:00",
            "match_start_iso": "2021-10-19T16:45:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2065,
                "group_name": "A"
            },
            "round": {
                "round_id": 40876,
                "name": "3",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 12409,
                "name": "Club Brugge",
                "short_code": "BRU",
                "common_name": "Club Brugge",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/86.png",
                "country": {
                    "country_id": 21,
                    "name": "Belgium",
                    "country_code": "be",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 12400,
                "name": "Manchester City",
                "short_code": "MNC",
                "common_name": "Manchester City ",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/4.png",
                "country": {
                    "country_id": 42,
                    "name": "England",
                    "country_code": "en",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 818,
                "name": "Jan Breydel Stadium",
                "capacity": 29975,
                "city": "Bruges",
                "country_id": 21
            }
        },
        {
            "match_id": 371253,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-10-19 19:00:00",
            "match_start_iso": "2021-10-19T19:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2068,
                "group_name": "D"
            },
            "round": {
                "round_id": 40876,
                "name": "3",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 7440,
                "name": "FC Shakhtar Donetsk",
                "short_code": "SHA",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/110.png",
                "country": {
                    "country_id": 122,
                    "name": "Ukraine",
                    "country_code": "ua",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 6402,
                "name": "Real Madrid",
                "short_code": "RMA",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/113.png",
                "country": {
                    "country_id": 113,
                    "name": "Spain",
                    "country_code": "es",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1476,
                "name": "Olimpiysky National Sports Complex",
                "capacity": 70050,
                "city": "Kiev",
                "country_id": 122
            }
        },
        {
            "match_id": 371254,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-10-19 19:00:00",
            "match_start_iso": "2021-10-19T19:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2066,
                "group_name": "B"
            },
            "round": {
                "round_id": 40876,
                "name": "3",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 5917,
                "name": "FC Porto",
                "short_code": "FCP",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/89.png",
                "country": {
                    "country_id": 98,
                    "name": "Portugal",
                    "country_code": "pt",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 4798,
                "name": "AC Milan",
                "short_code": "ACM",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/391.png",
                "country": {
                    "country_id": 62,
                    "name": "Italy",
                    "country_code": "it",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 2740,
                "name": "Estadio do Dragao",
                "capacity": 52033,
                "city": "Porto",
                "country_id": 98
            }
        },
        {
            "match_id": 371255,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-10-19 19:00:00",
            "match_start_iso": "2021-10-19T19:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2065,
                "group_name": "A"
            },
            "round": {
                "round_id": 40876,
                "name": "3",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 3651,
                "name": "Paris Saint-Germain",
                "short_code": "PSG",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/112.png",
                "country": {
                    "country_id": 46,
                    "name": "France",
                    "country_code": "fr",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 3489,
                "name": "RB Leipzig",
                "short_code": "RBL",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/101.png",
                "country": {
                    "country_id": 48,
                    "name": "Germany",
                    "country_code": "de",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1757,
                "name": "Parc des Princes",
                "capacity": 47929,
                "city": "Paris",
                "country_id": 46
            }
        },
        {
            "match_id": 371256,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-10-19 19:00:00",
            "match_start_iso": "2021-10-19T19:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2068,
                "group_name": "D"
            },
            "round": {
                "round_id": 40876,
                "name": "3",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 4810,
                "name": "Inter Milano",
                "short_code": "INT",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/94.png",
                "country": {
                    "country_id": 62,
                    "name": "Italy",
                    "country_code": "it",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 5278,
                "name": "FC Sheriff Tiraspol",
                "short_code": "SHF",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/64.png",
                "country": {
                    "country_id": 79,
                    "name": "Moldova",
                    "country_code": "md",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1533,
                "name": "Giuseppe Meazza",
                "capacity": 80018,
                "city": "Milan",
                "country_id": 62
            }
        },
        {
            "match_id": 371257,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-10-19 19:00:00",
            "match_start_iso": "2021-10-19T19:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2066,
                "group_name": "B"
            },
            "round": {
                "round_id": 40876,
                "name": "3",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 6406,
                "name": "Atletico Madrid",
                "short_code": "ATM",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/107.png",
                "country": {
                    "country_id": 113,
                    "name": "Spain",
                    "country_code": "es",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 2509,
                "name": "Liverpool FC",
                "short_code": "LFC",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/1.png",
                "country": {
                    "country_id": 42,
                    "name": "England",
                    "country_code": "en",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 3061,
                "name": "Wanda Metropolitano",
                "capacity": 67942,
                "city": "Madrid",
                "country_id": 113
            }
        },
        {
            "match_id": 371258,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-10-19 19:00:00",
            "match_start_iso": "2021-10-19T19:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2067,
                "group_name": "C"
            },
            "round": {
                "round_id": 40876,
                "name": "3",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 5324,
                "name": "Ajax Amsterdam",
                "short_code": "AJA",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/85.png",
                "country": {
                    "country_id": 83,
                    "name": "Netherlands",
                    "country_code": "nl",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 4074,
                "name": "Borussia Dortmund",
                "short_code": "BVB",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/98.png",
                "country": {
                    "country_id": 48,
                    "name": "Germany",
                    "country_code": "de",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1509,
                "name": "Johan Cruijff Arena",
                "capacity": 54990,
                "city": "Amsterdam",
                "country_id": 83
            }
        },
        {
            "match_id": 371259,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-10-20 16:45:00",
            "match_start_iso": "2021-10-20T16:45:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2071,
                "group_name": "G"
            },
            "round": {
                "round_id": 40876,
                "name": "3",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 1676,
                "name": "FC Salzburg",
                "short_code": "SAL",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/104.png",
                "country": {
                    "country_id": 16,
                    "name": "Austria",
                    "country_code": "at",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 4069,
                "name": "VfL Wolfsburg",
                "short_code": "WOB",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/2808.png",
                "country": {
                    "country_id": 48,
                    "name": "Germany",
                    "country_code": "de",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 724,
                "name": "Red Bull Arena",
                "capacity": 30188,
                "city": "Salzburg",
                "country_id": 16
            }
        },
        {
            "match_id": 371260,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-10-20 16:45:00",
            "match_start_iso": "2021-10-20T16:45:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2069,
                "group_name": "E"
            },
            "round": {
                "round_id": 40876,
                "name": "3",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 6404,
                "name": "FC Barcelona",
                "short_code": "FCB",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/99.png",
                "country": {
                    "country_id": 113,
                    "name": "Spain",
                    "country_code": "es",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 7441,
                "name": "FC Dynamo Kiev",
                "short_code": "DYK",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/87.png",
                "country": {
                    "country_id": 122,
                    "name": "Ukraine",
                    "country_code": "ua",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 3080,
                "name": "Camp Nou",
                "capacity": 98787,
                "city": "Barcelona",
                "country_id": 113
            }
        },
        {
            "match_id": 371261,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-10-20 19:00:00",
            "match_start_iso": "2021-10-20T19:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2070,
                "group_name": "F"
            },
            "round": {
                "round_id": 40876,
                "name": "3",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 2523,
                "name": "Manchester United",
                "short_code": "MNU",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/19.png",
                "country": {
                    "country_id": 42,
                    "name": "England",
                    "country_code": "en",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 3511,
                "name": "Atalanta Bergamasca Calcio",
                "short_code": "ATA",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/109.png",
                "country": {
                    "country_id": 62,
                    "name": "Italy",
                    "country_code": "it",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1204,
                "name": "Old Trafford",
                "capacity": 75635,
                "city": "Manchester",
                "country_id": 42
            }
        },
        {
            "match_id": 371262,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-10-20 19:00:00",
            "match_start_iso": "2021-10-20T19:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2071,
                "group_name": "G"
            },
            "round": {
                "round_id": 40876,
                "name": "3",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 3790,
                "name": "LOSC Lille",
                "short_code": "LIL",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/97.png",
                "country": {
                    "country_id": 46,
                    "name": "France",
                    "country_code": "fr",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 3513,
                "name": "FC Sevilla",
                "short_code": "SEV",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/128.png",
                "country": {
                    "country_id": 113,
                    "name": "Spain",
                    "country_code": "es",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1755,
                "name": "Stade Pierre Mauroy",
                "capacity": 50186,
                "city": "Lille",
                "country_id": 46
            }
        },
        {
            "match_id": 371263,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-10-20 19:00:00",
            "match_start_iso": "2021-10-20T19:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2070,
                "group_name": "F"
            },
            "round": {
                "round_id": 40876,
                "name": "3",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 7100,
                "name": "BSC Young Boys",
                "short_code": "YB",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/93.png",
                "country": {
                    "country_id": 115,
                    "name": "Switzerland",
                    "country_code": "ch",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 6534,
                "name": "CF Villarreal",
                "short_code": "VIL",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/123.png",
                "country": {
                    "country_id": 113,
                    "name": "Spain",
                    "country_code": "es",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 3217,
                "name": "Stade de Suisse",
                "capacity": 31789,
                "city": "Bern",
                "country_id": 115
            }
        },
        {
            "match_id": 371264,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-10-20 19:00:00",
            "match_start_iso": "2021-10-20T19:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2072,
                "group_name": "H"
            },
            "round": {
                "round_id": 40876,
                "name": "3",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 2524,
                "name": "Chelsea FC",
                "short_code": "CFC",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/20.png",
                "country": {
                    "country_id": 42,
                    "name": "England",
                    "country_code": "en",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 3406,
                "name": "Malmo FF",
                "short_code": "MAL",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/812.png",
                "country": {
                    "country_id": 114,
                    "name": "Sweden",
                    "country_code": "se",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1212,
                "name": "Stamford Bridge",
                "capacity": 41798,
                "city": "London",
                "country_id": 42
            }
        },
        {
            "match_id": 371265,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-10-20 19:00:00",
            "match_start_iso": "2021-10-20T19:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2072,
                "group_name": "H"
            },
            "round": {
                "round_id": 40876,
                "name": "3",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 6183,
                "name": "FC Zenit St Petersburg",
                "short_code": "ZEN",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/96.png",
                "country": {
                    "country_id": 102,
                    "name": "Russia",
                    "country_code": "ru",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 4794,
                "name": "Juventus Turin",
                "short_code": "JUV",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/108.png",
                "country": {
                    "country_id": 62,
                    "name": "Italy",
                    "country_code": "it",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 2859,
                "name": "Gazprom Arena",
                "capacity": 70000,
                "city": "Saint Petersburg",
                "country_id": 102
            }
        },
        {
            "match_id": 371266,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-10-20 19:00:00",
            "match_start_iso": "2021-10-20T19:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2069,
                "group_name": "E"
            },
            "round": {
                "round_id": 40876,
                "name": "3",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 5800,
                "name": "Sl Benfica",
                "short_code": "BEN",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/100.png",
                "country": {
                    "country_id": 98,
                    "name": "Portugal",
                    "country_code": "pt",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 4066,
                "name": "FC Bayern Munich",
                "short_code": "FCB",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/111.png",
                "country": {
                    "country_id": 48,
                    "name": "Germany",
                    "country_code": "de",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1532,
                "name": "Estadio do Sport Lisboa e Benfica",
                "capacity": 64642,
                "city": "Lisbon",
                "country_id": 98
            }
        },
        {
            "match_id": 371267,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-11-02 17:45:00",
            "match_start_iso": "2021-11-02T17:45:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2071,
                "group_name": "G"
            },
            "round": {
                "round_id": 40877,
                "name": "4",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 4069,
                "name": "VfL Wolfsburg",
                "short_code": "WOB",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/2808.png",
                "country": {
                    "country_id": 48,
                    "name": "Germany",
                    "country_code": "de",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 1676,
                "name": "FC Salzburg",
                "short_code": "SAL",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/104.png",
                "country": {
                    "country_id": 16,
                    "name": "Austria",
                    "country_code": "at",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1929,
                "name": "Volkswagen Arena",
                "capacity": 30000,
                "city": "Wolfsburg",
                "country_id": 48
            }
        },
        {
            "match_id": 371268,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-11-02 17:45:00",
            "match_start_iso": "2021-11-02T17:45:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2072,
                "group_name": "H"
            },
            "round": {
                "round_id": 40877,
                "name": "4",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 3406,
                "name": "Malmo FF",
                "short_code": "MAL",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/812.png",
                "country": {
                    "country_id": 114,
                    "name": "Sweden",
                    "country_code": "se",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 2524,
                "name": "Chelsea FC",
                "short_code": "CFC",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/20.png",
                "country": {
                    "country_id": 42,
                    "name": "England",
                    "country_code": "en",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1602,
                "name": "Stadion",
                "capacity": 22500,
                "city": "Malmo",
                "country_id": 114
            }
        },
        {
            "match_id": 371269,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-11-02 20:00:00",
            "match_start_iso": "2021-11-02T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2069,
                "group_name": "E"
            },
            "round": {
                "round_id": 40877,
                "name": "4",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 7441,
                "name": "FC Dynamo Kiev",
                "short_code": "DYK",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/87.png",
                "country": {
                    "country_id": 122,
                    "name": "Ukraine",
                    "country_code": "ua",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 6404,
                "name": "FC Barcelona",
                "short_code": "FCB",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/99.png",
                "country": {
                    "country_id": 113,
                    "name": "Spain",
                    "country_code": "es",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1476,
                "name": "Olimpiysky National Sports Complex",
                "capacity": 70050,
                "city": "Kiev",
                "country_id": 122
            }
        },
        {
            "match_id": 371270,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-11-02 20:00:00",
            "match_start_iso": "2021-11-02T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2069,
                "group_name": "E"
            },
            "round": {
                "round_id": 40877,
                "name": "4",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 4066,
                "name": "FC Bayern Munich",
                "short_code": "FCB",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/111.png",
                "country": {
                    "country_id": 48,
                    "name": "Germany",
                    "country_code": "de",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 5800,
                "name": "Sl Benfica",
                "short_code": "BEN",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/100.png",
                "country": {
                    "country_id": 98,
                    "name": "Portugal",
                    "country_code": "pt",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1927,
                "name": "Allianz Arena",
                "capacity": 75000,
                "city": "Munich",
                "country_id": 48
            }
        },
        {
            "match_id": 371271,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-11-02 20:00:00",
            "match_start_iso": "2021-11-02T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2072,
                "group_name": "H"
            },
            "round": {
                "round_id": 40877,
                "name": "4",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 4794,
                "name": "Juventus Turin",
                "short_code": "JUV",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/108.png",
                "country": {
                    "country_id": 62,
                    "name": "Italy",
                    "country_code": "it",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 6183,
                "name": "FC Zenit St Petersburg",
                "short_code": "ZEN",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/96.png",
                "country": {
                    "country_id": 102,
                    "name": "Russia",
                    "country_code": "ru",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1488,
                "name": "Allianz Stadium",
                "capacity": 41507,
                "city": "Turin",
                "country_id": 62
            }
        },
        {
            "match_id": 371272,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-11-02 20:00:00",
            "match_start_iso": "2021-11-02T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2071,
                "group_name": "G"
            },
            "round": {
                "round_id": 40877,
                "name": "4",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 3513,
                "name": "FC Sevilla",
                "short_code": "SEV",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/128.png",
                "country": {
                    "country_id": 113,
                    "name": "Spain",
                    "country_code": "es",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 3790,
                "name": "LOSC Lille",
                "short_code": "LIL",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/97.png",
                "country": {
                    "country_id": 46,
                    "name": "France",
                    "country_code": "fr",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1681,
                "name": "Ramon Sanchez Pizjuan",
                "capacity": 45500,
                "city": "Seville",
                "country_id": 113
            }
        },
        {
            "match_id": 371273,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-11-02 20:00:00",
            "match_start_iso": "2021-11-02T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2070,
                "group_name": "F"
            },
            "round": {
                "round_id": 40877,
                "name": "4",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 3511,
                "name": "Atalanta Bergamasca Calcio",
                "short_code": "ATA",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/109.png",
                "country": {
                    "country_id": 62,
                    "name": "Italy",
                    "country_code": "it",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 2523,
                "name": "Manchester United",
                "short_code": "MNU",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/19.png",
                "country": {
                    "country_id": 42,
                    "name": "England",
                    "country_code": "en",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1562,
                "name": "Gewiss Stadium",
                "capacity": 26393,
                "city": "Bergamo",
                "country_id": 62
            }
        },
        {
            "match_id": 371274,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-11-02 20:00:00",
            "match_start_iso": "2021-11-02T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2070,
                "group_name": "F"
            },
            "round": {
                "round_id": 40877,
                "name": "4",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 6534,
                "name": "CF Villarreal",
                "short_code": "VIL",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/123.png",
                "country": {
                    "country_id": 113,
                    "name": "Spain",
                    "country_code": "es",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 7100,
                "name": "BSC Young Boys",
                "short_code": "YB",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/93.png",
                "country": {
                    "country_id": 115,
                    "name": "Switzerland",
                    "country_code": "ch",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 3095,
                "name": "Estadio de la Ceramica",
                "capacity": 23500,
                "city": "Villarreal",
                "country_id": 113
            }
        },
        {
            "match_id": 371275,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-11-03 17:45:00",
            "match_start_iso": "2021-11-03T17:45:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2068,
                "group_name": "D"
            },
            "round": {
                "round_id": 40877,
                "name": "4",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 6402,
                "name": "Real Madrid",
                "short_code": "RMA",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/113.png",
                "country": {
                    "country_id": 113,
                    "name": "Spain",
                    "country_code": "es",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 7440,
                "name": "FC Shakhtar Donetsk",
                "short_code": "SHA",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/110.png",
                "country": {
                    "country_id": 122,
                    "name": "Ukraine",
                    "country_code": "ua",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1521,
                "name": "Santiago Bernabeu",
                "capacity": 81044,
                "city": "Madrid",
                "country_id": 113
            }
        },
        {
            "match_id": 371276,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-11-03 17:45:00",
            "match_start_iso": "2021-11-03T17:45:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2066,
                "group_name": "B"
            },
            "round": {
                "round_id": 40877,
                "name": "4",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 4798,
                "name": "AC Milan",
                "short_code": "ACM",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/391.png",
                "country": {
                    "country_id": 62,
                    "name": "Italy",
                    "country_code": "it",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 5917,
                "name": "FC Porto",
                "short_code": "FCP",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/89.png",
                "country": {
                    "country_id": 98,
                    "name": "Portugal",
                    "country_code": "pt",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1533,
                "name": "Giuseppe Meazza",
                "capacity": 80018,
                "city": "Milan",
                "country_id": 62
            }
        },
        {
            "match_id": 371277,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-11-03 20:00:00",
            "match_start_iso": "2021-11-03T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2065,
                "group_name": "A"
            },
            "round": {
                "round_id": 40877,
                "name": "4",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 3489,
                "name": "RB Leipzig",
                "short_code": "RBL",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/101.png",
                "country": {
                    "country_id": 48,
                    "name": "Germany",
                    "country_code": "de",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 3651,
                "name": "Paris Saint-Germain",
                "short_code": "PSG",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/112.png",
                "country": {
                    "country_id": 46,
                    "name": "France",
                    "country_code": "fr",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1676,
                "name": "Red Bull Arena",
                "capacity": 42558,
                "city": "Leipzig",
                "country_id": 48
            }
        },
        {
            "match_id": 371278,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-11-03 20:00:00",
            "match_start_iso": "2021-11-03T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2068,
                "group_name": "D"
            },
            "round": {
                "round_id": 40877,
                "name": "4",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 5278,
                "name": "FC Sheriff Tiraspol",
                "short_code": "SHF",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/64.png",
                "country": {
                    "country_id": 79,
                    "name": "Moldova",
                    "country_code": "md",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 4810,
                "name": "Inter Milano",
                "short_code": "INT",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/94.png",
                "country": {
                    "country_id": 62,
                    "name": "Italy",
                    "country_code": "it",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 2479,
                "name": "Sheriff Stadium",
                "capacity": 14000,
                "city": "Tiraspol",
                "country_id": 79
            }
        },
        {
            "match_id": 371279,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-11-03 20:00:00",
            "match_start_iso": "2021-11-03T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2067,
                "group_name": "C"
            },
            "round": {
                "round_id": 40877,
                "name": "4",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 4074,
                "name": "Borussia Dortmund",
                "short_code": "BVB",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/98.png",
                "country": {
                    "country_id": 48,
                    "name": "Germany",
                    "country_code": "de",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 5324,
                "name": "Ajax Amsterdam",
                "short_code": "AJA",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/85.png",
                "country": {
                    "country_id": 83,
                    "name": "Netherlands",
                    "country_code": "nl",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1932,
                "name": "Signal Iduna Park",
                "capacity": 81365,
                "city": "Dortmund",
                "country_id": 48
            }
        },
        {
            "match_id": 371280,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-11-03 20:00:00",
            "match_start_iso": "2021-11-03T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2066,
                "group_name": "B"
            },
            "round": {
                "round_id": 40877,
                "name": "4",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 2509,
                "name": "Liverpool FC",
                "short_code": "LFC",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/1.png",
                "country": {
                    "country_id": 42,
                    "name": "England",
                    "country_code": "en",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 6406,
                "name": "Atletico Madrid",
                "short_code": "ATM",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/107.png",
                "country": {
                    "country_id": 113,
                    "name": "Spain",
                    "country_code": "es",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1195,
                "name": "Anfield",
                "capacity": 54074,
                "city": "Liverpool",
                "country_id": 42
            }
        },
        {
            "match_id": 371281,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-11-03 20:00:00",
            "match_start_iso": "2021-11-03T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2065,
                "group_name": "A"
            },
            "round": {
                "round_id": 40877,
                "name": "4",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 12400,
                "name": "Manchester City",
                "short_code": "MNC",
                "common_name": "Manchester City ",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/4.png",
                "country": {
                    "country_id": 42,
                    "name": "England",
                    "country_code": "en",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 12409,
                "name": "Club Brugge",
                "short_code": "BRU",
                "common_name": "Club Brugge",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/86.png",
                "country": {
                    "country_id": 21,
                    "name": "Belgium",
                    "country_code": "be",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1210,
                "name": "Etihad Stadium",
                "capacity": 46708,
                "city": "Manchester",
                "country_id": 42
            }
        },
        {
            "match_id": 371282,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-11-03 20:00:00",
            "match_start_iso": "2021-11-03T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2067,
                "group_name": "C"
            },
            "round": {
                "round_id": 40877,
                "name": "4",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 5801,
                "name": "Sporting CP",
                "short_code": "SPO",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/2297.png",
                "country": {
                    "country_id": 98,
                    "name": "Portugal",
                    "country_code": "pt",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 3509,
                "name": "Besiktas",
                "short_code": "BES",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/1031.png",
                "country": {
                    "country_id": 120,
                    "name": "Turkey",
                    "country_code": "tr",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 2742,
                "name": "Jose Alvalade",
                "capacity": 50044,
                "city": "Lisbon",
                "country_id": 98
            }
        },
        {
            "match_id": 371283,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-11-23 17:45:00",
            "match_start_iso": "2021-11-23T17:45:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2069,
                "group_name": "E"
            },
            "round": {
                "round_id": 40878,
                "name": "5",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 7441,
                "name": "FC Dynamo Kiev",
                "short_code": "DYK",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/87.png",
                "country": {
                    "country_id": 122,
                    "name": "Ukraine",
                    "country_code": "ua",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 4066,
                "name": "FC Bayern Munich",
                "short_code": "FCB",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/111.png",
                "country": {
                    "country_id": 48,
                    "name": "Germany",
                    "country_code": "de",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1476,
                "name": "Olimpiysky National Sports Complex",
                "capacity": 70050,
                "city": "Kiev",
                "country_id": 122
            }
        },
        {
            "match_id": 371284,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-11-23 17:45:00",
            "match_start_iso": "2021-11-23T17:45:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2070,
                "group_name": "F"
            },
            "round": {
                "round_id": 40878,
                "name": "5",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 6534,
                "name": "CF Villarreal",
                "short_code": "VIL",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/123.png",
                "country": {
                    "country_id": 113,
                    "name": "Spain",
                    "country_code": "es",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 2523,
                "name": "Manchester United",
                "short_code": "MNU",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/19.png",
                "country": {
                    "country_id": 42,
                    "name": "England",
                    "country_code": "en",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 3095,
                "name": "Estadio de la Ceramica",
                "capacity": 23500,
                "city": "Villarreal",
                "country_id": 113
            }
        },
        {
            "match_id": 371285,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-11-23 20:00:00",
            "match_start_iso": "2021-11-23T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2071,
                "group_name": "G"
            },
            "round": {
                "round_id": 40878,
                "name": "5",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 3513,
                "name": "FC Sevilla",
                "short_code": "SEV",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/128.png",
                "country": {
                    "country_id": 113,
                    "name": "Spain",
                    "country_code": "es",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 4069,
                "name": "VfL Wolfsburg",
                "short_code": "WOB",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/2808.png",
                "country": {
                    "country_id": 48,
                    "name": "Germany",
                    "country_code": "de",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1681,
                "name": "Ramon Sanchez Pizjuan",
                "capacity": 45500,
                "city": "Seville",
                "country_id": 113
            }
        },
        {
            "match_id": 371286,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-11-23 20:00:00",
            "match_start_iso": "2021-11-23T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2072,
                "group_name": "H"
            },
            "round": {
                "round_id": 40878,
                "name": "5",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 2524,
                "name": "Chelsea FC",
                "short_code": "CFC",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/20.png",
                "country": {
                    "country_id": 42,
                    "name": "England",
                    "country_code": "en",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 4794,
                "name": "Juventus Turin",
                "short_code": "JUV",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/108.png",
                "country": {
                    "country_id": 62,
                    "name": "Italy",
                    "country_code": "it",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1212,
                "name": "Stamford Bridge",
                "capacity": 41798,
                "city": "London",
                "country_id": 42
            }
        },
        {
            "match_id": 371287,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-11-23 20:00:00",
            "match_start_iso": "2021-11-23T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2070,
                "group_name": "F"
            },
            "round": {
                "round_id": 40878,
                "name": "5",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 7100,
                "name": "BSC Young Boys",
                "short_code": "YB",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/93.png",
                "country": {
                    "country_id": 115,
                    "name": "Switzerland",
                    "country_code": "ch",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 3511,
                "name": "Atalanta Bergamasca Calcio",
                "short_code": "ATA",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/109.png",
                "country": {
                    "country_id": 62,
                    "name": "Italy",
                    "country_code": "it",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 3217,
                "name": "Stade de Suisse",
                "capacity": 31789,
                "city": "Bern",
                "country_id": 115
            }
        },
        {
            "match_id": 371288,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-11-23 20:00:00",
            "match_start_iso": "2021-11-23T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2071,
                "group_name": "G"
            },
            "round": {
                "round_id": 40878,
                "name": "5",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 3790,
                "name": "LOSC Lille",
                "short_code": "LIL",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/97.png",
                "country": {
                    "country_id": 46,
                    "name": "France",
                    "country_code": "fr",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 1676,
                "name": "FC Salzburg",
                "short_code": "SAL",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/104.png",
                "country": {
                    "country_id": 16,
                    "name": "Austria",
                    "country_code": "at",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1755,
                "name": "Stade Pierre Mauroy",
                "capacity": 50186,
                "city": "Lille",
                "country_id": 46
            }
        },
        {
            "match_id": 371289,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-11-23 20:00:00",
            "match_start_iso": "2021-11-23T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2069,
                "group_name": "E"
            },
            "round": {
                "round_id": 40878,
                "name": "5",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 6404,
                "name": "FC Barcelona",
                "short_code": "FCB",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/99.png",
                "country": {
                    "country_id": 113,
                    "name": "Spain",
                    "country_code": "es",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 5800,
                "name": "Sl Benfica",
                "short_code": "BEN",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/100.png",
                "country": {
                    "country_id": 98,
                    "name": "Portugal",
                    "country_code": "pt",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 3080,
                "name": "Camp Nou",
                "capacity": 98787,
                "city": "Barcelona",
                "country_id": 113
            }
        },
        {
            "match_id": 371290,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-11-23 20:00:00",
            "match_start_iso": "2021-11-23T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2072,
                "group_name": "H"
            },
            "round": {
                "round_id": 40878,
                "name": "5",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 3406,
                "name": "Malmo FF",
                "short_code": "MAL",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/812.png",
                "country": {
                    "country_id": 114,
                    "name": "Sweden",
                    "country_code": "se",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 6183,
                "name": "FC Zenit St Petersburg",
                "short_code": "ZEN",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/96.png",
                "country": {
                    "country_id": 102,
                    "name": "Russia",
                    "country_code": "ru",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1602,
                "name": "Stadion",
                "capacity": 22500,
                "city": "Malmo",
                "country_id": 114
            }
        },
        {
            "match_id": 371291,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-11-24 17:45:00",
            "match_start_iso": "2021-11-24T17:45:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2067,
                "group_name": "C"
            },
            "round": {
                "round_id": 40878,
                "name": "5",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 3509,
                "name": "Besiktas",
                "short_code": "BES",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/1031.png",
                "country": {
                    "country_id": 120,
                    "name": "Turkey",
                    "country_code": "tr",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 5324,
                "name": "Ajax Amsterdam",
                "short_code": "AJA",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/85.png",
                "country": {
                    "country_id": 83,
                    "name": "Netherlands",
                    "country_code": "nl",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1638,
                "name": "Vodafone Park",
                "capacity": 41188,
                "city": "Istanbul",
                "country_id": 120
            }
        },
        {
            "match_id": 371292,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-11-24 17:45:00",
            "match_start_iso": "2021-11-24T17:45:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2068,
                "group_name": "D"
            },
            "round": {
                "round_id": 40878,
                "name": "5",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 4810,
                "name": "Inter Milano",
                "short_code": "INT",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/94.png",
                "country": {
                    "country_id": 62,
                    "name": "Italy",
                    "country_code": "it",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 7440,
                "name": "FC Shakhtar Donetsk",
                "short_code": "SHA",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/110.png",
                "country": {
                    "country_id": 122,
                    "name": "Ukraine",
                    "country_code": "ua",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1533,
                "name": "Giuseppe Meazza",
                "capacity": 80018,
                "city": "Milan",
                "country_id": 62
            }
        },
        {
            "match_id": 371293,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-11-24 20:00:00",
            "match_start_iso": "2021-11-24T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2067,
                "group_name": "C"
            },
            "round": {
                "round_id": 40878,
                "name": "5",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 5801,
                "name": "Sporting CP",
                "short_code": "SPO",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/2297.png",
                "country": {
                    "country_id": 98,
                    "name": "Portugal",
                    "country_code": "pt",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 4074,
                "name": "Borussia Dortmund",
                "short_code": "BVB",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/98.png",
                "country": {
                    "country_id": 48,
                    "name": "Germany",
                    "country_code": "de",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 2742,
                "name": "Jose Alvalade",
                "capacity": 50044,
                "city": "Lisbon",
                "country_id": 98
            }
        },
        {
            "match_id": 371294,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-11-24 20:00:00",
            "match_start_iso": "2021-11-24T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2065,
                "group_name": "A"
            },
            "round": {
                "round_id": 40878,
                "name": "5",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 12409,
                "name": "Club Brugge",
                "short_code": "BRU",
                "common_name": "Club Brugge",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/86.png",
                "country": {
                    "country_id": 21,
                    "name": "Belgium",
                    "country_code": "be",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 3489,
                "name": "RB Leipzig",
                "short_code": "RBL",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/101.png",
                "country": {
                    "country_id": 48,
                    "name": "Germany",
                    "country_code": "de",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 818,
                "name": "Jan Breydel Stadium",
                "capacity": 29975,
                "city": "Bruges",
                "country_id": 21
            }
        },
        {
            "match_id": 371295,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-11-24 20:00:00",
            "match_start_iso": "2021-11-24T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2068,
                "group_name": "D"
            },
            "round": {
                "round_id": 40878,
                "name": "5",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 5278,
                "name": "FC Sheriff Tiraspol",
                "short_code": "SHF",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/64.png",
                "country": {
                    "country_id": 79,
                    "name": "Moldova",
                    "country_code": "md",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 6402,
                "name": "Real Madrid",
                "short_code": "RMA",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/113.png",
                "country": {
                    "country_id": 113,
                    "name": "Spain",
                    "country_code": "es",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 2479,
                "name": "Sheriff Stadium",
                "capacity": 14000,
                "city": "Tiraspol",
                "country_id": 79
            }
        },
        {
            "match_id": 371296,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-11-24 20:00:00",
            "match_start_iso": "2021-11-24T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2066,
                "group_name": "B"
            },
            "round": {
                "round_id": 40878,
                "name": "5",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 2509,
                "name": "Liverpool FC",
                "short_code": "LFC",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/1.png",
                "country": {
                    "country_id": 42,
                    "name": "England",
                    "country_code": "en",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 5917,
                "name": "FC Porto",
                "short_code": "FCP",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/89.png",
                "country": {
                    "country_id": 98,
                    "name": "Portugal",
                    "country_code": "pt",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1195,
                "name": "Anfield",
                "capacity": 54074,
                "city": "Liverpool",
                "country_id": 42
            }
        },
        {
            "match_id": 371297,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-11-24 20:00:00",
            "match_start_iso": "2021-11-24T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2066,
                "group_name": "B"
            },
            "round": {
                "round_id": 40878,
                "name": "5",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 6406,
                "name": "Atletico Madrid",
                "short_code": "ATM",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/107.png",
                "country": {
                    "country_id": 113,
                    "name": "Spain",
                    "country_code": "es",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 4798,
                "name": "AC Milan",
                "short_code": "ACM",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/391.png",
                "country": {
                    "country_id": 62,
                    "name": "Italy",
                    "country_code": "it",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 3061,
                "name": "Wanda Metropolitano",
                "capacity": 67942,
                "city": "Madrid",
                "country_id": 113
            }
        },
        {
            "match_id": 371298,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-11-24 20:00:00",
            "match_start_iso": "2021-11-24T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2065,
                "group_name": "A"
            },
            "round": {
                "round_id": 40878,
                "name": "5",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 12400,
                "name": "Manchester City",
                "short_code": "MNC",
                "common_name": "Manchester City ",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/4.png",
                "country": {
                    "country_id": 42,
                    "name": "England",
                    "country_code": "en",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 3651,
                "name": "Paris Saint-Germain",
                "short_code": "PSG",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/112.png",
                "country": {
                    "country_id": 46,
                    "name": "France",
                    "country_code": "fr",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1210,
                "name": "Etihad Stadium",
                "capacity": 46708,
                "city": "Manchester",
                "country_id": 42
            }
        },
        {
            "match_id": 371299,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-12-07 17:45:00",
            "match_start_iso": "2021-12-07T17:45:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2065,
                "group_name": "A"
            },
            "round": {
                "round_id": 40879,
                "name": "6",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 3651,
                "name": "Paris Saint-Germain",
                "short_code": "PSG",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/112.png",
                "country": {
                    "country_id": 46,
                    "name": "France",
                    "country_code": "fr",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 12409,
                "name": "Club Brugge",
                "short_code": "BRU",
                "common_name": "Club Brugge",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/86.png",
                "country": {
                    "country_id": 21,
                    "name": "Belgium",
                    "country_code": "be",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1757,
                "name": "Parc des Princes",
                "capacity": 47929,
                "city": "Paris",
                "country_id": 46
            }
        },
        {
            "match_id": 371300,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-12-07 17:45:00",
            "match_start_iso": "2021-12-07T17:45:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2065,
                "group_name": "A"
            },
            "round": {
                "round_id": 40879,
                "name": "6",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 3489,
                "name": "RB Leipzig",
                "short_code": "RBL",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/101.png",
                "country": {
                    "country_id": 48,
                    "name": "Germany",
                    "country_code": "de",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 12400,
                "name": "Manchester City",
                "short_code": "MNC",
                "common_name": "Manchester City ",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/4.png",
                "country": {
                    "country_id": 42,
                    "name": "England",
                    "country_code": "en",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1676,
                "name": "Red Bull Arena",
                "capacity": 42558,
                "city": "Leipzig",
                "country_id": 48
            }
        },
        {
            "match_id": 371301,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-12-07 20:00:00",
            "match_start_iso": "2021-12-07T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2067,
                "group_name": "C"
            },
            "round": {
                "round_id": 40879,
                "name": "6",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 4074,
                "name": "Borussia Dortmund",
                "short_code": "BVB",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/98.png",
                "country": {
                    "country_id": 48,
                    "name": "Germany",
                    "country_code": "de",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 3509,
                "name": "Besiktas",
                "short_code": "BES",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/1031.png",
                "country": {
                    "country_id": 120,
                    "name": "Turkey",
                    "country_code": "tr",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1932,
                "name": "Signal Iduna Park",
                "capacity": 81365,
                "city": "Dortmund",
                "country_id": 48
            }
        },
        {
            "match_id": 371302,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-12-07 20:00:00",
            "match_start_iso": "2021-12-07T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2068,
                "group_name": "D"
            },
            "round": {
                "round_id": 40879,
                "name": "6",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 7440,
                "name": "FC Shakhtar Donetsk",
                "short_code": "SHA",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/110.png",
                "country": {
                    "country_id": 122,
                    "name": "Ukraine",
                    "country_code": "ua",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 5278,
                "name": "FC Sheriff Tiraspol",
                "short_code": "SHF",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/64.png",
                "country": {
                    "country_id": 79,
                    "name": "Moldova",
                    "country_code": "md",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1476,
                "name": "Olimpiysky National Sports Complex",
                "capacity": 70050,
                "city": "Kiev",
                "country_id": 122
            }
        },
        {
            "match_id": 371303,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-12-07 20:00:00",
            "match_start_iso": "2021-12-07T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2067,
                "group_name": "C"
            },
            "round": {
                "round_id": 40879,
                "name": "6",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 5324,
                "name": "Ajax Amsterdam",
                "short_code": "AJA",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/85.png",
                "country": {
                    "country_id": 83,
                    "name": "Netherlands",
                    "country_code": "nl",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 5801,
                "name": "Sporting CP",
                "short_code": "SPO",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/2297.png",
                "country": {
                    "country_id": 98,
                    "name": "Portugal",
                    "country_code": "pt",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1509,
                "name": "Johan Cruijff Arena",
                "capacity": 54990,
                "city": "Amsterdam",
                "country_id": 83
            }
        },
        {
            "match_id": 371304,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-12-07 20:00:00",
            "match_start_iso": "2021-12-07T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2066,
                "group_name": "B"
            },
            "round": {
                "round_id": 40879,
                "name": "6",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 4798,
                "name": "AC Milan",
                "short_code": "ACM",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/391.png",
                "country": {
                    "country_id": 62,
                    "name": "Italy",
                    "country_code": "it",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 2509,
                "name": "Liverpool FC",
                "short_code": "LFC",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/1.png",
                "country": {
                    "country_id": 42,
                    "name": "England",
                    "country_code": "en",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1533,
                "name": "Giuseppe Meazza",
                "capacity": 80018,
                "city": "Milan",
                "country_id": 62
            }
        },
        {
            "match_id": 371305,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-12-07 20:00:00",
            "match_start_iso": "2021-12-07T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2068,
                "group_name": "D"
            },
            "round": {
                "round_id": 40879,
                "name": "6",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 6402,
                "name": "Real Madrid",
                "short_code": "RMA",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/113.png",
                "country": {
                    "country_id": 113,
                    "name": "Spain",
                    "country_code": "es",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 4810,
                "name": "Inter Milano",
                "short_code": "INT",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/94.png",
                "country": {
                    "country_id": 62,
                    "name": "Italy",
                    "country_code": "it",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1521,
                "name": "Santiago Bernabeu",
                "capacity": 81044,
                "city": "Madrid",
                "country_id": 113
            }
        },
        {
            "match_id": 371306,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-12-07 20:00:00",
            "match_start_iso": "2021-12-07T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2066,
                "group_name": "B"
            },
            "round": {
                "round_id": 40879,
                "name": "6",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 5917,
                "name": "FC Porto",
                "short_code": "FCP",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/89.png",
                "country": {
                    "country_id": 98,
                    "name": "Portugal",
                    "country_code": "pt",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 6406,
                "name": "Atletico Madrid",
                "short_code": "ATM",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/107.png",
                "country": {
                    "country_id": 113,
                    "name": "Spain",
                    "country_code": "es",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 2740,
                "name": "Estadio do Dragao",
                "capacity": 52033,
                "city": "Porto",
                "country_id": 98
            }
        },
        {
            "match_id": 371307,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-12-08 17:45:00",
            "match_start_iso": "2021-12-08T17:45:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2072,
                "group_name": "H"
            },
            "round": {
                "round_id": 40879,
                "name": "6",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 4794,
                "name": "Juventus Turin",
                "short_code": "JUV",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/108.png",
                "country": {
                    "country_id": 62,
                    "name": "Italy",
                    "country_code": "it",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 3406,
                "name": "Malmo FF",
                "short_code": "MAL",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/812.png",
                "country": {
                    "country_id": 114,
                    "name": "Sweden",
                    "country_code": "se",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1488,
                "name": "Allianz Stadium",
                "capacity": 41507,
                "city": "Turin",
                "country_id": 62
            }
        },
        {
            "match_id": 371308,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-12-08 17:45:00",
            "match_start_iso": "2021-12-08T17:45:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2072,
                "group_name": "H"
            },
            "round": {
                "round_id": 40879,
                "name": "6",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 6183,
                "name": "FC Zenit St Petersburg",
                "short_code": "ZEN",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/96.png",
                "country": {
                    "country_id": 102,
                    "name": "Russia",
                    "country_code": "ru",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 2524,
                "name": "Chelsea FC",
                "short_code": "CFC",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/20.png",
                "country": {
                    "country_id": 42,
                    "name": "England",
                    "country_code": "en",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 2859,
                "name": "Gazprom Arena",
                "capacity": 70000,
                "city": "Saint Petersburg",
                "country_id": 102
            }
        },
        {
            "match_id": 371309,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-12-08 20:00:00",
            "match_start_iso": "2021-12-08T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2071,
                "group_name": "G"
            },
            "round": {
                "round_id": 40879,
                "name": "6",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 1676,
                "name": "FC Salzburg",
                "short_code": "SAL",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/104.png",
                "country": {
                    "country_id": 16,
                    "name": "Austria",
                    "country_code": "at",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 3513,
                "name": "FC Sevilla",
                "short_code": "SEV",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/128.png",
                "country": {
                    "country_id": 113,
                    "name": "Spain",
                    "country_code": "es",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 724,
                "name": "Red Bull Arena",
                "capacity": 30188,
                "city": "Salzburg",
                "country_id": 16
            }
        },
        {
            "match_id": 371310,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-12-08 20:00:00",
            "match_start_iso": "2021-12-08T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2071,
                "group_name": "G"
            },
            "round": {
                "round_id": 40879,
                "name": "6",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 4069,
                "name": "VfL Wolfsburg",
                "short_code": "WOB",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/2808.png",
                "country": {
                    "country_id": 48,
                    "name": "Germany",
                    "country_code": "de",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 3790,
                "name": "LOSC Lille",
                "short_code": "LIL",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/97.png",
                "country": {
                    "country_id": 46,
                    "name": "France",
                    "country_code": "fr",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1929,
                "name": "Volkswagen Arena",
                "capacity": 30000,
                "city": "Wolfsburg",
                "country_id": 48
            }
        },
        {
            "match_id": 371311,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-12-08 20:00:00",
            "match_start_iso": "2021-12-08T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2070,
                "group_name": "F"
            },
            "round": {
                "round_id": 40879,
                "name": "6",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 2523,
                "name": "Manchester United",
                "short_code": "MNU",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/19.png",
                "country": {
                    "country_id": 42,
                    "name": "England",
                    "country_code": "en",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 7100,
                "name": "BSC Young Boys",
                "short_code": "YB",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/93.png",
                "country": {
                    "country_id": 115,
                    "name": "Switzerland",
                    "country_code": "ch",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1204,
                "name": "Old Trafford",
                "capacity": 75635,
                "city": "Manchester",
                "country_id": 42
            }
        },
        {
            "match_id": 371312,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-12-08 20:00:00",
            "match_start_iso": "2021-12-08T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2069,
                "group_name": "E"
            },
            "round": {
                "round_id": 40879,
                "name": "6",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 4066,
                "name": "FC Bayern Munich",
                "short_code": "FCB",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/111.png",
                "country": {
                    "country_id": 48,
                    "name": "Germany",
                    "country_code": "de",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 6404,
                "name": "FC Barcelona",
                "short_code": "FCB",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/99.png",
                "country": {
                    "country_id": 113,
                    "name": "Spain",
                    "country_code": "es",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1927,
                "name": "Allianz Arena",
                "capacity": 75000,
                "city": "Munich",
                "country_id": 48
            }
        },
        {
            "match_id": 371313,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-12-08 20:00:00",
            "match_start_iso": "2021-12-08T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2069,
                "group_name": "E"
            },
            "round": {
                "round_id": 40879,
                "name": "6",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 5800,
                "name": "Sl Benfica",
                "short_code": "BEN",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/100.png",
                "country": {
                    "country_id": 98,
                    "name": "Portugal",
                    "country_code": "pt",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 7441,
                "name": "FC Dynamo Kiev",
                "short_code": "DYK",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/87.png",
                "country": {
                    "country_id": 122,
                    "name": "Ukraine",
                    "country_code": "ua",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1532,
                "name": "Estadio do Sport Lisboa e Benfica",
                "capacity": 64642,
                "city": "Lisbon",
                "country_id": 98
            }
        },
        {
            "match_id": 371314,
            "status_code": 0,
            "status": "notstarted",
            "match_start": "2021-12-08 20:00:00",
            "match_start_iso": "2021-12-08T20:00:00+00:00",
            "minute": null,
            "league_id": 281,
            "season_id": 1959,
            "stage": {
                "stage_id": 6,
                "name": "Group stage"
            },
            "group": {
                "group_id": 2070,
                "group_name": "F"
            },
            "round": {
                "round_id": 40879,
                "name": "6",
                "is_current": null
            },
            "referee_id": null,
            "home_team": {
                "team_id": 3511,
                "name": "Atalanta Bergamasca Calcio",
                "short_code": "ATA",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/109.png",
                "country": {
                    "country_id": 62,
                    "name": "Italy",
                    "country_code": "it",
                    "continent": "Europe"
                }
            },
            "away_team": {
                "team_id": 6534,
                "name": "CF Villarreal",
                "short_code": "VIL",
                "common_name": "",
                "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/123.png",
                "country": {
                    "country_id": 113,
                    "name": "Spain",
                    "country_code": "es",
                    "continent": "Europe"
                }
            },
            "stats": {
                "home_score": 0,
                "away_score": 0,
                "ht_score": null,
                "ft_score": null,
                "et_score": null,
                "ps_score": null
            },
            "venue": {
                "venue_id": 1562,
                "name": "Gewiss Stadium",
                "capacity": 26393,
                "city": "Bergamo",
                "country_id": 62
            }
        }
    ]
    for (let k = 0; k < matches.length; k++) {
        firestore.collection('allMatches').add(matches[k]);
    }
}

