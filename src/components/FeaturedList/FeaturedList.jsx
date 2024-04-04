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
            <h1 className="text-2xl text-center">This is featured List</h1>
            <h1 >Jobs length : {jobs.length}</h1>
            <div className="grid md:grid-cols-2">
                {
                    jobs.slice(0,datalength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={datalength === jobs.length ? 'hidden' : ''}>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedList;