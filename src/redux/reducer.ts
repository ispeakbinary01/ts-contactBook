import * as at from "./actions"

const initialState: ContactState = {
    contacts: JSON.parse(localStorage.getItem('contacts') || '[]') 
}

const reducer = (
    state: ContactState = initialState,
    action: ContactAction
): ContactState => {
    switch(action.type) {
        case at.ADD_CONTACT:
            const newContact: IContact = {
                firstName: action.contact.firstName,
                lastName: action.contact.lastName,
                email: action.contact.email,
                country: action.contact.country,
            }
            return {
                ...state,
                contacts: state.contacts.concat(newContact),
            }
        case at.DELETE_CONTACT:
            const newContactList: IContact[] = state.contacts.filter(
                c => c.email !== action.contact.email
            )
            return {
                ...state,
                contacts: newContactList,
            }
    }
    return state
}

export default reducer