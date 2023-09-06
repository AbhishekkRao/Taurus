import TextInput from "../components/TextInput";
import { useState } from "react";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelper";

const AddJobModal = ({ closeModal }) => {
    const [jobId, setjobId] = useState("");
    const [description, setdescription] = useState("");
    const [jobTitle, setjobTitle] = useState("");
    const [location, setlocation] = useState("");
    const [salary, setsalary] = useState("");
    const [applicationDate, setapplicationDate] = useState("");
    const [jobType, setjobType] = useState("");
    const [experience, setexperience] = useState("");

    const submitJob = async () => {
        if (!jobId || !description || !location || !jobTitle || !salary || !applicationDate || !jobType || !experience) {
            alert('All the fields are required. Please check again');
            return;
        }
        try {
            const data = { jobId, jobTitle, location, salary, description, applicationDate, jobType, experience };
            const response = await makeAuthenticatedPOSTRequest('/jobslist/createjob', data);

            if (response && !response.error) {
                alert('Success');
                closeModal();
                window.location.reload();
            } else {
                alert('Failure');
            }
        } catch (error) {
            console.error('Error create new job:', error);
            alert('An error occurred while creating job');
        }
    }

    const getDescription = async () => {
        if (!description || !jobTitle) {
            alert('Description and Job Title must be provided');
            return;
        }
        try {
            const data = { description, jobTitle };
            const response = await makeAuthenticatedPOSTRequest('/auth/getdescription', data);
            if (response && !response.error) {
                alert('Success');
                console.log(response.Description);
                setdescription(response.Description);
            } else {
                alert('Failure');
            }
        } catch (error) {
            console.error('Error generating new desription', error);
            alert('An error occured while generating new description');
        }
    }

    const handleDateChange = (event) => {
        setapplicationDate(event.target.value);
    };

    return (
        <div
            className="absolute bg-black w-full h-full bg-opacity-50 flex justify-center items-center z-10 overflow-auto"
            onClick={closeModal}
        >
            <div
                className="bg-app-black w-1/2 rounded-md p-8 mt-auto"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="text-white mb-5 font-semibold text-lg">
                    Add Job Listing
                </div>
                <div className="space-y-2 flex flex-col justify-center">
                    <TextInput
                        label="Job ID"
                        labelClassName={"text-white"}
                        placeholder="Job ID"
                        value={jobId}
                        setValue={setjobId}
                    />
                    <TextInput
                        label="Job Title"
                        labelClassName={"text-white"}
                        placeholder="Job Title"
                        value={jobTitle}
                        setValue={setjobTitle}
                    />
                    <div
                        className={"textInputDiv flex flex-col space-y-2 w-full"}
                    >
                        <label className={"font-semibold text-white"}>
                            Description
                        </label>
                        <textarea
                            placeholder="Description"
                            className="text-black p-3 border border-gray-400 border-solid rounded placeholder-gray-500"
                            id="Description"
                            value={description}
                            onChange={(e) => {
                                setdescription(e.target.value);
                            }}
                        />
                    </div>
                    <div className="flex justify-end">
                        <button className=" text-white border rounded-xl w-1/3 text-sm font-light"
                            onClick={getDescription}>
                            Suggest Better Description
                        </button>
                    </div>
                    <TextInput
                        label="Location"
                        labelClassName={"text-white"}
                        placeholder="Location"
                        value={location}
                        setValue={setlocation}
                    />
                    <TextInput
                        label="Salary"
                        labelClassName={"text-white"}
                        placeholder="Salary"
                        value={salary}
                        setValue={setsalary}
                    />
                    <TextInput
                        label="Job Type"
                        labelClassName={"text-white"}
                        placeholder="Job Type"
                        value={jobType}
                        setValue={setjobType}
                    />
                    <TextInput
                        label="Experience"
                        labelClassName={"text-white"}
                        placeholder="Experience"
                        value={experience}
                        setValue={setexperience}
                    />
                    <div
                        className={`textInputDiv flex flex-col space-y-2 w-full text-white`}
                    >
                        <label for="date" className='font-semibold'>
                            Last Date to Register
                        </label>
                        <input type="date" id="date" name="date" className="border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2 rounded-md shadow-sm placeholder-gray-500"
                            onChange={handleDateChange} />
                    </div>
                </div>
                <button
                    className="bg-white w-1/3 rounded flex font-semibold justify-center items-center py-3 mt-4 cursor-pointer"
                    onClick={submitJob}
                >
                    Create
                </button>
            </div>
        </div>
    );
}

export default AddJobModal;