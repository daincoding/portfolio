import Image from "next/image"
import dain from "../../public/assets/DainAvatar.jpg"
import { FaChevronDown } from "react-icons/fa"
import { CiMail } from "react-icons/ci"

const Sidebar = () => {
  return (
    <aside>
        <div>
            <figure>
                <Image src={dain} alt="Avatar"/>
            </figure>
            <div>
                <h1>Alexander Panske</h1>
                <p>Web Developer</p>
            </div>
            <button>
                <span>Show Contacts</span>
                    <FaChevronDown />
            </button>
        </div>
        <div>
            <div></div>
            <ul>
                <li>
                    <div>
                        <CiMail />
                    </div>
                    <div>
                        <p>Email</p>
                        <a href="mailto:alexander.panske@yahoo.com">alexander.panske@yahoo.com</a>
                    </div>
                </li>
                <li>
                    <div>
                        <CiMail />
                    </div>
                    <div>
                        <p>Phone</p>
                        <a href="mailto:alexander.panske@yahoo.com">alexander.panske@yahoo.com</a>
                    </div>
                </li>
                <li>
                    <div>
                        <CiMail />
                    </div>
                    <div>
                        <p>Birthday</p>
                        <a href="mailto:alexander.panske@yahoo.com">alexander.panske@yahoo.com</a>
                    </div>
                </li>
                <li>
                    <div>
                        <CiMail />
                    </div>
                    <div>
                        <p>Location</p>
                        <a href="mailto:alexander.panske@yahoo.com">alexander.panske@yahoo.com</a>
                    </div>
                </li>
            </ul>
            <div></div>
            <ul>
                <li>
                    <a href="#">
                        <CiMail />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <CiMail />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <CiMail />
                    </a>
                </li>
            </ul>
        </div>
    </aside>
  )
}

export default Sidebar