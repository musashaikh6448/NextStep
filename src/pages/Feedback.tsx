import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "sonner";
import { Mail, MessageSquareText, Star, User } from "lucide-react";
import { LoaderOverlay } from "../components/LoaderOverlay";

const feedbackSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  rating: z.number().min(1).max(5, "Rating must be between 1-5"),
});

type FeedbackFormValues = z.infer<typeof feedbackSchema>;

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1 },
  }),
};

const StarRating: React.FC<{
  rating: number;
  setRating: (value: number) => void;
}> = ({ rating, setRating }) => {
  return (
    <div className="flex items-center space-x-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.button
          key={star}
          type="button"
          onClick={() => setRating(star)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative"
        >
          <svg
            className={`w-8 h-8 transition-colors duration-200 ${
              star <= rating
                ? "text-yellow-400"
                : "text-gray-300 dark:text-gray-600"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>

          {star === rating && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute inset-0 -z-10"
            >
              <div className="absolute inset-0 bg-yellow-100 rounded-full blur-sm animate-pulse" />
            </motion.div>
          )}
        </motion.button>
      ))}
    </div>
  );
};

export const Feedback: React.FC = () => {
  const [currentRating, setCurrentRating] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackSchema),
  });
  React.useEffect(() => {
    setValue("rating", currentRating);
  }, [currentRating, setValue]);

  const onSubmit = async (data: FeedbackFormValues) => {
    try {
      await axios.post("https://next-step-backend-opal.vercel.app/nextstep/feedback", data);
      toast.success("Feedback submitted successfully!", {
        description: "Thank you for your valuable input!",
      });
      reset();
    } catch (error) {
      toast.error("Failed to submit feedback", {
        description: "Please try again later.",
      });
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Content Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={formVariants}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent mb-4">
              Your Voice Matters
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Help us shape better experiences together
            </p>
          </motion.div>

          <motion.div
            className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg"
            variants={formVariants}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Why Share Feedback?
            </h3>
            <ul className="space-y-6">
              {[
                "Direct impact on product development",
                "Priority access to new features",
                "Exclusive community benefits",
                "Improved user experience for everyone",
              ].map((item, i) => (
                <motion.li
                  key={item}
                  variants={listItemVariants}
                  custom={i}
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-300"
                >
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Right Form Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
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
                  } bg-transparent transition-colors focus:ring-2 focus:ring-blue-500`}
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
                  } bg-transparent transition-colors focus:ring-2 focus:ring-blue-500`}
                  placeholder="john@example.com"
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
                placeholder="Feedback about..."
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <Star className="inline h-4 w-4 mr-2" />
                Rate Your Experience
              </label>
              <StarRating rating={currentRating} setRating={setCurrentRating} />
              {errors.rating && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.rating.message}
                </p>
              )}
            </div>
            <input
              type="hidden"
              {...register("rating", { valueAsNumber: true })}
            />
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
                placeholder="Write your detailed feedback here..."
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
              className="w-full  gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg text-sm font-medium transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? "Submitting..." : "Send Feedback"}
            </motion.button>
          </form>
        </motion.div>
      </div>
      <div className="">
     <AnimatePresence>{isSubmitting && <LoaderOverlay />}</AnimatePresence>
     </div>

    </div>
  );
};
