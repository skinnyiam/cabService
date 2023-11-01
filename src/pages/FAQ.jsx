import React, { useState } from 'react';
import { Accordion , AccordionHeader } from 'react-bootstrap';
import faqIcon from '../assets/faqIcon.svg';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';




const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "How do I book a cab with Intrciticabs?",
      answer:
        "You can easily book a cab with Intrciticabs through our website. Simply enter your pick-up and drop-off locations, select the type of vehicle you need, choose your preferred payment method, and confirm your booking. You can also call our customer support team to make a reservation over the phone.",
      isOpen: false,
    },
    {
      question: "What types of vehicles does Intrciticabs offer?",
      answer:
        " Intrciticabs offers a range of vehicles to suit your needs. Our fleet includes standard sedans, SUVs, luxury cars, and even larger vehicles for group travel. You can select the vehicle that best fits your requirements when booking.",
      isOpen: false,
    },
    {
      question: "How much does a ride with Intrciticabs cost?",
      answer:
        "The cost of a ride with Intrciticabs depends on factors such as the distance traveled, the type of vehicle selected, and any additional services or options you choose. To get an accurate fare estimate, you can use our fare calculator on the website or app before booking.",
      isOpen: false,
    },
    {
      question: "Do you offer airport and hotel transfers?",
      answer:
        "Yes, we provide airport and hotel transfer services. Whether you need a ride to or from the airport or a hotel, Intrciticabs is here to ensure a safe and convenient journey. You can pre-book these transfers for added peace of mind",
      isOpen: false,
    },
    {
      question: "Is it safe to travel with Intrciticabs?",
      answer:
        "Safety is our top priority. All our drivers undergo background checks, and our vehicles are regularly maintained to meet safety standards. We also have a customer support team available 24/7 to assist you in case of any issues during your journey. Additionally, we provide real-time tracking for your ride and offer the option to share your trip details with loved ones for added security.",
      isOpen: false,
    },
    // Add more FAQ items here
  ]);

  const toggleFaq = (index) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index].isOpen = !updatedFaqs[index].isOpen;
    setFaqs(updatedFaqs);
  };

  return (
    <div className="faq">
      <h6>BOOKING AND RESERVATIONS</h6>
                <h2>Frequently Asked <span>Question's</span></h2>
      <div className="faq-content">
        <div className="faq-side-image">
          <img src={faqIcon} alt="Side Image" />
        </div>
        <div className="faq-main-content">
         
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${faq.isOpen ? "open" : ""}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question hover:bg-[#fec901]">{faq.question}</div>
              <div className="faq-answer">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
