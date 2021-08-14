import React from 'react';

export const TimeZoneContext = React.createContext();

export function UserTimeZone(props) {
    const userDate = new Date();
    const userHours = userDate.getHours();

    return (
        <TimeZoneContext.Provider value={{ userHours }}>
            {props.children}
        </TimeZoneContext.Provider>
    );
}