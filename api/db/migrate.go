package db

import (
	"database/sql"
	"log"
	"os"
	"path/filepath"
	"sort"
)

func RunMigrations(conn *sql.DB, dir string) {
	_, err := conn.Exec(`
		CREATE TABLE IF NOT EXISTS schema_migrations (
			version TEXT PRIMARY KEY,
			applied_at TIMESTAMP NOT NULL DEFAULT now()
		)
	`)
	if err != nil {
		log.Fatalf("failed to create schema_migrations table: %v", err)
	}

	files, err := filepath.Glob(filepath.Join(dir, "*.sql"))
	if err != nil {
		log.Fatalf("failed to read migrations dir: %v", err)
	}
	sort.Strings(files)

	for _, file := range files {
		version := filepath.Base(file)

		var exists bool
		conn.QueryRow(
			`SELECT EXISTS(SELECT 1 FROM schema_migrations WHERE version = $1)`,
			version,
		).Scan(&exists)

		if exists {
			continue
		}

		sqlBytes, err := os.ReadFile(file)
		if err != nil {
			log.Fatalf("failed to read migration %s: %v", version, err)
		}

		if _, err := conn.Exec(string(sqlBytes)); err != nil {
			log.Fatalf("failed to apply migration %s: %v", version, err)
		}

		if _, err := conn.Exec(
			`INSERT INTO schema_migrations (version) VALUES ($1)`,
			version,
		); err != nil {
			log.Fatalf("failed to record migration %s: %v", version, err)
		}

		log.Printf("applied migration %s", version)
	}
}
