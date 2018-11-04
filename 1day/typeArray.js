// 数组的定义
// 最简单的方法是使用「类型 + 方括号」来表示数组：
var fibonacci = [1, 1, 2, 3, 5];
// 数组的项中不允许出现其他的类型：
var fibonacci1 = [1, '1', 2, 3, 5];
var fibonacci333 = ['seven'];
// any在数组中的应用
var list = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }];
// 类数组
function sum() {
    var args = arguments;
}
// 事实上常见的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等：
function sum1() {
    var args = arguments;
}
