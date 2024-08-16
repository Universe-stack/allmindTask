'use client'
import React,{useState} from 'react'

type Props = {}

const FormInput = (props: Props) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event:any) => {
    event.preventDefault();
    alert(`You submitted: ${inputValue}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 w-full">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full flex gap-2">
        <div className=" w-full">
          <input
            type="text"
            id="inputField"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-2 w-full text-halluminateBlack"
            placeholder="Start by entering text below..."
          />
        </div>
        <button type="submit" className="text-halluminateWhite px-4 rounded-xl flex justify-center items-center hover:border hover:border-halluminateBlue cursor-pointer border border-[#ffffff1a]">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};


export default FormInput