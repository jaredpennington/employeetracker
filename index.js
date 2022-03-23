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

          // Add other 4 required option from acceptance criteria
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

// Write Out all query functions Underneath here

// write out update and delete things

startQuestion();
