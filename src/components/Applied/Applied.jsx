import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobs } from "../../Utility/localStorage";
import AppliedDetails from "../AppliedDetails/AppliedDetails";

const Applied = () => {
    const jobs = useLoaderData()
    const [appliedJobs,setAppliedJobs] = useState([])
    useEffect(() => {
        const storedJobs = getStoredJobs()
        
        if(jobs.length > 0){
            const jobsApplied = jobs.filter(job => storedJobs.includes(job.id))
            console.log(jobsApplied)
            setAppliedJobs(jobsApplied)
        }
    },[])
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mb-8">Applied Jobs : {appliedJobs.length}</h1>
            <div>
                {
                    appliedJobs.map(job => <AppliedDetails key={job.id} job={job}></AppliedDetails>)
                }
            </div>

        </div>
    );
};

export default Applied;