import { CiLocationOn } from "react-icons/ci";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id,logo , job_title,company_name,remote_or_onsite,location,job_type,salary,job_description} = job;
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">{remote_or_onsite}</button>
                        <button className="px-5 text-[#7E90FE] py-2 font-extrabold border rounded border-[#7E90FE] mr-4">{job_type}</button>
                    </div>
                    <div className="mt-4 flex">
                        <h1 className="flex mr-2"><CiLocationOn className="text-2xl" /> 
                        {location}
                        </h1>
                        <h2 className="flex mr-2"><AiTwotoneDollarCircle className="text-2xl" /> {salary} </h2>
                    </div>
                    <div className="card-actions">
                        <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;