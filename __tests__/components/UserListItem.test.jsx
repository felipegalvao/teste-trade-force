import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import UserListItem from '../../app/components/UserListItem.jsx';

var expect = chai.expect;

describe('UserListItem', () => {
    it('UserListItem renders a p element with id and name', () => {
        var user = {
            id: 1,
            name: 'Felipe'
        };

        var userListItem = shallow(<UserListItem {...user} />);

        expect(userListItem.find('p').first().text()).to.contain(user.id);
        expect(userListItem.find('p').first().text()).to.contain(user.name);
    })
})