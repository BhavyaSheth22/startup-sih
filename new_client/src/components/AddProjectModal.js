import { useState } from "react";
import React from "react";
import { responseErrorHandler } from "../utils/Api/Api";
import { toast } from "react-toastify";
import Input from "../components/Input";

const AddProjectModal = (close) => {
	const [projectName, setProjectName] = useState("");
    const [desc, setDesc] = useState("");
    const [polls, setPolls] = useState([]);
    const [option, setOption] = useState("");
	
	const submit = async () => {
		if (projectName.length == 0) {
			return toast.error("Please enter a project name");
		}
		if (desc.length == 0) {
			return toast.error("Please add some description");
		}
		if (polls.length == 0) {
			return toast.error("Please add some options for poll");
		}
		const toastElement = toast.loading(
			"Creating Project"
		);
		try {
			toast.update(toastElement, {
				render: "Invested Successfully",
				type: "success",
				isLoading: false,
				autoClose: true,
			});
			return close();
		} catch (error) {
			responseErrorHandler(error, toastElement);
		}
	};

    const addPollOption = async () => {
        await setPolls(polls => [...polls,option]);
        setOption('');
    }

	return (
		<div className="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 modal">
			<Input label="Project Name" type="text" setter={setProjectName} />
            <Input label="Description" type="text" setter={setDesc} />
            <Input label="Add Option" type="text" setter={setOption} />
            <button 
            className="text-white bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-700 rounded text-lg"
            onClick={addPollOption}>
                Add Option
            </button>  
            <br/>
            <ol>
                {polls.map(poll => (
                    <li className="inline-flex mr-2 items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-700 rounded">{poll}</li>
                ))}
            </ol>
            <br/>
			<button
				onClick={submit}
				className="text-white bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-700 rounded text-lg"
			>
				Add Project
			</button>
		</div>
	);
};
export default AddProjectModal;