import { Md10K, MdDraw, MdMobileFriendly } from "react-icons/md"
import { GoFileCode } from "react-icons/go"
import { CgMusicSpeaker } from "react-icons/cg"

const Services = () => {
  return (
    <section className="service">

          <h3 className="h3 service-title">What i'm doing</h3>

          <ul className="service-list">

            <li className="service-item">

              <div className="service-icon-box">
                <MdDraw width="40"/>
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Web design</h4>

                <p className="service-item-text">
                  The most modern and high-quality design made at a professional level.
                </p>
              </div>

            </li>

            <li className="service-item">

              <div className="service-icon-box">
                <GoFileCode width="40"/>
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Web development</h4>

                <p className="service-item-text">
                  High-quality development of sites at the professional level.
                </p>
              </div>

            </li>

            <li className="service-item">

              <div className="service-icon-box">
                <MdMobileFriendly  width="40"/>
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Mobile apps</h4>

                <p className="service-item-text">
                  Professional development of applications for iOS and Android.
                </p>
              </div>

            </li>

            <li className="service-item">

              <div className="service-icon-box">
                <CgMusicSpeaker  width="40"/>
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Photography</h4>

                <p className="service-item-text">
                  I make high-quality photos of any category at a professional level.
                </p>
              </div>

            </li>

          </ul>

        </section>
  )
}

export default Services