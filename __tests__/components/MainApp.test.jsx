import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import MainApp from '../../app/components/MainApp.jsx';

var expect = chai.expect;

describe('MainApp', () => {
  it('MainApp renders title', () => {
    var app = shallow(<MainApp />);
    expect(app.find('h1').text()).to.equal('Teste Trade Force');
  });

  it('MainApp renders nested components', () => {
    var app = shallow(<MainApp />);
    expect(app.find('UserList').length).to.equal(1);
    expect(app.find('UserPostsList').length).to.equal(1);
  })
});

