DROP TABLE IF EXISTS show;
DROP TABLE IF EXISTS play;


CREATE TABLE show(
    show_id  INT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(100) NOT NULL, 
    duration INT NOT NULL,
    genre VARCHAR(20) NOT NULL,

    PRIMARY KEY (show_id)
);

INSERT INTO show (name, duration, genre) 
VALUES ('Matilda The Musical', 155, 'Musical' ), ('Wicked',165,'Musical')

CREATE TABLE theatre(
    theatre_id  INT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(100) NOT NULL, 
    location NOT NULL,
    genre VARCHAR(20) NOT NULL,

    PRIMARY KEY (theatre_id)
);

INSERT INTO show (name, duration, genre) 
VALUES ('Matilda The Musical', 155, 'Musical' ), ('Wicked',165,'Musical')

