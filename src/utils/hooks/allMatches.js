import React, {
    useContext, createContext,
} from 'react';
import useAxios from './useAxios'

const matchesContext = createContext();
export const useAllMatches = () => useContext(matchesContext);

export const ProvideAllMatches = ({ children }) => {
    const apiKey = process.env.REACT_APP_SPORTDATAAPI_API_KEY

    const { response, error } = useAxios({
        url: `https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${apiKey}&season_id=1959&date_from=2021-09-11`,
    });

    const value = {
        response,
        error,
    }

    return <matchesContext.Provider value={value}>{children}</matchesContext.Provider>

};



