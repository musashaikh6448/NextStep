
const PrivacyPolicy = () => {
  return (
    <>
      <head>
        <title>Privacy Policy | NextStep</title>
        <meta name="description" content="Understand how NextStep handles your data and privacy while using our educational platform." />
      </head>
      <main className="max-w-4xl mx-auto px-4 py-12 text-gray-100">
        <h1 className="text-4xl font-bold mb-6 text-white">Privacy Policy</h1>

        <p className="mb-4">
          This Privacy Policy outlines how <strong>NextStep</strong> collects, uses, and protects your data while using our platform, which offers programming language information, resources, and external course links.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-white">1. Information We Collect</h2>
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>Non-personal data such as device type, screen resolution, browser version, and operating system.</li>
          <li>Behavioral analytics including pages visited, languages clicked, and time spent per section.</li>
          <li>Referrer data to understand how you arrived at our site (e.g., from social media or a search engine).</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-white">2. How We Use Your Data</h2>
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>To improve the layout, flow, and responsiveness of content (like course lists and resources).</li>
          <li>To understand popular topics and enhance features such as animations and filtering.</li>
          <li>To maintain secure and stable access across various devices.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-white">3. External Services & Cookies</h2>
        <p className="mb-4">
          We may use cookies for:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>Saving language selection preferences locally.</li>
          <li>Tracking anonymous usage through services like Google Analytics or Vercel Insights.</li>
        </ul>
        <p className="mb-4">
          You can clear cookies via your browser settings anytime.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-white">4. Third-Party Links</h2>
        <p className="mb-4">
          We link to third-party platforms such as Udemy, Coursera, or YouTube for learning resources. We are not responsible for their privacy practices. Please review their policies before engaging.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-white">5. Data Security</h2>
        <p className="mb-4">
          While we do not collect sensitive personal information, we use HTTPS and follow good development practices to ensure a secure browsing experience.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-white">6. Children’s Privacy</h2>
        <p className="mb-4">
          Our platform is educational and safe for all ages, but we do not knowingly collect any personal data from children.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-white">7. Policy Updates</h2>
        <p className="mb-4">
          We may update this policy as our app evolves. Changes will be posted here with the date below.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-white">8. Contact Us</h2>
        <p className="mb-4">
          If you have any privacy concerns or inquiries, contact us at: <span className="underline">support@nextstep.dev</span>
        </p>

        <p className="text-sm text-gray-400 mt-10">Last updated: April 11, 2025</p>
      </main>
    </>
  );
};

export default PrivacyPolicy;
