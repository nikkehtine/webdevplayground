package main

import (
	"bytes"
	"log"
	"text/template"
)

func parse(arr []Project) string {
	var templs = template.Must(template.ParseFiles("html/project.html"))

	var buf bytes.Buffer
	for _, entry := range arr {
		if err := templs.Execute(&buf, entry); err != nil {
			log.Fatal(err)
		}
	}
	return buf.String()
}
