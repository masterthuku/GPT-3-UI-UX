import React from "react";
import "./features.css";
import Feature from "../../components/feature/Feature.tsx";

const featuresData = [
  {
    title:'Provide decent outputs.',
    text:'Whenever a large amount of text needs to be generated from a machine based on some small amount of text input, GPT-3 provides a good solution. Large language models, like GPT-3, are able to provide decent outputs given a handful of training examples',
  },
  {
    title:'It can perform a wide bandwidth of tasks.',
    text:'As with any automation, GPT-3 would be able to handle quick repetitive tasks, enabling humans to handle more complex tasks that require a higher degree of critical thinking. There are many situations where it is not practical or efficient to enlist a human to generate text output, or there might be a need for automatic text generation that seems human.'
  },
  {
    title:'Lightweight and can run on a consumer laptop',
    text:'Since it is web based it is very easy to run it on almost any machine provided you it is connected to the internet'
  },
  {
    title:'It is very powerful and reliable',
    text:'It is incredible not only for its numerous applications, but also for demonstrating the power of artificial intelligence and offering an early look at future possibilities.'
  }
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into The
          Future Toady & Make it Happen.
        </h1>
        <p>Request early access to get started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) =>(
          <Feature title={item.title} text={item.text} key={item.title+index}/>
        ))}
      </div>
    </div>
  );
};

export default Features;
