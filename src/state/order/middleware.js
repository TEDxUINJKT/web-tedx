import { DetailEventOrderAction, DetailTicketAction } from './action'
import { StartLoadingActions, FetchLoadingActions, FinishLoadingActions } from '../loading/action'

function OrderDetailEventContent(event_detail) {
    return async dispatch => {
        dispatch(StartLoadingActions())
        try {
            dispatch(FetchLoadingActions())

            dispatch(DetailEventOrderAction(event_detail))
        } catch (err) {
            console.log(err)
        }
        dispatch(FinishLoadingActions())
    }
}

function OrderDetailTicketContent(ticket_detail) {
    return async dispatch => {
        dispatch(StartLoadingActions())
        try {
            dispatch(FetchLoadingActions())

            dispatch(DetailTicketAction(ticket_detail))
        } catch (err) {
            console.log(err)
        }
        dispatch(FinishLoadingActions())
    }
}


export { OrderDetailEventContent, OrderDetailTicketContent }