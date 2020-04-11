import API from "src/API";

export const getInitMyPost = (authorId) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'MY-POST_INIT_REQUEST'});
            const response = await API.posts.getPostByUser(authorId);
            dispatch({type: 'MY-POST_INIT_REQUEST_SUCCESS', payload: response});
        } catch (e) {
            dispatch({type: 'MY-POST_INIT_REQUEST_FAIL', payload: status});
        }
    }
}