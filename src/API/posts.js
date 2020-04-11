import axiosFetch from "./axios";

export function getList(params) {
    return axiosFetch({
        url: 'posts/',
        method: 'GET',
        params
    })
}

export function getPostById(id) {
    return axiosFetch({
        url: `posts/${id}`,
        method: 'GET',
    })
}

export function getPostByUser(params) {
    return axiosFetch({
        url: 'posts/favourite/',
        method: 'GET',
        params
    })

}

export function sendNewPost(data) {
    return axiosFetch({
        url: 'posts/',
        method: 'POST',
        data
    })
}

export function addLike(id) {
    return axiosFetch({
        url: `posts/like/${id}`,
        method: 'PUT'
    })
}

export function addDislike(id) {
    return axiosFetch({
        url: `posts/dislike/${id}`,
        method: 'PUT'
    })
}