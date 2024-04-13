

/*     Задача 2: Напишіть програму для обчислення середнього балу студента. 
       Програма має мати можливість вводити інформацію про студента, таку як його ім'я, прізвище та оцінки з різних предметів. 
       Для обчислення середнього балу необхідно використовувати прототипне наслідування.
*/

class Students{
    constructor({firstName,lastName,evaluation}={}){
      this.firstName=firstName;
      this.lastName=lastName;
      this.evaluation=evaluation;  
      this.stud = [];   
       
    }
    addStudent(stud){       
      this.stud.push(stud);  
    }
    gpa(){
       let show = this.stud.reduce(
          (accumulator, currentValue)=> 
            accumulator += (currentValue.evaluation/3),0
       );
       return `середній бал сеудента ${this.firstName} ${this.lastName} - ${show} `;   
    }     
  };

const students = new Students( {
    firstName: "Jonh",
    lastName:"Doe",  
    evaluation: 0       
 }); 
  
students.addStudent(
 {
   firstName: "Jonh",
   lastName:"Doe",  
   evaluation: 11     
});
students.addStudent(
 {
    firstName: "Jonh",
    lastName:"Doe",  
    evaluation: 12   
});
students.addStudent(
 {
    firstName: "Jonh",
    lastName:"Doe",  
    evaluation: 13     
});

console.log(students.gpa());
