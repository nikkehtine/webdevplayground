package main

import (
	"encoding/json"
	"fmt"
	"log"
	"os"
	"path"
)

type Project struct {
	Name        string
	Root        string
	Entry       string
	FancyName   string `json:"name"`
	Version     string `json:"version"`
	Description string `json:"description"`
}

const projectsDir string = "./projects"

func getProjects() []Project {
	contents, err := os.ReadDir(projectsDir)
	if err != nil {
		log.Fatal(err)
	}

	var projects []Project
	for _, position := range contents {
		if !position.IsDir() {
			continue
		}

		packageJson := path.Join(projectsDir, position.Name(), "package.json")
		if _, err := os.Stat(packageJson); err != nil {
			continue
		}

		projects = append(projects, *projectConstructor(position.Name(), packageJson))

	}
	return projects
}

func projectConstructor(project string, packageJson string) *Project {
	p := new(Project)
	data, _ := os.ReadFile(packageJson)
	if err := json.Unmarshal(data, &p); err != nil {
		fmt.Println("Error:", err)
	}
	p.Name = project
	p.Root = path.Join(projectsDir, project)
	p.Entry = path.Join(p.Root, "index.html")

	return p
}
