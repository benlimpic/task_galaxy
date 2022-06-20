import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { FormField, Label, Select, Button } from "../styles";
import { FaPlus } from "react-icons/fa";
import './ProjectNav.css'

const ProjectNav = ({projects, setProjects, project, setProject, tasks, setTasks, task, setTask, subtasks, setSubtasks, subtask, setSubtask}) => {

    useEffect(() => {
        fetch('/projects')
        .then(r => r.json())
        .then(data => {
        setProjects(data)}
        )
    }, [])


    useEffect(() => {
        fetch(`/projects/${project}/tasks`)
        .then(r => r.json())
        .then(data => {
        setTasks(data)}
        )
    }, [project])


    useEffect(() => {
        fetch(`/projects/${project}/tasks/${task}/subtasks`)
        .then(r => r.json())
        .then(data => {
        setSubtasks(data)}
        )
    }, [task])


    console.log("project")
    console.log(project)
    console.log("task")
    console.log(task)
    console.log("subtask")
    console.log(subtask)

    const projectOptions = projects.map(project => {
    return <option key={project.id} value={project.id}>{project.title}</option>})

    const taskOptions = tasks.map(task => {
    return <option key={task.id} value={task.id}>{task.title}</option>})

    const subtaskOptions = subtasks.map(subtask => {
    return <option key={subtask.id} value={subtask.id}>{subtask.title}</option>})

    return (
        
        <div className="AllSelect">
            <div className="AddSelect">
                <Button as={Link} to='./new-project'><FaPlus/></Button>
                <FormField onChange={(e) => setTask(0)}>
                    <Select value={project} onChange={(e) => setProject(e.target.value)}>
                        <option value={0}>Select Project</option>
                        {projectOptions}
                    </Select>
                </FormField>
            </div>
            <div className="AddSelect">
                <Button as={Link} to='./new-task'><FaPlus/></Button>
                <FormField onChange={(e) =>setSubtask(0)}>
                    <Select value={task} onChange={(e) => setTask(e.target.value)}>
                        <option value={0}>Select Task</option>
                        {taskOptions}
                    </Select>
                </FormField>            
            </div>
            <div className="AddSelect">
                <Button as={Link} to='./new-subtask'><FaPlus/></Button>
                <FormField>
                    <Select value={subtask} onChange={(e) => setSubtask(e.target.value)}>
                        <option value={0}>Select Sub-Task</option>
                        {subtaskOptions}
                    </Select>
                </FormField>
            </div>
        </div>
        
    )
}

export default ProjectNav