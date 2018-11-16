// public private protected

// public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的

// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问

// protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的

class Animal {
    public name;
    public constructor (name) {
        this.name = name
    }
}

let a = new Animal('jack');

console.log(a.name);
a.name = 'tom';
console.log(a.name);

// name 被设置为了 public，所以直接访问实例的 name 属性是允许的
// 很多时候，我们希望有的属性是无法直接存取的，这时候就可以用 private 了

class Food {
    private name;
    public constructor (name) {
        this.name = name
    }
}

let food = new Food('apple');
// console.log(food.name) error 私有属性不能访问

// 需要注意的是，TypeScript 编译之后的代码中，并没有限制 private 属性在外部的可访问性。

// 如第一个类编译后的代码

// 使用private 修饰的属性或者方法，在子类中也是不允许访问的

class Fruit{
    private name;
    public constructor (name) {
        this.name = name;
    }
}
let orange = new Fruit('orange');

class Apple extends Fruit {
    constructor (name) {
        super(name);
        // console.log(this.name) name是private，只能在Fruit中访问
    }
}
// 而如果是用 protected 修饰，则允许在子类中访问：
class Animal {
    protected name;
    public constructor(name) {
        this.name = name;
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
        console.log(this.name);
    }
}
//抽象类
// abstract 用来定义抽象类和其中的抽象方法
// 抽象类是不允许被实例化的 抽象类中的抽象方法必须被子类实现

abstract class Animall {
    public name;
    public constructor (name) {
        this.name = name;
    }
    public abstract sayHi();
}

// let aa = new Animall() // 无法创建抽象类的实例

class dog extends Animall {
    public eat() {
        console.log('汪汪')
    }
    // 不实现sayHi方法，报错
    public sayHi () {

    }
}
let passcode = "secret passcode";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    alert(employee.fullName);
}