import { IoLocationOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";



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
    <div className="card card-compact bg-white shadow-xl border-2">
      <figure className="h-52 p-4">
        <img
          className="h-full w-full"
          src={logo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body bg-[#0000FF12]">
        <h2 className="card-title text-2xl font-extrabold">{job_title}</h2>
        <p className="text-3xl font-bold text-blue-700">{company_name}</p>
        <div>
            <button className="px-5 py-2 font-extrabold border-2 border-blue-700 rounded mr-2">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-extrabold border-2 border-blue-700 rounded">{job_type}</button>
        </div>
        <div className="flex justify-between">
            <h2 className="flex items-center text-xl font-semibold"><IoLocationOutline className="mr-1 text-blue-700 font-extrabold"></IoLocationOutline>{location}</h2>
            <h2 className="flex items-center text-xl font-semibold"><BsCurrencyDollar className="mr-1 text-blue-700 font-extrabold"></BsCurrencyDollar>{salary}</h2>
        </div>
        <Link to={`/job/${id}`}>
            <div className="card-actions">
               <button className="btn bg-blue-700 text-white">View Details</button>
            </div>
        </Link>
      </div>
    </div>
  );
};

Job.propTypes = {
  job : PropTypes.object
}

export default Job;
