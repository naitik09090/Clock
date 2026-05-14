import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { BsClock, BsPerson, BsCalendar3 } from "react-icons/bs";
import "../css/BlogDetail.css";

const blogs = [
    {
        id: 1,
        title: "The Fascinating History of Mechanical Clocks",
        isoDate: "2023-07-12",
        author: "James Smith",
        date: "July 12, 2023",
        description: "Explore the journey of mechanical clocks from 14th-century monastery escapements to the precision pendulum clocks that revolutionized global timekeeping.",
        content: `Mechanical clocks were a revolutionary invention that transformed human society. Before their invention, time was measured by sundials, water clocks, and candles. The first mechanical clocks appeared in the late 13th and early 14th centuries, primarily in the monasteries of Europe, where they were used to signal the times for prayer and various religious duties. These early clocks, using the rudimentary verge and foliot escapement mechanism, were not very accurate by today's standards—often losing several minutes an hour—but they paved the way for the precision of the Pendulum clock, later perfected by Christiaan Huygens in 1656.

This monumental advancement reduced the daily error from many minutes to mere seconds, enabling new possibilities in navigation, science, and the burgeoning industrial sector. The pendulum clock remained the world's standard for accurate timekeeping for almost 300 years until the invention of the quartz clock in 1927. During the Enlightenment, mechanical clocks became status symbols and intricate works of art, featuring complex celestial displays and automated figures.

Today, while digital and atomic technology dominates, the craft of mechanical horology lives on in luxury watchmaking. Enthusiasts admire the soul of a mechanical movement—the hundreds of tiny, hand-finished components working in perfect harmony. From the towering clocks of city squares to the delicate calibers on our wrists, mechanical timekeeping remains one of humanity's most significant engineering achievements.`,
        image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Understanding Daylight Saving Time: A Guide",
        isoDate: "2023-08-05",
        author: "Elena Rossi",
        date: "August 5, 2023",
        description: "A comprehensive guide to Daylight Saving Time (DST), exploring its origins, proponents, critics, and its future in a modern world.",
        content: `Daylight Saving Time (DST) is the practice of advancing clocks during warmer months so that darkness falls later each day according to the clock. The primary intent is to make better use of daylight by shifting an hour of daylight from the morning to the evening. While the idea was first playfully suggested by Benjamin Franklin in a 1784 satirical essay, it wasn't seriously proposed until George Hudson, an entomologist, wanted more daylight hours to collect insects after work in 1895.

It wasn't widely adopted until World War I as an energy-saving measure, with Germany being the first country to implement it in 1916. Today, about 70 countries use DST, though its benefits remain a subject of intense global debate. Proponents argue it saves energy, reduces traffic accidents by providing better visibility in the evening, and encourages outdoor physical activities which improve public health and boost local economies.

However, critics point to significant health risks related to sleep disruption and the subtle internal biological clock desynchronization that occurs during the transition. The administrative burden of changing clocks twice a year, combined with modern research suggesting negligible energy savings in an era of air conditioning, has led many regions—including parts of the United States, Russia, and the European Union—to reconsider or even vote to abolish the practice entirely. Understanding the history and science of DST helps us better navigate the shift and advocate for what works best for our modern lifestyles.`,
        image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Top 10 Most Beautiful Clock Towers in the World",
        isoDate: "2023-09-20",
        author: "Marco Vieri",
        date: "September 20, 2023",
        description: "From Big Ben to the Zytglogge, discover the world's most breathtaking clock towers and the historical stories behind their architectural majesty.",
        content: `Clock towers have stood as symbols of civic pride, architectural grandeur, and technological prowess for centuries. They were often the tallest buildings in a city, ensuring that the time—and the city's authority—could be seen from miles away. The Elizabeth Tower in London, commonly known as Big Ben, is undoubtedly the most famous, surviving the Blitz and witnessing the changing of monarchs and world events for over 160 years.

However, many other towers deserve equal recognition for their unique beauty. The Spasskaya Tower in Moscow's Red Square features ruby-red stars and a massive clock face that once controlled the gates of the Kremlin. In Switzerland, the Zytglogge in Bern showcases an elaborate 16th-century astronomical clock with moving mechanical figures that perform a show every hour. Further east, the Rajabai Clock Tower in Mumbai blends Venetian and Gothic styles, housing one of India's most iconic and historic timepieces.

Modern architecture has also contributed stunning examples, such as the Abraj Al-Bait Clock Tower in Mecca, which currently holds the record for the world's largest clock face. Whether they are ancient stone guardians or modern steel giants, these structures do more than just tell time; they tell the story of the cities they watch over, blending artistic expression with precision engineering to create timeless landmarks that continue to inspire awe and wonder in every traveler.`,
        image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "How Atomic Clocks Keep the World in Sync",
        isoDate: "2023-10-15",
        author: "Sarah Chen",
        date: "October 15, 2023",
        description: "Understand the technology behind atomic clocks and how they power essential systems like GPS, deep space communication, and global finance.",
        content: `Atomic clocks are the most accurate timekeeping devices ever created, using the electromagnetic signals emitted by electrons in atoms as they change energy levels. Unlike mechanical or quartz clocks, which rely on the vibration of physical materials, atomic clocks measure the fundamental and unchanging frequency of atoms—usually Cesium-133 or Rubidium. This technology is so precise that the latest optical lattice clocks wouldn't lose a single second in 30 billion years—outlasting the current age of our universe.

This extreme level of precision is not just a scientific curiosity; it's the invisible foundation of modern technology. Every Global Positioning System (GPS) satellite carries multiple atomic clocks. By measuring the tiny time differences between signals received from different satellites, your phone can calculate your position on Earth with meter-level accuracy. Without the synchronization provided by atomic clocks, GPS would fail and drift miles out of position within just a few hours.

Beyond navigation, atomic clocks manage the massive flow of data across the internet and telecommunications networks. They enable the microsecond-level synchronization required for global financial markets, where billions of dollars move based on the time-stamping of trades. As we look toward future frontiers, from deep space communication to testing the fundamental theories of physics like General Relativity, the steady, unwavering beat of the atomic clock will remain our most reliable guide through the fabric of time and space.`,
        image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "The Evolution of Timekeeping: Sun Dials to Smartwatches",
        isoDate: "2023-11-02",
        author: "Robert Miller",
        date: "November 2, 2023",
        description: "Travel through time as we trace the history of timekeeping from ancient obelisks and water clocks to modern high-tech smartwatches.",
        content: `The human journey of timekeeping began with simple observations of the natural world—the rising sun, the phases of the moon, and the changing seasons. Ancient Egyptians were among the first to divide the day using obelisks that cast shadows, essentially creating the first sundials. However, these were useless at night or on cloudy days, leading to the development of the 'Clepsydra' or water clock in ancient Greece and China, which measured time through the regulated flow of water from one vessel to another.

The Middle Ages saw the dramatic rise of large, weight-driven mechanical clocks in cathedral towers, which eventually evolved into smaller, spring-driven portable watches in the 16th century—the ancestors of the pocket watch. The 19th century brought mass production, making clocks affordable for common households and essential for the strict schedules of the industrial revolution and the expansion of the railways.

In the 20th century, the discovery of the piezoelectric effect in quartz crystals led to another revolution. Quartz watches were incredibly accurate and cheap to produce, nearly wiping out the traditional mechanical industry in the 1970s. Today, we have entered the era of the smartwatch. These devices connect to global networks of atomic clocks and satellites, providing us not just with the time, but with our heart rate, GPS coordinates, and instant messages. We have moved from reading the stars to wearing a supercomputer on our wrists, yet the fundamental goal remains the same: our timeless obsession with measuring our place within the day.`,
        image: "https://images.unsplash.com/photo-1614064548237-096f735f344f?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 6,
        title: "Why Precision Matters in the Modern Age",
        isoDate: "2023-12-10",
        author: "Anna Larsson",
        date: "December 10, 2023",
        description: "Discover why precision timing is the silent engine of the 21st century, from high-frequency stock trading to scientific breakthroughs and space travel.",
        content: `In our hyper-connected, high-speed modern world, precision is no longer just a luxury—it's an absolute necessity. We live in an age where life moves at the speed of light, and the difference between success and failure is often measured in milliseconds. In the world of high-frequency trading (HFT), specialized algorithms execute thousands of trades per second. For these financial giants, a delay of even a few microseconds in receiving market data can result in millions of dollars in lost opportunity or realized losses.

Precision timing is equally critical for our global infrastructure. Telecommunications networks use optical fibers to transmit data across oceans; these networks require nanosecond-level synchronization to prevent data collisions and ensure your video calls and internet streams remain smooth and uninterrupted. In the scientific realm, experiments such as the Large Hadron Collider or the detection of gravitational waves require timing so precise that it can discern the movement of light over distances smaller than an atom.

As we advance toward the future of quantum computing, autonomous vehicles, and deep-space exploration, our reliance on even greater precision will only grow. Autonomous cars must process sensory data and make split-second decisions to ensure safety on the road. Spacecraft traveling to Mars or beyond must time their engine burns with perfect accuracy to navigate the vast distances of the solar system. Precision is the silent engine of progress, enabling the complex systems that define the 21st century to function with harmony and reliability.`,
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 7,
        title: "The Future of Time: Quantum Clocks and Beyond",
        isoDate: "2024-01-15",
        author: "Dr. Alan Turing",
        date: "January 15, 2024",
        description: "How quantum entanglement and laser cooling are creating clocks that lose less than a second in 15 billion years.",
        content: `As we push the limits of technology, quantum clocks are emerging as the next frontier in timekeeping. These devices use trapped ions and cold atoms to achieve accuracy so extreme they wouldn't lose a second in 15 billion years. This is longer than the current age of the universe! These clocks don't just measure time; they measure the pulse of reality itself. By using lasers to cool atoms to near absolute zero, scientists can freeze them into a 'quantum state' where their electronic transitions become the most stable vibration known to man.

The implications of this discovery are staggering. Quantum clocks are so sensitive that they can detect the warping of space-time caused by tiny changes in the Earth's gravitational pull. If you lift a quantum clock by just a few centimeters, it will tick faster due to General Relativity—the same effect predicted by Albert Einstein over a century ago. This makes them powerful tools for mapping the Earth's interior and searching for elusive dark matter.

In the future, deep-space navigation will rely on quantum clocks to steer spacecraft through the interstellar void. Instead of relying on round-trip signals from Earth, ships will be able to calculate their own position by comparing the beat of their on-board quantum clock with the pulsars of distant galaxies. We are entering an era where timekeeping isn't just about punctuality; it's the key to unlocking the mysteries of the quantum world and becoming a true spacefaring civilization.`,
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 8,
        title: "Time Perception: How Our Brains Process the Seconds",
        isoDate: "2024-02-22",
        author: "Dr. Maya Angelou",
        date: "February 22, 2024",
        description: "Explore the psychological phenomenon of time expansion and contraction. Why does time fly when we have fun?",
        content: `Time isn't just a number on a wall; it's an experience in our minds. Have you ever wondered why an hour spent waiting for a bus feels like eternity, while an hour with a loved one feels like a heartbeat? This is called 'Subjective Time Perception', and it is one of the most mysterious functions of the human brain. Unlike sight or hearing, we don't have a single organ for time. Instead, our brain constructs time through a complex network of neural pathways processing emotion, intensity, and memory.

Chronostasis, for example, is the reason why the first second of a clock seems to last longer than the others when you first look at it. Our brain is filling in the 'gap' of visual processing with a still image. Similarly, during high-adrenaline life-threatening situations, many people report that time 'slows down'. Our brain is actually recording denser memories due to the intense focus, making the event feel much longer when we recall it later.

As we age, time often seems to speed up because we encounter fewer novel experiences. For a child, every day is a new adventure, and the brain is busy building new neural maps. For an adult, the routine of life allows the brain to 'chunk' time together, making years seem to vanish. By understanding how our brains process time, we can learn to 'slow it down' by seeking out the new, the unusual, and the beautiful in our daily lives.`,
        image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 9,
        title: "Celestial Navigation: How Sailors Used Time to Cross Oceans",
        isoDate: "2024-03-10",
        author: "Capt. James Cook",
        date: "March 10, 2024",
        description: "The harrowing quest to solve the longitude problem. Discover how a carpenter's clock saved the British Navy.",
        content: `Before the invention of GPS, the only way to find your way across the vast, featureless ocean was by the stars and a precise clock. Finding latitude (how far north or south you are) was easy—you just measured the angle of the sun at noon. But finding longitude (how far east or west) was the 'Great Challenge' of the 18th century. Without knowing your position, ships would run aground on hidden reefs, resulting in thousands of deaths and lost treasures every year.

The secret to longitude was time. If you knew the time at your home port and the local time on your ship (based on the sun), the difference would tell you how many degrees you had traveled. But back then, no clock could survive the rocking, humidity, and temperature swings of a ship at sea. The British government offered a king's ransom for a solution, leading to the legendary rivalry between astronomers and horologists.

It was John Harrison, a humble self-taught carpenter, who spent his life building the 'Marine Chronometer'. His final invention, the H4 watch, was no larger than a pocket watch but held its time across a grueling journey to the West Indies. This invention single-handedly expanded the horizons of global trade and saved countless lives. Even today, naval officers are trained in the use of the sextant and the chronometer, a testament to the era when time meant the difference between a safe arrival and a watery grave.`,
        image: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=800&auto=format&fit=crop"
    }
];

