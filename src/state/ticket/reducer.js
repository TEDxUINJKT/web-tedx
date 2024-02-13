import { ActionType } from "./action"

export default function TicketReducer(ticket = {}, action = {}) {
    switch (action.type) {
        case ActionType.GET_USER_ORDER_LIST:
            return ticket = { ...ticket, list: action.payload.orders }
        case ActionType.GET_DETAIL_ETICKET:
            return ticket = { ...ticket, selected: action.payload.detail_eticket }
        default:
            return ticket
    }
}