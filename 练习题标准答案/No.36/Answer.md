> 1
```css
    function getName() {
        return this.name;
    } 
    function Student(name) {
        this.type = 'student',
        this.class = '侠课岛',
        this.name = name,
    }
    Student.prototype.getName = getName;
    function Teacher(name) {
        this.type = 'teacher',
        this.name = name,
        this.area = '长沙',
    }
    Teacher.prototype.getName = getName;
```

> 2
```css
    function Person() {  
        this.name = 'Eric';    
    }  
    Person.prototype.getName = function() {  
        return this.name;  
    }  
    function Student() {}

    Student.prototype = new Person();
    Student.prototype = {
        getAge: function() {
            return 28;
        }
    }

    const Eric = new Student();

    Eric.name;
    /* undefined */
    Eric.getName();
    /* Eric.getName is not a function */
    Eric.getAge();
    /* 28 */
```

> 3
```css
    function Person() {  
        this.name = 'Eric';    
    }  
    Person.prototype.getName = function() {  
        return this.name;  
    }  
    function Student() {
        this.getName = function() {
            return 'Davy';
        }
    }

    Student.prototype = new Person();

    Student.prototype = {
        getName: function() {
            return 'Micheal';
        }
    };

    const Eric = new Student();

    Eric.name;
    /* undefined */
    Eric.getName();
    /* Davy */
```