import ThemeButton from './ThemeButton';

interface HeaderProps {
    toggleCvData: () => void;
    toggleTheme: () => void;
    darkMode: boolean;
    title: string;
}

export default function Header({title, toggleCvData, toggleTheme, darkMode}:HeaderProps) {
    return (
        <header>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff">
              <path d="M4 6h16M4 12h10M4 18h5" stroke="#ffffffd0" strokeWidth="1.56" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <button id='load-sample-btn' onClick={toggleCvData}>
                {title === 'sample-data'? 'Undo Sample': 'Load Sample'}
            </button>
            <ThemeButton darkMode={darkMode} toggleTheme={toggleTheme}/>
        </header>
    );
}
