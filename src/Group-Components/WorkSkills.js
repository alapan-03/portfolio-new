import Skills from "../components/Skills/Skills";
import Work from "../components/Work/Work";
import "./WorkSkill.css";


export default function WorkSkills(second) {
    return (
        <div style={{display:"flex", justifyContent:"center"}}>
        <div className="work-skill-cont">
        <Work/>
        <Skills/>
        </div>
        </div>
    )
}