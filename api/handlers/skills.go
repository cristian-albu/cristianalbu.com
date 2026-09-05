package handlers

import (
	"fmt"
	"net/http"

	"cristianalbu.com/api/container"
	"github.com/go-chi/chi/v5"
)

type SkillsHandlers struct {
	c *container.Container
}

func RegisterSkillsHandler(c *container.Container) {
	skillsHandler := SkillsHandlers{c: c}

	c.Router.Route("/skills", func(r chi.Router) {
		r.Get("/", skillsHandler.List())
		r.Get("/{ID}", skillsHandler.Get())
		r.Post("/", skillsHandler.Post())
		r.Put("/{ID}", skillsHandler.Put())
		r.Delete("/{ID}", skillsHandler.Delete())
	})
}

func (s SkillsHandlers) List() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		setContentType(w)
		encodeJson(w, map[string]string{"status": "ok"})
	}
}

func (s SkillsHandlers) Get() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		skillID := chi.URLParam(r, "ID")

		fmt.Println(skillID)
		setContentType(w)
		encodeJson(w, map[string]string{"status": "ok"})
	}

}

func (s SkillsHandlers) Post() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		setContentType(w)
		encodeJson(w, map[string]string{"status": "ok"})
	}
}

func (s SkillsHandlers) Put() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		skillID := chi.URLParam(r, "ID")

		fmt.Println(skillID)
		setContentType(w)
		encodeJson(w, map[string]string{"status": "ok"})
	}
}

func (s SkillsHandlers) Delete() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		skillID := chi.URLParam(r, "ID")

		fmt.Println(skillID)
		setContentType(w)
		encodeJson(w, map[string]string{"status": "ok"})
	}
}
