// TrendingPost.tsx
import React from "react";
import { Link } from "react-router-dom";

interface TrendingPostProps {
  imageUrl: string;
  category: string;
  title: string;
  linkUrl: string;
}

const TrendingPost: React.FC<TrendingPostProps> = ({
  imageUrl,
  category,
  title,
  linkUrl,
}) => {
  return (
    <Link to={linkUrl} className="cursor-pointer">
      <div className="bg-trend-post rounded-3xl p-4 shadow-sm max-w-xs mx-auto cursor-pointer">
        <div className="relative group rounded-lg overflow-hidden mb-3">
          <img
            src={imageUrl}
            alt="trending post"
            className="w-full h-[260px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105" /* Increased height */
          />
          <div className="absolute top-2 left-2 bg-black/60 group-hover:bg-[#D69ADE] backdrop-blur-sm rounded-full px-2 py-2 transition-colors duration-300">
            <div className="flex items-center gap-1 text-xs font-semibold text-white">
              <i className="ri-search-line text-xs"></i>
              <span>{category}</span>
            </div>
          </div>
        </div>
        <span className="text-xl font-medium line-clamp-4 color-text-in-trend-post">
          {title}
        </span>
      </div>
    </Link>
  );
};

export default TrendingPost;
