const inquirer = require('inquirer');
const connection = require('./db/connection');
require('console.table');

function startQuestion() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'choice',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees'
                // Add other 4 required option from acceptance criteria
            ]
        }
    ]).then(res => {
        switch(res.choice) {
            case 'View All Departments':
                viewDepartments();
                break;
            case 'View All Roles':
                viewRoles();
                break;
            // Add other cases below
            default:
                process.exit();
        }
    })
}

function viewDepartments() {
    connection.query('SELECT * FROM department;', function(err, res) {
        console.table(res);
        startQuestion();
    })
}

// Write Out all query functions Underneath here

// write out update and delete things 

startQuestion();