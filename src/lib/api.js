/** @format */

import axios from "axios";

// function setOriginHeader() {
//   // Get current URL
//   const currentUrl = window.location.href;
//   console.log(currentUrl);
//   // Extract domain from URL
//   const domain = currentUrl.split("/")[2];
//   // Set Origin header based on whether 'www' is included or not
//   const origin = domain.startsWith("www.")
//     ? `https://${domain}`
//     : `https://www.${domain}`;

//   // Set Origin header in Axios defaults
//   //   axios.defaults.headers.common["Origin"] = origin;
// }

export default (() => {
  const baseUrl = process.env.REACT_APP_API_URL;
  axios.defaults.withCredentials = true;

  async function getTimeline() {
    const url = baseUrl + `/content/2/timeline`;
    const response = await axios.get(url);
    return response.data.content.data;
  }

  async function getBanner() {
    const url = baseUrl + `/content/2/banner`;
    const response = await axios.get(url);
    return response.data.content.data;
  }

  async function getTheme() {
    const url = baseUrl + `/content/2/theme`;
    const response = await axios.get(url);
    return response.data.content.data;
  }

  async function getMedpartList() {
    const url = baseUrl + `/partner/2/medpart`;
    const response = await axios.get(url);
    return response.data.partners;
  }

  async function getSponsorList() {
    const url = baseUrl + `/partner/2/sponsor`;
    const response = await axios.get(url);
    return response.data.partners;
  }

  async function getSpeakerList(type) {
    const url = baseUrl + `/speaker/2/${type}`;
    const response = await axios.get(url);
    return response.data.speaker;
  }

  async function getAdsList() {
    const url = baseUrl + `/content/2`;
    const response = await axios.get(url);
    return response.data.contents;
  }

  async function getTeaser() {
    const url = baseUrl + `/content/2/teaser`;
    const response = await axios.get(url);
    return response.data.content.data;
  }

  async function getEventList() {
    const url = baseUrl + `/event/2`;
    const response = await axios.get(url);
    return response.data.events;
  }

  async function getEventDetail(event_id) {
    const url = baseUrl + `/event/detail/${event_id}`;
    const response = await axios.get(url);
    return response.data.detail;
  }

  async function getTicketDetail(ticket_id) {
    const url = baseUrl + `/event/ticket/detail/${ticket_id}`;
    const response = await axios.get(url);
    return response.data.detail;
  }

  async function getTicketList(event_id) {
    const url = baseUrl + `/event/ticket/${event_id}`;
    const response = await axios.get(url);
    return response.data.tickets;
  }

  async function login(username, password) {
    const url = baseUrl + "/auth/login";

    const data = {
      username,
      password,
    };

    const response = await axios.post(url, data);
    return response;
  }

  async function refresh() {
    const url = baseUrl + "/auth/refresh";

    try {
      const response = await axios.get(url, {
        credentials: "include",
      });

      return response;
    } catch (err) {
      console.log(err);
    }
  }

  async function registerUser(data) {
    const url = baseUrl + "/auth/guest/register";

    const payload = {
      username: data.username,
      email: data.email,
      password: data.password,
    };

    const response = await axios.post(url, payload);
    return response;
  }

  async function createOrder(payload) {
    const url = baseUrl + `/order/${payload.ticket_id}`;

    const response = await axios.post(url, payload);
    return response;
  }

  async function getUserOrderList(user_id) {
    const url = baseUrl + `/order/user/${user_id}`;

    const response = await axios.get(url);
    return response.data.data;
  }

  async function getETicketDetail(order_id) {
    const url = baseUrl + `/order/e-ticket/${order_id}`;

    const response = await axios.get(url);
    return response.data.data;
  }

  async function getETicketPublic(order_id) {
    const url = baseUrl + `/order/pub/e-ticket/${order_id}`;

    const response = await axios.get(url);
    return response.data.data;
  }

  return {
    getTimeline,
    getTheme,
    getBanner,
    getSponsorList,
    getMedpartList,
    getSpeakerList,
    getAdsList,
    getTeaser,
    getEventList,
    getEventDetail,
    getTicketDetail,
    getTicketList,
    login,
    refresh,
    registerUser,
    createOrder,
    getUserOrderList,
    getETicketDetail,
    getETicketPublic,
  };
})();
