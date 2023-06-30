console.log("i love Nairobiiii!");

///Question 1.
function Callback(callback) {
    setTimeout(callback, 2000);
  }
  function Example() {
    console.log("i love Nairobiiii!");
  }
  Callback(Example);
  

  ///Question 3.

  function LeapYear(start, end) {
    const leapYear = [];
  
    for (let year = start; year <= end; year++) {
      if ((year % 4 === 0 ) || year % 400 === 0) {
        leapYear.push(year);
      }
    }
  
    return leapYear;
  }
  const start = 2000;
  const end = 2030;
  const Range = LeapYear(start, end);
  
  console.log("This are the leap years between", start, "and", end, ":");
  console.log(Range);
  

  //Question 4
  function SumOfNumbers(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        sum += arr[i];
      }
    }
  
    return sum;
  }
  function string(arr) {
    const str = arr.join(',');
    console.log("Original array: " + str);
  }

  const x = [2, "11", 3, "a2", false, 5, 7, 1];
  const sums = SumOfNumbers(x);
  string(x)
 const y = [2, 3, 0, 5, 7, 8, true, false];

 const sum = SumOfNumbers(y);
  console.log("Sum all numbers of the said array:", sum);
  
  string(y)
  console.log("Sum all numbers of the said array", sums);


  
///Question 2.

class Employee {
    constructor(Name, Salary) {
      this.Name = Name;
      this.Salary = Salary;
    }
  
    AnnualSalary() {
      return this.Salary * 12; 
    }
  }
  
  class Manager extends Employee {
    constructor(Name, Salary, Department) {
      super(Name, Salary);
      this.Department = Department;
    }
  
    AnnualSalary() {
      const baseSalary = this.Salary * 12;
      const bonus = baseSalary * 0.2;
      return baseSalary + bonus;
    }
  }
  
  const manager1 = new Manager('John Doe', 5000, 'Sales');
  const manager2 = new Manager('Jane Smith', 8000, 'Marketing');
  
  console.log("Manager 1:");
  console.log("Name:", manager1.Name);
  console.log("Salary:", manager1.Salary);
  console.log("Department:", manager1.Department);
  console.log("Annual Salary:", manager1.AnnualSalary());
  
  console.log("\nManager 2:");
  console.log("Name:", manager2.Name);
  console.log("Salary:", manager2.Salary);
  console.log("Department:", manager2.Department);
  console.log("Annual Salary:", manager2.AnnualSalary());
  