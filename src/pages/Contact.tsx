import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "sonner";
import {
  Mail,
  MessageSquareText,
  User,
  BookHeadphones,
  GraduationCap,
  Clock,
  Briefcase,
  Handshake,
  Code2,
  CircleDollarSign,
  ShieldCheck,
} from "lucide-react";
import { LoaderOverlay } from "../components/LoaderOverlay";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  inquiryType: z.enum([
    "general",
    "project",
    "workshop",
    "internship",
    "career",
    "collaboration",
    "freelance",
    "other",
  ]),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1 },
  }),
};

const inquiryOptions = [
  {
    value: "general",
    label: "General Inquiry",
    icon: <MessageSquareText className="w-4 h-4 mr-2" />,
  },
  {
    value: "project",
    label: "Final Year Project",
    icon: <GraduationCap className="w-4 h-4 mr-2" />,
  },
  {
    value: "workshop",
    label: "Workshop Request",
    icon: <BookHeadphones className="w-4 h-4 mr-2" />,
  },
  {
    value: "internship",
    label: "Internship Guidance",
    icon: <Briefcase className="w-4 h-4 mr-2" />,
  },
  {
    value: "career",
    label: "Career Counseling",
    icon: <Handshake className="w-4 h-4 mr-2" />,
  },
  {
    value: "collaboration",
    label: "Open Source Collaboration",
    icon: <Code2 className="w-4 h-4 mr-2" />,
  },
  {
    value: "freelance",
    label: "Freelance Project",
    icon: <CircleDollarSign className="w-4 h-4 mr-2" />,
  },
  {
    value: "other",
    label: "Other Inquiry",
    icon: <ShieldCheck className="w-4 h-4 mr-2" />,
  },
];

const services = [
  {
    icon: <GraduationCap className="flex-shrink-0 h-6 w-6 text-blue-500" />,
    title: "Final Year Projects",
    desc: "End-to-end development support with documentation, deployment, and presentation guidance",
  },
  {
    icon: <BookHeadphones className="flex-shrink-0 h-6 w-6 text-green-500" />,
    title: "Mentorship Programs",
    desc: "Personalized 1:1 sessions on modern tech stacks, architecture, and best practices",
  },
  {
    icon: <Clock className="flex-shrink-0 h-6 w-6 text-purple-500" />,
    title: "Workshop & Training",
    desc: "Hands-on workshops covering React, Node.js, Cloud, DevOps, and CI/CD pipelines",
  },
  {
    icon: <Briefcase className="flex-shrink-0 h-6 w-6 text-orange-500" />,
    title: "Internship Guidance",
    desc: "Real-world project experience with industry-standard workflows and code reviews",
  },
  {
    icon: <Handshake className="flex-shrink-0 h-6 w-6 text-pink-500" />,
    title: "Career Counseling",
    desc: "Resume building, interview preparation, and tech career roadmap planning",
  },
  {
    icon: <Code2 className="flex-shrink-0 h-6 w-6 text-teal-500" />,
    title: "Open Source Collaboration",
    desc: "Guidance on contributing to open source and maintaining your own projects",
  },
];

