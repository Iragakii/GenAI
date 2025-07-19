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
    <form onSubmit={handleSubmit} className="w-full max-w-[700px] mx-auto px-0">
      <div className="flex flex-col gap-[11px]">
        <div
          className="flex flex-col p-[8px] border rounded-[11px] sm:rounded-[21px] w-full min-h-[40px] sm:min-h-[50px]   border-input-field-color"
          style={{ backgroundColor: "#313131" }}
        >
          <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Hỏi bất cứ điều gì"
            className="w-full px-[5px] sm:px-[11px] py-[5px] text-input-field focus:outline-none focus:ring-0 text-[12px] sm:text-[16px]"
          />
          <div className="flex items-center gap-[5px] sm:gap-[11px] mt-[11px] sm:mt-[24px] mr-[5px] justify-end">
            <button
              type="submit"
              className="text-white hover:text-gray-300 transition-colors cursor-pointer"
            >
              <i className="ri-attachment-2 text-[16px]"></i>
            </button>
            <button
              type="submit"
              className="text-white hover:text-gray-300 transition-colors cursor-pointer"
            >
              <i className="ri-mic-line text-[16px]"></i>
            </button>
            <button
              type="submit"
              className={`flex text-white items-center justify-center leading-[27px] p-[8px] py-[5px] relative box-border rounded-[5px] group ${
                input.trim() === ""
                  ? "bg-[#C89595] cursor-not-allowed"
                  : "bg-submit-input hover:scale-105 cursor-pointer"
              } transition-all duration-300 ease-in-out outline-none focus:ring-2 focus:ring-pink-400`}
              disabled={input.trim() === ""}
            >
              <i className="ri-send-plane-line text-[16px] group-hover:scale-[1.2] transition-all duration-300 ease-in-out"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default InputFeild;
