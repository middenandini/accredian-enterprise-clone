export default function Hero() {
  return (
    <section id="hero" className="bg-gradient-to-br from-blue-50 to-white py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
          Enterprise Upskilling
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Transform Your Tech Team with AI & Data Expertise
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Empower your organization with custom learning paths in Data Science, AI, and Product Management designed by top industry leaders.
        </p>
        <div className="flex justify-center space-x-4 pt-4">
          <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 shadow-md transition">
            Schedule Demo
          </a>
          <a href="#features" className="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition">
            Explore Offerings
          </a>
        </div>
      </div>
    </section>
  );
}