import { useRef } from "react";

interface CustomizeSideBarProps {
    active: boolean;
    toggleCustomizeBar: () => void;
}

export default function CustomizeSideBar({active, toggleCustomizeBar}:CustomizeSideBarProps) {
    const customizeBarRef = useRef<HTMLDivElement>(null);

    function handleToggleBar(e) {
        if ((e.target === customizeBarRef.current)) return;
        toggleCustomizeBar();
    }

    return (
        <div className="side-bar" data-active={active} onClick={handleToggleBar}>
            <div ref={customizeBarRef} className="customize-bar">
                hello
            </div>
        </div>
    );
}
