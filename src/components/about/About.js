import Clients from "./Clients"
import Services from "./Services"
import Testimonials from "./Testimonials"

const About = () => {
  return (
    <article className="about  active" data-page="about">

        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        <section className="about-text">
          <p>
          Hi! I’m a passionate web developer with a love for frontend design and user experiences. 
          </p>

          <p>
          My background in sound design and composing for a game studio sparked my interest in coding and UI/UX because I helped out in this area while working there, and I’ve since gained experience in both frontend and backend technologies. I’m always eager to learn and strive to create seamless, user-friendly designs.
          </p>
        </section>
    <Services />
    <Testimonials />
    </article>
  )
}

export default About