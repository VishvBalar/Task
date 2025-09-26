import React, { use, useState, useEffect } from "react";

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex < images.length - 1) {
          setCurrentIndex(prevIndex + 1);
        } else {
          setCurrentIndex(0);
        }
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const increase = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const decrese = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(images.length - 1);
    }
  };

  const images = [
    "https://picsum.photos/id/1015/800/400",
    "https://picsum.photos/id/1016/800/400",
    "https://picsum.photos/id/1018/800/400",
  ];

  return (
    <>
      <div>
        <h2>Accordian</h2>
      </div>
      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            style={{ width: "900px", height: "380px", borderRadius: "10px" }}
            src={images[currentIndex]}
          ></img>
          <div
            style={{
              display: "flex",
              width: "100px",
              margin: "auto",
              opacity: "65%",
            }}
          >
            <button
              style={{
                position: "absolute",
                top: "55%",
                left: "21%",
                borderRadius: "50%",
              }}
              onClick={() => decrese()}
            >
              ←
            </button>
            <button
              style={{
                position: "absolute",
                top: "55%",
                left: "75%",
                borderRadius: "50%",
              }}
              onClick={() => increase()}
            >
              →
            </button>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "20%",
              left: "48%",
              display: "flex",
              gap: "10px",
            }}
          >
            <div
              onClick={() => setCurrentIndex(0)}
              style={{
                borderRadius: "10px",
                height: "10px",
                width: "10px",
                backgroundColor: "white",
                opacity: "65%",
              }}
            ></div>
            <div
              onClick={() => setCurrentIndex(1)}
              style={{
                borderRadius: "10px",
                height: "10px",
                width: "10px",
                backgroundColor: "white",
                opacity: "65%",
              }}
            ></div>
            <div
              onClick={() => setCurrentIndex(2)}
              style={{
                borderRadius: "10px",
                height: "10px",
                width: "10px",
                backgroundColor: "white",
                opacity: "65%",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
