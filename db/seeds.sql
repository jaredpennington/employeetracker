
INSERT INTO departments (name) VALUES
    ('Sales'),
    ('Engineering'),
    ('Marketing'),
    ('Cheif Offiers');

INSERT INTO roles (title, salary, department_id) VALUES
    ('Sales Manager', 110000, 1),
    ('Sales Assistant', 95000, 1),
    ('Senior Engineer', 120000, 2),
    ('Junior Enginneer', 95000, 2),
    ('Marketing Director', 110000, 3),
    ('Marketing Producer', 95000, 3),
    ('CEO', 250000, 4),
    ('CFO', 240000, 4),
    ('President', 180000, 4),
    ('Vice President', 160000, 4);


    -- Next positions can go directly underneath just replace semicolon witha  comma

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
    ('Jared', 'Pennington', 1, 2),
    ('Aaron', 'Cent', 1, 3),
    ('Sam', 'Samuels', 8, 4),
    ('Carl', 'Carlson', 7, 4);
