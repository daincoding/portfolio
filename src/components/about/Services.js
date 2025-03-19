import { MdDraw, MdMobileFriendly } from "react-icons/md";
import { GoFileCode } from "react-icons/go";
import { CgMusicSpeaker } from "react-icons/cg";

const services = [
  {
    title: "Web Design",
    description:
      "The most modern and high-quality design made at a professional level.",
    icon: <MdDraw size={50} className="service-icon shimmer-effect" />,
  },
  {
    title: "Web Development",
    description:
      "High-quality development of sites at the professional level.",
    icon: <GoFileCode size={50} className="service-icon shimmer-effect" />,
  },
  {
    title: "Mobile Friendly",
    description:
      "Mobile first? Yes, but always have the focus on all scales!",
    icon: <MdMobileFriendly size={50} className="service-icon shimmer-effect" />,
  },
  {
    title: "Sound Design",
    description:
      "Whenever you need a sound solution, I can create it! From UI sounds to full compositions.",
    icon: <CgMusicSpeaker size={50} className="service-icon shimmer-effect" />,
  },
];

const Services = () => {
  return (
    <section className="service">
      <h3 className="h3 service-title">This is what I do...</h3>

      <ul className="service-list">
        {services.map((service, index) => (
          <li key={index} className="service-item">
            <div className="service-icon-box">{service.icon}</div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">{service.title}</h4>
              <p className="service-item-text">{service.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;