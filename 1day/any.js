// 任意值（Any）用来表示允许赋值为任意类型。
var myFavoriteNumber = 'one';
myFavoriteNumber = 7; //如果是一个普通类型，在赋值过程中改变类型是不被允许的：
var wmyFavoriteNumber = 'seven';
wmyFavoriteNumber = 7; // 但如果是 any 
//在任意值上访问任何属性都是允许的
var anyThing = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
// 允许调用任何方法
var anyThing2 = 'Tom';
anyThing2.setName('Jerry');
anyThing2.setName('Jerry').sayHello();
anyThing2.myName.setFirstName('Cat');
// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
var something;
something = 'seven';
something = 7;
something.setName('Tom');
// 上下两者是相等的
// let something: any;
// something = 'seven';
// something = 7;
// something.setName('Tom');
