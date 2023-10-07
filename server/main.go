package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

var Projects []Project = getProjects()

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	mux := http.NewServeMux()
	server := http.Server{
		Addr:    fmt.Sprintf(":%s", port),
		Handler: mux,
	}
	mux.HandleFunc("/", handleFunction)

	// Start the server
	fmt.Printf("Starting server on port %s\n", port)
	log.Fatal(
		server.ListenAndServe(),
	)
}
