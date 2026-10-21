import {Nav } from "../styles/styles";
import {Link} from "react-router";

export default function NavComp(){
    return (
           <Nav>
                <ul>
                    <li><Link to={'/'}>Home</Link> </li>
                    <li><Link to={'/education'}>Education</Link> </li>
                    <li><Link to={'/experiences'}>Work Experiences</Link> </li>
                    <li><Link to={'/certifications'}>Certifications</Link> </li>
                    <li><Link to={'/skills'}>Skills</Link> </li>
                    <li><Link to={'/interests'}>Interests</Link> </li>
                    <li><Link to={'/projects'}>Projects</Link> </li>
                </ul>
            </Nav>
        );
}
