import React from "react";

export const ThemeContext = React.createContext();

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.getElementsByTagName("BODY")[0].className = themeName;
}

export const ThemePreference = (props) => {
    const [currentTheme, setCurrentTheme] = React.useState('theme-light');

    React.useEffect(() => {
        const storageTheme = localStorage.getItem('theme');
        if (storageTheme) {
            setCurrentTheme(storageTheme);
        } else {
            setCurrentTheme('theme-dark');
        }
    }, []);

    React.useEffect(() => setTheme(currentTheme), [currentTheme]);
    
    return (
        <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};
