import PropTypes from "prop-types";

const AppliedDetails = ({job}) => {
    const {logo,job_title,company_name,job_description} = job
    return (
        <div className="md:flex gap-3 items-center mb-4 p-2 md:p-6  bg-white rounded-lg border-2  border-blue-700">
            <div className="flex-1">
                <img src={logo} alt="" className="w-1/2 md:w-full h-[100px] md:h-[200px]" />
            </div>
            <div className="flex-1 space-y-2 px-3 bg-[#0000FF12] rounded-lg">
                <h1 className="text-3xl font-bold">{job_title}</h1>
                <h1 className="text-2xl font-extrabold text-blue-700">{company_name}</h1>
                <p className="xl">{job_description}</p>
            </div>
        </div>
    );
};

AppliedDetails.propTypes = {
    job : PropTypes.object
}

export default AppliedDetails;