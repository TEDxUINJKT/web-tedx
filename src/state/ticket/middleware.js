import { UserOrderAction, UserETicketAction } from './action'
import { StartLoadingActions, FetchLoadingActions, FinishLoadingActions } from '../loading/action'

import api from "../../lib/api"


function UserOrderList(user_id) {
    return async dispatch => {
        dispatch(StartLoadingActions())
        try {
            dispatch(FetchLoadingActions())
            const list = await api.getUserOrderList(user_id)
            dispatch(UserOrderAction(list))
        } catch (err) {
            console.log(err)
        }
        dispatch(FinishLoadingActions())
    }
}

function UserEticketDetail(order_id) {
    return async dispatch => {
        dispatch(StartLoadingActions())
        try {
            dispatch(FetchLoadingActions())
            const detail = await api.getETicketDetail(order_id)

            dispatch(UserETicketAction(detail))
        } catch (err) {
            console.log(err)
        }
        dispatch(FinishLoadingActions())
    }
}


export { UserOrderList, UserEticketDetail }