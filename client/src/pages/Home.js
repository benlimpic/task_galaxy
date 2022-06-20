import React from 'react'
import GalaxyBuild from '../components/GalaxyBuild'
import ProjectNav from '../components/ProjectNav'
import ProjectInfo from '../components/ProjectInfo'


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
          project={project}
        />
        <ProjectInfo
          project={project}
          task={task}
          subtask={subtask}
        />
    </div>
  )
}

export default Home