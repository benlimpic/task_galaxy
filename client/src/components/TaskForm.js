import React, {useState, useEffect} from 'react'
import { Button, Error, Input, FormField, Label, Select, Textarea } from "../styles";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import './projectForm.css'

const CreateTask = ({ project, tasks, setTasks }) => {
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [notes, setNotes] = useState('');
    const [status, setStatus] = useState('');
    const [priority, setPriority] = useState('');
    // const [errors, setErrors] = useState([]);
    


    const navigate = useNavigate();

    const handleSubmit = (e) => {
    e.preventDefault()
    const task = { 
        title, 
        description, 
        notes,
        status, 
        priority,
        project_id: project.id
    };

    fetch(`/projects/${project}/tasks`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task)
        })
        .then(r => { r.json().then(data => navigate('/')); })
    }   
        
    useEffect(() => {
        fetch(`/projects/${project}/tasks`)
        .then(r => r.json())
        .then(data => {
        setTasks(data)}
        )
    }, [project])



    return (
        <div className="Form">
        <h1>Create A New Task</h1>
        <form onSubmit={handleSubmit}>
            <FormField>
                <Label htmlFor="title">Title:</Label>
                <Input type="text" required id="title" autoComplete="off" value={title} onChange={(e) => setTitle(e.target.value)} />
            </FormField>

            <FormField>
                <Label htmlFor="description">Description:</Label>
                <Textarea rows="3" type="text"  id="title" autoComplete="off" value={description} onChange={(e) => setDescription(e.target.value)} />
            </FormField>

            <FormField>
                <Label htmlFor="Notes">Notes:</Label>
                <Textarea rows="3" type="text"  id="title" autoComplete="off" value={notes} onChange={(e) => setNotes(e.target.value)} />
            </FormField>

            <FormField>
                <Label htmlFor="status">Status:</Label>
                <Select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="">Select Status</option>
                    <option value="Unassigned">Unassigned</option>
                    <option value="InProgress">In Progress</option>
                    <option value="Ready for Review">Ready for Review</option>
                    <option value="Edits Requested">Edits Requested</option>
                    <option value="Completed">Completed</option>
                </Select>
            </FormField>

            <FormField>
                <Label htmlFor="priority">Priority:</Label>
                <Select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="">Select Priority</option>
                    <option value="None">None</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Urgent">Urgent</option>
                </Select>
            </FormField>
            
            <FormField>
                <Button variant="fill" color="primary" type="submit">
                    Create
                </Button>
            </FormField>

            <FormField>
                <Link to="/">
                    <Button>Cancel</Button>
                </Link>
            </FormField>
            
            {/* <FormField>
            {errors.map((err) => (
                <Error key={err}>{err}</Error>
            ))}
            </FormField> */}
        </form>
        </div>
    )
}

export default CreateTask