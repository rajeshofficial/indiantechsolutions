import Star2Img from "../../../assets/images/v1/star2.png";
import Project1Img from "../../../assets/images/v1/project1.png";
import Project2Img from "../../../assets/images/v1/project2.png";
import Project3Img from "../../../assets/images/v1/project3.png";
import Project4Img from "../../../assets/images/v1/project4.png";
import Project5Img from "../../../assets/images/v1/project5.png";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";

const projectsData = [
  {
    id: crypto.randomUUID(),
    title: "Custom Web Development",
    description: "Building unique and tailored websites that align with client needs, ensuring high functionality and bespoke design.",
    img: Project1Img,
    path: "/React-website",
  },
  {
    id: crypto.randomUUID(),
    title: "Shopify Ecommerce Development",
    description: "Complete Shopify solutions: setup, hosting, optimization, and ongoing support for your eCommerce website success.",
    img: Project5Img,
    path: "/single-portfolio",
  },
  {
    id: crypto.randomUUID(),
    title: "WordPress Development",
    description: "Creating highly functional and customizable WordPress websites, designed for ease of use and robust management.",
    img: Project4Img,
    path: "/wordpress-portfolio",
  },
  {
    id: crypto.randomUUID(),
    title: "UI/UX Design",
    description: "Crafting engaging and user-friendly interfaces for websites and mobile apps, enhancing usability and experience.",
    img: Project2Img,
    path: "/ui-ux-design",
  },
  {
    id: crypto.randomUUID(),
    title: "Mobile App Development",
    description: "Developing feature-rich mobile applications optimized for performance on Android and iOS platforms.",
    img: Project3Img,
    path: "/portfolio/mobile-app-development",
  },
 
  {
    id: crypto.randomUUID(),
    title: "Wix Development",
    description: "Designing flexible, user-friendly websites using Wix for quick deployment and a strong online presence.",
    img: Project1Img,
    path: "wix-web",
  },
 
];

const swiperSettings = {
  spaceBetween: 24,
  direction: "horizontal",
  pagination: {
    clickable: true,
  },
  modules: [Pagination, Mousewheel],
  mousewheel: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 2,
    },
    1600: {
      slidesPerView: 3.5,
    },
  },
};

function Projects() {
  return (
    <div className="section dark-bg aximo-section-padding">
      <div className="container">
        <div className="aximo-section-title center light">
          <h2>
            Have a wide range of
            <span className="aximo-title-animation">
              creative projects
              <span className="aximo-title-icon">
                <img src={Star2Img} alt="Star" />
              </span>
            </span>
          </h2>
        </div>
      </div>
      <div className="swiper aximo-project-slider">
        <Swiper {...swiperSettings}>
          {projectsData.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;
