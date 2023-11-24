import React, { useState } from 'react'
import classNames from 'classnames'
import projectsData from './projectsData'
import '../styles/projectsMenu.css'

const ProjectsMenu = () => {
  const [activeProject, setActiveProject] = useState(1)

  const handleProjectClick = (projectId) => {
    setActiveProject(projectId)
  }

  const renderContent = (project) => (
    <div className={`project-sub-container-${project.id}`}>
      <h3>{project.title}</h3>
      <img src={project.image} alt={project.title} />
      <div>{project.description}</div>
      <div className="link-container">
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          GITHUB
        </a>
        <a href={project.demo} target="_blank" rel="noopener noreferrer">
          DEMO
        </a>
      </div>
    </div>
  )

  const projectItems = projectsData.map((project) => (
    <div
      key={project.id}
      className={classNames('project-item', {
        activeProject: activeProject === project.id,
      })}
      onClick={() => handleProjectClick(project.id)}
    >
      <h2 className="title">{project.title}</h2>
    </div>
  ))

  return (
    <div className="project-menu">
      <div className="project-items-container">{projectItems}</div>
      <div className="project-sub-container">
        {renderContent(
          projectsData.find((project) => project.id === activeProject),
        )}
      </div>
    </div>
  )
}

export default ProjectsMenu
