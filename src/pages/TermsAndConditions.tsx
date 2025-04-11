import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to NextStepX! By accessing our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Intellectual Property Rights</h2>
        <p>
          All content on this website, including text, graphics, logos, and images, is the property of NextStepX and is protected by applicable intellectual property laws. Unauthorized use is prohibited.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. User Conduct</h2>
        <p>
          Users are expected to use the website responsibly and not engage in any activities that may harm the website or other users. Prohibited activities include, but are not limited to, posting offensive content, attempting to breach security, and infringing on intellectual property rights.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Limitation of Liability</h2>
        <p>
          NextStepX is not liable for any damages that may occur from the use of this website. All content is provided "as is" without warranties of any kind.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Changes will be posted on this page, and your continued use of the website signifies your acceptance of the updated terms.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">6. Contact Us</h2>
        <p>
          If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:dev.nxtstep@gmail.com" className="text-blue-500">dev.nxtstep@gmail.com</a>.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
