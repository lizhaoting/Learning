##  （六十七）TypeScript基础语法（上）

> **`1：基本用法`**
  ```typescript
  class SayGreeting {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
  }

  let sayGreeting = new SayGreeting("world");
  ```
> **`2：继承`**
  ```typescript
  class Person {
    walk(distancePerMeters: number = 0) {
      console.log(`Person moved ${distancePerMeters}m.`);
    }
  }

  class Teacher extends Person {
    speak() {
        console.log('Hello!');
    }
  }

  const teacher = new Teacher();
  dog.speak();
  dog.walk(10);
  dog.speak();
  ```
  ```typescript
  class Animal {
    name: string;
    constructor(theName: string) {
      this.name = theName;
    }
    move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
  }

  class Snake extends Animal {
      constructor(name: string) {
        super(name);
      }
      move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
      }
  }
  ```
> **`3：变量修饰符`**
- `public`
  ```typescript
  class Animal {
    public name: string;
    public constructor(theName: string) {
      this.name = theName;
    }
  }

  new Animal("Cat").name;
  // Cat
  ```
- `private`
  ```typescript
  class Animal {
    private name: string;
    constructor(theName: string) {
      this.name = theName;
    }
  }

  new Animal("Cat").name;
  // Property 'name' is private and only accessible within class 'Animal'.
  ```
- `protected`
  ```typescript
  class Person {
    protected name: string;
    constructor(name: string) {
      this.name = name;
    }
  }

  class Employee extends Person {
      private department: string;

      constructor(name: string, department: string) {
          super(name)
          this.department = department;
      }

      public getElevatorPitch() {
          return `Hello, my name is ${this.name} and I work in ${this.department}.`;
      }
  }

  let howard = new Employee("Howard", "Sales");
  console.log(howard.getElevatorPitch());
  console.log(howard.name);
  // Property 'name' is protected and only accessible within class 'Person' and its subclasses.
  ```
- `readonly`
  ```typescript
  class Person {
    readonly name: string;
    constructor(name: string) { this.name = name; }
  }
  var eric = new Person('Eric');
  eric.name = 'Lee';
  // Cannot assign to 'name' because it is a read-only property.
  ```
> **`4：get & set`**
  ```typescript
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
          console.log("Error: password error!");
      }
    }
  }
  ```
> **`5：静态属性`**
  ```typescript
  class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: { x: number; y: number; }) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) {
    }
  }
  ```
> **`6：抽象类`**
- `基本概念`
  -  `把多个事物的共性的内容抽取出来, 做为其它派生类的基类`
  - `抽象类可以包含成员的实现细节`
  - `抽象类中的抽象方法不包含具体实现并且必须在派生类中实现`

- `示例`
  ```typescript
  abstract class Department {
    constructor(public name: string) {
    }
    printName(): void {
      console.log('Department name: ' + this.name);
    }
    abstract printMeeting(): void;
    // 必须在派生类中实现
  }

  class AccountingDepartment extends Department {
      constructor() {
          super('Accounting and Auditing');
      }
      printMeeting(): void {
          console.log('The Accounting Department meets each Monday at 10am.');
      }
      generateReports(): void {
          console.log('Generating accounting reports...');
      }
  }
  ```

> **`7：总结`**
```css
本节课从TypeScript中类的基本用法入手，介绍了类的继承、修饰符、静态属性及抽象类的概念，重点在于私有属性、方法的理解
```