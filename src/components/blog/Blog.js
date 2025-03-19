"use client";

import { useState } from "react";
import Image from "next/image";

// Blog Data
const blogPosts = [
  {
    id: 1,
    title: "Design conferences in 2022",
    category: "Design",
    date: "Feb 23, 2022",
    img: "/assets/images/blog-1.jpg",
    summary: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
    content: "Detailed content about design conferences happening in 2022. Topics include UI/UX trends, new tools, and industry insights."
  },
  {
    id: 2,
    title: "Best fonts every designer",
    category: "Design",
    date: "Feb 23, 2022",
    img: "/assets/images/blog-2.jpg",
    summary: "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
    content: "An in-depth look at the best fonts every designer should use in 2025. Covers typography theory and modern design trends."
  },
  {
    id: 3,
    title: "Design digest #80",
    category: "Design",
    date: "Feb 23, 2022",
    img: "/assets/images/blog-3.jpg",
    summary: "Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.",
    content: "A curated selection of the latest design inspirations, UI patterns, and upcoming trends in digital design."
  },
  {
    id: 4,
    title: "UI interactions of the week",
    category: "Design",
    date: "Feb 23, 2022",
    img: "/assets/images/blog-4.jpg",
    summary: "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.",
    content: "Showcasing the best UI interactions, animations, and micro-interactions spotted this week."
  },
  {
    id: 5,
    title: "The forgotten art of spacing",
    category: "Design",
    date: "Feb 23, 2022",
    img: "/assets/images/blog-5.jpg",
    summary: "Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content: "Spacing is a key element in design. This article covers the importance of whitespace and spacing in UI/UX design."
  },
  {
    id: 6,
    title: "Design digest #79",
    category: "Design",
    date: "Feb 23, 2022",
    img: "/assets/images/blog-6.jpg",
    summary: "Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.",
    content: "Another round-up of the latest and best UI/UX design inspirations and trends for digital designers."
  }
];

const Blog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <article className="blog active">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {blogPosts.map((post) => (
            <li key={post.id} className="blog-post-item">
              <button className="blog-clickable" onClick={() => openModal(post)}>
                <figure className="blog-banner-box">
                  <Image src={post.img} alt={post.title} width={400} height={250} />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{post.category}</p>
                    <span className="dot"></span>
                    <time dateTime={post.date}>{post.date}</time>
                  </div>

                  <h3 className="h3 blog-item-title">{post.title}</h3>
                  <p className="blog-text">{post.summary}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Modal */}
      {isModalOpen && selectedPost && (
        <div className="modal-container active">
          <div className="overlay active" onClick={closeModal}></div>

          <section className="blog-posts">
            <button className="modal-close-btn" onClick={closeModal}>✖</button>

            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <Image src={selectedPost.img} alt={selectedPost.title} width={500} height={300} />
              </figure>
            </div>

            <div className="modal-content">
              <h4 className="h3 modal-title">{selectedPost.title}</h4>
              <p className="blog-date">{selectedPost.date}</p>
              <div className="blog-text">
                <p>{selectedPost.content}</p>
              </div>
            </div>
          </section>
        </div>
      )}
    </article>
  );
};

export default Blog;