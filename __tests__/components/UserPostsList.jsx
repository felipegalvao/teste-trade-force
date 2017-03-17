import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import UserPostsList from '../../app/components/UserPostsList.jsx';

var expect = chai.expect;

describe('UserPostsList', () => {
    let userPostsList;

    beforeEach(() => {
        var posts = [
            {
                id: 1,
                userId: 1,
                title: "Post Title 1",
                body: "Post Body 1"
            },
            {
                id: 2,
                userId: 1,
                title: "Post Title 2",
                body: "Post Body 2"
            }
        ]

        userPostsList = shallow(<UserPostsList posts={posts} />)
    })

    it('UserPostList renders user-posts-list div with user posts', () => {
        expect(userPostsList.find('.user-posts-list').length).to.equal(1);
    })

    it('UserPostsList render one UserPost for each passed post', () => {
        expect(userPostsList.find('UserPost').length).to.equal(2);
    })
})