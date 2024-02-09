const ActionType = {
    GET_DETAIL_EVENT_ORDER: 'GET_DETAIL_EVENT_ORDER',
    GET_DETAIL_TICKET: 'GET_DETAIL_TICKET',
}

function DetailEventOrderAction(detail_event) {
    return {
        type: ActionType.GET_DETAIL_EVENT_ORDER,
        payload: {
            detail_event
        }
    }
}

function DetailTicketAction(detail_ticket) {
    return {
        type: ActionType.GET_DETAIL_TICKET,
        payload: {
            detail_ticket
        }
    }
}

export { ActionType, DetailEventOrderAction, DetailTicketAction }
