import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Blog.css";

const blogs = [
  {
    id: 1,
    title: "The Fascinating History of Mechanical Clocks",
    content: "Mechanical clocks were a revolutionary invention that transformed human society. Before their invention, time was measured by sundials, water clocks, and candles. The first mechanical clocks appeared in the 14th century, primarily in the monasteries of Europe, where they were used to signal the times for prayer.",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop",
    date: "July 12, 2023",
    isoDate: "2023-07-12",
    author: "James Smith"
  },
  {
    id: 2,
    title: "Understanding Daylight Saving Time: A Guide",
    content: "Daylight Saving Time (DST) is the practice of advancing clocks during warmer months so that darkness falls later each day according to the clock. While the idea was first proposed by Benjamin Franklin in 1784, it wasn't widely adopted until World War I as an energy-saving measure.",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=800&auto=format&fit=crop",
    date: "August 5, 2023",
    isoDate: "2023-08-05",
    author: "Elena Rossi"
  },
  {
    id: 3,
    title: "Top 10 Most Beautiful Clock Towers in the World",
    content: "Clock towers have stood as symbols of civic pride and technological prowess for centuries. The Elizabeth Tower in London, commonly known as Big Ben, is undoubtedly the most famous. However, many others deserve recognition. The Spasskaya Tower in Moscow's Red Square, the Zytglogge in Bern, Switzerland with its elaborate 16th-century astronomical clock, and the Rajabai Clock Tower in Mumbai all showcase unique architectural styles. These structures do more than tell time; they tell the story of the cities they watch over, blending art with engineering.",
    image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?q=80&w=800&auto=format&fit=crop",
    date: "September 20, 2023",
    isoDate: "2023-09-20",
    author: "Marco Vieri"
  },
  {
    id: 4,
    title: "How Atomic Clocks Keep the World in Sync",
    content: "Atomic clocks are the most accurate timekeeping devices ever created, using the vibrations of atoms (usually Cesium or Rubidium) to measure time. These clocks are so precise that they wouldn't lose a second in millions of years. This precision is essential for modern technology.",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=800&auto=format&fit=crop",
    date: "October 15, 2023",
    isoDate: "2023-10-15",
    author: "Sarah Chen"
  },
  {
    id: 5,
    title: "The Evolution of Timekeeping: Sun Dials to Smartwatches",
    content: "The journey of timekeeping began with human observations of the sun and stars. Ancient Egyptians used obelisks and shadow clocks, while the Greeks developed the water clock (Clepsydra). The Middle Ages saw the rise of weight-driven mechanical clocks, followed by the spring-driven watches of the 16th century.",
    image: "https://images.unsplash.com/photo-1614064548237-096f735f344f?q=80&w=800&auto=format&fit=crop",
    date: "November 2, 2023",
    isoDate: "2023-11-02",
    author: "Robert Miller"
  },
  {
    id: 6,
    title: "Why Precision Matters in the Modern Age",
    content: "In our interconnected world, precision is more important than ever. In high-frequency trading, a few milliseconds can mean the difference between profit and loss. Telecommunications networks require exact timing to manage the massive flow of data over fiber optics. Scientific experiments in particle physics or gravitational wave detection push the boundaries of time measurement even further.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop",
    date: "December 10, 2023",
    isoDate: "2023-12-10",
    author: "Anna Larsson"
  },
  {
    id: 7,
    title: "The Future of Time: Quantum Clocks and Beyond",
    content: "As we push the limits of technology, quantum clocks are emerging as the next frontier in timekeeping. These devices use trapped ions and cold atoms to achieve accuracy so extreme they wouldn't lose a second in 15 billion years. This discovery will redefine how we understand gravity and relativity.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop",
    date: "January 15, 2024",
    isoDate: "2024-01-15",
    author: "Dr. Alan Turing"
  },
  {
    id: 8,
    title: "Time Perception: How Our Brains Process the Seconds",
    content: "Time isn't just a number on a wall; it's an experience in our minds. Why does time fly when we're having fun and drag when we're bored? The psychology of time perception explores how our neural pathways compress or expand time based on emotion, novelty, and memory.",
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=800&auto=format&fit=crop",
    date: "February 22, 2024",
    isoDate: "2024-02-22",
    author: "Dr. Maya Angelou"
  },
  {
    id: 9,
    title: "Celestial Navigation: How Sailors Used Time to Cross Oceans",
    content: "Before GPS, the only way to find your way across the vast ocean was by the stars and a precise clock. The invention of the marine chronometer by John Harrison solve the 'longitude problem', saving countless lives and expanding the horizon of global trade.",
    image: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=800&auto=format&fit=crop",
    date: "March 10, 2024",
    isoDate: "2024-03-10",
    author: "Capt. James Cook"
  }
];

const Blog = () => {
  useEffect(() => {
    document.title = "World Clock Blog - Detailed Insights on Time & Precision";

    // Global Meta for Search
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'clocks, timekeeping, history of clocks, atomic clocks, precision time, horology, world clock');
    }
  }, []);

  return (
    <main className="blog-section">
      <div className="blog-container container">
        <header className="blog-header text-center animate-fade-up">
          <h1 className="display-4 fw-bold mb-3">Time & Chronometry Blog</h1>
          <p className="blog-subtitle">A Detailed Journey through History, Science, and Human Precision.</p>
          <div className="header-underline"></div>
        </header>

        <section className="row g-4">
          {blogs.map((blog) => (
            <article key={blog.id} className="col-12 col-md-6 col-lg-4 mb-4 animate-fade-up">
              <Link to={`/blog/${blog.id}`} className="card-link text-decoration-none h-100">
                <div className="blog-card h-100 shadow-sm border-0">
                  <header className="blog-image-wrapper">
                    <img
                      src={blog.image}
                      className="blog-image"
                      alt={`Detailed insight into: ${blog.title}`}
                      style={{ backgroundColor: '#212529', minHeight: '220px', transition: '0.3s' }}
                      loading="lazy"
                    />
                    <div className="blog-date-badge shadow-sm">
                      <time dateTime={blog.isoDate}>{blog.date}</time>
                    </div>
                  </header>
                  <div className="card-body p-4 d-flex flex-column">
                    <h2 className="card-title">{blog.title}</h2>
                    <p className="card-text mb-4">
                      {blog.content.substring(0, 120)}...
                    </p>
                    <footer className="mt-auto d-flex justify-content-between align-items-center">
                      <span className="author-name text-muted small">By {blog.author}</span>
                      <span className="read-more-btn">
                        Read Detailed Story &rarr;
                      </span>
                    </footer>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Blog;
