'use client'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import '@splidejs/react-splide/css'
import Link from 'next/link'
import ProjectCard from './ProjectCard'


const ScrollContainer = () => {
  const projects = [
    {
      name: "",
      category: "",
      image:
        "https://images.pexels.com/photos/3825584/pexels-photo-3825584.jpeg",
      link: "",
    },
    {
      name: "",
      category: "",
      image:
        "https://images.pexels.com/photos/6954220/pexels-photo-6954220.jpeg",
      link: "",
    },
    {
      name: "",
      category: "",
      image:
        "https://images.pexels.com/photos/6954222/pexels-photo-6954222.jpeg?auto=compress&cs=tinysrgb&w=1600",
      link: "",
    },
    {
      name: "",
      category: "",
      image:
        "https://images.pexels.com/photos/3825584/pexels-photo-3825584.jpeg",
      link: "",
    },
    {
      name: "",
      category: "",
      image:
        "https://images.pexels.com/photos/3491697/pexels-photo-3491697.jpeg",
      link: "",
    },
    {
      name: "",
      category: "",
      image:
        "https://images.pexels.com/photos/3206167/pexels-photo-3206167.jpeg",
      link: "",
    },
  ];
  const splideOptions = {
    perPage: 1,
    autoWidth: true,
    direction: "ltr",
    perMove: 1,
    gap: "1rem",
    padding: {
      left: "5vw", // set the left padding to 20% of the viewport width
    },
    breakpoints: {
      640: {
        perPage: 1,
        gap: "0.5rem",
      },
      768: {
        perPage: 2,
        heightRatio: 1,
        autoWidth: false,
        autoHeigth: true,
        padding: {
          left: "0", // set the left padding to 20% of the viewport width
        },
      },
    },
  };
  return (
    <Splide options={splideOptions}>
      {projects?.map(({ image, name, category, link }) => (
        <SplideSlide
          key={name}
          className="photo h-full w-fit group border-4 rounded-3xl border-transparent hover:border-wood/50 transition duration-200 overflow-hidden relative isolate"
        >
          <ProjectCard
            name={name}
            category={category}
            image={image}
            link={link}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default ScrollContainer
