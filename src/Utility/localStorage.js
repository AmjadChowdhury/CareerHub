const getStoredJobs = () => {
    const storedJobs = localStorage.getItem('applied-job')
    if(storedJobs){
        return JSON.parse(storedJobs)
    }
    return []
}

const saveJobApplication = id => {
    const storedJobsApplication = getStoredJobs()
    const exist = storedJobsApplication.find(jobId => jobId === id)

    if(!exist){
        storedJobsApplication.push(id)
        localStorage.setItem('applied-job',JSON.stringify(storedJobsApplication))
    }
}

export { getStoredJobs, saveJobApplication}