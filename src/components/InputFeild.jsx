import React, { useState } from "react";

const InputFeild = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto p-4">
      <div className="flex flex-col gap-4">
        <div
          className="flex flex-col p-3 border rounded-3xl min-w-[600px] min-h-[140px] "
          style={{ backgroundColor: "#313131" }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Hỏi bất cứ điều gì, tạo ra bất cứ điều gì"
            className="w-full px-4 py-2 text-input-field focus:outline-none focus:ring-0"
          />
          <div className="flex items-center gap-4 mt-9 mr-2 justify-end">
            <button
              type="submit"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <i className="ri-attachment-2"></i>
            </button>
            <button
              type="submit"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <i className="ri-mic-line"></i>
            </button>
            <button
              type="submit"
              className="px-2 py-1 text-white bg-submit-input rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
            >
              <i className="ri-send-plane-line"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default InputFeild;
