// src/components/ChatUI.tsx
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import InputFeild from "../HomePage/PageOne/InputFeild";

interface Message {
  id: number;
  role: "user" | "ai";
  content: string;
}

const initialMessages: Message[] = [
  { id: 1, role: "ai", content: "Hello! How can I help you today?" },
  { id: 2, role: "user", content: "Tell me a joke." },
  {
    id: 3,
    role: "ai",
    content:
      "Why don't scientists trust atoms? Because they make up everything! 😄",
  },
];

export default function ChatField() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="flex-1 overflow-y-auto py-4 pb-20">
        <div className="max-w-[730px] mx-auto px-3 space-y-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={clsx(
                "flex gap-2 items-start",
                msg.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={clsx(
                  "flex gap-2 items-start max-w-[85%] sm:max-w-[700px]",
                  msg.role === "user" ? "flex-row-reverse" : "flex-row"
                )}
              >
                <div
                  className={clsx("px-3 py-2 rounded-lg text-sm", {
                    "bg-[#1E1E1E] text-gray-200": msg.role === "ai",
                    "bg-[#4A90E2] text-white": msg.role === "user",
                  })}
                >
                  {msg.content}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 w-full px-3 py-3 bg-black border-t border-gray-800">
        <div className="max-w-[730px] mx-auto">
          <InputFeild></InputFeild>
        </div>
      </div>
    </div>
  );
}
