import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

import Navbar from './components/Navbar'
import Footer from './components/Footer'

ReactGA.initialize(process.env.REACT_APP_GA_TRACKIN_ID);

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

    // Google Analytic Integration
    useEffect(() => {
        // ReactGA.pageview(window.location.pathname + window.location.search);
        ReactGA.send({ hitType: "pageview", page: pathname, title: `${pathname} opened` });
    }, [pathname]);

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