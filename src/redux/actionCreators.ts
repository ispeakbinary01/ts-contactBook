import * as at from "./actions";

export const addContact = (contact: IContact) => {
    const action: ContactAction = {
        type: at.ADD_CONTACT,
        contact,
    }
    return dispatch(action);
}


export const removeContact = (contact: IContact) => {
    const action: ContactAction = {
        type: at.DELETE_CONTACT,
        contact,
    }
    return dispatch(action);
}

export const dispatch = (action: ContactAction) => {
    return (dispatch: DispatchType) => {
        dispatch(action);
    }
}


