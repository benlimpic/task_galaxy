import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { FormField, Label, Select, Button } from "../styles";
import './ProjectNav.css'

const ProjectNav = ({ projects, setProjects, project, setProject, tasks, setTasks, task, setTask }) => {

    useEffect(() => {
        fetch('/projects')
        .then(r => r.json())
        .then(data => {
        setProjects(data)}
        )
    }, [])
    
    const projectOptions = projects.map(project => {
    return <option key={project.id} value={project.id}>{project.title}</option>})

    return (
        <div className="SelectProject">
            <FormField>
                <Label htmlFor="project"></Label>
                <Select value={project} onChange={(e) => setProject(e.target.value)}>
                    <option value={0}>Select Project</option>
                    {projectOptions}
                </Select>
            </FormField>
            <Button as={Link} to='./new-project'> New Project </Button>
            

        </div>
    )
}

export default ProjectNav