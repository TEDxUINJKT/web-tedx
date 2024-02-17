import { HomeAction, ThemeAction, SpeakerAction, PartnerAction, EventAction, DetailEventAction } from './action'
import { DetailEventOrderAction,DetailTicketAction } from '../order/action'
import { StartLoadingActions, FetchLoadingActions, FinishLoadingActions } from '../loading/action'

import api from "../../lib/api"

function HomeContent() {
    return async dispatch => {
        dispatch(StartLoadingActions())
        try {
            dispatch(FetchLoadingActions())
            const banner = await api.getBanner()
            const timeline = await api.getTimeline()
            const teaser = await api.getTeaser()

            dispatch(HomeAction(banner, timeline, teaser))
        } catch (err) {
            console.log(err)
        }
        dispatch(FinishLoadingActions())
    }
}

function ThemeContent() {
    return async dispatch => {
        dispatch(StartLoadingActions())
        try {
            dispatch(FetchLoadingActions())
            const theme = await api.getTheme()

            dispatch(ThemeAction(theme))
        } catch (err) {
            console.log(err)
        }
        dispatch(FinishLoadingActions())
    }
}

function SpeakerContent() {
    return async dispatch => {
        dispatch(StartLoadingActions())
        try {
            dispatch(FetchLoadingActions())
            const main = await api.getSpeakerList('main')
            const student = await api.getSpeakerList('student')

            dispatch(SpeakerAction(main, student))
        } catch (err) {
            console.log(err)
        }
        dispatch(FinishLoadingActions())
    }
}

function PartnerContent() {
    return async dispatch => {
        dispatch(StartLoadingActions())
        try {
            dispatch(FetchLoadingActions())
            const sponsor = await api.getSponsorList()
            const medpart = await api.getMedpartList()
            const ads = await api.getAdsList()

            const ads_list = ads.filter(content => content.type === 'ads')

            dispatch(PartnerAction(sponsor, medpart, ads_list))
        } catch (err) {
            console.log(err)
        }
        dispatch(FinishLoadingActions())
    }
}

function EventContent() {
    return async dispatch => {
        dispatch(StartLoadingActions())
        try {
            dispatch(FetchLoadingActions())
            const events = await api.getEventList()

            dispatch(EventAction(events))
        } catch (err) {
            console.log(err)
        }
        dispatch(FinishLoadingActions())
    }
}

function EventDetailContent(event_id) {
    return async dispatch => {
        dispatch(StartLoadingActions())
        try {
            dispatch(FetchLoadingActions())
            const detail = await api.getEventDetail(event_id)
            const tickets = await api.getTicketList(event_id)

            dispatch(DetailEventAction(detail, tickets))
            dispatch(DetailEventOrderAction(detail))
        } catch (err) {
            console.log(err)
        }
        dispatch(FinishLoadingActions())
    }
}

function TicketDetailContent(ticket_id) {
    return async dispatch => {
        dispatch(StartLoadingActions())
        try {
            dispatch(FetchLoadingActions())
            const detail = await api.getTicketDetail(ticket_id)

            dispatch(DetailTicketAction(detail.ticket))
            dispatch(DetailEventOrderAction(detail.event))
        } catch (err) {
            console.log(err)
        }
        dispatch(FinishLoadingActions())
    }
}

export { HomeContent, ThemeContent, SpeakerContent, PartnerContent, EventContent, EventDetailContent,TicketDetailContent }