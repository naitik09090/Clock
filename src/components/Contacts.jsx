import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = () => {
    return (
        <form className="ContAct_Form d-flex flex-column align-items-center text-sm py-5 px-3">
            <p className="fs-5 fw-medium pb-2">Contact Us</p>
            <div className="row gx-4 gy-3 w-100" style={{ maxWidth: '700px' }}>
                <div className="col-md-6">
                    <label className="form-label">Your Name</label>
                    <input type="text" className="form-control" required />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Your Email</label>
                    <input type="email" className="form-control" required />
                </div>
            </div>

            <div className="mt-4 w-100" style={{ maxWidth: '700px' }}>
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="6" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-4 px-4 py-2">
                Send Message
            </button>

        </form>
    );
}

export default ContactForm;
