import React from "react";
import styles from "./BlogSection.module.css";

type BlogSectionProps = {
  title: string;
};

export const BlogSection: React.FC<BlogSectionProps> = ({ title }) => {
  return (
    <section className={styles.section}>
      <h2 className="title">{title}</h2>
    </section>
  );
};