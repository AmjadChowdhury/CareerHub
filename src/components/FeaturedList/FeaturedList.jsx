import { useEffect, useState } from "react";


const FeaturedList = () => {
    const [jobs,setJobs] = useState([])
    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <h1 className="text-2xl text-center">This is featured List</h1>
            <h1 >Jobs length : {jobs.length}</h1>
        </div>
    );
};

export default FeaturedList;