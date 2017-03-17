import React, { Component } from 'react';

class UserPost extends Component {
    render() {
        var {id, title, body} = this.props;

        return (
            <div className="row row-user-post">        
                <div className="col-sm-12">
                    <div className="user-post">
                        <h4>{id}. {title}</h4>
                        <p>{body}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserPost;