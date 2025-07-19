// ScreenHomePageTwo.tsx
import React from "react";
import SideBar from "../PageOne/SideBar";
import TrendingPost from "./TrendingPost";
import "../../styles/customHomeScreenTwo.css";
import Masonry from "react-masonry-css";
const ScreenHomePageTwo = () => {
  // Sample data with different images and content
  const trendingPosts = [
    {
      imageUrl:
        "https://i.guim.co.uk/img/media/91fbf42ce00155d57256705741d03c425d073b6b/293_0_2539_2032/master/2539.jpg?width=620&dpr=2&s=none&crop=none",
      //https://www.genspark.ai/news?nbid=www.theguardian.com_music_2025_jul_17_connie-francis-singer-die&nbch=entertainment&channel=entertainment#item-www.theguardian.com_music_2025_jul_17_connie-francis-singer-die
      category: "AI Research",
      title: "Even Neanderthals had distinct preferences when it came to",
    },
    {
      imageUrl:
        "https://i.pinimg.com/1200x/c2/31/48/c2314893161f270e6b8dd30f9087bc43.jpg",
      category: "AI Research",
      title:
        "New breakthrough in quantum computing promises faster distinct preferences when it ",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/63/1c/2d/631c2d5fc2599cff65f5144507dbce4e.jpg",
      category: "AI Research",
      title:
        "Researchers discover new species of deep-sea creatures Even Neanderthals had distinct preferences when it came to making dinner, study suggests",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/48/ea/05/48ea0549b3a0985c635993ebfc698e7b.jpg",
      category: "AI Research",
      title:
        "Study shows benefits of intermittent fasting for longevit distinct preferences when it   ",
    },
    {
      imageUrl:
        "https://i.pinimg.com/1200x/f0/7e/dd/f07edd3cf298b545f147914272bf20eb.jpg",
      category: "AI Research",
      title:
        "Solar energy adoption reaches record high in 2023 longevity longevity distinct preferences when it came to making dinner, study suggests distinct preferences when it came to making dinner, study suggestsdistinct preferences when it came to making dinner, study suggests distinct preferences when it came to making dinner, study suggestsdistinct preferences when it came to making dinner, study suggests distinct preferences when it came to making dinner, study suggests",
    },
    {
      imageUrl:
        "https://i.pinimg.com/1200x/71/d8/1f/71d81fdc8ae26b173cf5635502a4c2f6.jpg",
      category: "AI Research",
      title:
        "Even Neanderthals had distinct preferences when it came to making dinner, study suggests",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/5f/00/1b/5f001b48f1d2fe417a882e851157d939.jpg",
      category: "AI Research",
      title:
        "New breakthrough in quantum computing promises faster calculations",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/cb/37/ef/cb37eff129a1b7facf8b2c4db28326bd.jpg",
      category: "AI Research",
      title:
        "Study shows benefits of intermittent fasting for longevity jgfjjgfjjgjgjgjgjgjgjgj",
    },
    {
      imageUrl:
        "https://i.pinimg.com/1200x/25/33/04/253304c3c3c51e03dfda76acc818210a.jpg",
      category: "AI Research",
      title:
        "1 2 3 4 5 v6 Study shows benefits of intermittent fasting for longevity sagdgsdgagagagdagdsgdgsgs sdafsafsafasfasfasfasf",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/b4/ad/b8/b4adb8aa723810fead1dc903933e3557.jpg",
      category: "AI Research",
      title: "Solar energy adoption reaches record high in 2023",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/05/7f/1e/057f1ebf66cde5c5544ed1f9acf7dbb0.jpg",
      category: "AI Research",
      title:
        "New breakthrough in quantum computing promises faster calculations",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/87/80/de/8780dee425b04c421e5d116f6ddde93f.jpg",
      category: "AI Research",
      title:
        "Study shows benefits of intermittent fasting for longevity jgfjjgfjjgjgjgjgjgjgjgj",
    },
    {
      imageUrl:
        "https://i.pinimg.com/1200x/12/3d/1c/123d1c75513e5a9001f62ff7ae763e56.jpg",
      category: "AI Research",
      title:
        "1 2 3 4 5 v6 Study shows benefits of intermittent fasting for longevity sagdgsdgagagagdagdsgdgsgs sdafsafsafasfasfasfasf",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/c8/fb/41/c8fb41749423077c818b42c5644ef1e2.jpg",
      category: "AI Research",
      title: "Solar energy adoption reaches record high in 2023",
    },
    {
      imageUrl:
        "https://i.pinimg.com/1200x/01/5f/2d/015f2d34dd6ee67a37a03c25fec2f107.jpg",
      category: "AI Research",
      title: "Solar energy adoption reaches record high in 2023",
    },
  ];
  // các ảnh trong 2 hàng phải đồng bộ về style để thu hút và có cùng logic với pinterest
  // áp dụng ai gent giống gen tất cả ảnh thành về style gliby , cùng màu rồi mới add vào tin
  // tốt cho hướng đi lâu dài của trang web và đảm bảo chất lượng ui hàng đầu về web ai agent
  const breakpointColumnsObj = {
    default: 4,
    1600: 5,
    1300: 4,
    1200: 3,
    1100: 2,
    900: 2,
    700: 2,
    896: 2,
    500: 2,
    375: 1,
  };

  return (
    <div className="flex flex-col sm:flex-row min-h-screen">
      <SideBar />
      <div className="flex-1 p-[11px] sm:pl-[60px] lg:pl-[67px]">
        <div className="max-w-[1072px] mx-auto">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {trendingPosts.map((post, index) => (
              <div key={index} className="mb-[5px] px-[3px] sm:px-[5px]">
                <TrendingPost
                  imageUrl={post.imageUrl}
                  category={post.category}
                  title={post.title}
                  linkUrl={
                    index === 0
                      ? "https://www.pinterest.com/pin/3377768468159719/"
                      : index === 1
                      ? "https://www.pinterest.com/pin/2674081025477864/"
                      : "#"
                  }
                />
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </div>
  );
};
export default ScreenHomePageTwo;
