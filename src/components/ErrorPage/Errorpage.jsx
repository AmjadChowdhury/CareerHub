import { Link } from "react-router-dom";


const Errorpage = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold">Oops!!!</h1>
            <button className="btn btn-primary"><Link to="/">Go Back</Link></button>
        </div>
    );
};

export default Errorpage;