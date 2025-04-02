import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <div className="wrapper">
      <motion.div
        className="form-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Any Propositions?</h1>
        <p>Complete the form below and let's have a talk on your project!</p>
      </motion.div>

      <motion.div
        className="input-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Phone number" />
        <button>Start Conversation</button>
      </motion.div>
    </div>
  );
}
