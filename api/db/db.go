package db

import (
	"database/sql"
	"log"
	"time"

	"cristianalbu.com/api/config"
	_ "github.com/jackc/pgx/v5/stdlib"
)

func Connect(config *config.Config) *sql.DB {
	var db *sql.DB
	var err error

	for i := 0; i < 10; i++ {
		db, err = sql.Open("pgx", config.DbUrl)
		if err == nil {
			err = db.Ping()
		}
		if err == nil {
			return db
		}
		log.Println("waiting for postgres...")
		time.Sleep(2 * time.Second)
	}

	log.Fatalf("could not connect to db: %v", err)
	return nil
}
