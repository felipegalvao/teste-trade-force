import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import UserList from '../../app/components/UserList.jsx';
import UserListItem from '../../app/components/UserListItem.jsx';

var expect = chai.expect;

describe('UserList', () => {
    let userList;

    beforeEach(() => {
        var users = [
            {
                id: 1,
                name: "Felipe"
            },
            {
                id: 2,
                name: "Jose"
            }
        ]

        userList = shallow(<UserList users={users} />)
    })

    it('UserList renders row with users cards', () => {
        expect(userList.find('.row').length).to.equal(1);
    })

    it('UserList render one UserListItem for each user', () => {
        expect(userList.find('UserListItem').length).to.equal(2);
    })
})