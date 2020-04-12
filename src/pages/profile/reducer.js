let initState = {
    dataForm: {
        currentPassword: '',
        newPassword: ''
    },
    userInfo: null,
    isLoading: false,
    modalWindow: false,
    changeSuccess: false,
}

export default function profileReducer (state = initState, action) {
    switch (action.type) {
        case 'PROFILE_GET_REQUEST':
            return {
                ...state,
                isLoading: true
            }
        case 'PROFILE_GET_REQUEST_SUCCESS':
            return {
                ...state,
                isLoading: false,
                userInfo: action.payload
            }
        default:
            return state;
    }
}