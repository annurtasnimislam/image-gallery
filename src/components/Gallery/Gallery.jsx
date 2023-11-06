import classes from "./Gallery.module.css";
import React, { useState } from "react";
import Upload from "./UploadImg/Upload";
import Header from "./Header/Header";

export default function Gallery() {
  const [images, setImages] = useState([
    { id: 1, src: "image-1.webp" },
    { id: 2, src: "image-2.webp" },
    { id: 3, src: "image-3.webp" },
    { id: 4, src: "image-4.webp" },
    { id: 5, src: "image-5.webp" },
    { id: 6, src: "image-6.webp" },
    { id: 7, src: "image-7.webp" },
    { id: 8, src: "image-8.webp" },
    { id: 9, src: "image-9.webp" },
    { id: 10, src: "image-10.jpeg" },
    { id: 11, src: "image-11.jpeg" },
  ]);

  const [selectedImg, setSelectedImg] = useState([]);
  const count = selectedImg.length;

  // ***** Image Drag & Drop *****
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    const sourceIndex = e.dataTransfer.getData("index");
    const newImages = [...images];
    const [draggedImage] = newImages.splice(sourceIndex, 1);
    newImages.splice(targetIndex, 0, draggedImage);
    setImages(newImages);
  };

  // ***** Checkbox Handle *****
  const handleCheckBox = (index) => {
    if (selectedImg.includes(index)) {
      setSelectedImg(selectedImg.filter((i) => i !== index));
    } else {
      setSelectedImg([...selectedImg, index]);
    }
  };

  // ***** Image Delete *****
  const handleDelete = () => {
    const updatedImages = images.filter(
      (_, index) => !selectedImg.includes(index)
    );
    setImages(updatedImages);
    setSelectedImg([]);
  };

  return (
    <div className={classes.gallery}>
      <Header count={count} handleDelete={handleDelete} />
      <div className={classes.container}>
        {images.map((image, index) => (
          <div
            key={image.id}
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            draggable
          >
            <input
              type="checkbox"
              checked={selectedImg.includes(index)}
              onChange={() => handleCheckBox(index)}
              className={classes.checkbox}
            />
            <img
              className={classes.img}
              src={`/assets/${image.src}`}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
        <Upload />
      </div>
    </div>
  );
}
