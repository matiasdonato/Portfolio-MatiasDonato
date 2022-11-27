const initialState = {
}

interface IAction {
    type: string
}

const rootReducer = (state = initialState, action: IAction) => {
    switch (action.type) {

        default:
            return {
                ...state,
            }
    }
}

export default rootReducer;