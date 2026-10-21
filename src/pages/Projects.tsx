import { Main, List, CalculatorStyle } from "../styles/styles";
import Calculator from "../components/Calculator";


export default function Projects(){
    return (

        <Main>
            <h3> Projects </h3>
            <List>
                <h4>Calculator</h4> 
                <p> HTML CSS JS Calculator</p>
                <CalculatorStyle><Calculator /></CalculatorStyle>
            
            </List>
            <List>
                <h4>MBTA Transit Tracking System | Java, Spring Boot, PostgreSQL, Docker, JUnit, GitHub Actions  </h4> 
                <p>• Engineered a Spring Boot backend service that ingests live MBTA transit feeds and serves RESTful API endpoints for real-time arrival predictions </p>
                <p>• Implemented scheduled polling jobs, response caching, and rate-limiting logic to optimize external API utilization and reduce redundant network requests </p>
                <p>• Designed a normalized PostgreSQL schema to support historical prediction storage, delay trend analysis, and efficient querying of transit data</p>
            </List>
        </Main>
    );
}
