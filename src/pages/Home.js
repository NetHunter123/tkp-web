import React from "react";
import ShopCard from "../components/ShopCard";

const Home = () => {
  const list = [
    {
      id: 1,
      title: "Lorem ipsum ",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, quibusdam.",
      img: "/img/foto1.jpg",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit ",
      desc: "Lorem ipsum dolor sit amet, consectetur. Illum, quibusdam.",
      img: "/img/foto2.jpg",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor ",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum.",
      img: "/img/foto3.jpg",
    },
    {
      id: 4,
      title: "Lorem dolor amet, adipisicing elit. Illum, quibusdam.",
      desc: "Lorem sit amet, consectetur adipisicing elit. Illum, quibusdam.",
      img: "/img/foto4.jpg",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor.",
      desc: "Lorem ipsum dolor sit amet, Illum, quibusdam.",
      img: "/img/foto5.jpg",
    },
    {
      id: 6,
      title: "consectetur adipisicing elit. Illum, quibusdam.",
      desc: "Lorem ipsum dolor, quibusdam.",
      img: "/img/foto6.jpg",
    },
  ];

  return (
    <>
      <div className={"home"}>
        <div className="goods">
          {list.map((item, i = 1) => {
            return (
              <ShopCard
                key={i++}
                img={item.img}
                title={item.title}
                desc={item.desc}
              />
            );
          })}
        </div>
      </div>
      ;
    </>
  );
};

export default Home;
