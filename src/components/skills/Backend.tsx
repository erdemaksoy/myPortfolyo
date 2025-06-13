import { FaPhp, FaJava, FaPython } from "react-icons/fa";
import { DiMysql, DiDotnet } from "react-icons/di";
import { SiCplusplus } from "react-icons/si";

const Backend = () => {
  return (
    <>
      <div className="skills__content">
        <h3 className="skills__title">Backend</h3>
        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <FaPhp className="skills__icon" />
              <div>
                <h3 className="skills__name">PHP, Laravel</h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>

            <div className="skills__data">
              <FaJava className="skills__icon" />
              <div>
                <h3 className="skills__name">Java</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <DiDotnet className="skills__icon" />
              <div>
                <h3 className="skills__name">.NET</h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>
          </div>

          <div className="skills__group">
            <div className="skills__data">
              <SiCplusplus className="skills__icon" />
              <div>
                <h3 className="skills__name">C, C++</h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>

            <div className="skills__data">
              <SiCplusplus className="skills__icon" />
              <div>
                <h3 className="skills__name">C#</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <FaPython className="skills__icon" />
              <div>
                <h3 className="skills__name">Python</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <DiMysql className="skills__icon" />
              <div>
                <h3 className="skills__name">MySQL, MsSQL, PostgreSQL</h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>

            {/* <div className="skills__data">
              <SiFirebase className="skills__icon" />
              <div>
                <h3 className="skills__name">Firebase</h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Backend;
