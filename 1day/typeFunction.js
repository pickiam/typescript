// 函数的类型
// 函数声明
function sum(x, y) {
    return x + y;
}
// 输入多余的或者小余参数，是不被允许的
sum(1, 2, 3);
sum(1);
// 上面的两种方式是不通过的
// 函数表达式
var mysum = function (x, y) {
    return x + y;
};
// 这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的。如果需要我们手动给 mySum 添加类型，则应该是这样：
var mySum = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (source, substring) {
    return source.search(substring) !== -1;
};
// 可选参数
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var tomcat = buildName('Tom', 'Cat');
var tom2 = buildName('Tom');
// 可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必须参数了：
// 参数默认值
// 在 ES6 中，我们允许给函数的参数添加默认值，TypeScript 会将添加了默认值的参数识别为可选参数：
function buildName2(firstName, lastName) {
    if (lastName === void 0) { lastName = 'cat'; }
    return firstName + '' + lastName;
}
// 此时就不受「可选参数必须接在必需参数后面」的限制了：
// 剩余参数
// 事实上，items 是一个数组。所以我们可以用数组的类型来定义它：
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a = [];
push(a, 1, 2, 3);
// 重载
// 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
function reverse1(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
// 上例中，我们重复定义了多次函数 reverse，前几次都是函数定义，最后一次是函数实现。在编辑器的代码提示中，可以正确的看到前两个提示
// 注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。
