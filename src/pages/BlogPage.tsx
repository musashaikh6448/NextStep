import { motion } from "framer-motion";

const BlogPage = () => {
  return (
    <div className="min-h-dvh  p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Blog Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            The 2024 Tech Landscape: Skills, Trends, and Career Strategies
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl">
            Comprehensive Guide for Tech Professionals and Graduates
          </p>
        </motion.header>

        {/* Industry Demand Section */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            📈 Current Industry Demands
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              <strong className="text-blue-600 dark:text-blue-400">2024 Hiring Trends:</strong> 
              The tech industry is experiencing a 22% YoY growth with specific demands:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Top 5 In-Demand Roles</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>AI/ML Solutions Architect (78% growth)</li>
                  <li>Cloud Security Engineer (65% growth)</li>
                  <li>Data Engineering Specialist (60% growth)</li>
                  <li>DevOps Automation Expert (55% growth)</li>
                  <li>Blockchain Developer (82% growth)</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Critical Skill Gaps</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Multi-cloud management (AWS+GCP+Azure)</li>
                  <li>MLOps pipeline creation</li>
                  <li>Real-time data processing</li>
                  <li>Post-quantum cryptography</li>
                </ul>
              </div>
            </div>

            <p>
              <strong className="text-green-600 dark:text-green-400">
                Industry-Specific Tech Adoption:
              </strong>
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="p-3 text-left">Sector</th>
                    <th className="p-3 text-left">Key Technologies</th>
                    <th className="p-3 text-left">Adoption Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-3">Healthcare</td>
                    <td className="p-3">AI Diagnostics, Blockchain EHR</td>
                    <td className="p-3">41%</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-3">Finance</td>
                    <td className="p-3">Quantum Risk Modeling, DeFi</td>
                    <td className="p-3">67%</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-3">Manufacturing</td>
                    <td className="p-3">IIoT, Digital Twins</td>
                    <td className="p-3">58%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.article>

        {/* Emerging Tech Deep Dive */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            🛠️ Technology Stack Evolution
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Frontend Ecosystem</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>React 19 + Server Components Adoption</li>
                  <li>Wasm-based Frameworks (Leptos, Sycamore)</li>
                  <li>Edge-rendered SPAs (Next.js 14, Remix)</li>
                  <li>WebGPU for Browser-based ML</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Backend Revolution</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Rust-based Services (Actix, Rocket)</li>
                  <li>Serverless GraphQL (Hasura, AWS AppSync)</li>
                  <li>Distributed SQL (CockroachDB, Yugabyte)</li>
                  <li>Event-driven Microservices (Apache Pulsar)</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">DevOps 3.0 Trends</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Infrastructure:</p>
                  <ul className="list-disc pl-6 mt-1">
                    <li>GitOps (ArgoCD, Flux)</li>
                    <li>Chaos Engineering Tools</li>
                    <li>Policy-as-Code (OPA)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Monitoring:</p>
                  <ul className="list-disc pl-6 mt-1">
                    <li>eBPF-based Observability</li>
                    <li>AI-Driven Incident Management</li>
                    <li>Cost Optimization SDKs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Career Development Section */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            🎓 Graduate Success Blueprint
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">First 5 Years Roadmap</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Year 1-2:</span>
                    <span>Core Technical Mastery</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Year 3:</span>
                    <span>Specialization Phase</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Year 4-5:</span>
                    <span>Architecture Leadership</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Certification Matrix</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>AWS Certified Machine Learning</li>
                  <li>Google Cloud Architect</li>
                  <li>Certified Kubernetes Security</li>
                  <li>Blockchain Council BCDA</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Networking Strategy</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Conferences:</p>
                  <ul className="list-disc pl-6 mt-1">
                    <li>KubeCon (Cloud Native)</li>
                    <li>DEF CON (Security)</li>
                    <li>NeurIPS (AI Research)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Communities:</p>
                  <ul className="list-disc pl-6 mt-1">
                    <li>GitHub Open Source</li>
                    <li>Dev.to Technical Blogging</li>
                    <li>MLH Hackathons</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Global Tech Hubs */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            🌍 Global Tech Employment Hotspots
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="p-3 text-left">Region</th>
                    <th className="p-3 text-left">Focus Areas</th>
                    <th className="p-3 text-left">Avg Salary</th>
                    <th className="p-3 text-left">Growth Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-3">Silicon Valley</td>
                    <td className="p-3">AI Startups, Web3</td>
                    <td className="p-3">$185k</td>
                    <td className="p-3">15%</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-3">Bangalore</td>
                    <td className="p-3">SaaS, DevOps</td>
                    <td className="p-3">$48k</td>
                    <td className="p-3">22%</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-3">Berlin</td>
                    <td className="p-3">Climate Tech, IoT</td>
                    <td className="p-3">€78k</td>
                    <td className="p-3">18%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Remote Work Trends</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>63% companies offer full remote</li>
                  <li>Async work tooling adoption up 41%</li>
                  <li>Global salary standardization</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Immigration Policies</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Germany Tech Visa (Blue Card)</li>
                  <li>Canada Global Talent Stream</li>
                  <li>Australia TSS 482 Visa</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.article>

      
      </div>
    </div>
  );
};

export default BlogPage;