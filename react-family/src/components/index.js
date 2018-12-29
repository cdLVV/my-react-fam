import Test from './Test';
import Iconfont from './Iconfont';
import Hello from './Hello';

export {
  Test,
  Iconfont,
  Hello,
}
// 如果用了export default { Test }
// 而引入时必须用 import components from 'components';
// const { Test } = components;
// 而不能直接import { Test } from 'components', 这时候Test 为undefined
// 因为上一句相当于components.default.Test 看到变量Test在components.default上，并不在components上，所以解构出来是undefined。
// 如果要用解构的话,直接 export { Test }
//  babel-plugin-add-module-exports，所以 export default 也没问题。