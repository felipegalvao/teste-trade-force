import React, { Component } from 'react';

import jsonplaceholderAPI from '../api/jsonplaceholderAPI.jsx';
import UserList from './UserList.jsx';
import UserPostsList from './UserPostsList.jsx';

class MainApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            currentUserName: null,
            currentUserPosts: []
        }        
    }

    componentWillMount() {
        var that = this;
        
        jsonplaceholderAPI.getUsers().then(function (users) {
            that.setState({
                users
            })
        })
    }

    handleGetUserPosts = (id, name) => {
        var that = this;

        jsonplaceholderAPI.getUserPosts().then(function (posts) {
            var userPosts = posts.filter((post) => {
                return post.userId === id;
            })

            that.setState({
                currentUserPosts: userPosts,
                currentUserName: name
            });
        })
    }

    render() {
        var {users, currentUserPosts, currentUserName} = this.state;

        var renderSubtitle = () => {
            if (currentUserName !== null) {
                return (<h3>Posts by <span className="current-user">{currentUserName}</span></h3>)
            }
        };

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h1>Teste Trade Force</h1>
                    </div>
                </div>
                <UserList users={users} onGetUserPosts={this.handleGetUserPosts}/>
                {renderSubtitle()}
                <UserPostsList posts={currentUserPosts} />
            </div>
        );
    }
}

export default MainApp;