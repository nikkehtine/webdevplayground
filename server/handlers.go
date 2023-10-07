package main

import (
	"fmt"
	"io"
	"net/http"
	"text/template"
)

var Projects []Project = getProjects()

func RootHandler(w http.ResponseWriter, r *http.Request) {
	index := template.Must(template.ParseFiles("./html/index.html"))
	err := index.Execute(w, Projects)
	if err != nil {
		fmt.Println(err)
	}
}

func ProjectHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	io.WriteString(w, "Hello World")
}
