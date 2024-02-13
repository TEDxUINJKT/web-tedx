const ActionType = {
    GET_USER_ORDER_LIST: 'GET_USER_ORDER_LIST',
    GET_DETAIL_ETICKET: 'GET_DETAIL_ETICKET',
}

function UserOrderAction(orders) {
    return {
        type: ActionType.GET_USER_ORDER_LIST,
        payload: {
            orders
        }
    }
}

function UserETicketAction(detail_eticket) {
    return {
        type: ActionType.GET_DETAIL_ETICKET,
        payload: {
            detail_eticket
        }
    }
}

export { ActionType, UserOrderAction, UserETicketAction }
