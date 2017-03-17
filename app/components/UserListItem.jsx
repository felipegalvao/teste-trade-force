import React, { Component } from 'react';

class UserListItem extends Component {
    handleGetUserPosts = () => {
        var {id, name} = this.props;
        this.props.onGetUserPosts(id, name);
    }

    render() {
        var {id, name} = this.props;

        return (
            <div className="col-sm-2 col-user">
                <div className="user-card" onClick={this.handleGetUserPosts}>
                    <p>{id}. {name}</p>
                </div>
            </div>
        );
    }
}

export default UserListItem;