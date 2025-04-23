import React, { useState } from "react";

type JobSite = {
  name: string;
  url: string;
  description: string;
};

// Remote Job Sites
const remoteJobs: JobSite[] = [
  { name: "FlexJobs", url: "https://flexjobs.com", description: "Discover 50+ remote job categories with 100,000+ listings." },
  { name: "We Work Remotely", url: "https://weworkremotely.com", description: "Find 130,000+ remote jobs in tech, design, and more!" },
  { name: "Arc", url: "https://arc.dev", description: "AI-matched remote developer jobs & internships worldwide." },
  { name: "Jobspresso", url: "https://jobspresso.co", description: "Freelance and full-time jobs across 5+ industries." },
  { name: "RemoteCo", url: "https://remote.co", description: "Remote work resources and job listings across industries." },
  { name: "JustRemote", url: "https://justremote.co", description: "Access hidden remote jobs with PowerSearch for $6/month." },
  { name: "Virtual Vocations", url: "https://virtualvocations.com", description: "Thousands of telecommuting jobs & exclusive resources." },
  { name: "Remotive", url: "https://remotive.io", description: "Bi-monthly updates of remote jobs in 8+ categories." },
  { name: "PeoplePerHour", url: "https://peopleperhour.com", description: "Hire freelancers or find freelance jobs for digital projects." },
  { name: "FreelancerMap", url: "https://freelancermap.com", description: "Global IT freelance jobs with 11,000+ live listings." },
  { name: "Gun.io", url: "https://gun.io", description: "Freelance for developers—keep 100% of what you earn." },
  { name: "Toptal", url: "https://toptal.com", description: "High-paying freelance gigs with 0% commission cuts." },
  { name: "Upwork", url: "https://upwork.com", description: "Millions of freelance gigs for virtual assistants, writers, & more." },
  { name: "Fiverr", url: "https://fiverr.com", description: "Start small with $5+ gigs and build your portfolio." },
  { name: "Guru", url: "https://guru.com", description: "Connect with over 3 million freelancers globally." },
  { name: "Outsourcely", url: "https://outsourcely.com", description: "Work remotely with startups in 180+ countries." }
];

// WFO & Hybrid
const wfoHybridJobs: JobSite[] = [
  { name: "TCS (India)", url: "https://www.tcs.com/careers", description: "Hiring for Software Engineers | WFO & Hybrid | Pan India." },
  { name: "Infosys", url: "https://www.infosys.com/careers", description: "Tech roles with hybrid setup | India-wide hiring." },
  { name: "Google", url: "https://careers.google.com", description: "Tech, Product, and Operations roles | WFO & Hybrid." },
  { name: "Cognizant", url: "https://careers.cognizant.com", description: "Hiring freshers & experienced | WFO." },
  { name: "Capgemini", url: "https://www.capgemini.com/in-en/careers", description: "Hybrid and onsite IT roles across India." },
  { name: "Wipro", url: "https://careers.wipro.com", description: "Fresher programs & experienced IT roles | WFO & Hybrid." },
  { name: "HCLTech", url: "https://www.hcltech.com/careers", description: "Jobs for fresh graduates and laterals | WFO & Hybrid." },
  { name: "IBM", url: "https://www.ibm.com/employment", description: "Global tech roles for experienced candidates | WFO & Hybrid." },
  { name: "Accenture", url: "https://www.accenture.com/in-en/careers", description: "Global hiring with WFH and hybrid opportunities." },
  { name: "Deloitte", url: "https://www2.deloitte.com/global/en/careers.html", description: "Consulting and tech roles | WFO & Hybrid." },
  { name: "Tata Consultancy Services", url: "https://www.tcs.com/careers", description: "Global IT services and consulting roles." },
  { name: "Flipkart", url: "https://www.flipkartcareers.com", description: "Tech and operations roles across India." }
];

// Part-Time & Full-Time
const timeBasedJobs: JobSite[] = [
  { name: "Internshala", url: "https://internshala.com", description: "Part-time & internship jobs for students and freshers." },
  { name: "Naukri", url: "https://naukri.com", description: "Full-time & part-time jobs across all industries." },
  { name: "Indeed India", url: "https://in.indeed.com", description: "Explore both part-time and full-time job opportunities." },
  { name: "Monster India", url: "https://www.monsterindia.com", description: "Jobs based on job type, role, and work schedule." },
  { name: "LinkedIn Jobs", url: "https://linkedin.com/jobs", description: "Leverage your professional network to find jobs." },
  { name: "Glassdoor", url: "https://glassdoor.co.in", description: "Job search with company reviews and salary insights." },
  { name: "Freshersworld", url: "https://freshersworld.com", description: "Job portal for freshers and experienced professionals." },
  { name: "Shine.com", url: "https://shine.com", description: "Job search and career guidance for professionals." },
  { name: "SimplyHired", url: "https://simplyhired.com", description: "Job search engine with listings from various job boards." },
  { name: "CareerBuilder", url: "https://careerbuilder.com", description: "Job search and career advice for job seekers." }
];

