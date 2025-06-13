import { FaHtml5, FaBootstrap } from "react-icons/fa";
import { SiFlutter, SiTypescript, SiReact, SiReactos } from "react-icons/si";

const Frontend = () => {
  return (
    <>
      <div className="skills__content">
        <h3 className="skills__title">Frontend</h3>
        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <SiFlutter className="skills__icon" />
              <div>
                <h3 className="skills__name">Flutter</h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>

            <div className="skills__data">
              <FaHtml5 className="skills__icon" />
              {/* <FaCss3Alt className="skills__icon" /> */}
              {/* <FaJsSquare className="skills__icon" /> */}
              <div>
                <h3 className="skills__name">HTML, CSS, JavaScript</h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>

            <div className="skills__data">
              <FaBootstrap className="skills__icon" />
              <div>
                <h3 className="skills__name">Bootstrap</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>

          <div className="skills__group">
            <div className="skills__data">
              <SiReact className="skills__icon" />
              <div>
                <h3 className="skills__name">React</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <SiReactos className="skills__icon" />
              <div>
                <h3 className="skills__name">React Native</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <SiTypescript className="skills__icon" />
              <div>
                <h3 className="skills__name">TypeScript</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frontend;
