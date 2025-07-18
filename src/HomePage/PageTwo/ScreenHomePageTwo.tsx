// ScreenHomePageTwo.tsx
import React from "react";
import SideBar from "../PageOne/SideBar";
import TrendingPost from "./TrendingPost";
import "../../styles/customHomeScreenTwo.css";
const ScreenHomePageTwo = () => {
  // Sample data with different images and content
  const trendingPosts = [
    {
      imageUrl: "https://picsum.photos/id/100/200/300",
      category: "AI Research",
      title:
        "Even Neanderthals had distinct preferences when it came to making dinner, study suggests",
    },
    {
      imageUrl: "https://picsum.photos/id/200/200/300",
      category: "AI Research",
      title:
        "New breakthrough in quantum computing promises faster calculations",
    },
    {
      imageUrl: "https://picsum.photos/id/300/200/300",
      category: "AI Research",
      title:
        "Researchers discover new species of deep-sea creatures Even Neanderthals had distinct preferences when it came to making dinner, study suggests",
    },
    {
      imageUrl: "https://picsum.photos/id/400/200/300",
      category: "AI Research",
      title:
        "1 2 3 4 5 v6 Study shows benefits of intermittent fasting for longevity",
    },
    {
      imageUrl: "https://picsum.photos/id/500/200/300",
      category: "AI Research",
      title: "Solar energy adoption reaches record high in 2023",
    },
    {
      imageUrl: "https://picsum.photos/id/100/200/300",
      category: "AI Research",
      title:
        "Even Neanderthals had distinct preferences when it came to making dinner, study suggests",
    },
    {
      imageUrl: "https://picsum.photos/id/200/200/300",
      category: "AI Research",
      title:
        "New breakthrough in quantum computing promises faster calculations",
    },
    {
      imageUrl: "https://picsum.photos/id/400/200/300",
      category: "AI Research",
      title:
        "1 2 3 4 5 v6 Study shows benefits of intermittent fasting for longevity",
    },
    {
      imageUrl: "https://picsum.photos/id/400/200/300",
      category: "AI Research",
      title:
        "1 2 3 4 5 v6 Study shows benefits of intermittent fasting for longevity",
    },
    {
      imageUrl: "https://picsum.photos/id/500/200/300",
      category: "AI Research",
      title: "Solar energy adoption reaches record high in 2023",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row">
      <SideBar />
      <div className="flex-1 py-8 px-4 flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {trendingPosts.map((post, index) => (
            <TrendingPost
              key={index}
              imageUrl={post.imageUrl}
              category={post.category}
              title={post.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScreenHomePageTwo;
