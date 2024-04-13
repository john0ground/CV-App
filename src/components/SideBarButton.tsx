interface SideBarButtonProps {
    customizeActive: boolean;
    toggleCustomizeBar: () => void;
}

export default function SideBarButton({customizeActive, toggleCustomizeBar}: SideBarButtonProps) {
    return (
        <button id="customize-btn" onClick={toggleCustomizeBar}>
            {customizeActive? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="M20.7457 3.32851c-.3905-.39053-1.0237-.39053-1.4142 0l-7.2944 7.29439-7.29435-7.29439c-.39052-.39053-1.02369-.39053-1.41421 0-.39053.39052-.39053 1.02369 0 1.41421l7.29436 7.29438-7.29434 7.2943c-.39053.3906-.39053 1.0237 0 1.4143.39052.3905 1.02369.3905 1.41421 0l7.29433-7.2944 7.2944 7.2944c.3905.3905 1.0237.3905 1.4142 0 .3905-.3906.3905-1.0237 0-1.4142l-7.2944-7.2944 7.2944-7.29438c.3905-.39052.3905-1.02369 0-1.41421Z" fill="#ffffffd0"/>
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff">
                    <path d="M4 6h16M4 12h10M4 18h5" stroke="#ffffffd0" strokeWidth="1.56" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )}
        </button>
    );
}
