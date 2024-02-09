const ActionType = {
    GET_HOME: 'GET_BANNER',
    GET_THEME: 'GET_THEME',
    GET_SPEAKER: 'GET_SPEAKER',
    GET_PARTNER: 'GET_PARTNER:',
    GET_EVENT: 'GET_EVENT',
    GET_DETAIL_EVENT: 'GET_DETAIL_EVENT',
}

function HomeAction(banner, timeline, teaser) {
    return {
        type: ActionType.GET_HOME,
        payload: {
            banner, timeline, teaser
        }
    }
}

function ThemeAction(theme) {
    return {
        type: ActionType.GET_THEME,
        payload: {
            theme
        }
    }
}

function SpeakerAction(main, student) {
    return {
        type: ActionType.GET_SPEAKER,
        payload: {
            main, student
        }
    }
}

function PartnerAction(sponsor, medpart, ads) {
    return {
        type: ActionType.GET_PARTNER,
        payload: {
            sponsor, medpart, ads
        }
    }
}

function EventAction(event) {
    return {
        type: ActionType.GET_EVENT,
        payload: {
            event
        }
    }
}

function DetailEventAction(detail, ticket) {
    return {
        type: ActionType.GET_DETAIL_EVENT,
        payload: {
            detail, ticket
        }
    }
}

export { ActionType, HomeAction, ThemeAction, SpeakerAction, PartnerAction, EventAction, DetailEventAction }
