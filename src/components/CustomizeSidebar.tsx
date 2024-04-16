import { useRef, MouseEvent } from "react";

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
            <h2>Layout</h2>
            <div className="options">
                <button data-active={layoutIndex === 0} onClick={ () => changeLayout(0) }>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <button data-active={layoutIndex === 1} onClick={ () => changeLayout(1) }>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </div>
        </section>
    );
}

function ThemesSection({themeIndex, changeTheme}: ThemesSectionProps) {
    return (
        <section className="theme-options">
            <h2>Themes</h2>
            <div className="options">
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
            </div>
        </section>
    );
}

function FontsSection({fontIndex, changeFont}: FontsSectionProps) {
    return (
        <section className="font-options">
            <h2>Fonts</h2>
            <div className="options">
                <button data-active={fontIndex === 0} onClick={() => changeFont(0)}>Montserrat</button>
                <button data-active={fontIndex === 1} onClick={() => changeFont(1)}>Open Sans</button>
                <button data-active={fontIndex === 2} onClick={() => changeFont(2)}>Poppins</button>
                <button data-active={fontIndex === 3} onClick={() => changeFont(3)}>Noto Sans</button>
            </div>
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

    function handleToggleBar(e: MouseEvent<HTMLDivElement>) {
        if ((e.target !== sideBarRef.current)) return;
        toggleCustomizeBar();
    }

    return (
        <div ref={sideBarRef} className="side-bar" data-active={active} onClick={handleToggleBar}>
            <div className="customize-bar">
                <div className="container">
                    <LayoutsSection layoutIndex={layoutIndex} changeLayout={changeLayout} />
                    <ThemesSection themeIndex={themeIndex} changeTheme={changeTheme} />
                    <FontsSection fontIndex={fontIndex} changeFont={changeFont} />
                    <a id="github" href="https://github.com/john0ground/CV-App" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path
                            d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051-.799-.227-1.655-.341-2.505-.345-.85.004-1.705.118-2.503.345-1.911-1.326-2.751-1.051-2.751-1.051-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.627 0 14.783 0 10.253 0 4.59 4.478 0 10 0"
                            fill="#000"
                            fillRule="evenodd"
                          />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
