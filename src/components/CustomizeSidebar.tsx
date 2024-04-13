import { useRef } from "react";

interface CustomizeSideBarProps {
    active: boolean;
    layoutIndex: number;
    toggleCustomizeBar: () => void;
    changeLayout: (index:number) => void;
}

export default function CustomizeSideBar({active, layoutIndex, toggleCustomizeBar, changeLayout}:CustomizeSideBarProps) {
    const sideBarRef = useRef<HTMLDivElement>(null);

    function handleToggleBar(e) {
        if ((e.target !== sideBarRef.current)) return;
        toggleCustomizeBar();
    }

    return (
        <div ref={sideBarRef} className="side-bar" data-active={active} onClick={handleToggleBar}>
            <div className="customize-bar">
                <button data-active={layoutIndex === 0} onClick={ () => changeLayout(0) }>Layout 1</button>
                <button data-active={layoutIndex === 1} onClick={ () => changeLayout(1) }>Layout 2</button>
            </div>
        </div>
    );
}
