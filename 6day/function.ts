// 函数定义
function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): number {return x + y}

// 完整的函数类型

let myadd: (x: number, y: number) => number = function (x: number, y: number): number {return x + y}

// 完整的函数类型分为参数类型和返回值类型。完整的参数类型需要这两部分内容
//第二部分是返回值类型。 对于返回值，我们在函数和返回值类型之前使用( =>)符号，使之清晰明了。 如之前提到的，返回值类型是函数类型的必要部分，如果函数没有返回任何值，你也必须指定返回值类型为 void而不能留空。

// 可选参数和默认参数
// TypeScript里的每个函数参数都是必须的 传递给一个函数的参数个数必须与函数期望的参数个数一致。

function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // error, too few parameters
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right


// JavaScript里，每个参数都是可选的，可传可不传。 没传参的时候，它的值就是undefined。 在TypeScript里我们可以在参数名旁使用 ?实现可选参数的功能。 比如，我们想让last name是可选的：
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");  // works correctly now
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");  // ah, just right

// 可选参数必须跟在必须参数后面