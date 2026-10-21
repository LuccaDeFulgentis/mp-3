import { Main, List } from "../styles/styles";


export default function Experience(){
    return (

        <Main>
            <h3> Work Experience </h3>
            <List>
                <h4>UCLA Health, Los Angeles, CA</h4> 
                <h5>Intern</h5>
                <h5>June 2026 - Aug 2026</h5>
                <p>• Benchmarked 10+ OCR and vision-language models on CER, WER, latency, and LLM-as-a-Judge metrics via a custom evaluation dashboard tracking cost, accuracy, and data drift, achieving up to 97% extraction accuracy  </p>
                <p>• Designed a confidence-based routing system that automatically processed high-confidence documents while routing low-confidence cases for manual validation, reducing manual review by a projected 70%</p>
                <p>• Built end-to-end Azure Databricks document AI pipeline for ingestion, agentic tiered classification, OCR, and feature extraction, producing workflows for downstream machine learning models</p>
            </List>
            <List>
                <h4>Harvard Retinal Imaging Lab, Boston, MA </h4> 
                <h5>Research Data Intern</h5>
                <h5>Oct 2025 - May 2026</h5>
                <p>• Cleaned and validated 5,000+ Epic EHR retinal imaging records via SQL, improving data quality for downstream machine learning pipelines </p>
                <p>• Automated data quality checks for missing values, duplicate records, and out-of-range fields, reducing manual validation time by 50% </p>
            </List>
            <List >
                <h4>Astound Broadband, Princeton, NJ </h4> 
                <h5>Data Analyst Intern</h5>
                <h5>May 2022 - June 2022</h5>                        
            </List>
            <List>
                <h4>Eye Contact & Wellness Center </h4> 
                <h5>Optometry Tech</h5>
                <h5>Aug 2020 - Jan 2026</h5>                   
            </List>

        </Main>
    );
}
