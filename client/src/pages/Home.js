import React from 'react'
import GalaxyBuild from '../components/GalaxyBuild'
import ProjectNav from '../components/ProjectNav'


const Home = ( {projects, setProjects, project, setProject, tasks, setTasks, task, setTask, subtasks, setSubtasks, subtask, setSubtask} ) => {
  
  return (
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
        <GalaxyBuild 
          project={project}/>
    </div>
  )
}

export default Home