import { useState } from "react";
import "./info.css";
import { useTranslation } from 'react-i18next';

const Info = () => {
  const { t } = useTranslation();
  const [activeModal, setActiveModal] = useState<number>(0);

  // Diller için veri yapısı
  const languagesData: {[key: string]: {active: boolean}} = {
    "C++": { active: true },
    "QML": { active: false },
    "React": { active: false },
    "React Native": { active: true },
    "Flutter": { active: false },
    "HTML5": { active: true },
    "CSS3": { active: true },
    "JavaScript": { active: true },
    "TypeScript": { active: true },
    "Java": { active: false },
    "Kotlin": { active: false },
    "Spring Boot": { active: true },
    ".NET": { active: true },
    "Laravel": { active: true },
    "PHP": { active: true },
    "Node.js": { active: false },
    "Socket.IO": { active: true },
    "Go": { active: false },
    "Python": { active: false },
    "SQL": { active: true }
  };

  // Araçlar için veri yapısı
  const toolsData: {[key: string]: {active: boolean}} = {
    "VsCode": { active: true },
    "Visual Studio": { active: false },
    "Android Studio": { active: true },
    "QT Creator": { active: false },
    "Bootstrap": { active: true },
    "Tailwind CSS": { active: true },
    "Rive": { active: false },
    "MongoDB": { active: false },
    "MySQL": { active: true },
    "MSSQL": { active: false },
    "PostgreSQL": { active: true },
    "Redis": { active: false },
    "Firebase": { active: true },
    "Azure": { active: false },
    "AWS": { active: false },
    "Docker": { active: true },
    "OneSignal": { active: true },
    "Elasticsearch": { active: false },
    "SonarQube": { active: false },
    "Ubuntu": { active: true },
    "Windows": { active: true },
    "macOS": { active: false }
  };

  // Dil ve araç isimlerini diziye dönüştürme
  const languages = Object.keys(languagesData);
  const tools = Object.keys(toolsData);

  const toggleModal = (index: number) => {
    setActiveModal(index === activeModal ? 0 : index);
  };

  const renderModal = (item: string, index: number, type: string) => {
    const data = type === "language" 
      ? languagesData[item as keyof typeof languagesData]
      : toolsData[item as keyof typeof toolsData];
    
    return (
      <div 
        className={activeModal === index ? "language__modal active-modal" : "language__modal"}
        key={`modal-${type}-${index}`}
      >
        <div className="language__modal-content">
          <i 
            className="bx bx-x language__modal-close"
            onClick={() => toggleModal(0)}
          ></i>
          <h3 className="language__modal-title">
            {item}
            {data.active && <span className="active-label pulse-animation"> ({t('active_used')})</span>}
          </h3>
          <p className="language__modal-description">
            {type === "language" 
              ? t(`language_descriptions.${item}`)
              : t(`tool_descriptions.${item}`)}
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="about__info grid">
        <div className="about__box">
          <div className="side-by-side-container">
            {/* Languages section */}
            <div className="section__container">
              <h3 className="about__title">
                <i className="bx bx-code-alt title__icon"></i> {t('languages')}
              </h3>
              <div className="languages__slider-container">
                <div className="languages__slider">
                  <div className="languages__list">
                    {languages.map((language, index) => {
                      const isActive = languagesData[language as keyof typeof languagesData].active;
                      return (
                        <div className="language__item" key={`lang-${index}`}>
                          <span 
                            className={`language__name ${isActive ? 'active-skill pulse-border' : ''}`}
                            onClick={() => toggleModal(index + 1)}
                          >
                            {language}
                            {isActive && <span className="active-dot"></span>}
                          </span>
                          {renderModal(language, index + 1, "language")}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tools section */}
            <div className="section__container">
              <h3 className="about__title">
                <i className="bx bx-wrench title__icon"></i> {t('tools')}
              </h3>
              <div className="tools__slider-container">
                <div className="tools__slider">
                  <div className="tools__list">
                    {tools.map((tool, index) => {
                      const isActive = toolsData[tool as keyof typeof toolsData].active;
                      return (
                        <div className="tool__item" key={`tool-${index}`}>
                          <span 
                            className={`tool__name ${isActive ? 'active-skill pulse-border' : ''}`}
                            onClick={() => toggleModal(languages.length + index + 1)}
                          >
                            {tool}
                            {isActive && <span className="active-dot"></span>}
                          </span>
                          {renderModal(tool, languages.length + index + 1, "tool")}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
