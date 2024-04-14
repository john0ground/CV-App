import { useRef } from "react";

interface LayoutsSectionProps {
    layoutIndex: number;
    changeLayout: (index:number) => void;
}

interface ThemesSectionProps {
    themeIndex: number;
    changeTheme: (index:number) => void;
}

interface FontsSectionProps {
    fontIndex: number;
    changeFont: (index:number) => void;
}

interface CustomizeSideBarProps {
    active: boolean;
    layoutIndex: number;
    themeIndex: number;
    fontIndex: number;
    toggleCustomizeBar: () => void;
    changeLayout: (index:number) => void;
    changeTheme: (index:number) => void;
    changeFont: (index:number) => void;
}

function LayoutsSection({layoutIndex, changeLayout}: LayoutsSectionProps) {
    return (
        <section className="layout-options">
            <button data-active={layoutIndex === 0} onClick={ () => changeLayout(0) }>Layout 1</button>
            <button data-active={layoutIndex === 1} onClick={ () => changeLayout(1) }>Layout 2</button>
        </section>
    );
}

function ThemesSection({themeIndex, changeTheme}: ThemesSectionProps) {
    return (
        <section className="theme-options">
            <button data-active={themeIndex === 0} onClick={ () => changeTheme(0) }>
                <div></div>
                <div></div>
            </button>
            <button data-active={themeIndex === 1} onClick={ () => changeTheme(1) }>
                <div></div>
                <div></div>
            </button>
            <button data-active={themeIndex === 2} onClick={ () => changeTheme(2) }>
                <div></div>
                <div></div>
            </button>
            <button data-active={themeIndex === 3} onClick={ () => changeTheme(3) }>
                <div></div>
                <div></div>
            </button>
            <button data-active={themeIndex === 4} onClick={ () => changeTheme(4) }>
                <div></div>
                <div></div>
            </button>
            <button data-active={themeIndex === 5} onClick={ () => changeTheme(5) }>
                <div></div>
                <div></div>
            </button>
            <button data-active={themeIndex === 6} onClick={ () => changeTheme(6) }>
                <div></div>
                <div></div>
            </button>
            <button data-active={themeIndex === 7} onClick={ () => changeTheme(7) }>
                <div></div>
                <div></div>
            </button>
            <button data-active={themeIndex === 8} onClick={ () => changeTheme(8) }>
                <div></div>
                <div></div>
            </button>
        </section>
    );
}

function FontsSection({fontIndex, changeFont}: FontsSectionProps) {
    return (
        <section className="font-options">
            <button data-active={fontIndex === 0} onClick={() => changeFont(0)}>Montserrat</button>
            <button data-active={fontIndex === 1} onClick={() => changeFont(1)}>Open Sans</button>
            <button data-active={fontIndex === 2} onClick={() => changeFont(2)}>Poppins</button>
            <button data-active={fontIndex === 3} onClick={() => changeFont(3)}>Noto Sans</button>
        </section>
    );
}

export default function CustomizeSideBar({
        active, 
        layoutIndex, 
        themeIndex,
        fontIndex, 
        toggleCustomizeBar, 
        changeLayout, 
        changeTheme,
        changeFont
    }:CustomizeSideBarProps) {
        
    const sideBarRef = useRef<HTMLDivElement>(null);

    function handleToggleBar(e) {
        if ((e.target !== sideBarRef.current)) return;
        toggleCustomizeBar();
    }

    return (
        <div ref={sideBarRef} className="side-bar" data-active={active} onClick={handleToggleBar}>
            <div className="customize-bar">
                <LayoutsSection layoutIndex={layoutIndex} changeLayout={changeLayout} />
                <ThemesSection themeIndex={themeIndex} changeTheme={changeTheme} />
                <FontsSection fontIndex={fontIndex} changeFont={changeFont} />
            </div>
        </div>
    );
}
