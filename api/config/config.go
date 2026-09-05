package config

import (
	"fmt"
	"os"
)

const DB_USER = "DB_USER"
const DB_PASSWORD = "DB_PASSWORD"
const DB_HOST = "DB_HOST"
const DB_PORT = "DB_PORT"
const DB_NAME = "DB_NAME"
const ENVIRONMENT = "ENVIRONMENT"

type Config struct {
	DbUser     string
	DbPassword string
	DbHost     string
	DbPort     string
	DbName     string
	DbUrl      string
	Env        string
}

func New() *Config {
	dbUser := os.Getenv(DB_USER)
	dbPassword := os.Getenv(DB_PASSWORD)
	dbHost := os.Getenv(DB_HOST)
	dbPort := os.Getenv(DB_PORT)
	dbName := os.Getenv(DB_NAME)
	environment := os.Getenv(ENVIRONMENT)

	var options string

	if environment == "PROD" {
		options = ""
	} else {
		options = "?sslmode=disable"
	}

	dbUrl := fmt.Sprintf(
		"postgres://%s:%s@%s:%s/%s%s",
		dbUser,
		dbPassword,
		dbHost,
		dbPort,
		dbName,
		options,
	)

	return &Config{
		DbUser:     dbUser,
		DbPassword: dbPassword,
		DbHost:     dbHost,
		DbPort:     dbPort,
		DbName:     dbName,
		DbUrl:      dbUrl,
		Env:        environment,
	}
}
