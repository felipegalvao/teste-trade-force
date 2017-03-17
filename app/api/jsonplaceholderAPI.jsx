import axios from 'axios';

const API_USERS_URL = 'https://jsonplaceholder.typicode.com/users'
const API_POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'

module.exports = {
    getUsers: function () {
        return axios.get(API_USERS_URL).then(function (res) {            
            return res.data
        }).catch(function (res) {
            return "An error has occured."
        })
    },

    getUserPosts: function () {
        return axios.get(API_POSTS_URL).then(function (res) {            
            return res.data
        }).catch(function (res) {
            return "An error has occured."
        })
    }
}