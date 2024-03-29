import React from 'react';
import { shallow } from 'enzyme';
import Congrats from './Congrats';
import { findByTestAttr } from './test/testUtils';
import { IPropsCongrats } from './interfaces';

const defaultProps = { success: false };

/**
 * Factory function to create a ShallowWrapper for the Congrats components
 * @function setup
 * @param {IPropsCongrats} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props: IPropsCongrats) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test('renders without error', () => {
  const wrapper = setup({ success: true });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});
test('renders no text when `success` prop is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});
test('renders no empty congrats message when success prop is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});
