export default function Features() {
  const offerings = [
    {
      title: "Customized Curricula",
      desc: "Tailored executive programs designed around your company’s specific tech stack and goals.",
      icon: "🎯"
    },
    {
      title: "Industry Expert Trainers",
      desc: "Learn directly from top practitioners in Data Science, Machine Learning, and AI.",
      icon: "🧠"
    },
    {
      title: "Measurable ROI & Metrics",
      desc: "Track employee skill progression and project outputs through our enterprise dashboard.",
      icon: "📊"
    }
  ];

  return (
    <section id="features" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Why Top Enterprises Choose Accredian
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {offerings.map((item, index) => (
          <div key={index} className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}