package handlers

import (
	"encoding/json"
	"net/http"
)

func setContentType(w http.ResponseWriter) {
	w.Header().Set("Content-Type", "application/json")
}

func encodeJson(w http.ResponseWriter, content map[string]string) {
	json.NewEncoder(w).Encode(content)
}
