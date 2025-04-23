import React from "react";

type JobSite = {
  name: string;
  url: string;
  description: string;
};

const jobSites: JobSite[] = [
  { name: "FlexJobs", url: "https://flexjobs.com", description: "Discover 50+ remote job categories with 100,000+ listings." },
  { name: "We Work Remotely", url: "https://weworkremotely.com", description: "Find 130,000+ remote jobs in tech, design, and more!" },
  { name: "Arc", url: "https://arc.dev", description: "AI-matched remote developer jobs & internships worldwide." },
  { name: "Jobspresso", url: "https://jobspresso.co", description: "Freelance and full-time jobs across 5+ industries." },
  { name: "RemoteCo", url: "https://remote.co", description: "Remote work resources and job listings across industries." },
  { name: "JustRemote", url: "https://justremote.co", description: "Access hidden remote jobs with PowerSearch for $6/month." },
  { name: "Virtual Vocations", url: "https://virtualvocations.com", description: "Find thousands of telecommuting jobs & exclusive resources." },
  { name: "Remotive", url: "https://remotive.io", description: "Bi-monthly updates of remote jobs in 8+ categories." },
  { name: "Skip the Drive", url: "https://skipthedrive.com", description: "Resources & remote jobs without the gridlock." },
  { name: "Pangian", url: "https://pangian.com", description: "Join the fastest-growing global remote job community." },
  { name: "Working Nomads", url: "https://workingnomads.co", description: "Curated remote job emails daily or weekly." },
  { name: "PowerToFly", url: "https://powertofly.com", description: "Tech-focused job board connecting diverse professionals globally." },
  { name: "Dribbble", url: "https://dribbble.com", description: "Remote gigs for animators, designers, and product creators." },
  { name: "Remote OK", url: "https://remoteok.com", description: "Remote job board with listings in tech, design, and more." },
  { name: "Landing.Jobs", url: "https://landing.jobs", description: "Remote jobs filtered by flexibility and commuting distance." },
  { name: "Career Vault", url: "https://careervault.io", description: "Search 200+ fresh remote jobs added daily." },
  { name: "Authentic Jobs", url: "https://authenticjobs.com", description: "Remote tech and design jobs from trusted companies." },
  { name: "Wellfound", url: "https://wellfound.com", description: "Explore 100s of remote startup jobs worldwide." },
  { name: "Upwork", url: "https://upwork.com", description: "Millions of freelance gigs for virtual assistants, writers, & more." },
  { name: "Fiverr", url: "https://fiverr.com", description: "Start small with $5+ gigs and build your portfolio." },
  { name: "Designhill", url: "https://designhill.com", description: "Join creative contests & connect with global clients." },
  { name: "Toptal Business", url: "https://toptal.com", description: "High-paying freelance gigs with 0% commission cuts." },
  { name: "Freelancer", url: "https://freelancer.com", description: "Bid on 10,000+ global freelance projects daily." },
  { name: "FreelancerMap", url: "https://freelancermap.com", description: "Global IT freelance jobs with 11,000+ live listings." },
  { name: "Gun", url: "https://gun.io", description: "Freelance for developers—keep 100% of what you earn." },
  { name: "Behance", url: "https://behance.net", description: "Showcase your portfolio and land design gigs globally." },

  // ✅ Extra Sites Added
  { name: "PeoplePerHour", url: "https://peopleperhour.com", description: "Hire freelancers or find freelance jobs for digital projects." },
  { name: "Guru", url: "https://guru.com", description: "Connect with over 3 million freelancers globally." },
  { name: "Outsourcely", url: "https://outsourcely.com", description: "Work remotely with startups in 180+ countries." },
  { name: "AngelList Talent", url: "https://angel.co", description: "Remote startup jobs in early and growth-stage tech companies." }
];

const Job: React.FC = () => {
  return (
    <div className="min-h-screen  text-white p-6 md:p-12">
      <h1 className="text-4xl font-bold text-center mb-10">🌍 Remote Job Websites for 2025</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {jobSites.map((site, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-5 shadow hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-semibold text-blue-400">{site.name}</h2>
            <a href={site.url} target="_blank" rel="noopener noreferrer" className="text-sm text-cyan-300 underline">
              {site.url}
            </a>
            <p className="text-sm text-gray-300 mt-2">{site.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Job;
