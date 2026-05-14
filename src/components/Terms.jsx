import React, { useEffect } from 'react';
import '../css/Pages.css';

const Terms = () => {
  useEffect(() => {
    document.title = "Terms & Conditions - User Agreement & Service Guidelines";
  }, []);

  return (
    <div className="page-container">
      <h1 className="page-title">Terms & Conditions: A Guide to Our Agreement</h1>

      <section className="page-section">
        <h2>1. Introduction and Acceptance</h2>
        <p>
          Welcome to our productivity suite. These Terms & Conditions govern your use of our website and its associated tools, including the World Clock, Countdown Timer, and Stopwatch. By accessing or using our Service, you signify that you have read, understood, and agree to be bound by this Agreement. If you do not agree to these terms, please do not use the Service.
        </p>
      </section>

      <section className="page-section">
        <h2>2. Intellectual Property Rights</h2>
        <p>
          Unless otherwise stated, we or our licensors own the intellectual property rights for all material on this website. This includes the design, layout, look, appearance, and graphics of our clock tools. All intellectual property rights are reserved. You may access this from our site for your own personal use subjected to restrictions set in these terms and conditions.
        </p>
        <p>You must not:</p>
        <ul>
          <li>Republish material from our site without prior consent.</li>
          <li>Sell, rent, or sub-license material from the site.</li>
          <li>Reproduce, duplicate, or copy material from the site for commercial purposes.</li>
          <li>Redistribute content from our platform (unless content is specifically made for redistribution).</li>
        </ul>
      </section>

      <section className="page-section">
        <h2>3. User Conduct and Prohibited Uses</h2>
        <p>
          You agree to use our Service only for lawful purposes. You are prohibited from using the site or its content:
        </p>
        <ul>
          <li>For any unlawful purpose or to solicit others to perform or participate in any unlawful acts.</li>
          <li>To violate any international, federal, provincial, or state regulations, rules, or laws.</li>
          <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others.</li>
          <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability.</li>
          <li>To upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service.</li>
        </ul>
      </section>

      <section className="page-section">
        <h2>4. Disclaimer of Warranties; Limitation of Liability</h2>
        <p>
          We do not guarantee, represent, or warrant that your use of our service will be uninterrupted, timely, secure, or error-free. We do not warrant that the results that may be obtained from the use of the service (such as precise timing records) will be accurate or reliable at all times, as performance can be affected by browser environment and hardware limitations.
        </p>
        <p>
          In no case shall our platform, our directors, officers, employees, or affiliates be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages.
        </p>
      </section>

      <section className="page-section">
        <h2>5. Indemnification</h2>
        <p>
          You agree to indemnify, defend and hold harmless our platform and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.
        </p>
      </section>

      <section className="page-section">
        <h2>6. Termination</h2>
        <p>
          The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes. These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.
        </p>
      </section>

      <section className="page-section">
        <h2>7. Governing Law</h2>
        <p>
          These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of the jurisdiction in which our platform is based.
        </p>
      </section>

      <section className="page-section">
        <h2>8. Changes to Terms of Service</h2>
        <p>
          You can review the most current version of the Terms of Service at any time at this page. We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes.
        </p>
      </section>
    </div>
  );
};

export default Terms;

