import  { useState } from "react";
import "./services.css";
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

interface Project {
  name: string;
  description: string;
}

const Services = () => {
  const [toggleState, setToggleState] = useState(1);
  const { t } = useTranslation();

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  const serviceCategories = [
    {
      id: 1,
      icon: "uil-web-grid",
      name: "services.restful.title",
      key: "restful"
    },
    {
      id: 2,
      icon: "uil-mobile-android",
      name: "services.flutter.title",
      key: "flutter"
    },
    {
      id: 3,
      icon: "uil-arrow",
      name: "services.react.title",
      key: "react"
    },
    {
      id: 4,
      icon: "uil-database",
      name: "services.database.title",
      key: "database"
    },
    {
      id: 5,
      icon: "uil-brackets-curly",
      name: "services.algorithms.title",
      key: "algorithms"
    },
    {
      id: 6,
      icon: "uil-brackets-curly",
      name: "services.webDev.title",
      key: "webDev"
    },
    {
      id: 7,
      icon: "uil-brain",
      name: "services.ml.title",
      key: "ml"
    },
    {
      id: 8,
      icon: "uil-plug",
      name: "services.party_integrations.title",
      key: "party_integrations"
    },
    {
      id: 9,
      icon: "uil-globe",
      name: "services.seo.title",
      key: "seo"
    },
    {
      id: 10,
      icon: "uil-linux",
      name: "services.linux.title",
      key: "linux"
    }
  ];

  // Get projects from translation files for each category
  const getProjectsForCategory = (categoryKey: string): Project[] => {
    const categoryProjects = t(`services.${categoryKey}.projects`, { returnObjects: true }) as Record<string, { name: string, description: string }>;
    
    return Object.keys(categoryProjects).map(key => ({
      name: categoryProjects[key].name,
      description: categoryProjects[key].description
    }));
  };

  // Check if category has one or more projects
  const getCategoryLayoutClass = (categoryKey: string): string => {
    const projects = getProjectsForCategory(categoryKey);
    if (projects.length === 1) {
      return "services__projects-grid--center";
    } else if (projects.length === 2) {
      return "services__projects-grid--space-evenly";
    } else {
      return "services__projects-grid--space-between";
    }
  };

  return (
    <>
      <section className="services section" id="fields">
        <h2 className="section__title">{t('what_i_do')}</h2>
        <span className="section__subtitle"></span>

        <div className="services__container container">
          <div className="services__tabs-wrapper">
            <div className="services__tabs">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={'auto'}
                autoplay={{ 
                  delay: 1700, 
                  disableOnInteraction: false 
                }}
                loop={true}
                className="services__tabs-swiper"
              >
                {serviceCategories.map((category) => (
                  <SwiperSlide key={category.id} className="services__tab-slide">
                    <div 
                      className={toggleState === category.id ? "services__tab active-tab" : "services__tab"}
                      onClick={() => toggleTab(category.id)}
                    >
                      <i className={`uil ${category.icon} services__tab-icon`}></i>
                      <h3 className="services__tab-title">{t(category.name)}</h3>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {serviceCategories.map((category) => (
            <div 
              key={category.id}
              className={toggleState === category.id ? "services__content active-content" : "services__content"}
            >
              <div className="services__data">
                <h3 className="services__title">{t(category.name)}</h3>
                <p className="services__description services__description--visible">
                  {t(`services.${category.key}.description`)}
                </p>

                <ul className="services__features services__features--visible">
                  {(t(`services.${category.key}.features`, { returnObjects: true }) as string[]).map((feature, index) => (
                    <li className="services__feature" key={index}>
                      <i className="uil uil-check-circle services__feature-icon"></i>
                      <p className="services__feature-text">{feature}</p>
                    </li>
                  ))}
                </ul>

                <h4 className="services__projects-title">{t('related_projects')}</h4>
                <div className={`services__projects-grid ${getCategoryLayoutClass(category.key)}`}>
                  {getProjectsForCategory(category.key).map((project: Project, index: number) => (
                    <div className="project-card" key={index}>
                      <div className="project-card__content">
                        <h5 className="project-card__title">{project.name}</h5>
                        <p className="project-card__description">{project.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
