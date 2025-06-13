import { useEffect, useRef } from "react";
import "./skills.css";
// import Frontend from "./Frontend";
// import Backend from "./Backend";
import Info from "../about/Info";
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const skillsRef = useRef<HTMLElement | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-skills");
          } else {
            entry.target.classList.remove("animate-skills");
          }
        });
      },
      { threshold: 1 }
    );

    const skillItems =
      skillsRef.current?.querySelectorAll<HTMLElement>(".skills__data");

    skillItems?.forEach((item: HTMLElement) => {
      observer.observe(item);
      item.style.animationDelay = `${Math.random() * 2}s`; // Rastgele bir gecikme 0-2 saniye arasında
    });

    return () => {
      skillItems?.forEach((item: HTMLElement) => observer.unobserve(item));
    };
  }, []);

  return (
    <section className="skills section" id="skills" ref={skillsRef}>
      <h2 className="section__title">{t('skills')}</h2>
      <span className="section__subtitle">{t('my_technical_level')}</span>

      <div className="skills__container container">
        {/* <Frontend />
        <Backend /> */}
        <Info />
      </div>
    </section>
  );
};

export default Skills;
