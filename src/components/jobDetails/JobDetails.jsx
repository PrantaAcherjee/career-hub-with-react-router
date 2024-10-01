import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../../utility/localStorage";
 
 export const JobDetails = () => {
    const jobs=useLoaderData();
    const {id}= useParams();
    const idInt=parseInt(id);
    // console.log(id,jobs)
    const job=jobs.find(job=>job.id===idInt);
    
    const handleAppliedJobs=()=>{
     saveJobApplication(idInt)
    }
    return ( <div>
        <h2>Job details of {id}</h2>
        <div className="grid md:grid-cols-4">
            <div className="col-span-3">
                <p>Job Description: {job.job_description}</p>
                <p>Job responsibility {job.job_responsibility}</p>
                <p>Educational Requirements: {job.educational_requirements}</p>
                <p>Experiences: {job.experiences}</p>
            </div>
            <div className="col-span-1 m-5">
                <p>Job Details</p>
                <button
                onClick={()=>handleAppliedJobs()}
                className="btn">Apply Now</button>
            </div>
        </div>

    </div> );
 }