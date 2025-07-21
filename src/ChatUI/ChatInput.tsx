import React, {
  useState,
  FC,
  ChangeEvent,
  FormEvent,
  useRef,
  useEffect,
} from "react";

interface ChatInputProps {
  onSendMessage: (message: string, images?: File[]) => void;
}

const ChatInput: FC<ChatInputProps> = ({ onSendMessage }) => {
  const [input, setInput] = useState<string>("");
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const dropAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      previewUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previewUrls]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() !== "" || selectedImages.length > 0) {
      onSendMessage(
        input.trim(),
        selectedImages.length > 0 ? selectedImages : undefined
      );
      setInput("");
      setSelectedImages([]);
      previewUrls.forEach((url) => URL.revokeObjectURL(url));
      setPreviewUrls([]);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    processFiles(files);
  };

  const processFiles = (files: FileList | File[]) => {
    const fileArray = Array.from(files);
    const imageFiles = fileArray.filter((file) =>
      file.type.startsWith("image/")
    );

    const newImages = imageFiles.slice(0, 5 - selectedImages.length);
    if (newImages.length === 0) return;

    const newSelectedImages = [...selectedImages, ...newImages];
    setSelectedImages(newSelectedImages);

    const newPreviewUrls = newImages.map((file) => URL.createObjectURL(file));
    setPreviewUrls([...previewUrls, ...newPreviewUrls]);
  };

  const handleRemoveImage = (index: number) => {
    const newSelectedImages = [...selectedImages];
    const newPreviewUrls = [...previewUrls];

    URL.revokeObjectURL(newPreviewUrls[index]);
    newSelectedImages.splice(index, 1);
    newPreviewUrls.splice(index, 1);

    setSelectedImages(newSelectedImages);
    setPreviewUrls(newPreviewUrls);
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      processFiles(files);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" w-full max-w-[700px] mx-auto px-0 "
    >
      <div
        ref={dropAreaRef}
        className={`flex flex-col gap-2 sm:gap-[11px] ${
          isDragging
            ? "border-2 border-dashed border-blue-400 bg-blue-900 bg-opacity-20"
            : ""
        }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {previewUrls.length > 0 && (
          <div className="flex flex-wrap gap-2  pl-3 ml-[-8px] ">
            {previewUrls.map((url, index) => (
              <div key={index} className="relative w-[75px] h-[45px]">
                <img
                  src={url}
                  alt={`Preview ${index}`}
                  className="w-full h-full rounded object-cover border border-gray-600"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute -right-2 -top-2 bg-gray-700 rounded-full p-1 py-0  hover:bg-gray-600 transition-colors"
                >
                  <i className="ri-close-line text-xs"></i>
                </button>
                {index === 4 && previewUrls.length > 5 && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded">
                    <span className="text-white text-xs">
                      +{previewUrls.length - 5}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div
          className={`mb-12  flex flex-col p-2 sm:p-[8px] border rounded-[22px]  w-full min-h-[36px] sm:min-h-[50px] max-h-[120px] overflow-y-auto border-input-field-color ${
            isDragging ? "border-blue-400" : ""
          }`}
          style={{ backgroundColor: "#313131" }}
        >
          <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder={
              selectedImages.length > 0
                ? "Thêm miêu tả chi tiết ..."
                : isDragging
                ? "Kéo thả ảnh ..."
                : "Bạn có thể hỏi bất cứ điều gì ..."
            }
            className="w-full px-2 sm:px-[11px] py-1 sm:py-[5px] text-input-field focus:outline-none focus:ring-0 text-sm sm:text-[16px] bg-transparent"
            maxLength={1000}
          />

          <div className="flex items-center gap-2 sm:gap-[11px] mt-2 sm:mt-[24px] mr-1 sm:mr-[5px] justify-end">
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              multiple
            />
            <button
              type="button"
              onClick={handleFileClick}
              className="text-white hover:text-gray-300 transition-colors cursor-pointer"
              disabled={selectedImages.length >= 5}
              title={
                selectedImages.length >= 5 ? "Maximum 5 images" : "Add images"
              }
            >
              <i className="ri-attachment-2 text-sm sm:text-[16px]"></i>
            </button>
            <button
              type="button"
              className="text-white hover:text-gray-300 transition-colors cursor-pointer"
            >
              <i className="ri-mic-line text-sm sm:text-[16px]"></i>
            </button>
            <button
              type="submit"
              className={`flex text-white items-center justify-center leading-5 sm:leading-[27px] p-1 sm:p-[8px] py-1 sm:py-[5px] relative box-border rounded-[9px] group ${
                input.trim() === "" && selectedImages.length === 0
                  ? "bg-[#FFFFFF0D] cursor-not-allowed"
                  : "bg-submit-input hover:scale-105 cursor-pointer"
              } transition-all duration-300 ease-in-out outline-none focus:ring-2 focus:ring-pink-400`}
              disabled={input.trim() === "" && selectedImages.length === 0}
            >
              <i className="ri-send-plane-line text-sm sm:text-[16px] group-hover:scale-[1.2] transition-all duration-300 ease-in-out"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ChatInput;
