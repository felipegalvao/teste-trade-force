import React, { Component } from 'react';

import UserListItem from './UserListItem.jsx';

class UserList extends Component {
    render() {
        var {users} = this.props;

        var renderUsers = () => {
            return users.map((user) => {
                return (
                    <UserListItem key={user.id} {...user} onGetUserPosts={this.props.onGetUserPosts} />
                )
            })
        }

        return (
            <div className="row">
                {renderUsers()}
            </div>
        );
    }
}

export default UserList;