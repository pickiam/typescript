 // 枚举（enum）类型用于取值被限定在一定范围内的场景

 // 枚举 使用enum 关键字来定义；

 enum Dayssssss {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

 // 枚举成员会被赋值从0开始递增的数字，同时也会枚举值到枚举名的反向映射

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true

// 上边的例子会编译成
// var Days;
// (function (Days) {
//     Days[Days["Sun"] = 0] = "Sun";
//     Days[Days["Mon"] = 1] = "Mon";
//     Days[Days["Tue"] = 2] = "Tue";
//     Days[Days["Wed"] = 3] = "Wed";
//     Days[Days["Thu"] = 4] = "Thu";
//     Days[Days["Fri"] = 5] = "Fri";
//     Days[Days["Sat"] = 6] = "Sat";
// })(Days || (Days = {}));

// 手动赋值

enum dayss {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 7); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

// 为手动赋值的枚举型会接着上一个枚举型递增
// 如果未手动赋值的枚举项与手动赋值的重复了，TypeScript 是不会察觉到这一点的：
enum Daysss {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat};

console.log(Dayss["Sun"] === 3); // true
console.log(Dayss["Wed"] === 3); // true
console.log(Dayss[3] === "Sun"); // false
console.log(Dayss[3] === "Wed"); // true
// 上面的例子中，递增到 3 的时候与前面的 Sun 的取值重复了，但是 TypeScript 并没有报错，导致 Days[3] 的值先是 "Sun"，而后又被 "Wed" 覆盖了。

// 手动赋值的枚举项可以不是数字， 此时需要类型断言来忽视tsc的类型检查

enum dayssss {Sun, Mon, Tue, Wed, Thu, Fri, Sat = <any>'s'};

// 当然，手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长仍为 1：

// 常数项和计算所得项

// 枚举型有两种类型： 常数项（constant member）和 计算所得项（computed member）

// 计算所得项例子

enum Color {Red, Green, Bule = 'blue'.length}

// 常数枚举
// 常数枚举是使用 const enum 定义的类型
const enum Directions {Up, Down, Left, Right}

// 常数枚举与普通枚举的区别是，编译阶段被删除，并不能包含计算成员

const enum color {Red, Green, Bule = 'blue'.length}

// 外部枚举

// 外部枚举是使用 declare enum 定义的枚举类型

declare enum directions {up, down, left, right}

