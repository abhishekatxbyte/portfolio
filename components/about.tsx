"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a{" "}
        <span className="font-medium">Bachelor's degree in Computer Engineering</span> in March 2023, my coding journey started back in 12th grade, where I began with Python and later immersed myself in JavaScript for the past three years.
        Beyond coding, I enjoy flying kites and exploring new places via train travel. Currently, I'm diving into the world of databases, particularly <span className="font-medium">NoSQL databases</span>, to better understand how data is managed.
        <span className="italic">One of my strengths</span> lies in connecting with people and navigating social dynamics effectively, which enhances both my professional and personal experiences.
        I'm excited to see where my skills and interests will take me in the future.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy flying kites, exploring new places via train travel, and pursuing my passion for motion on web.
      </p>

    </motion.section>
  );
}
