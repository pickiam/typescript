// boolean
var isDone = false;
var createdByNewboolean = new Boolean(1); // 不通过
var createdByNewBoolean = new Boolean(1);
var createdByBoolean = Boolean(1);
// number
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
// string
var myName = 'Tom';
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";
// void  js 中没有void的概念，在ts中，可以用viod表示没有任何返回值的函数
function aletName() {
    console.log(333);
}
// 声明的void 类型的变量只能赋值为nudefined 和 null;
var unusable = undefined;
// null和undefined
var u = undefined;
var n = null;
// undefined 类型的变量只能被赋值为 undefined，null 类型的变量只能被赋值为 null
// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量
var num = undefined;
var uu;
var nnum = uu;
var uuu;
var nnnum = uuu; // 报错
