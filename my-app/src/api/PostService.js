import axios from "axios";

export default class PostService {
    static async getAll() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return response.data;
    }

    static async getLimit(limit = 10, page = 1) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response;
    }

    static async getOne(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return response.data;
    }

    static async getPostComments(postId) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments')
        return response.data;
    }

    static async getLimitPostComments(postId, limit = 10, page = 1) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response;
    }
}