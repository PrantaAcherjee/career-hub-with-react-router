import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getStoredJobApplication } from '../../utility/localStorage';

export const AppliedJobs = () => {
  const jobs=useLoaderData();
  const [appliedJobs,setAppliedJobs]=useState([]);

 useEffect(()=>{
const storedJobIds=getStoredJobApplication();

if(jobs.length>0){
  const jobsApplied=jobs.filter(job=>storedJobIds.includes(job.id))
  setAppliedJobs(jobsApplied);
}
  },[])
  return (
    <div>Jobs I have applied {appliedJobs.length}</div>
  )
}
