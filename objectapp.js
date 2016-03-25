// Constructor
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
  this.totalComp = function() {
  	return [this.name, (this.sti() * 100).toString() + '%' , moneyReadable(parseInt(this.salary) + (this.salary * this.sti())), Math.round(this.salary * this.sti())];
 };
}
// Object construction
var atticus = new Character("Atticus", "2405", "47000", 3);
var jem = new Character("Jem", "62347", "63500", 4);
var boo = new Character("Boo", "11435", "54000", 3);
var scout = new Character("Scout", "6243", "74750", 5);
// Object array
var employees = [atticus, jem, boo, scout];
// Call totalComp method on each array item
employees.forEach(s => console.log(s.totalComp()));
// Global function to format salary amount
function moneyReadable(num) {
   return "$" + num.toLocaleString({style: 'currency', currency: 'USA'});
}
//TODO: Display salary in proper currency format with two cents after the decimal.
