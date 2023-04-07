import React, { useState } from "react";
import MemeBanner from "../images/reactjs_img.jpg";

const MemeApp = () => {
  // const [topText, settopText] = useState("");
  // const [bottomText, setbottomText] = useState("");

  const [loadImage, setloadImage] = useState("");
  const [meme, setmeme] = useState({
    topText: "Top Text",
    bottomText: "Bottom Text",
    imageBanner: MemeBanner,
  });

  const { topText, bottomText, imageBanner } = meme;

  const handleChange = (e) => {
    setmeme({
      ...meme,
      [e.target.name]: e.target.value,
    });
  };

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

  const handleSubmit = () => {
    setmeme({
      ...meme,
      imageBanner: loadImage,
    });
  };

  return (
    <div className="meme-app">
      <h2>Meme App</h2>
      {/* <div className="input-1">
        <label htmlFor="input1">
          <input
            type="text"
            placeholder="Enter top text"
            id="input1"
            value={topText}
            onChange={(e) => settopText(e.target.value)}
          />
        </label>
      </div>
      <br />
      <div className="input-2">
        <label htmlFor="input1">
          <input
            type="text"
            placeholder="Enter top text"
            id="input1"
            value={bottomText}
            onChange={(e) => setbottomText(e.target.value)}
          />
        </label>
      </div> */}
      <div className="color-pick">
        <div className="input-1">
          <label htmlFor="input1">Top Text:</label>
          &nbsp; &nbsp;
          <input
            type="text"
            placeholder="Enter top text"
            id="input1"
            value={topText}
            name="topText"
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="input-2">
          <label htmlFor="input2">Bottom Text:</label>
          &nbsp; &nbsp;
          <input
            type="text"
            placeholder="Enter top text"
            id="input2"
            value={bottomText}
            name="bottomText"
            onChange={handleChange}
          />
        </div>
        <input type="file" onChange={handleImageChange} name="imageBanner" />
        &nbsp; &nbsp;
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <MemeContainer
        bottomText={bottomText}
        topText={topText}
        imageBanner={imageBanner}
      />
    </div>
  );
};

const MemeContainer = (props) => {
  const { topText, bottomText, imageBanner } = props;

  return (
    <div className="meme-container">
      <p className="top-text">{topText}</p>
      <p className="bottom-text">{bottomText}</p>
      <img src={imageBanner} alt="Meme Banner" />
    </div>
  );
};

export default MemeApp;
