import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import axios from 'axios';

import jsonplaceholderAPI from '../../app/api/jsonplaceholderAPI.jsx';

var expect = chai.expect;

const API_USERS_URL = 'https://jsonplaceholder.typicode.com/users'
const API_POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'

describe('jsonplaceholderAPI', () => {
    it('async API call to Users API', async () => {
        const req = await axios.get(API_USERS_URL);
        const underTest = req.data;
        expect(underTest[0].name).to.equal('Leanne Graham');
        expect(underTest.length).to.be.greaterThan(0);
    });

    it('async API call to posts API', async () => {
        const req = await axios.get(API_POSTS_URL);
        const underTest = req.data;
        expect(underTest[0].userId).to.equal(1);
        expect(underTest.length).to.be.greaterThan(0);
    });
})