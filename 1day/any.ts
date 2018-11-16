// 任意值（Any）用来表示允许赋值为任意类型。

let myFavoriteNumber: string = 'one';

myFavoriteNumber = 7; //如果是一个普通类型，在赋值过程中改变类型是不被允许的：

let wmyFavoriteNumber: any = 'seven';
wmyFavoriteNumber = 7; // 但如果是 any 

//在任意值上访问任何属性都是允许的
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
// 允许调用任何方法
let anyThing2: any = 'Tom';
anyThing2.setName('Jerry');
anyThing2.setName('Jerry').sayHello();
anyThing2.myName.setFirstName('Cat');

// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：

let something;
something = 'seven';
something = 7;

something.setName('Tom');
// 上下两者是相等的
// let something: any;
// something = 'seven';
// something = 7;

// something.setName('Tom');

// 在对现有代码进行改写的时候，any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。 你可能认为Object有相似的作用，就像它在其它语言中那样。 但是Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法：

// let notSure: any = 4;
// notSure.ifItExists(); // okay, ifItExists might exist at runtime
// notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

// let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.