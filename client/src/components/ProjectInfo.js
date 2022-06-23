import React, {useState, useEffect} from 'react'
import './Info.css'
import { Button, Error, Input, FormField, Label, Select, Textarea } from "../styles";
import {Link} from 'react-router-dom'
import {FaRegTrashAlt, FaRegEdit} from 'react-icons/fa'
const ProjectInfo = ({ project, task, subtask, projectInfo, taskInfo, subtaskInfo, setProjectInfo, setTaskInfo, setSubtaskInfo}) => {
    



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
                        <h1>Project</h1>
                        <FormField>
                            <Label htmlFor="title">Title:</Label>
                            <Input type="text" required id="title" autoComplete="off" value={projectInfo.title}  />
                        </FormField>

                        <FormField>
                            <Label htmlFor="description">Description:</Label>
                            <Textarea rows="3" type="text"  id="title" autoComplete="off" value={projectInfo.description} />
                        </FormField>

                        <FormField>
                            <Label htmlFor="Notes">Notes:</Label>
                            <Textarea rows="3" type="text"  id="title" autoComplete="off" value={projectInfo.notes}/>
                        </FormField>

                        <FormField>
                            <Label htmlFor="status">Status:</Label>
                            <Select value={projectInfo.status} >
                                <option value="">{projectInfo.status}</option>

                            </Select>
                        </FormField>

                        <FormField>
                            <Label htmlFor="priority">Priority:</Label>
                            <Select value={projectInfo.priority}>
                                <option value="">{projectInfo.priority}</option>

                            </Select>
                        </FormField>

                        <div className="FormButtons">
                            <button><FaRegEdit/></button>
                            <button><FaRegTrashAlt/></button>
                        </div>
                    </div>
                :   <div className="ProjectInfo">
                        <h1>Select A Project</h1>
                    </div>
            }
        </div>
            
        <div className="DisplayInfo">
            {taskInfo.status !== 500 ?
                    <div className="TaskInfo">
                        <h1>Task</h1>
                        <FormField>
                            <Label htmlFor="title">Title:</Label>
                            <Input type="text" required id="title" autoComplete="off" value={taskInfo.title}  />
                        </FormField>

                        <FormField>
                            <Label htmlFor="description">Description:</Label>
                            <Textarea rows="3" type="text"  id="title" autoComplete="off" value={taskInfo.description} />
                        </FormField>

                        <FormField>
                            <Label htmlFor="Notes">Notes:</Label>
                            <Textarea rows="3" type="text"  id="title" autoComplete="off" value={taskInfo.notes}/>
                        </FormField>

                        <FormField>
                            <Label htmlFor="status">Status:</Label>
                            <Select value={taskInfo.status} >
                                <option value="">{taskInfo.status}</option>

                            </Select>
                        </FormField>

                        <FormField>
                            <Label htmlFor="priority">Priority:</Label>
                            <Select value={taskInfo.priority}>
                                <option value="">{taskInfo.priority}</option>

                            </Select>
                        </FormField>

                        <div className="FormButtons">
                            <button><FaRegEdit/></button>
                            <button><FaRegTrashAlt/></button>
                        </div>
                    </div>
                :   <div className="TaskInfo">
                        <h1>Select A Task</h1>
                    </div>
            }
            </div>

            <div className="DisplayInfo">
            {subtaskInfo.status !== 500 ?
                    <div className="SubtaskInfo">
                        <h1>Sub-Task</h1>
                        <FormField>
                            <Label htmlFor="title">Title:</Label>
                            <Input type="text" required id="title" autoComplete="off" value={subtaskInfo.title}  />
                        </FormField>

                        <FormField>
                            <Label htmlFor="description">Description:</Label>
                            <Textarea rows="3" type="text"  id="title" autoComplete="off" value={subtaskInfo.description} />
                        </FormField>

                        <FormField>
                            <Label htmlFor="Notes">Notes:</Label>
                            <Textarea rows="3" type="text"  id="title" autoComplete="off" value={subtaskInfo.notes}/>
                        </FormField>

                        <FormField>
                            <Label htmlFor="status">Status:</Label>
                            <Select value={subtaskInfo.status} >
                                <option value="">{subtaskInfo.status}</option>
                            </Select>
                        </FormField>

                        <FormField>
                            <Label htmlFor="priority">Priority:</Label>
                            <Select value={subtaskInfo.priority}>
                                <option value="">{subtaskInfo.priority}</option>
                            </Select>
                        </FormField>

                        <div className="FormButtons">
                            <button><FaRegEdit/></button>
                            <button><FaRegTrashAlt/></button>
                        </div>
                    </div>
                :   <div className="SubtaskInfo">
                        <h1>Select A Sub-Task</h1>
                    </div>
            }
            </div>
        </>
    )
}

export default ProjectInfo