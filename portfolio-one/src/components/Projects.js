import React from 'react'
import ProjectItem from '../components/ProjectItem';
import Proj1 from  '../assets/proj1.jpeg';
import '../styles/Project.css'

function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
        <div className='projectList'>
        <ProjectItem name='Treasure Hunt Game' image={Proj1} />
        <ProjectItem name='Treasure Hunt Game' image={Proj1} />
        </div>
    </div>
  )
}

export default Projects;