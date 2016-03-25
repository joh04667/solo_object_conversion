function Character(name, empNum, salary, rating) {
  this.name = name;
  this.empNum = empNum;
  this.salary = salary;
  this.rating = rating;
  this.sti = function() {
     var bonus = [0,0,0,0.04,0.06,0.1][this.rating];
     if(this.empNum.length === 4){
       bonus += 0.05;
     }
     if(this.salary > 65000 && bonus > 0){
       bonus -= 0.01;
     }
     if(bonus > 0.13){
       bonus = 0.13;
     }
     return bonus;
 };
}

var atticus = new Character("Atticus", "2405", "47000", 3);
var jem = new Character("Jem", "62347", "63500", 4);
var boo = new Character("Boo", "11435", "54000", 3);
var scout = new Character("Scout", "6243", "74750", 5);

var employees = [atticus, jem, boo, scout];

employees.forEach(s => console.log(totalComp(s)));

function totalComp(emp){
  return [emp.name, (emp.sti() * 100).toString() + '%' , moneyReadable(parseInt(emp.salary) + (emp.salary * emp.sti())), Math.round(emp.salary * emp.sti())];
}

function moneyReadable(num) {
   return "$" + num.toLocaleString({style: 'currency', currency: 'USA'});
}
//TODO: Display salary in proper currency format with two cents after the decimal.
