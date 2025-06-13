import React, { useState } from "react";
import "./qualification.css";
import { useTranslation } from 'react-i18next';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const { t } = useTranslation();

  const toggleTab = (index: React.SetStateAction<number>) => {
    setToggleState(index);
  };

  // Access education and experience data from translations
  const educationItems = t('qualification_items.education', { returnObjects: true }) as Array<{
    title: string;
    subtitle: string;
    date: string;
  }>;

  const experienceItems = t('qualification_items.experience', { returnObjects: true }) as Array<{
    title: string;
    subtitle: string;
    date: string;
  }>;

  return (
    <>
      <section className="qualification section" id="qualification">
        <h2 className="section__title">{t('qualification_title')}</h2>
        <span className="section__subtitle">{t('my_personal_journey')}</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={
                toggleState === 1
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(1)}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>
              {t('education')}
            </div>
            <div
              className={
                toggleState === 2
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(2)}
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              {t('experience')}
            </div>
          </div>

          <div className="qualification__sections">
            <div
              className={
                toggleState === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              {educationItems.map((item, index) => (
                <div className="qualification__data" key={`education-${index}`}>
                  {index % 2 === 0 ? (
                    <>
                      <div>
                        <h3 className="qualification__title">{item.title}</h3>
                        <span className="qualification__subtitle">
                          {item.subtitle}
                        </span>
                        <div className="qualification__calendar">
                          <i className="uil uil-calendar-alt"></i>
                          {item.date}
                        </div>
                      </div>
                      <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div></div>
                      <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                      </div>
                      <div>
                        <h3 className="qualification__title">{item.title}</h3>
                        <span className="qualification__subtitle">
                          {item.subtitle}
                        </span>
                        <div className="qualification__calendar">
                          <i className="uil uil-calendar-alt"></i>
                          {item.date}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              {experienceItems.map((item, index) => (
                <div className="qualification__data" key={`experience-${index}`}>
                  {index % 2 === 1 ? (
                    <>
                      <div>
                        <h3 className="qualification__title">{item.title}</h3>
                        <span className="qualification__subtitle">
                          {item.subtitle}
                        </span>
                        <div className="qualification__calendar">
                          <i className="uil uil-calendar-alt"></i>
                          {item.date}
                        </div>
                      </div>
                      <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div></div>
                      <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                      </div>
                      <div>
                        <h3 className="qualification__title">{item.title}</h3>
                        <span className="qualification__subtitle">
                          {item.subtitle}
                        </span>
                        <div className="qualification__calendar">
                          <i className="uil uil-calendar-alt"></i>
                          {item.date}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Qualification;
