// 数组合并了相同的数组，而元组合并了不同类型的对象
// let dojo: [string, number] = ['dojo', 2];
var dojo;
dojo[0] = 'dojo';
// 当赋值或者访问一个已知索引的元素，会得到正确的类型
var xcatliu;
xcatliu = ['Xcat Liu', 25];
// 当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型指定的项
// let xcatliu: [string, number] = ['Xcat Liu']; error 缺项
// let xcatliu: [string, number] = ['Xcat Liu', 3, 3]; error 多项
// let xcatliu: [string, number] = [3，'Xcat Liu']; error 顺序不对
var tsdojo;
tsdojo = ['dojo']; // 这种也是不可以的
tsdojo[1] = 25;
// 越界的元素
// 当添加越界的元素，类型会被限制为元组中每个类型的联合类型
var tsDojo;
tsDojo = ['dojo', 25];
tsDojo.push('dojo');
// tsDojo.push(true); 类型会被限制为元组中每个类型的联合类型
