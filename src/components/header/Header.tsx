import { useState, useEffect } from "react";
import "./header.css";
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  onBlogClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBlogClick }) => {
  const { t, i18n } = useTranslation();
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  // Rive animasyonu için gerekli state tanımlaması
  const { RiveComponent, rive } = useRive({
    src: '/erdemaksoy.riv',
    stateMachines: 'State Machine 1',
    autoplay: true,
  });

  // Hover için state machine input'u
  const hoverInput = useStateMachineInput(rive, 'State Machine 1', 'Hover');

  // Hover efekti için event handler'lar
  const handleMouseEnter = () => {
    if (hoverInput) {
      hoverInput.value = true;
    }
  };

  const handleMouseLeave = () => {
    if (hoverInput) {
      hoverInput.value = false;
    }
  };

  // Dil değiştirme fonksiyonu
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const changeHeaderBackground = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) header?.classList.add("scroll-header");
      else header?.classList.remove("scroll-header");
    };

    window.addEventListener("scroll", changeHeaderBackground);

    return () => {
      window.removeEventListener("scroll", changeHeaderBackground);
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div style={{ width: "150px", height: "40px" }}>
            <RiveComponent />
          </div>
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i>{t("home")}
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i>{t("about")}
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i>{t("skills")}
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#fields"
                onClick={() => setActiveNav("#fields")}
                className={
                  activeNav === "#fields"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>{t("fields")}
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#qualification"
                onClick={() => setActiveNav("#qualification")}
                className={
                  activeNav === "#qualification"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i>{t("qualification")}
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i>{t("contact")}
              </a>
            </li>
            <li className="nav__item">
              <a onClick={onBlogClick} className="nav__link" style={{ cursor: 'pointer' }}>
                <i className="uil uil-blogger nav__icon"></i>{t('blog.title_short')}
              </a>
            </li>
            <li className="nav__item nav__languages">
              <button 
                onClick={() => changeLanguage('tr')} 
                className={`language-btn ${i18n.language === 'tr' ? 'active-lang' : ''}`}
              >
                TR
              </button>
              <button 
                onClick={() => changeLanguage('en')} 
                className={`language-btn ${i18n.language === 'en' ? 'active-lang' : ''}`}
              >
                EN
              </button>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__btns">
          <div className="nav__languages-desktop">
            <button 
              onClick={() => changeLanguage('tr')} 
              className={`language-btn ${i18n.language === 'tr' ? 'active-lang' : ''}`}
            >
              TR
            </button>
            <button 
              onClick={() => changeLanguage('en')} 
              className={`language-btn ${i18n.language === 'en' ? 'active-lang' : ''}`}
            >
              EN
            </button>
          </div>
          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
