import React from "react";
import HeroSection from "../components/HeroSection";

const About = () => {
  const data = {
    name: "About E-Commerce",
    para: "E-commerce (electronic commerce) is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet. These business transactions occur either as business-to-business (B2B), business-to-consumer (B2C), consumer-to-consumer or consumer-to-business.The terms e-commerce and e-business are often used interchangeably. The term e-tail is also sometimes used in reference to the transactional processes that make up online retail shopping. In the last two decades, widespread use of e-commerce platforms such as Amazon and eBay has contributed to substantial growth in online retail. In 2011, e-commerce accounted for 5% of total retail sales, according to the U.S. Census Bureau. By 2020, with the start of the COVID-19 pandemic, it had risen to over 16% of retail sales.",
    btnText: "Know More",
  };
  return (
    <>
      <HeroSection myData={data} />
    </>
  );
};

export default About;
