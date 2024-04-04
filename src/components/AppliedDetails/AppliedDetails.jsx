

const AppliedDetails = ({job}) => {
    const {id, logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description,job_responsibility,educational_requirements,experiences,contact_information} = job
    return (
        <div className="md:flex gap-3 items-center mb-4  bg-purple-200 rounded-lg">
            <div className="">
                <img src={logo} alt="" className="w-full h-[300px] md:h-[200px]" />
            </div>
            <div className="flex-1 space-y-2 px-3">
                <h1 className="text-3xl font-bold text-blue-400">{job_title}</h1>
                <h1 className="text-2xl font-extrabold text-purple-700">{company_name}</h1>
                <p className="text-xl">{job_description}</p>
            </div>
        </div>
    );
};

export default AppliedDetails;