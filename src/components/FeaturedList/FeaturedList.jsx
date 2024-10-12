import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedList = () => {
    const [jobs,setJobs] = useState([])
    const [datalength,setDataLength] = useState(4)


    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <h1 className="text-4xl text-center my-4 text-blue-700 font-extrabold uppercase">featured List</h1>
            <div className="grid md:grid-cols-2 gap-4 mb-3">
                {
                    jobs.slice(0,datalength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={`my-5 text-center ${datalength === jobs.length ? 'hidden' : ''}`}>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedList;