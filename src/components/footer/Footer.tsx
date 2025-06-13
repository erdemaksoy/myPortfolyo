import "./footer.css";
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import { useRive } from "@rive-app/react-canvas";

const Footer = () => {
  const { t } = useTranslation();
  const [showTechModal, setShowTechModal] = useState(false);
  const { RiveComponent } = useRive({
    src: '/erdemaksoy.riv',
    stateMachines: 'State Machine 1',
    autoplay: true,
  });

  

  const technologies = [
    { name: "Vite.js", description: "Hızlı geliştirme ortamı ve derleme aracı" },
    { name: "React", description: "Modern kullanıcı arayüzleri geliştirmek için JavaScript kütüphanesi" },
    { name: "TypeScript", description: "Daha iyi kod kalitesi ve değişken yönetimi için tip güvenliği" },
    { name: "i18next", description: "Çoklu dil desteği için çeviri sistemi" },
    { name: "Firebase", description: "Hosting, authentication ve veritabanı hizmetleri" },
    { name: "Rive", description: "İnteraktif animasyonlar için kullanılan kütüphane" },
    { name: "Swiper", description: "Dokunmatik slider/carousel bileşenleri" },
    { name: "EmailJS", description: "Sunucu gerektirmeden email gönderimi" }
  ];

  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
          <h1 className="footer__title">
              <RiveComponent />
          </h1>
          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">
                {t('footer.menu.about')}
              </a>
            </li>
            <li>
              <a href="#skills" className="footer__link">
                {t('footer.menu.skills')}
              </a>
            </li>
            <li>
              <a href="#fields" className="footer__link">
                {t('footer.menu.fields')}
              </a>
            </li>
            <li>
              <a href="#qualification" className="footer__link">
                {t('footer.menu.qualification')}
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                {t('footer.menu.contact')}
              </a>
            </li>
            <li>
              <i 
                className="uil uil-question-circle open-modal" 
                onClick={() => setShowTechModal(true)}
              ></i>
            </li>
          </ul>

          <div className="footer__social">
            <a
              href="https://www.instagram.com/erdem0aksoy/"
              className="footer__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="uil uil-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/erdemaksoyy/"
              className="footer__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="uil uil-linkedin"></i>
            </a>
            <a
              href="https://github.com/erdemaksoy"
              className="footer__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="uil uil-github-alt"></i>
            </a>
          </div>

          <span className="footer__copy">
            &#169; Erdem Aksoy. {t('footer.rights')}
          </span>
        </div>
      </footer>

      {/* Technologies Modal */}
      <div className={showTechModal ? "tech__modal active-modal" : "tech__modal"}>
        <div className="tech__modal-content">
          <i 
            className="uil uil-times tech__modal-close"
            onClick={() => setShowTechModal(false)}
          ></i>
          <h3 className="tech__modal-title">
            {t('tech_modal.title', 'Kullanılan Teknolojiler')}
          </h3>
          <p className="tech__modal-description">
            {t('tech_modal.description', 'Bu projede kullanılan temel teknolojiler:')}
          </p>
          
          <div className="tech__list-container">
            {technologies.map((tech, index) => (
              <div className="tech__item" key={index}>
                <h4 className="tech__name">{tech.name}</h4>
                <p className="tech__description">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
