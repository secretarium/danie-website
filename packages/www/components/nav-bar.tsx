import React from 'react';
import Link from 'next/link';
import navBarStyles from './nav-bar-styles.module.css';
import DANIELogo from '../public/assets/images/DANIELogo.svg';

type NavBarProps = {
    fixedToggle?: boolean;
};

const NavBar: React.FC<NavBarProps> = ({ fixedToggle }) => {

    return (
        <div className={`${navBarStyles.navBarWrapper} ${fixedToggle ? '' : navBarStyles.fixedToggle} overflow-visible`}>
            <div className={`container mx-auto px-5 md:text-center ${navBarStyles.navBar}`}>
                <nav className="flex items-center flex-wrap text-center relative">
                    <Link href="/" >
                        <a href="/" className={`sm:pl-2 z-10 flex-grow ${navBarStyles.logoWrapper} `}>
                            <img src={DANIELogo} alt="Secretarium" className="inline-block z-10" />
                        </a>
                    </Link>
                    <Link href="/app">
                        <a href="/app" className={`sm:pl-2 z-10 absolute right-0 ${navBarStyles.logoWrapper} `}>
                            Log in
                        </a>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
