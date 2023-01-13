export function changeLenguage(lenguage:string, dispatch:Function) {
    if (lenguage === "english") {
        dispatch({ type: "CHANGE_LENGUAGE", payload: "spanish" })
    }else{
        dispatch({ type: "CHANGE_LENGUAGE", payload: "english" })
    }
}

export function changeMode(mode:string, dispatch:Function) {
    if (mode === "dark") {
        dispatch({ type: "CHANGE_MODE", payload: "light" })
    }else{
        dispatch({ type: "CHANGE_MODE", payload: "dark" })
    }
}