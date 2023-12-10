import React, { createContext, useContext, useState } from 'react';
import { getPoints } from '../services/userServices';

const PointsContext = createContext();

export function usePointsContext() {
    return useContext(PointsContext);
}

export function PointsProvider({ children }) {
    const [userPoints, setUserPoints] = useState(0);

    const updatePoints = async () => {
        await getPoints()
            .then(({ data }) => {
                setUserPoints(data);
            })
            .catch((e) => {
                setUserPoints(0);
            });
    };

    return (
        <PointsContext.Provider value={{ userPoints, updatePoints }}>
            {children}
        </PointsContext.Provider>
    );
}
