import { useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import clsx from "clsx";
import ChatInput from "./ChatInput";

interface Message {
  id: number;
  role: "user" | "ai";
  content: string;
  imageBase64?: string;
}

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export default function ChatField() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // ✅ Load messages and process ?message= from homepage
  useEffect(() => {
    const stored = localStorage.getItem("chat-messages");
    let parsed: Message[] = stored ? JSON.parse(stored) : [];

    const messageFromURL = searchParams.get("message");
    const decoded = messageFromURL
      ? decodeURIComponent(messageFromURL.trim())
      : null;

    let updated = [...parsed];

    if (decoded && decoded !== "") {
      const alreadyExists = parsed.some((m) => m.content === decoded);
      if (!alreadyExists) {
        const newMessage: Message = {
          id: Date.now(),
          role: "user",
          content: decoded,
        };
        updated = [...parsed, newMessage];
      }
    }

    setMessages(updated);
    localStorage.setItem("chat-messages", JSON.stringify(updated));

    if (decoded) {
      navigate("/chat", { replace: true });
    }
  }, []);

  // ✅ Handle user sending new message or image
  const handleSendMessage = async (message: string, image?: File) => {
    const newMessage: Message = {
      id: Date.now(),
      role: "user",
      content: message,
    };

    if (image) {
      const base64 = await fileToBase64(image);
      newMessage.imageBase64 = base64;
    }

    // Ensure immediate state update and persistence
    setMessages((prev) => {
      const updatedMessages = [...prev, newMessage];
      localStorage.setItem("chat-messages", JSON.stringify(updatedMessages));
      return updatedMessages;
    });
  };

  // ✅ Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="flex-1 overflow-y-auto py-4 pb-20 scrollbar-hide chat-scrollbar">
        <div className="max-w-[727px] mx-auto px-3 space-y-3">
          {messages.length === 0 ? (
            <div className="text-center text-gray-400 py-8">
              No messages yet. Start typing to begin your conversation.
            </div>
          ) : (
            messages.map((msg) => (
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
                      " text-gray-200": msg.role === "ai",
                      "bg-[#4C585B] text-white": msg.role === "user",
                    })}
                  >
                    {msg.content}
                    {msg.imageBase64 && (
                      <img
                        src={msg.imageBase64}
                        alt="uploaded"
                        className="mt-2 rounded-lg max-w-[200px]"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 w-full px-3 py-3 bg-black">
        <div className="max-w-[730px] mx-auto">
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
}
