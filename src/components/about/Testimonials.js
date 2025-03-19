"use client";

import { useState } from "react";
import Image from "next/image";

const testimonialsData = [
  {
    name: "Daniel Lewis",
    date: "14 June, 2021",
    img: "/assets/images/avatar-1.png",
    text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client.",
  },
  {
    name: "Jessica Miller",
    date: "10 March, 2021",
    img: "/assets/images/avatar-2.png",
    text: "Great work! Richard has been a wonderful asset to our team. Professional and always delivers on time.",
  },
  {
    name: "Emily Evans",
    date: "25 September, 2021",
    img: "/assets/images/avatar-3.png",
    text: "Absolutely amazing experience working with Richard! Highly recommended.",
  },
  {
    name: "Henry William",
    date: "7 December, 2021",
    img: "/assets/images/avatar-4.png",
    text: "Fantastic work! Would definitely hire Richard again in the future.",
  },
];

const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonialsData.map((testimonial, index) => (
            <li key={index} className="testimonials-item">
              <div className="content-card" onClick={() => openModal(testimonial)}>
                <figure className="testimonials-avatar-box">
                  <Image src={testimonial.img} alt={testimonial.name} width={60} height={60} />
                </figure>
                <h4 className="h4 testimonials-item-title">{testimonial.name}</h4>
                <div className="testimonials-text">
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Modal */}
      {isModalOpen && selectedTestimonial && (
        <div className="modal-container active">
          <div className="overlay active" onClick={closeModal}></div>

          <section className="testimonials-modal">
            <button className="modal-close-btn" onClick={closeModal}>
              ✖
            </button>

            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <Image src={selectedTestimonial.img} alt={selectedTestimonial.name} width={80} height={80} />
              </figure>
              <Image src="/assets/images/icon-quote.svg" alt="quote icon" width={40} height={40} />
            </div>

            <div className="modal-content">
              <h4 className="h3 modal-title">{selectedTestimonial.name}</h4>
              <p>{selectedTestimonial.date}</p>
              <div>
                <p>{selectedTestimonial.text}</p>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Testimonials;