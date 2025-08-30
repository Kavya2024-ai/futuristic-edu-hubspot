export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1
        className="text-3xl font-bold text-blue-600 mb-6"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        Our Services
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: "Corporate Training", desc: "Job-ready training in Finance & Taxation." },
          { title: "Internships", desc: "Hands-on experience in auditing & compliance." },
          { title: "Workshops", desc: "Practical sessions led by industry experts." },
        ].map((s) => (
          <div
            key={s.title}
            className="p-6 bg-white border rounded-xl shadow hover:shadow-md transition"
          >
            <h2
              className="font-semibold text-lg text-indigo-600"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {s.title}
            </h2>
            <p className="mt-2 text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
