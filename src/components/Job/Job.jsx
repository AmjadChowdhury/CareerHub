import { IoLocationOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";


const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={logo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
            <button className="px-5 py-2 font-extrabold border border-purple-600 rounded mr-2">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-extrabold border border-purple-600 rounded">{job_type}</button>
        </div>
        <div className="flex justify-between">
            <h2 className="flex items-center"><IoLocationOutline className="text-2xl mr-1"></IoLocationOutline>{location}</h2>
            <h2 className="flex items-center"><BsCurrencyDollar className="text-2xl mr-1"></BsCurrencyDollar>{salary}</h2>
        </div>
        <Link to={`/job/${id}`}>
            <div className="card-actions">
               <button className="btn btn-primary">View Details</button>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Job;
