##  （六十七）TypeScript基础语法

> **`1：基本类型`**
- `在线TypeScript转换`

  [http://www.typescriptlang.org/play/](http://www.typescriptlang.org/play/)
- `布尔值`
  ```typescript
  let isFinished: boolean = false;
  ```

- `数字`
  ```typescript
  let a: number = 6;
  let b: number = 0xf00d;
  let c: number = 0b1010;
  let d: number = 0o744;
  ```

- `字符串`
  ```typescript
  let name: string = `Eric`;

  let a: string = `My name is ${ name }`;

  let b: string = 'My name is' + name;
  ```

- `数组`
  ```typescript
  let array: number[] = [1, 2, 3];
  let array: Array<number> = [1, 2, 3];
  ```

- `元组 Tuple - 已知元素数量和类型的数组，各元素的类型不必相同`
  ```typescript
  let tuple: [string, number];

  tuple = ['hello', 0];
  ```

- `枚举 - JavaScript标准数据类型补充`
  ```typescript
  enum Color { Red, Green, Blue };
  /* 0 1 2 */
  let green: Color = Color.Green;

  enum Color { Red = 1, Green, Blue };
  /* 1 2 3 */
  let green: Color = Color.Green;

  enum Color { Red = 1, Green = 2, Blue = 4 };
  /* 1 2 4 */
  let green: Color = Color.Green;

  enum Color { Red = 1, Green, Blue }
  let name: string = Color[2];
  ```

- `Any - 编译时选择地包含或移除类型、方法检查`
  ```typescript
  let something: any = 4;
  something = "maybe a string instead";
  something = false;
  something.toFixed(2);

  let list: any[] = [1, true, "eric"];
  ```

- `Void - 表示没有任何类型`
  ```typescript
  function returnNothing(): void {
      console.log("returnNothing");
  }
  ```

- `Null、Undefined`
  ```typescript
  let Undefined: undefined = undefined;
  let Null: null = null;
  ```

- `Object - 非原始类型(除number，string，boolean，symbol，null或undefined之外的类型)`

  ```typescript
  declare function create(o: object | null): void;

  create({ prop: 1 });
  create(null);
  ```

- `类型断言`
  ```typescript
  let string: any = "this is a string";
  let stringLength: number = (<string>someValue).length;

  let string: any = "this is a string";
  let stringLength: number = (someValue as string).length;
  ```

> **`2：变量声明`**
  -  `let、const - 与ES6行为保持一致`
> **`3：函数`**
  - `函数类型`
    - `参数类型`
    - `返回值类型(可自动识别)`
    ```typescript
    function add(x: number, y: number): number {
        return x + y;
    }

    let myAdd = function(x: number, y: number): number {
      return x + y;
    };
    ```
    - `完整类型`
    ```typescript
    let myAdd: (x: number, y: number) => number = function(x: number, y: number): number {
      return x + y;
    };
    ```
  - `可选参数、默认参数、Rest参数`
    ```typescript
    function getName(firstName: string, lastName?: string) {
      if (lastName)
          return firstName + " " + lastName;
      else
          return firstName;
    }

    let result1 = getName("Eric");

    let result2 = getName("Eric", "Lee", "Sr.");
    // Expected 1-2 arguments, but got 3

    let result3 = getName("Eric", "Lee");
    ```
    ```typescript
    function getName(firstName = "Will", lastName: string) {
        return firstName + " " + lastName;
    }
    ```
    ```typescript
    function getName(firstName: string, ...restOfName: string[]) {
      return firstName + " " + restOfName.join(" ");
    }
    ```
  - `This`
    ```typescript
    let deck: Deck = {
      suits: ["hearts", "spades", "clubs", "diamonds"],
      cards: Array(52),
      createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
      }
    }
    ```
  - `动态返回值`
    ```typescript
    function pickCard(x: {suit: string; card: number; }[]): number;
    function pickCard(x: number): {suit: string; card: number; };
    function pickCard(x): any {
        if (typeof x == "object") {
            let pickedCard = Math.floor(Math.random() * x.length);
            return pickedCard;
        }
        else if (typeof x == "number") {
            let pickedSuit = Math.floor(x / 13);
            return { suit: suits[pickedSuit], card: x % 13 };
        }
    }
    ```
> **`4：接口`**
  - `对值所具有的结构进行类型检查`

  -  `检查变量组合以确保它们使用一致、不会转换为JavaScript`

  - `基本用法`
    ```typescript
    function consoleLabel(obj: { label: string }) {
      console.log(obj.label);
    }

    let object = { size: 10, label: "hello word" };

    consoleLabel(object);
    /* hello word */


    interface LabelValue {
      label: string;
    }

    function consoleLabel(obj: LabelValue) {
      console.log(obj.label);
    }

    let object = { size: 10, label: "hello word" };

    consoleLabel(object);
    ```
  - `可选类型 - option bags`
    ```typescript
    interface SquareConfig {
      color?: string;
      width?: number;
    }

    function createSquare(config: SquareConfig): { color: string; area: number } {
      let newSquare = { color: "white", area: 100 };

      if (config.color) newSquare.color = config.color;

      if (config.width) newSquare.area = config.width * config.width;

      return newSquare;
    }

    let mySquare = createSquare({ color: "black" });
    ```
  - `只读属性`
    ```typescript
    interface Point {
      readonly x: number;
      readonly y: number;
    }
    let point: Point = { x: 10, y: 20 };
    ```
  - `索引`
    ```typescript
    interface StringArray {
      [index: number]: string;
    }

    let myArray: StringArray;
    myArray = ["Bob", "Fred"];

    let myStr: string = myArray[0];
    ```
> **`5：课后练习`**
- `下列函数的执行结果是`
    ```typescript
    function GetName(firstName = "Will", lastName: string) {
        return firstName + " " + lastName;
    }

    let result1 = GetName("Bob");
    let result2 = GetName("Bob", "Adams", "Sr.");
    let result3 = GetName("Bob", "Adams");
    let result4 = GetName(undefined, "Adams");
    ```
- `为下列函数添加interface`
    ```typescript
    let deck: Deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function(this: Deck) {
            return () => {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);

                return {suit: this.suits[pickedSuit], card: pickedCard % 13};
            }
        }
    }
    ```
> **`6：总结`**
```css
本节课介绍了TypeScript的基本数据类型于函数，并介绍了为数据于函数定义接口
```