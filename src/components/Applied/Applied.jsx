import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobs } from "../../Utility/localStorage";
import AppliedDetails from "../AppliedDetails/AppliedDetails";

const Applied = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (text) => {
    if (text === "all") {
      setDisplayJobs(appliedJobs);
    } else if (text === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (text === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedJobs = getStoredJobs();

    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobs.includes(job.id));
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied)
    }
  }, []);
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
          <li onClick={() => handleJobsFilter('all')}><a href="">All</a></li>
          <li onClick={() => handleJobsFilter('remote')}><a href="">Remote</a></li>
          <li onClick={() => handleJobsFilter('onsite')}><a href="">Onsite</a></li>
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
