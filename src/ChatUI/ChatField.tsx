import { useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import clsx from "clsx";
import ChatInput from "./ChatInput";

interface Message {
  id: number;
  role: "user" | "ai";
  content: string;
  imagesBase64?: string[];
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

  const handleSendMessage = async (message: string, images?: File[]) => {
    const newMessage: Message = {
      id: Date.now(),
      role: "user",
      content: message,
    };

    if (images && images.length > 0) {
      const base64Images = await Promise.all(images.map(fileToBase64));
      newMessage.imagesBase64 = base64Images;
    }

    setMessages((prev) => {
      const updatedMessages = [...prev, newMessage];
      localStorage.setItem("chat-messages", JSON.stringify(updatedMessages));
      return updatedMessages;
    });
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-black text-white overflow-hidden">
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-[727px] mx-auto px-3 py-4 space-y-3">
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
                    "flex flex-col gap-1 max-w-[85%] sm:max-w-[700px]",
                    msg.role === "user" ? "items-end" : "items-start"
                  )}
                >
                  {msg.content && (
                    <div
                      className={clsx(
                        "px-4 py-2 rounded-lg text-sm break-words max-w-full",
                        msg.role === "ai"
                          ? "bg-gray-700 text-gray-200"
                          : "bg-[#4C585B] text-white"
                      )}
                    >
                      {msg.content}
                    </div>
                  )}

                  {msg.imagesBase64 && msg.imagesBase64.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {msg.imagesBase64.map((image, index) => (
                        <div key={index} className="rounded-lg overflow-hidden">
                          <img
                            src={image}
                            alt={`uploaded-${index}`}
                            className="max-h-[200px] max-w-full object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="w-full px-3 py-3 bg-black">
        <div className="max-w-[730px] mx-auto">
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
}
