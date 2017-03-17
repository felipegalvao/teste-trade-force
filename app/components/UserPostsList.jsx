import React, { Component } from 'react';

import UserPost from './UserPost.jsx';

class UserPostsList extends Component {
    render() {
        var {posts} = this.props;

        var renderPosts = () => {
            return posts.map((post) => {
                return (
                    <UserPost key={post.id} {...post} />
                )
            })
        }

        return (
            <div className="user-posts-list">
                {renderPosts()}
            </div>
        );
    }
}

export default UserPostsList;