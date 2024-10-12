import { useLoaderData, useParams } from "react-router-dom";
import { BsCurrencyDollar } from "react-icons/bs";
import { SiProtondrive } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { saveJobApplication } from "../../Utility/localStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const JobDetails = () => {
    const jobs = useLoaderData()
    const {jobId} = useParams()
    // console.log(jobs,jobId,jobIdParse)

    const job = jobs.find(job => job.id == jobId)
    const {id,job_title,salary,job_description,job_responsibility,educational_requirements,experiences,contact_information} = job

    const handleApplyJob = () => {
        saveJobApplication(id)
        toast('Applied successfully')
    }


    return (
        <div>
            <h1 className="text-3xl font-extrabold text-center mb-5">Job Details</h1>
            <div className="grid md:grid-cols-3 gap-5 mb-5">
                <div className="md:col-span-2 px-5 py-5 space-y-2 bg-purple-200 rounded-lg flex flex-col justify-center">
                    <p><span className="text-xl font-bold">Job Description : </span>{job_description}</p>
                    <p><span className="text-xl font-bold">Job Responsibility : </span>{job_responsibility}</p>
                    <p><span className="text-xl font-bold">Educational Requirements : </span>{educational_requirements}</p>
                    <p><span className="text-xl font-bold">Experiences : </span>{experiences}</p>
                </div>
                <div className="p-3 bg-purple-700 rounded-lg text-white">
                    <h1 className="text-2xl font-bold">Job Details</h1>
                    <p className="border border-gray-500 my-4"></p>
                    <h2 className="flex items-center text-xl mb-2"><BsCurrencyDollar className="text-xl mr-2"></BsCurrencyDollar><span className="font-bold">Salary : </span>{salary}(permonth)</h2>
                    <h2 className="flex items-center text-xl mb-2"><SiProtondrive className="text-xl mr-2"></SiProtondrive><span className="font-bold">Job Title : </span>{job_title}</h2>

                    <h1 className="text-2xl font-bold my-2">Contact Information</h1>
                    <p className="border border-gray-500 my-4"></p>
                    <h1 className="flex items-center text-xl"><FaPhoneAlt className="mr-2"></FaPhoneAlt><span className="font-bold mr-2">Phone : </span>{contact_information.phone}</h1>
                    <h1 className="flex items-center text-xl"><MdOutlineMail className="mr-2"></MdOutlineMail><span className="font-bold mr-2">E-Mail : </span>{contact_information.email}</h1>
                    <span className="text-xl"><MdLocationOn className=""></MdLocationOn><span className="font-bold">Address : </span>{contact_information.address}</span>


                    <button onClick={handleApplyJob} className="py-2 w-full bg-blue-600 rounded-lg my-2">Apply Now</button>
                   
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;