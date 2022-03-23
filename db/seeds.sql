
INSERT INTO departments (name) VALUES
    ('Sales'),
    ('Engineering'),
    ('Marketing'),
    ('Cheif Officers');
    

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
    ('Vice President', 160000, 4),
    ('prince engine', 1234543, 2);
    


    -- Next positions can go directly underneath just replace semicolon witha  comma

-- INSERT INTO
--   employees (first_name, last_name, role_id, manager_id)
-- VALUES
--   ('Jared', 'Pennington', 7, NULL),
--   ('Aaron', 'Cent', 8, 1),
--   ('Sam', 'Samuels', 2, NULL),
--   ('Carl', 'Carlson', 1, 3);




INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
    ('Jared', 'James', 1, NULL),
    ('Lester', 'Less', 2, 1),
    ('Carl', 'Carlson', 7, NULL),
    ('Sam', 'Samuels', 8, 3),
    ('Wes', 'Weston', 3, NULL),
    ('Kelly', 'Kennedy', 4, 5),
    ('Allen', 'Albertsons', 4, 2),
    ('Tim', 'Timmy', 3, NULL),
    ('james', 'jimothy', 11, 7);
