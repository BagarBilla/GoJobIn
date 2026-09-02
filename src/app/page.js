import Image from "next/image";
import Navbar from "../LandingPage/Navbar";
import Hero from "@/LandingPage/Hero";
import Opportunities from "@/LandingPage/Opportunities";
import WorkFlow from "@/LandingPage/WorkFlow";
import Companies from "@/LandingPage/Companies";
import JobRoles from "@/LandingPage/JobRoles";
import ResumeTemplate from "@/LandingPage/ResumeTemplate";
import CareerResources from "@/LandingPage/CareerResources";
import Reviews from "@/LandingPage/Reviews";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Opportunities />
      <WorkFlow />
      <Companies />
      <JobRoles />
      <ResumeTemplate />
      <Reviews />
      <CareerResources />
    </>
  );
}
