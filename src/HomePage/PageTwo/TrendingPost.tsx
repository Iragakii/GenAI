// TrendingPost.tsx
import React from "react";

interface TrendingPostProps {
  imageUrl: string;
  category: string;
  title: string;
}

const TrendingPost: React.FC<TrendingPostProps> = ({
  imageUrl,
  category,
  title,
}) => {
  const isLongTitle = title.length > 80;

  return (
    <div className="w-full max-w-[250px]">
      <div className="bg-trend-post rounded-3xl p-4 shadow-sm">
        {/* Image container with conditional margin-bottom */}
        <div
          className={`relative group bg-cover rounded-lg overflow-hidden ${
            isLongTitle ? "mb-2" : ""
          }`}
        >
          <img
            src={imageUrl}
            alt="trending post"
            className="w-full max-h-[250px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
            <div className="flex items-center gap-2 text-[14px] font-semibold text-white">
              <i className="ri-search-line"></i>
              <span>{category}</span>
            </div>
          </div>
        </div>

        {/* Title with consistent top margin */}
        <span className="text-sm font-medium line-clamp-4 color-text-in-trend-post mt-3">
          {title}
        </span>
      </div>
    </div>
  );
};

export default TrendingPost;
