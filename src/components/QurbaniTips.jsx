
const QurbaniTips = () => {

  const tips = [
    {
      icon: "🕌",
      title: "Follow Islamic Guidelines",
      desc: "Treat the animal kindly. Use a sharp knife and recite “Bismillah, Allahu Akbar” before slaughter.",
    },
    {
      icon: "🔪",
      title: "Proper Slaughter Method",
      desc: "Lay the animal gently, face Qibla, and cut throat, windpipe, and blood vessels properly.",
    },
    {
      icon: "🧼",
      title: "Clean Environment",
      desc: "Choose a clean place. Keep water and cleaning tools ready before starting.",
    },
    {
      icon: "🩸",
      title: "Safe Blood Disposal",
      desc: "Dispose blood properly by digging soil. Avoid dirtying roads or public places.",
    },
    {
      icon: "🧴",
      title: "Personal Hygiene",
      desc: "Wear clean clothes, use gloves, and wash hands frequently.",
    },
    {
      icon: "🥩",
      title: "Meat Handling",
      desc: "Use clean tools, cut properly, and store meat in fridge quickly.",
    },
  ];

  return (
    <section className="py-12 mt-20 ">
      <div className="container mx-auto px-4">
        
  
        <h2 className="text-3xl font-bold text-center mb-8">
          🕌 Qurbani Tips
        </h2>

  
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="text-3xl mb-3">{tip.icon}</div>
              <h3 className="text-xl font-semibold mb-2">
                {tip.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default QurbaniTips;
