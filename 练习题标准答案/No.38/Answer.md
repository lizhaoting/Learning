> 1
```css
    function A() {
        this.name = 'a';
        this.color = ['green', 'yellow'];
    }
    function B() {

    }
    B.prototype = new A();
    var b1 = new B();
    var b2 = new B();

    b1.name = 'change';
    b1.color.push('black');

    console.log(b1.name);
    /* change */

    console.log(b2.name);
    /* a */

    console.log(b1.color);
    /* ["green", "yellow", "black"] */

    console.log(b2.color);
    /* ["green", "yellow", "black"] */
```

> 2
```css
    function Animal() {
        this.name = "Animal";
        this.showName = function() {
            console.log(this.name);
        };
    }
    
    function Cat() {
    
        this.name = "Cat";
        this._super = Cat.prototype;
    
        this.showName1 = function() {
            console.log(this.name);
        };
    
        this.showName2 = function() {
            console.log(this.name);
        };
    
        this.showName3 = function() {
            console.log(this._super.name + "=>" + this.name);
        };
    }
    Cat.prototype = new Animal();
    var cat = new Cat();
    console.log(cat instanceof Animal);
    /* true */
    cat.showName1();
    /* Cat */
    cat.showName2.call(Cat.prototype);
    /* Animal */
    cat.showName3();
    /* Animal => Cat */
```