// boolean
let isDone: boolean = false;

var createdByNewboolean: boolean = new Boolean(1); // 不通过

var createdByNewBoolean: Boolean = new Boolean(1);

let createdByBoolean: boolean = Boolean(1);

// number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;


// string
let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;

// void  js 中没有void的概念，在ts中，可以用viod表示没有任何返回值的函数

function aletName(): void {
    console.log(333);
}
// 声明的void 类型的变量只能赋值为nudefined 和 null;
let unusable: void = undefined;

// null和undefined

let u: undefined = undefined;
let n: null = null;

// undefined 类型的变量只能被赋值为 undefined，null 类型的变量只能被赋值为 null



// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量

let num: number = undefined;

let uu: undefined;
let nnum: number = uu;

let uuu: void;

let nnnum: number = uuu; // 报错

