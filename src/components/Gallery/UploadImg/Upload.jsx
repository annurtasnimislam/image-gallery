import React, { useState } from "react";
import classes from "./Upload.module.css";
import icon from "../../../assets/add-image.png";

export default function Upload() {
  const [image, setImage] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className={classes.container}
    >
      {image ? (
        <img src={image} alt="Dropped" className={classes.image} />
      ) : (
        <div className={classes.box}>
          <img src={icon} />
          <p style={{ textAlign: "center" }}>Add Image</p>
        </div>
      )}
    </div>
  );
}
