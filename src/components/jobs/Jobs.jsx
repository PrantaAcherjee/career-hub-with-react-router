import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";

function Jobs({job}) {
    const{logo,job_title,company_name,salary,job_type,remote_or_onsite,location}=job;
    return ( <div>

<div className="card card-compact bg-base-100 w-96 shadow-xl mx-auto">
  <figure>
    <img
    className=""
      src={logo}
      alt={job_title}/>
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div>
        <button className="btn btn-active font-bold border-[#9873FF]">{job_type}</button>
        <button className="btn btn-active font-bold m-2 border-[#9873FF]">{remote_or_onsite}</button>
    </div>
    <div className="flex">
    <p className="flex items-center"><CiLocationOn className="mr-2"/> {location}</p>
    <p className="flex items-center"> <AiOutlineDollar className="mr-2"/> Salary: {salary}</p>
    </div>
    <div className="card-actions">
      <button className="btn bg-[#9873FF] font-bold">View Details</button>
    </div>
  </div>
</div>
    </div> );
}

export default Jobs;