"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

import result1 from "../../public/asset/1.png";
import result2 from "../../public/asset/2.png";
import result3 from "../../public/asset/3.png";
import result4 from "../../public/asset/4.png";
import result5 from "../../public/asset/5.png";
import result6 from "../../public/asset/6.png";

export default function Home() {
  type States = "inactive" | "active" | "result";

  const [isActive, setIsActive] = useState<States>("inactive");
  const [result, setResult] = useState<StaticImageData>();

  const handleTrigger = () => {
    setIsActive("active");
    let result = Math.round(Math.random() * 6);
    switch (result) {
      case 1:
        setResult(result1);
        break;
      case 2:
        setResult(result2);
        break;
      case 3:
        setResult(result3);
        break;
      case 4:
        setResult(result4);
        break;
      case 5:
        setResult(result5);
        break;
      case 6:
        setResult(result6);
        break;
      default:
        setResult(result1);
        break;
    }
    setTimeout(() => {
      setIsActive("result");
    }, 2500);
  };

  return (
    <div className="relative">
      <div
        className="absolute inset-0 h-screen w-screen
      bg-[url('https://i.redd.it/something-ive-just-noticed-about-the-art-in-the-base-egos-v0-sm2r0xssy4ma1.png?width=1527&format=png&auto=webp&s=3311a26ba790e9ef787db8c50ab4c3345d06745b')]
      "
        // style={{
        //   backgroundImage: `url(${background})`,
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center align-middle h-screen w-screen">
          <div
            className="h-fit w-fit cursor-pointer hover:border-2 hover:border-blue-600"
            onClick={handleTrigger}
          >
            {isActive === "inactive" && (
              <div className="filter-none z-10 w-40 h-72 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHszxNQZI1YgaH5UWqbI5ohGRiz7VG9Ed9yZ9hZ_-Hyw&s')]" />
            )}
          </div>
          {isActive === "inactive" && (
            <div className="text-white uppercase text-xl">click on rodya</div>
          )}

          {isActive === "active" && (
            <div className="filter-none z-10 w-[280px] h-96 bg-[url('https://media.tenor.com/JOxcK_yFFCIAAAAe/rodya-ego.png')]" />
          )}
          {isActive === "result" && result && (
            <Image src={result} alt={""} width={200} height={400} />
          )}
        </div>
      </div>

      {isActive === "result" && (
        <div
          className="absolute top-5 right-5 text-white text-xl uppercase cursor-pointer hover:underline"
          onClick={() => setIsActive("inactive")}
        >
          REDO
        </div>
      )}
    </div>
  );
}
