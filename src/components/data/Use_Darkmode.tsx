import { useEffect, useState } from 'react';

export const Use_Darkmode = () => {
    const [theme, set_theme] = useState('dark');

    const set_mode = (mode: string) => {
        window.localStorage.setItem('Theme', mode)
        set_theme(mode)
    };

    const theme_toggler = () => {
        theme === 'light' ? set_mode('dark') : set_mode('light')
    };

    useEffect(() => {
        const local_theme = window.localStorage.getItem('Theme');
        local_theme && set_theme(local_theme)
    }, []);
    return [theme, theme_toggler]
};
