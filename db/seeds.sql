USE employeeTracker_db;

INSERT INTO department (name) VALUES
    ('Sales'),
    ('Engineering'),
    ('Marketing'),
    ('Cheif Offiers');

INSERT INTO role (title, salary, department_id) VALUES
    ('Sales Manager', 80000, 1),
    ('Sales Assistant', 60000, 1);
    -- Next positions can go directly underneath just replace semicolon witha  comma

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ('Jared', 'Pennington', 1, NULL),
    ('Aaron', 'Cent', 2, 1);