
// //Ans question 1 starting

// class Person{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
//     greet(){
//         return`hello, my name is ${this.name} and I am ${this.age} old`;
//     }
// }

// let person1=new Person("shreay",20);
// console.log(person1.greet());








// //Ans question 2 starting

// class Product{
//     constructor(name,price){
//         this.name=name
//         this.price=price
//     }
//     displayInfo(){
//         let Prod=`Product: ${this.name}, price : ${this.price}`;
//         return Prod;
//     }
// }
// let product1=new Product("Laptop","$999.99");
// console.log(product1.displayInfo());






// // Ans question 3 starting

// let studentArr=[]
// class Student{
// constructor(name,grade){
//     this.name=name,
//     this.grade=grade
// }
// getDetails(){
//     let str=`Student Name : ${this.name} , Grade : ${this.grade}`
//     return str
// }
// }

// let student1=new Student("shreaydeepsinh","A")
// let student2=new Student("masoom","B")
// studentArr.push(student1,student2)


// console.log("studentArr",studentArr);


// studentArr.forEach((student,idx)=>{
//     console.log(student.getDetails());
// })






// // Ans question 4 starting

// class Rectangle{
//    constructor(width,height){
//     this.width=width
//     this.height=height
//    }
//    calculateArea(){
//      let areaOfRectangle=this.height*this.width;
//      return areaOfRectangle;
//    }
// }

// let areaRectangle=new Rectangle(20,30);
// console.log("rectangle area is",areaRectangle.calculateArea());






// // Ans question 5 starting

// class Box{
//     constructor(title,author,pages=100){
//         this.title=title
//         this.author=author
//         this.pages=pages
//     }
//     getSummary(){
//         let summary=`title : ${this.title} , Author : ${this.author} , Pages : ${this.pages}`
//         return summary;
//     }
// }

// let boxsummary=new Box("The Great Gatsby","F. Scott Fitzgerald");
// console.log(boxsummary.getSummary())







// // inheritance quastion 
// // quastion 1  Animal inheritance

// class Animal{
//     constructor(species,sound){
//         this.species=species
//         this.sound=sound
//     }

//     makeSound(){
//         console.log(`the sound of ${this.species} is ${this.sound}`);
//     }
// }

// class Mammal extends Animal {
//     constructor(species,sound,hasFur){
//         super(species,sound);
//         this.hasFur=hasFur;
//     }

//     makeSound(){
//         console.log(`the sound of ${this.species} is ${this.sound}`);
//     }
// }

// class Bird extends Animal {
//     constructor(species,sound,canFly){
//         super(species,sound);
//         this.canFly=canFly;
//     }

//     makeSound(){
//         console.log(`the sound of ${this.species} is ${this.sound}`);
//     }
// }

// let mamaal1=new Mammal("lion","roar",true);
// let bird1=new Bird("eagle","screech",true);

// mamaal1.makeSound();
// bird1.makeSound();






// // quastion 2  Vehicle inheritance

// class Vehicle{
//     constructor(type,color){
//         this.type=type
//         this.color=color
//     }
//     start(){
//         console.log("vehicle started")
//     }
// }

// class Car extends Vehicle{
//    constructor(type,color,brand){
//      super(type,color);
//      this.brand=brand;
//    }
//    start(){
//      console.log(`${this.brand} started`)
//    }
// }

// class Motarcycle extends Vehicle{
//     constructor(type,color,model){
//         super(type,color);
//         this.model=model;
//     }
//     start(){
//         console.log(`${this.model} started`)
//       }
// }

// let car1=new Car("toyota","white","hyryder");
// let motarcycle1=new Motarcycle("honda","Black","splendor");

// car1.start();
// motarcycle1.start();










// // quastion 3  Shape inheritance

// class Shape{
//     constructor(name,color){
//         this.name=name;
//         this.color=color;
//     }
//     draw(){
//         console.log("Drawing shape");
//     }
// }

// class Circle extends Shape{
//   constructor(name,color,redius){
//     super(name,color);
//     this.redius=redius;
//   }
//   draw(){
//     console.log(`name :${this.name}, color : ${this.color}, redius : ${this.redius}`);
// }
// }

// class Rectangle extends Shape{
//  constructor(name,color,width,height){
//     super(name,color);
//     this.width=width;
//     this.height=height;
//  }
//  draw(){
//     console.log(`name :${this.name}, color : ${this.color}, width ${this.width}, height ${this.height}`);
// }
// }

// let circle1=new Circle("circle","black",50);
// let rectangle1=new Rectangle("rectangle","white",100,500);

// circle1.draw();
// rectangle1.draw();






// // quastion 4  Employee inheritance

// class Employee {
//     constructor(name, role) {
//         this.name = name;
//         this.role = role;
//     }
//     work() {
//         console.log("working");
//     }
// }

// class Manager extends Employee {
//     constructor(name, role, department) {
//         super(name, role);
//         this.department = department;
//     }
//     work() {
//         console.log(`${this.name} working as a ${this.role} at ${this.department}`);
//     }

// }
// class Developer extends Employee {
//     constructor(name, role, skills) {
//         super(name, role);
//         this.skills = skills;
//     }
//     work() {
//         console.log(`${this.name} coding as a ${this.role} skills with ${this.skills}`);
//     }
// }

// let manager1=new Manager("satya","manager","managing department");
// let developer1=new Developer("dhruval","coder","web development");

// manager1.work();
// developer1.work();






// // quastion 5  Bamk Account inheritance

// class Account{
//     constructor(accountNumber,balance){
//         this.accountNumber=accountNumber;
//         this.balance=balance;
//     }
//     deposit(amount){
//         this.balance+=amount;
//     }
// }

// class SavingsAccount extends Account {
//     constructor(accountNumber, balance = 0, interestRate) {
//         super(accountNumber, balance)
//         this.interestRate = interestRate
//     }
//     deposit(amount) {
//         let interest = this.balance * this.interestRate/100
//         this.balance = this.balance + amount + interest
//         console.log("your total balance with interest is : ", this.balance);
//     }
// }
// let savingsAccount1 = new SavingsAccount(7765487321465, 50000, 10)
// savingsAccount1.deposit(2000);
