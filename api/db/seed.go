package db

import (
	"database/sql"
	"log"
	"os"
)

func RunSeed(conn *sql.DB, path string) {
	sqlBytes, err := os.ReadFile(path)
	if err != nil {
		log.Fatalf("failed to read seed file: %v", err)
	}

	if _, err := conn.Exec(string(sqlBytes)); err != nil {
		log.Fatalf("failed to run seed: %v", err)
	}

	log.Println("seed applied")
}
