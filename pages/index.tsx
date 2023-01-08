import type { NextPage } from "next";
import {
  SetStateAction,
  useState,
} from "react";
import Head from "next/head";
import DropdownButton_1 from "./DropdownButton";

const Home: NextPage = () => {
  const [formData, setFormData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // setFormData([...formData, inputValue])
    setInputValue("");
  };
  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };
  const handleDelete = (dataToDelete: never) => {
    setFormData(formData.filter((data) => data !== dataToDelete));
  };

  const options = [
    { value: "option1", label: "Other" },
    { value: "option2", label: "Work" },
    { value: "option3", label: "Hobby" },
  ];
  function handleOptionClick(value: any) {}
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Lazy Time Management</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <a className="text-blue-600">Lazy Time Manager!</a>
        </h1>
        <p className="my-4 text-2xl ">Get started by adding your to-do </p>
        <form className="flex inverted-colors:outline ...">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">
              Add Your To-do
            </span>
            <input
              type="text"
              className="mt-8 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
              "
            />
            <DropdownButton_1
              options={options}
              onOptionClick={handleOptionClick}
            />
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide a valid email address.
            </p>
          </label>
        </form>
        <div className="flex flex-nowrap">
          <div className="rounded-l-lg bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="flex-1 w-64 py-8">Other</div>
            <div className="pb-8">{/* <Form></Form> */}</div>
          </div>
          <div className="bg-gradient-to-l  from-indigo-500 to-blue-500">
            <div className="flex-1 w-64 py-8">Work</div>
            {/* <Form2></Form2> */}
          </div>
          <div className="rounded-r-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
            <div className="flex-1 w-64 py-8">Hobby</div>
            {/* <Form3></Form3> */}
          </div>
        </div>

        {/* end */}
      </main>
    </div>
  );
};
export default Home;
