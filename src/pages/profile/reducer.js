let initState = {
    dataForm: {
        currentPassword: '',
        newPassword: ''
    },
    userInfo: null,
    isLoading: false,
    modalWindow: false, //false
    changeSuccess: true,//false
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
        case 'PROFILE_MODAL_WINDOW_OPEN':
            return {
                ...state,
                modalWindow: true,
            }
        case 'PROFILE_MODAL_WINDOW_CLOSE':
            return {
                ...state,
                modalWindow: false
            }
        case 'PROFILE_CHANGE_PASSWORD_FORM':
            return {
                ...state,
                dataForm: {
                    ...state.dataForm,
                    [action.payload.fieldId]: action.payload.value
                }
            }
        case 'PROFILE_CHANGE_PASSWORD_SUCCESS':
            return {
                ...state,
                dataForm: {
                    currentPassword: '',
                    newPassword: ''
                },
                modalWindow: false,
                changeSuccess: true
            }
        default:
            return state;
    }
}