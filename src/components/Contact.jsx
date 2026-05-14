import React, { useEffect } from 'react';
import '../css/Pages.css';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us - Expert Support for Your Productivity Tools";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! Our team will review your inquiry and get back to you within 24-48 hours.");
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Contact Our Team: We're Here to Help</h1>

      <section className="page-section text-center">
        <p>
          Whether you have a technical question about our World Clock, feedback on our Stopwatch, or just want to say hello, we value every message we receive. Our community is at the heart of everything we build, and your insights help us refine our productivity suite.
        </p>
      </section>

      <div className="contact-form-container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter Your Full Name" required />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter Your Email Address" required />
              </div>
            </div>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="subject">Subject</label>
            <input type="text" className="form-control" id="subject" placeholder="Technical Support / General Inquiry / Feedback / Others" required />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="message">How can we assist you today?</label>
            <textarea className="form-control" id="message" rows="5" placeholder="Please provide as much detail as possible..." required></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-dark px-5 py-3 fw-bold" style={{ borderRadius: '12px', letterSpacing: '0.5px' }}>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

