import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Layout({ children }) {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const style = {
        paddingTop: '75px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }

    return (
        <>
            <Navbar />
            <main style={style}>
                {children}
            </main >
            <Footer />
        </>
    )
}