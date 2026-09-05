package main

import (
	"log"
	"net/http"

	"cristianalbu.com/api/container"
	"cristianalbu.com/api/handlers"
)

func main() {
	c := container.New()

	handlers.RegisterHandlers(c)
	log.Println("listening on :8080")
	http.ListenAndServe(":8080", c.Router)

}
