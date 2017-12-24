import Login from '../components/Login.jsx';
import { shallow } from 'enzyme';
import React from 'react';

describe ('<Login />', () => {
    it('should show Log In', () => {
        const user = {email: ''};
        const login = jest.fn();
        const wrapper = shallow(<Login user={user} />);
        expect(wrapper.find('button').text()).toEqual('Log In');
    });
});

describe ('<Login />', () => {
    it('should show Log Out', () => {
        const user = {email: 'foo@bar.baz'};
        const wrapper = shallow(<Login user={user} />);
        expect(wrapper.find('button').text()).toEqual('Log Out');
    });
});
