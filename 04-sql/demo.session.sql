-- ----- ----- CREAR TABLAS
-- CREATE TABLE ciudades
-- (
-- 	id SERIAL PRIMARY KEY,
-- 	nombre VARCHAR(255) UNIQUE
-- );

-- CREATE TABLE personas
-- (
--   id SERIAL PRIMARY KEY,
--   apellido VARCHAR(255) NOT NULL,
--   nombre VARCHAR(255) UNIQUE,
--   rating INTEGER,
--   CONSTRAINT check_rating CHECK (rating >= 0 AND rating <= 10)
-- );

-- ----- ----- INSERTAR REGISTROS
-- INSERT INTO ciudades (id, nombre) VALUES (10, 'Springfield');

-- INSERT INTO personas (apellido, nombre, rating)
-- VALUES ('Simpson', 'Lisa', 8), ('Simpson', 'Bart', 7);

-- ----- ----- CLÁUSULAS
--SELECT * FROM personas WHERE rating = 8;

--SELECT * FROM personas WHERE rating > 7 ORDER BY nombre DESC;

-- SELECT apellido,
-- COUNT(*) as cantidad_personas
-- FROM personas
-- GROUP BY apellido;

-- UPDATE personas SET nombre = 'Marge' WHERE nombre = 'Bubbie';

-- ----- ----- RELACIÓN ONE TO MANY
-- ALTER TABLE personas
-- ADD COLUMN ciudad_id INTEGER,
-- ADD CONSTRAINT fk_ciudad
-- FOREIGN KEY (ciudad_id)
-- REFERENCES ciudades(id);

-- UPDATE personas
-- SET ciudad_id = 10
-- WHERE NOT (nombre = 'Homero');

-- ----- ----- RELACIÓN MANY TO MANY
-- ----- ----- Tabla "episodios"
-- CREATE TABLE episodios (
-- 	id SERIAL PRIMARY KEY,
-- 	titulo VARCHAR(255) NOT NULL,
-- 	temporada INTEGER NOT NULL
-- );

-- ----- ----- Tabla intermedia "personas_episodios"
-- CREATE TABLE personas_episodios (
-- 	persona_id INTEGER,
-- 	episodio_id INTEGER,
-- 	PRIMARY KEY (persona_id, episodio_id),
-- 	FOREIGN KEY (persona_id) REFERENCES personas(id),
-- 	FOREIGN KEY (episodio_id) REFERENCES episodios(id)
-- );

-- ----- ----- JOINS
-- ----- ----- INNER JOIN                                            
-- SELECT *
-- FROM personas
-- INNER JOIN ciudades
-- ON personas.ciudad_id = ciudades.id;

-- ----- ----- OUTHRE LEFT JOIN
-- SELECT *
-- FROM personas
-- LEFT JOIN ciudades
-- ON personas.ciudad_id = ciudades.id
-- WHERE ciudades.id IS NULL;





















