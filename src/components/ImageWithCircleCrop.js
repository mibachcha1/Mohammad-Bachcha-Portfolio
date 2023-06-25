import React from "react";

const ImageWithCircleCrop = ({ imageUrl }) => {
  return (
    <div className="w-48 h-48 rounded-full overflow-hidden">
      <div
        className="w-full h-full object-cover"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center 1100px",
          borderRadius: "50%",
        }}
      ></div>
    </div>
  );
};

export default ImageWithCircleCrop;