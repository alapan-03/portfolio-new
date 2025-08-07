import ProjectCard from "./ProjectCard"
import data from "./projectData.json"

console.log(data)
export default function Project(second) {
    return (
        <div className="project-cont" id="project">
            <h2>💡 Solutions I've Built</h2>
            <p>Below are some of the real-world problems I've tackled through my projects. Each one is designed to solve meaningful challenges and deliver value to users.</p>
        <div className="project-card-cont">
            {
                data?.map((el, i) => (
                    <div>
                        <ProjectCard data={el} colourIdx={i}/>
                    </div>
                ))
            }
        </div>
        </div>
    )
}