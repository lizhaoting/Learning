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

- `Any - 编译时选择地包含或移除类型、方法检查(Object会检查方法)`
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

> **`3：接口`**
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

> **`4：总结`**
```css
本节课介绍了TypeScript的产生背景与优势，结合npm与webpack介绍了TypeScript编译
```