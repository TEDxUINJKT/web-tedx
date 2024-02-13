import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  asyncRefreshToken,
  asyncCheckLogin,
  asyncLogout,
} from "./state/auth/middleware";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import Layout from "./Layout";
import Loading from "./components/Loading";

import Home from "./pages/Home";
import About from "./pages/About";
import Event from "./pages/Event";
import Partnership from "./pages/Partnership";
import Ticket from "./pages/Ticket";
import Login from "./pages/Login";
import DetailTicket from "./pages/DetailTicket";
import Order from "./pages/Order";
import TNC from "./pages/TNC";
import MyTicket from "./pages/MyTicket";
import ETicket from "./pages/ETicket";
import Page404 from "./pages/404";

export default function AppRoutes() {
  const { auth = {} } = useSelector((states) => states);
  const dispatch = useDispatch();

  // Refresh Token Cycle
  useEffect(() => {
    // do refresh token where token is'nt undefined
    if (auth.token !== undefined) {
      try {
        // Do in 8 minutes
        const interval = setInterval(() => {
          dispatch(asyncRefreshToken());
        }, 480000);

        return () => clearInterval(interval);
      } catch (err) {
        dispatch(asyncLogout());
      }
    } else {
      // Try Tto get token from Session Storage
      try {
        dispatch(asyncCheckLogin());
      } catch (err) {
        dispatch(asyncLogout());
      }
    }
  }, [auth, dispatch]);

  return (
    <Router>
      <Loading />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/event" element={<Event />} />
          <Route path="/partner" element={<Partnership />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/ticket/:event_id" element={<DetailTicket />} />
          <Route path="/login" element={<Login />} />
          <Route path="/terms-and-conditions" element={<TNC />} />
          {auth?.token === undefined ? (
            <>
              <Route path="/order/:id" element={<Login />} />
              <Route path="/my-ticket" element={<Login />} />
              <Route path="/e-ticket/:order_id" element={<Login />} />
            </>
          ) : (
            <>
              <Route path="/order/:id" element={<Order />} />
              <Route path="/my-ticket" element={<MyTicket />} />
              <Route path="/e-ticket/:order_id" element={<ETicket />} />
            </>
          )}

          <Route path="*" element={<Page404 />} />
          <Route path="/ETicket" element={<ETicket />} />
        </Routes>
      </Layout>
    </Router>
  );
}
