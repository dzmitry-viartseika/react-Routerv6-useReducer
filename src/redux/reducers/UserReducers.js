import {
    ADD_NEW_USER,
    GET_POSTS,
    DELETE_USER,
    CHANGE_POST,
    SORT_POSTS,
    DUBLICATE_USER,
    CHANGE_SELECT,
    DELETE_ITEMS,
    SAVE_USER,
    SEARCH_USER
} from '../../constants/types';



const initialState = {
    userItems: [
        {
            id: 1,
            avatar: '',
            firstName: 'Yulia',
            lastName: 'Kurchenkova',
            country: 'Belarus',
            selected: true
        }, {
            id: 2,
            avatar: '',
            firstName: 'Anna',
            lastName: 'Kurchenkova',
            country: 'Belarus',
            selected: false
        }, {
            id: 3,
            avatar: '',
            firstName: 'Nikita',
            lastName: 'Petrov',
            country: 'Belarus',
            selected: false
        }
    ]
};

export const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_USER:
            return {
                ...state,
                userItems: [
                    ...state.userItems,
                    action.payload
                ]
            }
        case GET_POSTS:
            return {
                ...state,
                postItems: action.payload
            }
        case DELETE_USER:

            return {
                ...state,
                userItems: action.payload
            }
        case CHANGE_POST:
            return {
                ...state,
                postItems: action.payload
            }
        case SORT_POSTS:
            return {
                ...state,
                userItems: action.payload
            }
        case DUBLICATE_USER:
            return {
                ...state,
                userItems: action.payload
            }
        case CHANGE_SELECT:
            return {
                ...state,
                userItems: action.payload
            }
        case DELETE_ITEMS:
            return {
                ...state,
                userItems: action.payload
            }
        case SAVE_USER:
            return {
                ...state,
                userItems: action.payload
            }
        case SEARCH_USER:
            console.log('search', action.payload)
            return {
                ...state,
                userItems: action.payload
            }
    }
    return state;
}