export const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { inquiryType: "general" },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await axios.post("https://next-step-backend-opal.vercel.app/nextstep/contact", data);
      toast.success("Message sent successfully!", {
        description: "We'll respond within 24 hours",
      });
      reset();
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again later",
      });
    }
  };

  return (
    <>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Content Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center md:text-left"
            >
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent mb-4">
                Let's Build Together
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                From concept to deployment - we've got you covered
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              {/* Services Section */}
              <motion.div
                className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  How We Can Assist
                </h3>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.title}
                      variants={listItemVariants}
                      custom={index}
                      className="flex items-start gap-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      {service.icon}
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {service.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {service.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Why Choose Us */}
              <motion.div
                className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
              >
                <h4 className="font-semibold text-lg mb-4 text-blue-800 dark:text-blue-200">
                  Why Choose Us?
                </h4>
                <ul className="space-y-3">
                  {[
                    {
                      icon: <ShieldCheck className="w-5 h-5 text-green-500" />,
                      text: "Industry-validated solutions",
                    },
                    {
                      icon: <Clock className="w-5 h-5 text-purple-500" />,
                      text: "24/7 support during critical phases",
                    },
                    {
                      icon: <Code2 className="w-5 h-5 text-blue-500" />,
                      text: "Production-grade code reviews",
                    },
                    {
                      icon: (
                        <CircleDollarSign className="w-5 h-5 text-yellow-500" />
                      ),
                      text: "Cost-effective solutions for students",
                    },
                  ].map((item, index) => (
                    <motion.li
                      key={item.text}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-gray-600 dark:text-gray-300"
                    >
                      {item.icon}
                      <span className="text-sm">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Professional Assistance */}
              <motion.div
                className="p-6 rounded-xl  bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Immediate Support For
                  </h3>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      "Code Reviews",
                      "Debugging Help",
                      "Architecture Design",
                      "Deployment Support",
                    ].map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-3 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-lg text-sm"
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full  gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg text-sm font-medium transition-all"
                  >
                    Schedule Consultation
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="sticky top-8 h-fit"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <User className="inline h-4 w-4 mr-2" />
                      Your Name
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.name
                          ? "border-red-500"
                          : "border-gray-300 dark:border-gray-600"
                      } bg-transparent transition-colors focus:ring-2 focus:ring-blue-500 
                    dark:[&:-webkit-autofill]:!bg-gray-800
                    dark:[&:-webkit-autofill]:[-webkit-text-fill-color:#fff]
                    [&::placeholder]:text-gray-400
                    dark:[&::placeholder]:text-gray-500`}
                      placeholder="John Doe"
                      autoComplete="name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <Mail className="inline h-4 w-4 mr-2" />
                      Email Address
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.email
                          ? "border-red-500"
                          : "border-gray-300 dark:border-gray-600"
                      } bg-transparent transition-colors focus:ring-2 focus:ring-blue-500
                    dark:[&:-webkit-autofill]:!bg-gray-800
                    dark:[&:-webkit-autofill]:[-webkit-text-fill-color:#fff]
                    [&::placeholder]:text-gray-400
                    dark:[&::placeholder]:text-gray-500`}
                      placeholder="john@example.com"
                      autoComplete="email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <MessageSquareText className="inline h-4 w-4 mr-2" />
                    Inquiry Type
                  </label>
                  <select
                    {...register("inquiryType")}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.inquiryType
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    } bg-transparent transition-colors focus:ring-2 focus:ring-blue-500
                  text-gray-900 dark:text-gray-100`}
                  >
                    {inquiryOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        className="flex items-center dark:bg-gray-800 p-2"
                      >
                        {option.icon}
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <MessageSquareText className="inline h-4 w-4 mr-2" />
                    Subject
                  </label>
                  <input
                    {...register("subject")}
                    type="text"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.subject
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    } bg-transparent transition-colors focus:ring-2 focus:ring-blue-500`}
                    placeholder="e.g., Need Project Help"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <MessageSquareText className="inline h-4 w-4 mr-2" />
                    Your Message
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.message
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    } bg-transparent transition-colors focus:ring-2 focus:ring-blue-500`}
                    placeholder="Describe your requirements in detail..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg text-sm font-medium transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        {/* <motion.div
        className="mt-16 grid md:grid-cols-4 gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div> */}

        {/* Final CTA */}
        {/* <motion.div
          className="mt-16 text-center p-8 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Whether you're stuck on a coding problem, need career advice, or
            want to discuss project ideas, our team is here to help you succeed
            in your technical journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              className="bg-blue-600  px-6 py-2.5  gap-2  bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg text-sm font-medium transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Call
            </motion.button>
            <motion.button
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-2.5 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Pricing
            </motion.button>
          </div>
        </motion.div> */}
      </div>
     <div className="">
     <AnimatePresence>{isSubmitting && <LoaderOverlay />}</AnimatePresence>
     </div>
    </>
  );
};
