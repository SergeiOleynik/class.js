// Задача 1: Створення простого калькулятора з можливістю обчислення простих математичних операцій, 
// таких як додавання, віднімання, множення та ділення, за допомогою прототипів та прототипного наслідування.

class Calculator{
    constructor(rezult){
        this.rezult=rezult;
    }
    showResult(){
       console.log(this.rezult);
    }
}

class Add extends Calculator{
    constructor(rezult){
        super(rezult);
    }
    add(num1,num2){
        this.rezult = num1+num2;
        super.showResult();
    }   
}

class Subtraction extends Calculator{
    constructor(rezult){
        super(rezult);
    }
    sub(num1,num2){
        this.rezult = num1-num2;
        super.showResult();
    } 
}

class Division extends Calculator{
    constructor(rezult){
        super(rezult);
    }
    div(num1,num2){
        if(num2 !==0) this.rezult = num1/num2;
        else this.rezult = `cannot be divided by null !!!!`;
        super.showResult();
    } 
}

class Multiplication extends Calculator{
    constructor(rezult){
        super(rezult);
    }
    mull(num1,num2){
        this.rezult = num1*num2;
        super.showResult();
    }
}

const addition = new Add();
addition.add(2,3);

const subtraction = new Subtraction();
subtraction.sub(9,5);

const division = new Division();
division.div(10,5);

const multiplication = new Multiplication();
multiplication.mull(2,10);

