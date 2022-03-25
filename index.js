const inquirer = require("inquirer");
const connection = require("./db/connection");
const CTable = require("console.table");

async function startQuestion() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add A Department",
          "Add A Role",
          "Add An Employee",

        ],
      },
    ])
    .then((res) => {
      switch (res.choice) {
        case "View All Departments":
          viewDepartments();
          break;
        case "View All Roles":
          viewRoles();
          break;
        case "View All Employees":
          viewEmployees();
          break;
        case "Add A Department":
          addDepartment();
          break;
        // Add other cases below
        default:
          process.exit();
      }
    });
}

function viewDepartments() {
  connection.query("SELECT * FROM departments;", function (err, res) {
    console.table(res);
    startQuestion();
  });
}

function viewRoles() {
  connection.query("SELECT * FROM roles;", function (err, res) {
    console.table(res);
    startQuestion();
  });
}

function viewEmployees() {
  connection.query("SELECT * FROM employees;", function (err, res) {
    console.table(res);
    startQuestion();
  });
}

async function addDepartment() {
  var department = "";
  await inquirer
    .prompt([
      {
        type: "imput",
        message: "What department do you want to add?",
        name: "text",
      },
    ])
    .then((res) => {
        console.log(res.text, department)
      department = res.text;
      console.log(department)
    });
        console.log(department)
  connection.query(
    `INSERT INTO departments (name) VALUES ('${department}');`,
    function (err, res) {
      console.table(res);
      startQuestion();
    }
  );
}

//write async role function. 
//nest (function inside function) inquirer.prompt will be my function 
//call the query inside the inquirer function 
//think of questions in the outer function 
//should be like inquirer then query then inquirer so three nested functions
//query list of roles as choices for inquirer question

// async function addRole() {
//     var role = "";
//     await inquirer.prompt([
//         {
    
//         type: "imput",
//         message: "What role do you want to add?",
//         name: "text",
    
//         }
//     ])
//     .then((res) => {
//         connection.query(
//             `SELECT * FROM DEPARTMENTS;`, function (err, res) {
//                 console.log(res)
//             }
//         ) 
//     })
// }


//COULDNT FIGURE THIS OUT. OH WELL rather get a low grade than no grade at all


// Write Out all query functions Underneath here



startQuestion();
