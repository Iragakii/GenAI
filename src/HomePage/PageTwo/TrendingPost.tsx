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
    <Link to={linkUrl} className="block w-full group">
      <div className=" relative rounded-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-[1.02]">
        <img
          src={imageUrl}
          alt={title}
          className=" w-full h-auto object-cover transition-transform duration-300"
          loading="lazy"
        />
        <div className=" trending-category absolute top-2 left-2 bg-black/60 group-hover:bg-[#393E46] group-hover:backdrop-blur-2xl backdrop-blur-sm rounded-full p-2 transition-all duration-300 ease-in-out hover:scale-105">
          <div className=" flex items-center gap-1 text-[8px] font-semibold text-white">
            <i className="ri-search-line text-[8px]"></i>
            <span className="category-text">{category}</span>
          </div>
        </div>

        <div className="back-title absolute bottom-2 left-2 right-2 bg-black/60 group-hover:bg-[#222831] backdrop-blur-sm p-2 rounded-2xl transition-all duration-300 ease-in-out">
          <span className="trending-title text-sm font-medium text-white line-clamp-2">
            {title}
          </span>
        </div>
      </div>
    </Link>
  );
};
export default TrendingPost;
