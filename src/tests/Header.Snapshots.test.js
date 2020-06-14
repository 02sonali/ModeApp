import React from 'react';
import renderer from 'react-test-renderer';
import {Header} from '../components/Header';

it("sets the header component", () => {
    const header = renderer.create(<Header></Header>);
    expect(header).toMatchSnapshot();
})