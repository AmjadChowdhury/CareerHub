import { useEffect, useState } from "react";
import {  useLoaderData } from "react-router-dom";
import { getStoredJobs } from "../../Utility/localStorage";
import AppliedDetails from "../AppliedDetails/AppliedDetails";

const Applied = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const [onsite,setOnsite] = useState(false)
  const [remote,setRemote] = useState(false)

  const handleJobsFilter = (text) => {
    console.log(text)
    if (text === "all") {
      setDisplayJobs(appliedJobs);
    } else if (text === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"  
      );
      setDisplayJobs(remoteJobs);
      setRemote(!remote)
      setOnsite(!onsite)
      // console.log(remoteJobs)
    } else if (text === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
      setRemote(!remote)
      setOnsite(!onsite)
    }
  };

  useEffect(() => {
    const storedJobs = getStoredJobs();

    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobs.includes(job.id));
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied)
    }
  }, [jobs]);

  console.log(appliedJobs)
  console.log(displayJobs)
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">
        Applied Jobs : {appliedJobs.length}
      </h1>
      
      <div className="dropdown flex justify-end">
        <div tabIndex={0} role="button" className="btn m-1 bg-purple-700 text-white text-2xl hover:bg-purple-400">
          Filter
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li onClick={() => handleJobsFilter('all')}>All</li>
          <li onClick={() => handleJobsFilter('remote')}>Remote</li>
          <li onClick={() => handleJobsFilter('onsite')}>Onsite</li>
        </ul>
      </div>
      <div>
        {displayJobs.map((job) => (
          <AppliedDetails key={job.id} job={job}></AppliedDetails>
        ))}
      </div>
    </div>
  );
};

export default Applied;
