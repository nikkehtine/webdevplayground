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

	http.HandleFunc("/", handleFunction)

	// Start the server
	fmt.Printf("Starting server on port %s\n", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", port), nil))
}
