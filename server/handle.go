package main

import (
	"fmt"
	"net/http"
	"text/template"
)

func handleFunction(w http.ResponseWriter, r *http.Request) {

	if r.URL.Path == "/" {
		index := template.Must(template.ParseFiles("./html/index.html"))
		err := index.Execute(w, Projects)
		if err != nil {
			fmt.Println(err)
		}
		return
	}

	name := r.URL.Path[1:] // remove the leading "/"
	for _, proj := range Projects {
		if proj.Name == name {
			http.ServeFile(w, r, proj.Entry)
			return
		}
	}

	w.WriteHeader(http.StatusNotFound)
	http.ServeFile(w, r, "html/404.html")
}
