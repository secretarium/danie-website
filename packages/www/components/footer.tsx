import React from 'react';
import Container from './container';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="text bg-dark-blue">
            <div>
                <Container>
                    <div className="w-full text-center text-m py-8 text-white">
                        Secretarium © {new Date().getFullYear()} All Rights Reserved<br />
                        <Link href="/legal"><a className="text-light-blue text-xs">Privacy policy</a></Link>
                    </div>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;
