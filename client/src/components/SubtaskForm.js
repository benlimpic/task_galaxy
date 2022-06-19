import React, {useState, useEffect} from 'react'
import { Button, Error, Input, FormField, Label, Select, Textarea } from "../styles";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const CreateSubtask = ({ project, task, setSubtasks, subtask }) => {
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [notes, setNotes] = useState('');
    const [status, setStatus] = useState('');
    const [priority, setPriority] = useState('');
    // const [errors, setErrors] = useState([]);
    

    const navigate = useNavigate();

    const handleSubmit = (e) => {
    e.preventDefault()
    const subtask = { 
        title, 
        description, 
        notes,
        status, 
        priority,
        task_id: task.id
    };

    fetch(`/projects/${project}/tasks/${task}/subtasks`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(subtask)
        })
        .then(r => { r.json().then(data => navigate('/')); })
    }    
        
    useEffect(() => {
        fetch(`/projects/${project}/tasks/${task}/subtasks`)
        .then(r => r.json())
        .then(data => {
        setSubtasks(data)}
        )
    }, [task])

    return (
        <div>
        <h1>Create A New Sub-Task</h1>
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

export default CreateSubtask