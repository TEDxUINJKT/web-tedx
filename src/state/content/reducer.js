import { ActionType } from "./action"

export default function ContentReducer(content = {}, action = {}) {
    switch (action.type) {
        case ActionType.GET_HOME:
            return content = { ...content, banner: action.payload.banner, timeline: action.payload.timeline, teaser: action.payload.teaser }
        case ActionType.GET_THEME:
            return content = { ...content, theme: action.payload.theme }
        case ActionType.GET_SPEAKER:
            return content = { ...content, speaker: { main: action.payload.main, student: action.payload.student } }
        case ActionType.GET_PARTNER:
            return content = { ...content, partner: { medpart: action.payload.medpart, sponsor: action.payload.sponsor, ads: action.payload.ads } }
        case ActionType.GET_EVENT:
            return content = { ...content, event: action.payload.event }
        case ActionType.GET_DETAIL_EVENT:
            return content = { ...content, selected_detail: action.payload.detail, ticket: action.payload.ticket }
        default:
            return content
    }
}