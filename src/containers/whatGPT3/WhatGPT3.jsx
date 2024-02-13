import React from "react";
import "./whatGPT3.css";
import Feature from "../../components/feature/Feature.tsx";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3?"
          text="GPT-3, or the third-generation Generative Pre-trained Transformer, is a neural network machine learning model trained using internet data to generate any type of text. Developed by OpenAI, it requires a small amount of input text to generate large volumes of relevant and sophisticated machine-generated text."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="PT-3 chatbots are programmable artificial intelligence applications built on development work by OpenAPI and powered by the GPT-3 language model." />
        <Feature title="Knowledgebase" text="AI Knowledge Base: What is it? An AI knowledge base is simply one that has been transformed with AI to create dynamic customer experiences. It increases the likelihood that customers find the right answers without human intervention" />
        <Feature title="Education" text="GPT's vast knowledge base can provide students with instant access to information, enhancing their research abilities and expanding their understanding of various subjects. Additionally, the language generation capabilities of GPT can foster creativity and help students develop effective communication skills." />
      </div>
    </div>
  );
};

export default WhatGPT3;
