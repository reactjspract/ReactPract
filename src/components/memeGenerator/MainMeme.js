import React, { useState } from "react";
import Image from "../images/reactjs_img.jpg";

const MainMeme = () => {
  const [loadImage, setloadImage] = useState("");
  const [imgText, setimgText] = useState({
    topText: "Top text",
    bottomText: "Bottom text",
    imgLoader: Image,
  });

  const handleImageChange = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = () => {
      console.log(reader.result);
      setloadImage(reader.result);

      //base64encoded string
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };

  const handleChange = (e) => {
    setimgText({ ...imgText, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setimgText({
      ...imgText,
      imgLoader: loadImage,
    });
  };

  return (
    <>
      <main className="form-sec">
        <div className="form">
          <input
            type="text"
            className="text1"
            placeholder="Top Text"
            onChange={handleChange}
            // value={newValues} // for add item values
            value={imgText.topText}
            name="topText"
          />
          <input
            type="text"
            className="text2"
            placeholder="Bottom Text"
            value={imgText.bottomText}
            onChange={handleChange}
            name="bottomText"
          />
          <br />
          <input type="file" onChange={handleImageChange} name="imgLoader" />
          <button className="button" onClick={handleSubmit}>
            Get a meme image
          </button>
        </div>
        <div>
          <p>{imgText.topText}</p>
          <p>{imgText.bottomText}</p>
          <img src={imgText.imgLoader} alt="img" style={{ width: "30%" }} />
        </div>
      </main>
    </>
  );
};

export default MainMeme;
