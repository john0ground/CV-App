import ThemeButton from './ThemeButton';
import SideBarButton from './SideBarButton';

interface HeaderProps {
    toggleCvData: () => void;
    toggleTheme: () => void;
    toggleCustomizeBar: () => void;
    darkMode: boolean;
    customizeActive: boolean;
    title: string;
}

export default function Header({
        title, 
        toggleCvData, 
        toggleTheme,
        toggleCustomizeBar, 
        darkMode,
        customizeActive
    }: HeaderProps) {

        return (
            <header>
                <SideBarButton customizeActive={customizeActive} toggleCustomizeBar={toggleCustomizeBar}/>
                <button id='load-sample-btn' onClick={toggleCvData}>
                    {title === 'sample-data'? 'Undo Sample': 'Load Sample'}
                </button>
                <ThemeButton darkMode={darkMode} toggleTheme={toggleTheme}/>
            </header>
        );
}
