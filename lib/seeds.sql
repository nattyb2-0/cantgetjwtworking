BEGIN;

INSERT INTO users (user_id, username, password) VALUES

(1, 'irwin', 'irwin'),
(2, 'trevor', 'trevor'),
(3, 'matt', 'matt');

INSERT INTO secretStuff (secret_id, mySecret, myOtherSecret) VALUES

(1, 'one time i stole', 'another time i lied'),
(2, 'i have a phobia of squirrels', 'jk'),
(3, 'third secret', 'need coffee to be witty');

COMMIT;
