
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Degrees } from "./pages/Degrees";
import { CareerRoadmap } from "./pages/CareerRoadmap";
import { About } from "./pages/About";
import { Community } from "./pages/Community";
import { useStore } from "./store/useStore";
import { ScrollToTop } from "./components/ScrollToTop";
import { WorkInProgress } from "./pages/WorkInProgress";
import CareerDetails from "./pages/CareerDetails";
import Careers from "./pages/Careers";
import { Toaster } from "sonner";
import { Feedback } from "./pages/Feedback";
import { Contact } from "./pages/Contact";
import { Certifications } from "./pages/Certifications";
import { ResumeBuilder } from "./pages/ResumeBuilder";
import CodeEditor from "./pages/CodeEditor";
import AMAPage from "./pages/AMA";
import NextStepAI from "./pages/NextStepAI";
import Quiz from "./pages/Quiz";
import Store from "./pages/Store";
import Footer from "./components/Footer";
import LearnLanguages from "./pages/LearnLanguages";
import LanguagesPage from "./pages/LanguagesPage";
import PrivacyPolicy from "./pages/Privacy";
import BlogPage from "./pages/BlogPage";
import TermsAndConditions from "./pages/TermsAndConditions";
import News from "./pages/News";
import Job from "./pages/Job";
// // import AdsteraSocialBar from "./components/AdsteraSocialBar";

function App() {
  const theme = useStore((state) => state.theme);

  return (
    <div className={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/degrees" element={<Degrees />} />
          <Route path="/degree/:degreeName" element={<CareerRoadmap />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/resume-builder" element={<ResumeBuilder />} />
          <Route path="/playground" element={<CodeEditor />} />
          <Route path="/ask-me-anything" element={<AMAPage />} />
          <Route path="/next-step-ai" element={<NextStepAI />} />
          <Route path="/about" element={<About />} />
          <Route path="/learn-language" element={<LearnLanguages />} />
          <Route path="/languages/:languageName" element={<LanguagesPage />} />
          <Route path="/community" element={<Community />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/store" element={<Store />} />
          <Route path="/career/:id" element={<CareerDetails />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/news" element={<News/>} />
          <Route path="/job" element={<Job/>} />
          <Route path="*" element={<WorkInProgress />} />
        </Routes>
        <ScrollToTop />
        <Footer />
             {/* <AdsteraSocialBar /> */}

      </Layout>

      <Toaster
        position="top-center"
        richColors
        theme={theme}
        className="!text-lg !p-4 !rounded-xl !shadow-xl !w-[400px]"
        toastOptions={{
          className: "text-base font-medium",
          style: {
            padding: "16px",
            fontSize: "18px",
            borderRadius: "12px",
          },
        }}
      />
    </div>
  );
}

export default App;
