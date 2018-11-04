// 联合类型 表示取值可以分为多种类型的一种
var wwwMyfavoriteNumber;
wwwMyfavoriteNumber = 'seven';
wwwMyfavoriteNumber = 7;
wwwMyfavoriteNumber = true;
//访问联合类型的属性或方法
// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：
function getLength(something) {
    return something.length;
}
// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：
// let myFavoriteNumber: string | number;
// myFavoriteNumber = 'seven';
// console.log(myFavoriteNumber.length); // 5
// myFavoriteNumber = 7;
// console.log(myFavoriteNumber.length); // 编译时报错
// 上例中，第二行的 myFavoriteNumber 被推断成了 string，访问它的 length 属性不会报错。
// 而第四行的 myFavoriteNumber 被推断成了 number，访问它的 length 属性时就报错了。
