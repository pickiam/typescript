// 数组的定义

// 最简单的方法是使用「类型 + 方括号」来表示数组：
let fibonacci: number[] = [1, 1, 2, 3, 5];

// 数组的项中不允许出现其他的类型：
let fibonacci1: number[] = [1, '1', 2, 3, 5];

// 上例中，[1, '1', 2, 3, 5] 的类型被推断为 (number | string)[]，这是联合类型和数组的结合

// 数组的一些方法的参数也会根据数组在定义时约定的类型进行限制：

// let fibonacci: number[] = [1, 1, 2, 3, 5];
// fibonacci.push('8');
// 上例中，push 方法只允许传入 number 类型的参数，但是却传了一个 string 类型的参数，所以报错了。

// 可以用数组泛型来定义数组 Array<elemType>

// 接口可以用来描述数组

interface NumberArray {
    [index: number]: string;
}
let fibonacci333: NumberArray = ['seven'];
// any在数组中的应用
let list: any[] = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }];

// 类数组

function sum() {
    let args: number[]  = arguments
}
// 事实上常见的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等：
function sum1() {
    let args: IArguments = arguments;
}