import React from 'react'
import GalaxyBuild from '../components/GalaxyBuild'
import ProjectNav from '../components/ProjectNav'
import ProjectInfo from '../components/ProjectInfo'
import './Home.css'


const Home = ( {projects, setProjects, project, setProject, tasks, setTasks, task, setTask, subtasks, setSubtasks, subtask, setSubtask, projectInfo, taskInfo, subtaskInfo, setProjectInfo, setTaskInfo, setSubtaskInfo} ) => {

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
            <GalaxyBuild 
            project={project}/>
          </div>
        </div>
        <div className="spaceBox">
        </div>
        <div className="displayInfo">
          <ProjectInfo
            project={project}
            task={task}
            subtask={subtask}
            projectInfo={projectInfo}
            taskInfo={taskInfo}
            subtaskInfo={subtaskInfo}
            setProjectInfo={setProjectInfo}
            setTaskInfo={setTaskInfo}
            setSubtaskInfo={setSubtaskInfo}
            />
        </div>  
    </div>
    </>    
  )
}

export default Home