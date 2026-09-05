INSERT INTO users (email, password_hash)
VALUES ('dev@example.com', 'placeholder') ON CONFLICT DO NOTHING;
