package container

import (
	"database/sql"
	"os"

	"cristianalbu.com/api/config"
	"cristianalbu.com/api/db"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

type Container struct {
	Db     *sql.DB
	Config *config.Config
	Router *chi.Mux
}

func New() *Container {
	config := config.New()
	conn := db.Connect(config)
	defer conn.Close()

	db.RunMigrations(conn, "migrations")

	if os.Getenv("SEED_DB") == "true" {
		db.RunSeed(conn, "seeds/seed.sql")
	}

	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)

	return &Container{
		Config: config,
		Db:     conn,
		Router: r,
	}
}
