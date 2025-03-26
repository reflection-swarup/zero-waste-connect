import React from "react"; // Removed { useState }
import Navbar from "../components/MainPageComponents/NavBar";
import HeroSection from "../components/MainPageComponents/HeroSection";
import FeatureCard from "../components/MainPageComponents/FeatureCard";
import Footer from "../components/MainPageComponents/Footer";

import eventImage from "../assets/event.jpg";
import volunteerImage from "../assets/volunteer.jpg";
import partnerImage from "../assets/partner.jpg";
import donateImage from "../assets/donate.jpg";

const LandingPage = () => {
  return (
    <div className="bg-green-50 min-h-screen">
      <Navbar />
      <HeroSection />

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8 max-w-5xl mx-auto">
        <FeatureCard image={eventImage} text="Join us at an event" />
        <FeatureCard image={volunteerImage} text="Volunteer with us" />
        <FeatureCard image={partnerImage} text="Become a partner" />
        <FeatureCard image={donateImage} text="Donate now" />
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
