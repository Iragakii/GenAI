import React, { useState, FC, ChangeEvent, FormEvent } from "react";

const InputFeild: FC = () => {
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInput("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-5xl mx-auto p-4">
      <div className="flex flex-col gap-4">
        <div
          className="flex flex-col p-3 border rounded-4xl w-full max-w-5xl min-h-[160px] border-input-field-color"
          style={{ backgroundColor: "#313131" }}
        >
          <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Hỏi bất cứ điều gì"
            className="w-full px-4 py-2 text-input-field focus:outline-none focus:ring-0 text-2xl"
          />
          <div className="flex items-center gap-4 mt-9 mr-2 justify-end">
            <button
              type="submit"
              className="text-white hover:text-gray-300 transition-colors cursor-pointer"
            >
              <i className="ri-attachment-2 text-2xl"></i>
            </button>
            <button
              type="submit"
              className="text-white hover:text-gray-300 transition-colors cursor-pointer"
            >
              <i className="ri-mic-line text-2xl"></i>
            </button>
            <button
              type="submit"
              className="flex text-white items-center justify-center leading-[40px] p-3 py-2 relative box-border rounded-[8px] group bg-submit-input hover:scale-105 transition-all duration-300 ease-in-out outline-none focus:ring-2 focus:ring-pink-400 cursor-pointer"
            >
              <i className="ri-send-plane-line text-2xl group-hover:scale-[1.2] transition-all duration-300 ease-in-out"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default InputFeild;
