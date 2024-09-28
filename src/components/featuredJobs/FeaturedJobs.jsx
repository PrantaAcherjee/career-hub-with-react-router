import { useEffect, useState } from "react";
import Jobs from "../jobs/Jobs";

const FeaturedJobs = () => {
    const [jobs,setJobs]=useState([]);
    const [dataLength,setDataLength]=useState(4);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    return (<div className="">
        <div className="text-center m-7 p-7">
    <h2 className="text-4xl font-bold p-3">Featured Jobs {jobs.length}</h2>
    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
    </div>
    <div className="grid grid-cols-2 gap-6">
        {jobs.slice(0,dataLength).map((job,idx)=><Jobs key={idx}
        job={job}></Jobs>)}
    </div>
    <div className={dataLength===jobs.length? "hidden": "flex justify-center m-10"}>
    <button 
    onClick={()=>setDataLength(jobs.length)}
    className="btn bg-[#9873FF] font-bold">See All Jobs</button>
    </div> 
    </div>);
}
 
export default FeaturedJobs;