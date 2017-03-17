import React from 'react';
import chai from 'chai';
import { shallow, mount } from 'enzyme';
import UserPost from '../../app/components/UserPost.jsx';

var expect = chai.expect;

describe('UserPost', () => {
    it('UserPost renders a h4 element with id and title', () => {
        var post = {
            id: 1,
            userId: 1,
            title: "Post Title 1",
            body: "Post Body 1"
        };

        var userPost = shallow(<UserPost {...post} />);

        expect(userPost.find('h4').first().text()).to.contain(post.id);
        expect(userPost.find('h4').first().text()).to.contain(post.title);
    })

    it('UserPost renders a p element with the post body', () => {
        var post = {
            id: 1,
            userId: 1,
            title: "Post Title 1",
            body: "Post Body 1"
        };

        var userPost = shallow(<UserPost {...post} />);

        expect(userPost.find('p').first().text()).to.equal(post.body);        
    })
})