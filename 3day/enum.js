// 枚举（enum）类型用于取值被限定在一定范围内的场景
// 枚举 使用enum 关键字来定义；
var Dayssssss;
(function (Dayssssss) {
    Dayssssss[Dayssssss["Sun"] = 0] = "Sun";
    Dayssssss[Dayssssss["Mon"] = 1] = "Mon";
    Dayssssss[Dayssssss["Tue"] = 2] = "Tue";
    Dayssssss[Dayssssss["Wed"] = 3] = "Wed";
    Dayssssss[Dayssssss["Thu"] = 4] = "Thu";
    Dayssssss[Dayssssss["Fri"] = 5] = "Fri";
    Dayssssss[Dayssssss["Sat"] = 6] = "Sat";
})(Dayssssss || (Dayssssss = {}));
;
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
var dayss;
(function (dayss) {
    dayss[dayss["Sun"] = 7] = "Sun";
    dayss[dayss["Mon"] = 1] = "Mon";
    dayss[dayss["Tue"] = 2] = "Tue";
    dayss[dayss["Wed"] = 3] = "Wed";
    dayss[dayss["Thu"] = 4] = "Thu";
    dayss[dayss["Fri"] = 5] = "Fri";
    dayss[dayss["Sat"] = 6] = "Sat";
})(dayss || (dayss = {}));
;
console.log(Days["Sun"] === 7); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true
// 为手动赋值的枚举型会接着上一个枚举型递增
// 如果未手动赋值的枚举项与手动赋值的重复了，TypeScript 是不会察觉到这一点的：
var Daysss;
(function (Daysss) {
    Daysss[Daysss["Sun"] = 3] = "Sun";
    Daysss[Daysss["Mon"] = 1] = "Mon";
    Daysss[Daysss["Tue"] = 2] = "Tue";
    Daysss[Daysss["Wed"] = 3] = "Wed";
    Daysss[Daysss["Thu"] = 4] = "Thu";
    Daysss[Daysss["Fri"] = 5] = "Fri";
    Daysss[Daysss["Sat"] = 6] = "Sat";
})(Daysss || (Daysss = {}));
;
console.log(Dayss["Sun"] === 3); // true
console.log(Dayss["Wed"] === 3); // true
console.log(Dayss[3] === "Sun"); // false
console.log(Dayss[3] === "Wed"); // true
// 上面的例子中，递增到 3 的时候与前面的 Sun 的取值重复了，但是 TypeScript 并没有报错，导致 Days[3] 的值先是 "Sun"，而后又被 "Wed" 覆盖了。
// 手动赋值的枚举项可以不是数字， 此时需要类型断言来忽视tsc的类型检查
var dayssss;
(function (dayssss) {
    dayssss[dayssss["Sun"] = 0] = "Sun";
    dayssss[dayssss["Mon"] = 1] = "Mon";
    dayssss[dayssss["Tue"] = 2] = "Tue";
    dayssss[dayssss["Wed"] = 3] = "Wed";
    dayssss[dayssss["Thu"] = 4] = "Thu";
    dayssss[dayssss["Fri"] = 5] = "Fri";
    dayssss[dayssss["Sat"] = 's'] = "Sat";
})(dayssss || (dayssss = {}));
;
