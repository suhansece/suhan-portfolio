import React from 'react'
import ProjectCard from './projectCard'

const Project = () => {
  const projects=[
    {
      title:"Bus Tracking Website",
      discription:"The app connect you to tallent people around the world ",
      gitlink:"",
      hostlink:""
    },
    {
      title:"",
      discription:"",
      gitlink:"",
      hostlink:""
    },
    {
      title:"",
      discription:"",
      gitlink:"",
      hostlink:""
    },
    {
      title:"",
      discription:"",
      gitlink:"",
      hostlink:""
    }
  ]
  return (
    <div id="portfolio">
        <div className="container">
            <h1 className="sub-title">My Projects</h1>
            <div className="work-list">
                {
                  projects.map((project)=>(<ProjectCard details={project}/>))
                }
            </div>
            <a className="btn">See more</a>
        </div>
    </div>
  )
}

export default Project