const BlogDetail = () => {
    const { id } = useParams();
    const blog = blogs.find(b => b.id === parseInt(id));

    // Get 3 related blogs (randomized each visit)
    const relatedBlogs = blogs
        .filter(b => b.id !== parseInt(id))
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

    useEffect(() => {
        if (blog) {
            // Dynamic SEO Updates
            document.title = `${blog.title} | World Clock Insights`;

            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) metaDesc.setAttribute('content', blog.description);

            // Rich Schema integration for Google
            const schemaData = {
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": blog.title,
                "description": blog.description,
                "image": blog.image,
                "datePublished": blog.isoDate,
                "author": { "@type": "Person", "name": blog.author },
                "publisher": { "@type": "Organization", "name": "World Clock" },
                "mainEntityOfPage": { "@type": "WebPage", "@id": window.location.href }
            };

            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.id = 'json-ld-schema';
            script.text = JSON.stringify(schemaData);
            document.head.appendChild(script);

            return () => {
                const s = document.getElementById('json-ld-schema');
                if (s) s.remove();
            };
        }
    }, [id, blog]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [id]);

    if (!blog) {
        return (
            <main className="container py-5 text-center mt-5">
                <h2 className="display-6 fw-bold">Story Not Found</h2>
                <Link to="/blog" className="btn btn-primary mt-4 rounded-pill px-4">See All Blogs</Link>
            </main>
        );
    }

    return (
        <main className="blog-section">
            <div className="blog-detail-container container animate-in">
                <nav className="back-link-wrapper" aria-label="Breadcrumb">
                    <Link to="/blog" className="back-link">
                        <span className="back-arrow">&larr;</span> Explore Other Insights
                    </Link>
                </nav>

                <article className="detail-card mb-5">
                    <header className="detail-header p-5">
                        <div className="meta-container d-flex flex-wrap align-items-center gap-4 mb-4">
                            <span className="meta-item d-flex align-items-center gap-2">
                                <BsCalendar3 className="text-primary" /> <time dateTime={blog.isoDate}>{blog.date}</time>
                            </span>
                            <span className="meta-item d-flex align-items-center gap-2">
                                <BsPerson className="text-primary" /> <span>{blog.author}</span>
                            </span>
                            <span className="meta-item d-flex align-items-center gap-2">
                                <BsClock className="text-primary" /> <span>6 min read</span>
                            </span>
                        </div>
                        <h1 className="display-4 fw-bold">{blog.title}</h1>
                        <p className="blog-lead-text mt-3 text-muted">{blog.description}</p>
                    </header>

                    <figure className="image-wrapper m-0">
                        <img src={blog.image} className="img-fluid detail-image" alt={`Detailed view of: ${blog.title}`} style={{ backgroundColor: '#e2e8f0', minHeight: '400px' }} fetchpriority="high" />
                    </figure>

                    <section className="blog-content p-5">
                        {blog.content.split('\n\n').map((paragraph, i) => (
                            <p key={i} className="mb-4">{paragraph}</p>
                        ))}
                    </section>

                    {/* <footer className="article-footer border-top p-5 text-center bg-light">
                        <h3 className="h4 fw-bold mb-4">Empower Your Knowledge</h3>
                        <p className="mb-4">Spread the story and inspire precision in others.</p>
                        <div className="d-flex justify-content-center gap-3 flex-wrap">
                            <button className="btn btn-outline-dark rounded-pill px-4" aria-label="Share on X">Share on X</button>
                            <button className="btn btn-outline-dark rounded-pill px-4" aria-label="Share on Facebook">Facebook</button>
                            <button className="btn btn-outline-dark rounded-pill px-4" aria-label="Share on LinkedIn">LinkedIn</button>
                        </div>
                    </footer> */}
                </article>

                {/* Related Section */}
                <section className="related-blogs-section pt-5 mt-5">
                    <h2 className="fw-bold mb-5 text-center h1">Related Chapters</h2>
                    <div className="row g-4">
                        {relatedBlogs.map(r => (
                            <article key={r.id} className="col-md-4">
                                <Link to={`/blog/${r.id}`} className="related-card-link text-decoration-none h-100 d-block">
                                    <div className="related-blog-card h-100 shadow-sm border-0">
                                        <div className="related-image-wrapper">
                                            <img src={r.image} className="img-fluid" alt={`Read more about: ${r.title}`} style={{ backgroundColor: '#e2e8f0', minHeight: '180px' }} loading="lazy" />
                                        </div>
                                        <div className="p-4 d-flex flex-column">
                                            <h4 className="related-title mb-3">{r.title}</h4>
                                            <footer className="mt-auto d-flex justify-content-between align-items-center">
                                                <time className="related-date small" dateTime={r.isoDate}>{r.date}</time>
                                                <span className="read-link fw-bold">Dive In &rarr;</span>
                                            </footer>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default BlogDetail;
