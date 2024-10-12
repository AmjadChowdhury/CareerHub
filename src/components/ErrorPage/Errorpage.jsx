import { Link, useRouteError } from "react-router-dom";


const Errorpage = () => {
    const error = useRouteError()
    return (
        <div className="text-center mt-5">
            <p className="text-6xl font-extrabold text-red-700">{error.status}</p>
            <h1 className="text-3xl font-bold text-red-900">{error.statusText}</h1>
            <Link to="/"><button className="btn bg-red-950 text-white font-bold">Go Back</button></Link>
        </div>
    );
};

export default Errorpage;