package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	// Serve static files
	fileServer := http.FileServer(http.Dir("./static"))
	http.Handle("/", fileServer)

	// projects := getProjects()
	// renderedList := parse(projects)

	// Start the server
	fmt.Printf("Starting server on port %s\n", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", port), nil))
}
