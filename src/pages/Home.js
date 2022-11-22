import React from "react";
import ShopCard from "../components/ShopCard";

const Home = () => {
  const list = [
    {
      id: 1,
      title: "Гори",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, quibusdam.",
      img: "/img/foto1.jpg",
    },
    {
      id: 2,
      title: "Спуск річкою ",
      desc: "Lorem ipsum dolor sit amet, consectetur. Illum, quibusdam.",
      img: "/img/foto2.jpg",
    },
    {
      id: 3,
      title: "Гірське озеро",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum.",
      img: "/img/foto3.jpg",
    },
    {
      id: 4,
      title: "Озеро високо в горах",
      desc: "Lorem sit amet, consectetur adipisicing elit. Illum, quibusdam.",
      img: "/img/foto4.jpg",
    },
    {
      id: 5,
      title: "Туманна гірська річка.",
      desc: "Lorem ipsum dolor sit amet, Illum, quibusdam.",
      img: "/img/foto5.jpg",
    },
    {
      id: 6,
      title: "Мальовничі нічні зорі.",
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
