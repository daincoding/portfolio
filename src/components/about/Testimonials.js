"use client";

import { useState } from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";

const testimonialsData = [
  {
    name: "Hauke Gerdes",
    date: "24 April, 2024",
    img: "/assets/Test_HG.png",
    text: `To Whom It May Concern, I am delighted to write this letter of recommendation for Alexander Panske, who served as an outstanding Audio Designer at Blankhans during the development of our game Coreborn. Alexander's contributions to our project were nothing short of exceptional, and his talent and dedication greatly enriched our team. Alexander demonstrated remarkable creativity and skill in his role as the sole Audio Designer for Coreborn. He was responsible for creating all audio elements of the game, including music, sound effects (SFX), and recordings, which significantly enhanced the immersive experience for players. Alexander's work consistently received high praise from both our internal team members and our customers, highlighting his ability to deliver outstanding audio that elevated the quality of our game. One of Alexander's notable strengths is his versatility in audio production. He is proficient in composing music, designing intricate sound effects, and conducting his own recordings, showcasing a comprehensive skill set that is essential for creating dynamic and engaging audio content. Alexander's ability to blend different genres and conduct thorough research allowed him to craft unique and captivating audio experiences within Coreborn.
Beyond his technical abilities, Alexander's communication skills were instrumental in ensuring the success of our audio design efforts. He effectively communicated his ideas and collaborated with other team members to align the audio direction with the overall vision of the game. His proactive approach and willingness to assist others demonstrated his commitment to delivering excellence and fostering a collaborative work environment.
Moreover, Alexander's exceptional handling of workload and time management skills were evident throughout the project. Despite tight deadlines and evolving requirements, he consistently delivered high-quality audio assets on schedule, demonstrating his reliability and professionalism.
`
  },
  {
    name: "Rob de Wit",
    date: "10 April, 2024",
    img: "/assets/Test_RdW.png",
    text: `I have had the pleasure of working with Alex at Blankhans. During this time Alex continuously demonstrated a good understanding of development process and a wide array of audio responsibilities, which was remarkable as there was no prior experience in the development field.

Managing Alex was one of the more enjoyable parts of my responsibilities. Alex is self motivated, eager to learn and receptive to feedback. The quality of work was high and delivered in a consistent and timely manner. The title we worked on repeatedly got very positive feedback for the music and sound as a whole, something Alex had complete ownership of and deserves all credits for.

Alex was a great colleague, not just as a talented composer and sound designer, but equally because of his person. Kind, joyful and a real dedication to his work made working with Alex a delight. Needless to say, I would recommend Alex to any team in need of a composer and/or audio designer.`,
  },
  {
    name: "Markus Schneider",
    date: "12 April, 2024",
    img: "/assets/Test_MS.png",
    text: `Alex is not only an extremely talented sound designer with a passion for audio, sfx and music that is unheard of. Whenever Coreborn was streamed the music and sfx were mentioned by the creator and its community as being extraordinary in Coreborn. Alex is also a loyal professional going above and beyond. Alex always stepped in when there was something to pick-up in the company, no matter what it was.`,
  },
  {
    name: "Arash Amiri",
    date: "11 April, 2024",
    img: "/assets/Test_AA.png",
    text: `I wholeheartedly endorse Alex as an exceptional addition to any game development team. As a highly creative and technically proficient sound engineer, Alex has swiftly produced inspiring sounds and complete music scores that significantly enhanced our game's auditory landscape. Moreover, his proficiency with the Unreal Engine has been a substantial asset to our workflow.

Beyond his technical skills, Alex has been an invaluable resource in community management. His active engagement with our community and insightful analysis of player feedback during our early access phase have been instrumental in shaping our development strategy.

Additionally, Alex's contributions to the game design team have been both meaningful and impactful. His innovative ideas have not only enriched our game design but have also been greatly appreciated by the team for their practicality and relevance.

In summary, Alex's blend of technical expertise, community engagement, and creative input into game design marks him as an extraordinary asset to any game development endeavor.`,
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
                
                  <Image src={testimonial.img} alt={testimonial.name} width={60} height={60} className="testimonials-avatar-box"/>
              
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
              <FaQuoteLeft size={40} className="quote-icon shimmer-effect" />
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