const initialState = {
    lenguage : "english",
    mode : "dark"
}

interface IAction {
    type: string
    payload: string
}

const rootReducer = (state = initialState, action: IAction) => {
    switch (action.type) {

        case "CHANGE_LENGUAGE":
            return{
                ...state,
                lenguage: action.payload
            }

        case "CHANGE_MODE":
            return{
                ...state,
                mode: action.payload
            }

        default:
            return {
                ...state,
            }
    }
}

export default rootReducer;