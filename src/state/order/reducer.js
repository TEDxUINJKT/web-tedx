import { ActionType } from "./action"

export default function OrderReducer(order = {}, action = {}) {
    switch (action.type) {
        case ActionType.GET_DETAIL_EVENT_ORDER:
            return order = { ...order, event: action.payload.detail_event }
        case ActionType.GET_DETAIL_TICKET:
            return order = { ...order, ticket: action.payload.detail_ticket }
        default:
            return order
    }
}