import { useState } from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle, Calendar } from "lucide-react";

const certificates = [
  {
    title: "ServiceNow Certified Service Administrator",
    issuer: "ServiceNow",
    year: "2025",
    link: "https://drive.google.com/file/d/1IzZbvbaCazvfbTGLMv7NN9Vkrt8ZCKA0/view?usp=drive_link",
  },
  {
    title: "ServiceNow Certified Application Developer",
    issuer: "ServiceNow",
    year: "2025",
    link: "https://drive.google.com/file/d/1LEDoYr1Nq8CDjgGINkGvArW8hyUdx4wr/view?usp=sharing",
  },
  {
    title: "JavaScript Udemy Course",
    issuer: "Udemy",
    year: "2025",
    link: "https://drive.google.com/file/d/1Z-Cd3bsWLfZzucWsUPAd00y119eneVX6/view?usp=sharing",
  },
  {
    title: "Node JS Udemy Course",
    issuer: "Udemy",
    year: "2025",
    link: "https://drive.google.com/file/d/1bf5ZXveX24azSKYXurDAVr-EQ5Q5K_Jp/view?usp=drive_link",
  },
  {
    title: "REST APIs Udemy Course",
    issuer: "Udemy",
    year: "2025",
    link: "https://drive.google.com/file/d/1Bg5Sw9dW4QSn_pg41WvanMiWu9Ccus51/view?usp=drive_link",
  },
   {
    title: "Forage Commonwealth Bank Virtual Experience",
    issuer: "Forage",
    year: "2025",
    link: "https://drive.google.com/file/d/1qujWxq8aEBo40tv1DExjt5I-H1-Iroj3/view?usp=sharing",
  },
   {
    title: "Forage TATA Data Visualization Virtual Experience",
    issuer: "Forage",
    year: "2025",
    link: "https://drive.google.com/file/d/1UorTtVZNEGUN_FwReg34PAcyOw5_GIyw/view?usp=sharing"},
];

const Certificates = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen py-40 bg-[#04081A] relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
      <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Certificates & Achievements
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A showcase of courses and certifications earned through continuous
            learning.
          </p>
        </motion.div>

        {/* Certificate Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-6 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
                hoveredIndex === index
                  ? "border-emerald-500 scale-[1.02]"
                  : "border-blue-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="text-emerald-400 w-6 h-6" />
                  <h3 className="text-xl font-semibold text-white">
                    {cert.title}
                  </h3>
                </div>
                <p className="text-gray-300 flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  {cert.issuer}
                </p>
                <p className="text-gray-400 flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4" />
                  {cert.year}
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 text-sm font-medium text-white bg-emerald-500 rounded hover:bg-emerald-600 transition duration-300"
                >
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
