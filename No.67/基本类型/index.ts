/**
 * 布尔
 */
let isFinished: boolean = false;


/**
 * 数字
 */
let a: number = 6;
let b: number = 0xf00d;
let c: number = 0b1010;
let d: number = 0o744;

/**
 * 字符串
 */
let teacher: string = `Eric`;

let aa: string = `My name is ${ teacher }`;

let bb: string = 'My name is' + teacher;

/**
 * 数组
 */
let array1: number[] = [1, 2, 3];
let array2: Array<number> = [1, 2, 3];


/**
 * 元组
 * 已知元素数量和类型的数组，各元素的类型不必相同
 */
let tuple: [string, number];

tuple = ['hello', 1];

/**
 * 枚举
 */
enum Color { Red, Green, Blue };
/* 0 1 2 */
let green: Color = Color.Green;

// enum Color { Red = 1, Green, Blue };
/* 1 2 3 */
// let green: Color = Color.Green;

// enum Color { Red = 1, Green = 2, Blue = 4 };
/* 1 2 4 */
// let green: Color = Color.Green;

// enum Color { Red = 1, Green, Blue }
// let color: string = Color[2];


/**
 * Any
 */
let something: any = 4;
something = "maybe a string instead";
something = false;
something.toFixed(2);

let list: any[] = [1, true, "eric"];


/**
 * Void
 */
function returnNothing(): void {
    console.log("returnNothing");
}

/**
 * Null、Undefined
 */
let Undefined: undefined = undefined;
let Null: null = null;


/**
 * 断言
 * <>
 * as
 */
let string: any = "this is a string";
let stringLength: number = (<string>string).length;

// let string: any = "this is a string";
// let stringLength: number = (someValue as string).length;