// 使用接口来定义对象的类型

// 可用于队类的一部分行为进行抽象，也常用于对类的形状进行描述


interface Person {
    name: string,
    age: number
}

let dojo: Person = {
    name: 'dojo',
    age: 10
}
// 定义的变量比接口少了一些属性是不允许的,多一些属性也是不允许的

// 赋值的时候，变量的形状必须和接口的形状保持一致


//不完全匹配一个形状，那么可以用可选属性；

interface Person2 {
    name: string,
    age?: number
}

let yu: Person2 = {
    name: 'dojo',
    age: 10, // 可不填
    // gender: 'male' // 不允许添加未定义的属性
}

// 可选属性可以不存在，但是不允许添加未定义的属性

// 任意属性，允许接口有任意的属性

interface Person3 {
    name: string,
    age?: number,
    [propName: string]: any;
}

let tom: Person3 = {
    name: 'dojo',
    gender: 'male'
}

// 定义了任意属性， 那么确定属性和可选属性都必须是它的子属性

interface Person4 {
    name: string,
    age?: number,
    [propName: string]: string
}

// 上例中，任意属性的值允许是 string，但是可选属性 age 的值却是 number，number 不是 string 的子属性，所以报错了

// 只读属性 对象的字段只能在创建的时候被赋值，readonly 定义只读属性；

interface Person5 {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let wen: Person5 = {
    id: 2333,
    name: 'dojo'
}
wen.id = 21333
// 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
// interface Person {
//     readonly id: number;
//     name: string;
//     age?: number;
//     [propName: string]: any;
// }

// let tom: Person = {
//     name: 'Tom',
//     gender: 'male'
// };

// tom.id = 89757;

// 上例中，报错信息有两处，第一处是在对 tom 进行赋值的时候，没有给 id 赋值。

// 第二处是在给 tom.id 赋值的时候，由于它是只读属性，所以报错了