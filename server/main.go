package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	fmt.Println(Projects)

	r := mux.NewRouter()

	r.PathPrefix("/static/").Handler(http.StripPrefix(
		"/static/",
		http.FileServer(http.Dir("./static")),
	))
	r.HandleFunc("/", RootHandler).Methods("GET")
	r.HandleFunc("/{project}/", ProjectHandler)

	http.Handle("/", r)

	// Start the server
	fmt.Printf("Starting server on port %s\n", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", port), nil))
}
