import React from 'react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h2>About Us</h2>
        <p>
        Welcome to JobPortal, your premier destination for connecting job seekers with opportunities and employers with top talent. At JobPortal, we understand the challenges of navigating the job market, whether you're an experienced professional seeking new horizons or a recent graduate eager to kickstart your career. That's why we've crafted a platform that streamlines the job search process, making it easier and more efficient for both job seekers and employers alike.
        </p>
        <p>
        Whether you're embarking on a new career journey or seeking to grow your team, [JobPortalName] is here to support you. Join our community today and discover the possibilities that await. Together, let's redefine the future of work.
        </p>
        <p>
          Thank you for choosing Our website. If you have any questions or
          feedback, feel free to contact us.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
