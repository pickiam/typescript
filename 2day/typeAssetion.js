// 类型断言
// <类型> 值
// 值 as 类型 在tsx语法中（react的jsx语法的ts版），必须采用这一种
// 当不确定一个联合类型的变量到底使那种类型的时候，我们访问此联合类型的所有类型共有的属性或者方法
// function getLength(something: string | number): number {
//     return something.length;
// }
// Property 'length' does not exist on type 'number'.
// function getLength(something: string | number): number {
//     if (something.length) {
//         return something.length;
//     } else {
//         return something.toString().length;
//     }
// }
// 上面获取something.length的时候报错
// 使用类型断言 将something 断言成string;
function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
// 类型断言不是类型转化，断言成一个联合类型不存在的类型使不允许的
function toBoolen(something) {
    return something;
}
// 类型“string | number”不可转换为类型“boolean”。类型“number”不可与类型“boolean”进行比较。
