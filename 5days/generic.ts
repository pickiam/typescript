function identity(arg: any): any {
    return arg;
}

function identitys<T>(arg: T): T {
    return arg;
}
// 使用方式 
// 传入所有的参数，包括类型参数
identitys<string>('myString'); 
// 类型推论
identitys('myString')

function loggingIdentity<T>(arg: T): T {
    // console.log(arg.length); // Error: T doesn't have .length
    return arg;
}

function loggingIdentitys<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

function loggingIdentities<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
}
// 泛型类型

function identities<T>(arg: T): T {
    return arg;
}

let myIdentity: <T>(arg: T) => T = identities;
// 使用不同的泛型参数名，数量上和使用方式对应
let myIdentities: <U>(arg: U) => U = identities;
// 使用调用签名的对象的字面量来定义泛型函数

let myIdentitys: {<T>(arg: T): T} = identity;
// 泛型接口，上面对象字面量的演化
interface GenericIdentityFn {
    <T>(arg: T): T;
}

let muIdentityes: GenericIdentityFn = identities;

// 可以把泛型参数当作整个接口的一个参数，清楚知道使用了具体的那个泛型类型

interface GenericIdentityFns<T> {
    (arg: T): T;
}

let muIdentity: GenericIdentityFns<number> = identity;

// 不再描述泛型函数，而是把非泛型函数签名作为泛型类型一部分

// 泛型类
// 泛型类看上去与泛型接口差不多，泛型类使用（<>）泛型类型，跟在类名后面 

class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, Y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();

myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) {return x + y}

// 泛型类型直接放在类后面，类有两部分：静态部分和实例部分。泛型类指的是实例部分的类型，类的静态属性不能使用泛型约束

// 泛型约束
function loggingIdentityss<T>(arg: T): T {
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}

// 处理任意带有.length属性的所有类型。只要传入的类型有这个属性，定义接口来描述约束条件

interface lengthwise {
    length: number;
}

function loggingIdentitysss<T extends lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
// 泛型函数定义了约束，因此他不在适用于任意类型
loggingIdentitysss(3) // error, 必须有length属性


loggingIdentitysss({length: 10, value: 3});

// 在泛型约束中使用类型参数

// function getProperty(obj: T, key: K) {
//     return obj[key];
// }