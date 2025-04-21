import { motion } from "framer-motion";
import {
  BookOpen,
  Rocket,
  Users,
  Code,
  Cloud,
  Cpu,
  MapPin,
  Zap,
} from "lucide-react";

const BlogPage = () => {
  return (
    <div className="min-h-dvh ">
      <article className="w-[90vw]  prose dark:prose-invert prose-lg">
        {/* Article Header */}
        <header className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6 text-blue-600 dark:text-blue-400"
          >
            <Rocket className="w-8 h-8" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Tech Career Insights
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl sm:text-5xl font-bold leading-tight mb-6"
          >
            2025 Technology Career Masterplan: Navigating the Digital Frontier
          </motion.h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>15 min read</span>
            <span>•</span>
            <span>Updated April 2025</span>
          </div>
        </header>


{/* 2025 Technology & Career Path Section */}
<motion.section
  id="future-trends"
  className="space-y-8"
>
  <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
    <span className="bg-purple-100 dark:bg-purple-900/20 p-2 sm:p-3 rounded-lg">
      <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 dark:text-purple-400" />
    </span>
    <span>2025 Technology Horizon & Career Strategy</span>
  </h2>

  <div className="space-y-6 sm:space-y-10">
    {/* Emerging Technologies */}
    <div className="bg-blue-50 dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl">
      <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-blue-600 dark:text-blue-400">
        Emerging Technologies to Master
      </h3>
      
      <div className="grid gap-6 md:grid-cols-2">
        {/* Technology Columns */}
        {[1, 2].map((col) => (
          <div key={col} className="space-y-4 sm:space-y-6">
            {[
              {
                icon: <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />,
                title: "AI Revolution",
                items: [
                  "Multimodal AI systems (text+image+code)",
                  "Self-improving ML models",
                  "Edge AI deployment frameworks"
                ]
              },
              {
                icon: <Cloud className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />,
                title: "Quantum Leap",
                items: [
                  "Quantum machine learning algorithms",
                  "Post-quantum cryptography standards",
                  "Hybrid classical-quantum systems"
                ]
              },
              {
                icon: <Code className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />,
                title: "Web Evolution",
                items: [
                  "Web3.0 decentralized architectures",
                  "AI-generated UI/UX systems",
                  "WebAssembly 2.0 applications"
                ]
              },
              {
                icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />,
                title: "Sustainable Tech",
                items: [
                  "Green cloud computing",
                  "Carbon-aware algorithms",
                  "Energy-efficient hardware"
                ]
              }
            ].slice((col-1)*2, col*2).map((tech, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <div className="bg-white dark:bg-gray-700 p-2 sm:p-3 rounded-lg">
                  {tech.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-semibold mb-2">{tech.title}</h4>
                  <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    {tech.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>

    {/* Career Path */}
    <div className="bg-green-50 dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl">
      <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-green-600 dark:text-green-400">
        5-Year Career Optimization Path
      </h3>
      
      <div className="grid gap-6 md:grid-cols-2">
        {/* Career Phases */}
        <div className="space-y-4 sm:space-y-6">
          {[
            {
              step: "1",
              title: "Foundation Building (2024)",
              items: [
                "Master cloud-native development",
                "Learn infrastructure-as-code basics",
                "Get AWS/Azure/GCP certified"
              ]
            },
            {
              step: "3",
              title: "Specialization Phase (2026)",
              items: [
                "Choose AI/Quantum/Security track",
                "Develop open-source contributions",
                "Lead cross-functional projects"
              ]
            }
          ].map((phase, index) => (
            <div key={index} className="flex items-start gap-3 sm:gap-4">
              <div className="text-xl sm:text-2xl font-bold text-blue-600">{phase.step}</div>
              <div className="flex-1">
                <h4 className="text-lg sm:text-xl font-semibold mb-2">{phase.title}</h4>
                <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  {phase.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4 sm:space-y-6">
          {[
            {
              step: "2",
              title: "Skill Expansion (2025)",
              items: [
                "Implement production-grade AI systems",
                "Master distributed systems design",
                "Learn quantum computing basics"
              ]
            },
            {
              step: "4-5",
              title: "Leadership Era (2027-2028)",
              items: [
                "Architect enterprise-scale solutions",
                "Mentor junior engineers",
                "Drive technical innovation"
              ]
            }
          ].map((phase, index) => (
            <div key={index} className="flex items-start gap-3 sm:gap-4">
              <div className="text-xl sm:text-2xl font-bold text-blue-600">{phase.step}</div>
              <div className="flex-1">
                <h4 className="text-lg sm:text-xl font-semibold mb-2">{phase.title}</h4>
                <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  {phase.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Table */}
      <div className="mt-6 sm:mt-8 bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-lg">
        <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-600 dark:text-blue-400">
          Critical Certifications Timeline
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="text-left border-b-2 border-gray-200 dark:border-gray-600 text-sm sm:text-base">
                <th className="pb-2 sm:pb-3">Year</th>
                <th className="pb-2 sm:pb-3">Core Certifications</th>
                <th className="pb-2 sm:pb-3">Emerging Tech</th>
              </tr>
            </thead>
            <tbody className="text-sm sm:text-base">
              {[
                ['2024', 'AWS Solutions Architect', 'AI Fundamentals'],
                ['2025', 'Kubernetes Security', 'Quantum Basics'],
                ['2026', 'ML Engineering', 'Blockchain Architecture'],
                ['2027', 'Enterprise Architecture', 'AI Governance']
              ].map(([year, core, emerging], index) => (
                <tr key={index} className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-2 sm:py-3 font-medium">{year}</td>
                  <td className="py-2 sm:py-3">{core}</td>
                  <td className="py-2 sm:py-3 text-green-600 dark:text-green-400">{emerging}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    {/* Blockquote */}
    <blockquote className="text-lg sm:text-xl italic pl-4 sm:pl-6 border-l-2 sm:border-l-4 border-blue-600 dark:border-blue-400 text-gray-700 dark:text-gray-300">
      "The most successful 2025 engineers will combine deep technical expertise with 
      systems thinking and ethical implementation skills. Continuous learning 
      investments yield 3-5× salary growth over 5 years."
    </blockquote>
  </div>
</motion.section>
        

        {/* Table of Contents */}
        <motion.aside
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl mb-16"
        >
          <h2 className="flex items-center gap-3 text-xl font-semibold mb-4">
            <BookOpen className="w-6 h-6" />
            Article Navigation
          </h2>
          <nav className="grid gap-3">
            {[
              "Industry Landscape",
              "Technical Requirements",
              "Career Framework",
              "Global Opportunities",
              "Indian Tech Revolution",
            ].map((item) => (
              <a
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                key={item}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                → {item}
              </a>
            ))}
          </nav>
        </motion.aside>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Industry Landscape Section */}
          <motion.section
            id="industry-landscape"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              Current Industry Landscape
            </h2>

            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              The global technology sector is undergoing unprecedented
              transformation, with
              <strong className="text-blue-600 dark:text-blue-400">
                {" "}
                68% of enterprises
              </strong>{" "}
              reporting accelerated digital transformation timelines. Key
              drivers include:
            </p>

            <ul className="space-y-4 pl-6 border-l-4 border-blue-100 dark:border-gray-700">
              <li className="relative pl-4">
                <div className="absolute left-0 top-2 w-2 h-2 bg-blue-600 rounded-full" />
                Rapid adoption of cloud-native architectures (projected to grow
                at 24% CAGR through 2026)
              </li>
              <li className="relative pl-4">
                <div className="absolute left-0 top-2 w-2 h-2 bg-blue-600 rounded-full" />
                Emergence of AI-first development paradigms (75% of new
                applications now include ML components)
              </li>
              <li className="relative pl-4">
                <div className="absolute left=0 top-2 w-2 h-2 bg-blue-600 rounded-full" />
                Global demand for cybersecurity expertise (1.8M unfilled
                positions worldwide)
              </li>
            </ul>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Cloud className="w-6 h-6 text-green-600 dark:text-green-400" />
                Cloud Adoption Metrics
              </h3>
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                {[
                  ["Multi-Cloud Strategies", "82%"],
                  ["Serverless Adoption", "64%"],
                  ["Kubernetes Expertise Gap", "58%"],
                ].map(([label, value]) => (
                  <div key={label} className="space-y-2">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      {value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          

          {/* Technical Requirements Section */}
          <motion.section id="technical-requirements" className="space-y-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Code className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              Core Technical Competencies
            </h2>

            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              Modern technical roles demand expertise across multiple domains.
              Our analysis of 12,000 job postings reveals:
              <span className="block mt-4 text-lg bg-blue-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-blue-600">
                "Full-stack developers now require proficiency in an average of
                4.2 cloud services and 3.5 monitoring tools"
              </span>
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span className="bg-blue-100 dark:bg-blue-900/20 p-2 rounded-lg">
                    <Cpu className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </span>
                  Infrastructure Essentials
                </h3>
                <ul className="space-y-3 pl-2">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">▸</span>
                    Infrastructure as Code (Terraform, CloudFormation)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">▸</span>
                    Container Orchestration (Kubernetes, Nomad)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">▸</span>
                    Observability Pipelines (OpenTelemetry, Prometheus)
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span className="bg-purple-100 dark:bg-purple-900/20 p-2 rounded-lg">
                    <Cloud className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </span>
                  Development Paradigms
                </h3>
                <ul className="space-y-3 pl-2">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">▸</span>
                    AI-Augmented Development (GitHub Copilot, CodeWhisperer)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">▸</span>
                    Edge Computing Architectures
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">▸</span>
                    Quantum-Resistant Cryptography
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Career Framework Section */}
          <motion.section id="career-framework" className="space-y-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Rocket className="w-8 h-8 text-green-600 dark:text-green-400" />
              5-Year Career Development Framework
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  stage: "Foundation",
                  years: "Years 1-2",
                  focus: [
                    "Cloud Fundamentals",
                    "System Design",
                    "CI/CD Pipelines",
                  ],
                },
                {
                  stage: "Specialization",
                  years: "Year 3",
                  focus: [
                    "AI/ML Ops",
                    "Security Architecture",
                    "Performance Engineering",
                  ],
                },
                {
                  stage: "Leadership",
                  years: "Years 4-5",
                  focus: [
                    "Technical Strategy",
                    "Cross-Functional Management",
                    "Innovation Roadmapping",
                  ],
                },
              ].map((phase) => (
                <div
                  key={phase.stage}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
                >
                  <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                    {phase.years}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{phase.stage}</h3>
                  <ul className="space-y-2">
                    {phase.focus.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-gray-500 dark:text-gray-400 mt-1">
                          •
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Indian Tech Revolution Section */}
          <motion.section id="indian-tech-revolution" className="space-y-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <MapPin className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              India's Digital Transformation
            </h2>

            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                India's tech sector now contributes <strong>9.3%</strong> to
                national GDP, with
                <strong> $194 billion</strong> in software exports. Key
                developments:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    Emerging Technologies
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "AI/ML Adoption (42% enterprises)",
                      "Blockchain Solutions (28% implementation rate)",
                      "Quantum Computing Research (18% YoY growth)",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                    Workforce Trends
                  </h3>
                  <div className="space-y-4">
                    {[
                      ["5.3M", "Tech Professionals"],
                      ["22%", "Annual Engineering Grad Growth"],
                      ["1.4M", "Cloud Certifications (2023)"],
                    ].map(([value, label]) => (
                      <div
                        key={label}
                        className="border-b pb-3 border-gray-200 dark:border-gray-700"
                      >
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                          {value}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <blockquote className="pl-6 border-l-4 border-orange-600 dark:border-orange-400 italic text-gray-700 dark:text-gray-300">
                "India's digital economy is projected to reach $1 trillion by
                2030, driven by massive investments in semiconductor
                manufacturing and AI research infrastructure."
              </blockquote>
            </div>
          </motion.section>
        </div>
      </article>
    </div>
  );
};

export default BlogPage;
