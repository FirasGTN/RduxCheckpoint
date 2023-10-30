export const check = (payload) => {
    return {
        type : "CHECK",
        payload,
    }
}
export const uncheck = (payload) => {
    return {
        type : "UNCHECK",
        payload,
    }
}
export const delet = (payload) => {
    return {
        type : "DELETE",
        payload,
    }
}
export const edit = (payload) => {
    return {
        type : "EDIT",
        payload,
    }
}
export const editText = (editvalue,payload) => {
    return {
        type : "EDIT_TEXT",
        payload,
        editvalue,
    }
}
export const add = (payload) => {
    return {
        type : "ADD",
        payload,
    }
}
export const filterdone = () => {
    return {
        type : "FILTER_DONE",
    }
}
export const filterundone = () => {
    return {
        type : "FILTER_UNDONE",
    }
}