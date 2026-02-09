"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./LocationsSlider.module.css";
import Button from "@/components/ui/Button/page";

const locations = [
  {
    id: 1,
    title: "Waltham",
    image: "/images/gentle-dental-waltham.jpg.webp",
  },
  {
    id: 2,
    title: "Franklin",
    image: "/images/gentle-dental-worceter-offices.webp",
  },
  {
    id: 3,
    title: "Worcester at the Trolley Yard",
    image: "/images/gentle-dental-waltham.jpg.webp",
  },
  {
    id: 4,
    title: "Malden",
    image: "/images/gentle-dental-waltham.jpg.webp",
  },
   {
    id: 5,
    title: "Malden",
    image: "/images/gentle-dental-waltham.jpg.webp",
  },
   {
    id: 6,
    title: "Malden",
    image: "/images/gentle-dental-waltham.jpg.webp",
  },
];

export default function LocationsSlider() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Locations</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={8}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className={styles.slider}
      >
        {locations.map((location) => (
          <SwiperSlide key={location.id}>
            <Link href="#" className={styles.card}>
              <Image
                src={location.image}
                alt={location.title}
                fill
                className={styles.image}
              />

              <div className={styles.baseOverlay} />
              <div className={styles.hoverOverlay} />

              <div className={styles.content}>
                <span className={styles.brand}>Gentle Dental</span>
                <h3 className={styles.title}>{location.title}</h3>
                <span className={styles.learnMore}>LEARN MORE →</span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.ctaWrap}>
        <Button text="VIEW ALL LOCATIONS" href="/locations" />
      </div>
    </section>
  );
}
