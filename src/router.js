import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from './Layout'

import Home from './pages/Home'
import About from './pages/About'
import Event from './pages/Event'
import Partnership from './pages/Partnership'
import Ticket from './pages/Ticket'
import Login from './pages/Login'
import DetailTicket from "./pages/DetailTicket"
import Order from "./pages/Order";
import Page404 from "./pages/404"

export default function AppRoutes() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/event" element={<Event />} />
                    <Route path="/partner" element={<Partnership />} />
                    <Route path="/ticket" element={<Ticket />} />
                    <Route path="/ticket/:id" element={<DetailTicket />} />
                    <Route path="/order/:id" element={<Order />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </Layout>
        </Router>
    )
}