import Enzyme from 'enzyme';
/**
 * Return node(s) with the given data-test attribute
 * @param wrapper - Ezayme shallow wrapper
 * @param val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (
  wrapper: Enzyme.ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >,
  val: string
) => {
  return wrapper.find(`[data-test="${val}"]`);
};
