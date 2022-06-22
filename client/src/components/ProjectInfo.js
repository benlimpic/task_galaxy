import React, {useState, useEffect} from 'react'
import './Info.css'
import { Button, Error, Input, FormField, Label, Select, Textarea } from "../styles";
import GalaxyBuild from '../components/GalaxyBuild'
import {FaRegEdit, FaTrashAlt, FaRegTrashAlt} from 'react-icons/fa'

const ProjectInfo = ({ project, task, subtask}) => {
    
    const [projectInfo, setProjectInfo] = useState([])
    const [taskInfo, setTaskInfo] = useState([])
    const [subtaskInfo, setSubtaskInfo] = useState([])


    useEffect(() => {
        fetch(`/projects/${project}`)
        .then(r => r.json())
        .then(data => {
        setProjectInfo(data)}
        )
    }, [setProjectInfo, project])


    useEffect(() => {
        fetch(`/projects/${project}/tasks/${task}`)
        .then(r => r.json())
        .then(data => {
        setTaskInfo(data)}
        )
    }, [setTaskInfo, project, task])

    useEffect(() => {
        fetch(`/projects/${project}/tasks/${task}/subtasks/${subtask}`)
        .then(r => r.json())
        .then(data => {
        setSubtaskInfo(data)}
        )
    }, [setSubtaskInfo, project, task, subtask])
    
    
    return (
        <>
        <div className="DisplayInfo">
            {projectInfo.status !== 500 ?
                    <div className="ProjectInfo">
                        <h1>{projectInfo.title}</h1>
                        <div>
                            <h2>Description: </h2>
                            <h4>{projectInfo.description}</h4>
                            <h2>Notes: </h2>
                            <h4>{projectInfo.notes}</h4>
                            <h2>Status: </h2>
                            <h4>{projectInfo.status}</h4>
                            <h2>Priority: </h2>
                            <h4>{projectInfo.priority}</h4>
                        </div>
                        <div className="FormButtons">
                            <Button><FaRegEdit/></Button>
                            <Button><FaRegTrashAlt/></Button>
                        </div>
                    </div>
                :   <div className="ProjectInfo">
                        <h1>Select A Project</h1>
                    </div>
            }
        
            
            {taskInfo.status !== 500 ?
                    <div className="TaskInfo">
                    <h1>{taskInfo.title}</h1>
                        <div>
                            <h2>Description: </h2>
                            <h4>{taskInfo.description}</h4>
                            <h2>Notes: </h2>
                            <h4>{taskInfo.notes}</h4>
                            <h2>Status: </h2>
                            <h4>{taskInfo.status}</h4>
                            <h2>Priority: </h2>
                            <h4>{taskInfo.priority}</h4>
                        </div>
                        <div className="FormButtons">
                            <Button><FaRegEdit/></Button>
                            <Button><FaRegTrashAlt/></Button>
                        </div>
                    </div>
                :   <div className="TaskInfo">
                        <h1>Select A Task</h1>
                    </div>
            }

            {subtaskInfo.status !== 500 ?
                    <div className="SubtaskInfo">
                    <h1>{subtaskInfo.title}</h1>
                        <div>
                            <h2>Description: </h2>
                            <h4>{subtaskInfo.description}</h4>
                            <h2>Notes: </h2>
                            <h4>{subtaskInfo.notes}</h4>
                            <h2>Status: </h2>
                            <h4>{subtaskInfo.status}</h4>
                            <h2>Priority: </h2>
                            <h4>{subtaskInfo.priority}</h4>
                        </div>
                        <div className="FormButtons">
                            <Button><FaRegEdit/></Button>
                            <Button><FaRegTrashAlt/></Button>
                        </div>
                    </div>
                :   <div className="SubtaskInfo">
                        <h1>Select A Subtask</h1>
                    </div>
            }
        </div>
        </>
    )
}

export default ProjectInfo