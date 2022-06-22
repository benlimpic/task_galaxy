import React from 'react'
import GalaxyBuild from '../components/GalaxyBuild'
import ProjectNav from '../components/ProjectNav'
import ProjectInfo from '../components/ProjectInfo'
import './Home.css'


const Home = ( {projects, setProjects, project, setProject, tasks, setTasks, task, setTask, subtasks, setSubtasks, subtask, setSubtask} ) => {

  return (
    <>
    <div className="Home">
        <div>
          <ProjectNav 
            projects={projects} 
            setProjects={setProjects} 
            project={project} 
            setProject={setProject} 
            tasks={tasks} 
            setTasks={setTasks} 
            task={task} 
            setTask={setTask} 
            subtasks={subtasks} 
            setSubtasks={setSubtasks} 
            subtask={subtask} 
            setSubtask={setSubtask} 
          />
          <div className="galaxy">
            <GalaxyBuild />
          </div>
        </div>
        <div className="spaceBox">
        </div>
        <div className="displayInfo">
          <ProjectInfo
            project={project}
            task={task}
            subtask={subtask}/>
        </div>  
    </div>
    </>    
  )
}

export default Home