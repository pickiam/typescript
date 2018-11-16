import { func } from "prop-types";

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

// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把null和undefined赋值给number类型的变量。
// 然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。 这能避免很多常见的问题。 也许在某处你想传入一个string或null或undefined，你可以使用联合类型string | null | undefined。

// never 

// never类型表示那些永不存在值的类型。 nerver类型是任何类型的子类型，可以赋值该任何类型，然而没有类型是never的子类型或可以赋值给never类型

// 返回never的函数必须存在无法到达的终点
function error (message: string): never {
    throw new Error(message)
}
// 推断返回的类型为never
function fail (): never {
    return error('something failed')
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {

    }
}

// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。使用object类型，就可以更好的表示像Object.create这样的API。例如

declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error