"use client"

import CaseStudyCard from "./components/case-study-card";
import AnimatedClientLogoCarousel from "./components/client-logo";
import Contact from "./components/contact";
import Customers from "./components/customers";
import LiveChatWidget from "./components/live-chat-widget";
import Navbar from "./components/navbar";
import InteractivePortfolioFilter from "./components/portfolio-filter";
import InteractiveProcessTimeline from "./components/process-timeline";
import ROICalculator from "./components/roi-calculator";
import InteractiveServiceShowcaseTabs from "./components/services-tab";
import RealTimeSocialProofNotification from "./components/social-proof-notification";
import AnimatedStatisticsCounter from "./components/statistic-counter";
import Team from "./components/team";

export default function Home() {
  return (
   <div className="container">
    <Navbar/>
    <InteractiveServiceShowcaseTabs/>
    <AnimatedClientLogoCarousel/>
    <CaseStudyCard/>
    <ROICalculator/>
    <Customers/>
    <AnimatedStatisticsCounter/>
    <Team/>
    <InteractivePortfolioFilter/>
    <InteractiveProcessTimeline/>
    <LiveChatWidget/>
    <RealTimeSocialProofNotification/>
    <Contact/>

    <a href="#home" className="scroll-up-btn">
            <i className="fas fa-arrow-up"></i>
        </a>
   </div>
  );
}
