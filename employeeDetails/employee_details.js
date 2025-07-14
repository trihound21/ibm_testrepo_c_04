const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
      // { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript' },
      // { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python' },
      // { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java' },
      //... More employee records can be added here
    ];

 // Function to display all employees
function displayEmployees(){
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
     }
 }

// Practice task
// In this practice task, you need to perform a functionality in which information
// can be fetched on the basis of employee's specialization as well.

// For this, include one more key value pair for employees array of object
// inside each object as shown in given screenshot.
// [id, name, age, department, salary, specialization]
// Ex. { id: 1, name: 'John Doe', age: 30, department: 'IT',
// 	salary: 50000, specialization: 'JavaScript' }

// Then, create a button to search for an employee
// based on the specialization as shown in given screenshot.
// Buttons: Display Employees, Calculate Total Salaries, Display HR Employees,
// Find Employee by ID 2, Find by Specialization
// Ex. Find by Specialization JavaScript

// Next, create a JavaScript function to display the details of employees
// who have specialization in JavaScript.
// You can refer to the findEmployeeById function
// in the JavaScript code of this lab for guidance.

// The output will be as shown in given screenshot.
// Ex. '1: John Doe - IT - JavaScript'

