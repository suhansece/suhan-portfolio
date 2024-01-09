import work_1 from '../images/work-1.png';

const ProjectCard = (props) => {
  return (
    <div className="work">
                    <img src={work_1} alt="work image 1"/>
                       <div className="layer">
                        <h2>{props.details.title}</h2>
                        <p>{props.details.discription}</p>
                        <a href="#"><i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></a>
                       </div>
    </div>
  )
}

export default ProjectCard
