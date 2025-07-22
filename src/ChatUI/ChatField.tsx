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
  const [hasImagePreviews] = useState(false);

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

  const renderImageGroups = (images: string[]) => {
    const containerWidth = 660;
    const minImageWidth = 200;
    const gap = 8;

    const imagesPerRow = Math.floor(containerWidth / (minImageWidth + gap));
    const rowCount = Math.ceil(images.length / imagesPerRow);

    const groups = [];
    for (let i = 0; i < rowCount; i++) {
      groups.push(images.slice(i * imagesPerRow, (i + 1) * imagesPerRow));
    }

    return groups.map((group, groupIndex) => (
      <div key={groupIndex} className="flex gap-2 mb-2 h-screen">
        {group.map((image, index) => (
          <div
            key={index}
            className="flex-1 min-w-[200px] max-w-[calc(33.333%-8px)]"
          >
            <img
              src={image}
              alt={`uploaded-${groupIndex * imagesPerRow + index}`}
              className="w-full h-auto max-h-[200px] object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="flex flex-col h-full text-white">
      <div
        className="overflow-y-auto pt-16 messages-container"
        style={{
          height: hasImagePreviews
            ? "calc(100vh - 270px)"
            : "calc(100vh - 200px)",
          backgroundColor: "#1f1f1f",
        }}
      >
        <div className="max-w-[660px] mx-auto px-3 py-4 space-y-3 pb-4">
          {messages.length === 0 ? (
            <div className="text-center text-white py-15 text-xl font-bold">
              Xin chào, tôi có thể giúp gì cho bạn?
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
                        <div
                          key={index}
                          className="w-[120px] h-[90px] overflow-hidden rounded-lg"
                        >
                          <img
                            src={image}
                            alt={`uploaded-${index}`}
                            className="w-full h-full object-cover"
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

      <div
        className="fixed bottom-0 left-0 right-0 "
        style={{ height: "120px" }}
      >
        <div className="max-w-[730px] mx-auto px-3 py-2 h-full flex items-center">
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
}