// International
const internationalJobs: JobSite[] = [
  { name: "Microsoft", url: "https://careers.microsoft.com", description: "Tech & Management jobs globally." },
  { name: "Accenture", url: "https://www.accenture.com/in-en/careers", description: "Global hiring with WFH and hybrid opportunities." },
  { name: "Byju’s", url: "https://byjus.com/careers", description: "Hiring across Sales, Tech, and Academic roles." },
  { name: "Amazon", url: "https://www.amazon.jobs", description: "Global opportunities in tech, logistics, and more." },
  { name: "Adobe", url: "https://www.adobe.com/careers.html", description: "Creative and tech roles globally." },
  { name: "SAP", url: "https://www.sap.com/careers.html", description: "Global opportunities in enterprise software." },
  { name: "Oracle", url: "https://www.oracle.com/corporate/careers", description: "Global tech and consulting roles." },
  { name: "Apple", url: "https://www.apple.com/jobs/us/", description: "Tech and creative roles globally." },
  { name: "Facebook (Meta)", url: "https://www.metacareers.com", description: "Global opportunities in tech, product, and design." },
  { name: "Netflix", url: "https://jobs.netflix.com", description: "Global roles in entertainment, tech, and creative fields." },
  { name: "Spotify", url: "https://www.spotifyjobs.com", description: "Global opportunities in tech, music, and content." },
  { name: "Airbnb", url: "https://careers.airbnb.com", description: "Global roles in tech, hospitality, and design." }
];

// Fresher & Experienced
const fresherExperienceJobs: JobSite[] = [
  { name: "Scaler", url: "https://scaler.com/careers", description: "Openings for junior & mid-level devs." },
  { name: "Wipro", url: "https://careers.wipro.com", description: "Fresher programs & experienced IT roles." },
  { name: "HCLTech", url: "https://www.hcltech.com/careers", description: "Jobs for fresh graduates and laterals." },
  { name: "IBM", url: "https://www.ibm.com/employment", description: "Global tech roles for experienced candidates." },
  { name: "TCS NextStep", url: "https://nextstep.tcs.com", description: "Campus hiring and fresher programs." },
  { name: "Infosys Campus Connect", url: "https://www.infosys.com/careers/", description: "Fresher hiring and training programs." },
  { name: "Cognizant Academy", url: "https://careers.cognizant.com/global/en/candidate/jobsearch", description: "Training and job opportunities for freshers." },
  { name: "Capgemini Freshers", url: "https://www.capgemini.com/in-en/careers/", description: "Fresher hiring across various tech roles." },
  { name: "L&T Infotech", url: "https://www.lntinfotech.com/careers/", description: "Fresher and experienced IT roles." },
  { name: "Mphasis", url: "https://www.mphasis.com/careers.html", description: "Fresher and experienced hiring in tech and consulting." }
];

const Section: React.FC<{ title: string; jobs: JobSite[] }> = ({ title, jobs }) => (
  <section className="mb-10">
    <h2 className="text-3xl font-semibold text-indigo-400 mb-4">{title}</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {jobs.map((site, index) => (
        <div
          key={index}
          className="bg-slate-800 rounded-xl p-5 shadow hover:shadow-lg transition duration-300"
        >
          <h3 className="text-xl font-semibold text-blue-300">{site.name}</h3>
          <a href={site.url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 underline">
            {site.url}
          </a>
          <p className="text-sm text-gray-300 mt-2">{site.description}</p>
        </div>
      ))}
    </div>
  </section>
);

const Job: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filterJobs = (jobs: JobSite[], category: string) => {
    if (category === "all") return jobs;
    return jobs.filter(job => job.description.toLowerCase().includes(category.toLowerCase()));
  };

  const tabs = [
    { id: "all", label: "All" },
    { id: "fresher", label: "Fresher" },
    { id: "experienced", label: "Experienced" },
    { id: "part-time", label: "Part-Time" },
    { id: "full-time", label: "Full-Time" },
    { id: "remote", label: "Remote" },
    { id: "hybrid", label: "Hybrid" },
    { id: "wfo", label: "WFO" },
    { id: "international", label: "International" }
  ];

  const getSectionTitle = (tabId: string) => {
    switch (tabId) {
      case "fresher":
        return "Fresher-Friendly Jobs";
      case "experienced":
        return "Experienced Jobs";
      case "part-time":
        return "Part-Time Jobs";
      case "full-time":
        return "Full-Time Jobs";
      case "remote":
        return "Remote Job Websites";
      case "hybrid":
        return "Hybrid Roles";
      case "wfo":
        return "Work From Office Roles";
      case "international":
        return "International Jobs";
      default:
        return "Explore Job Opportunities";
    }
  };

  const getFilteredJobs = (tabId: string) => {
    switch (tabId) {
      case "remote":
        return remoteJobs;
      case "hybrid":
        return filterJobs(wfoHybridJobs, "hybrid");
      case "wfo":
        return filterJobs(wfoHybridJobs, "wfo");
      case "part-time":
        return filterJobs(timeBasedJobs, "part-time");
      case "full-time":
        return filterJobs(timeBasedJobs, "full-time");
      case "fresher":
        return filterJobs(fresherExperienceJobs, "fresher");
      case "experienced":
        return filterJobs(fresherExperienceJobs, "experienced");
      case "international":
        return internationalJobs;
      default:
        return [
          ...remoteJobs,
          ...wfoHybridJobs,
          ...timeBasedJobs,
          ...internationalJobs,
          ...fresherExperienceJobs
        ];
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-4xl font-bold text-center text-white mb-8">Job Explorer</h1>
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeTab === tab.id
                ? "bg-indigo-400 text-black"
                : "bg-slate-700 text-white hover:bg-indigo-300 hover:text-black"
            } transition`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <Section title={getSectionTitle(activeTab)} jobs={getFilteredJobs(activeTab)} />
    </div>
  );
};

export default Job;