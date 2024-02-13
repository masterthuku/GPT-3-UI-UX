import React from "react";
import "./possibility.css";
import possibility from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibility} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Intergrate GPT-3 with Virtual Reality</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your iamgination
        </h1>
        <p>
          Virtual and augmented reality (VR/AR) applications have been gaining
          popularity in recent years, allowing users to immerse themselves in a
          digital environment and interact with it in a more intuitive and
          natural way. However, the potential of VR/AR can be further enhanced
          by integrating language technology such as Generative Pre-trained
          Transformer 3 (GPT-3), an artificial intelligence (AI) model that can
          generate human-like language
        </p>
        <h4>Request for early access and get started</h4>
      </div>
    </div>
  );
};

export default Possibility;
