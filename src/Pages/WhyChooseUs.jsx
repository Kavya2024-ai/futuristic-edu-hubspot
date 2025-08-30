export default function WhyChooseUs() {
  const points = [
    {
      title: "Practical, job-oriented learning",
      desc: "Real-world case studies, live projects and financial simulations that build workplace skills."
    },
    {
      title: "Hybrid learning model",
      desc: "Self-paced online content + live masterclasses + hands-on offline workshops."
    },
    {
      title: "AI-driven personalization",
      desc: "Adaptive learning paths, AI mock interviews and data-based course recommendations."
    },
    {
      title: "Industry-recognized certifications",
      desc: "Courses designed to align with ICAI, ACCA, CPA and CFA standards for better employability."
    },
    {
      title: "Placement & internship support",
      desc: "Partnerships with CA firms, audit houses and corporate teams to help placements."
    },
    {
      title: "Affordable & flexible pricing",
      desc: "Freemium trials, EMI options and corporate plans to make upskilling accessible."
    }
  ];

  return (
    <div className="w-full px-6 py-12 ">
      <h1
        className="text-3xl font-bold text-blue-600 mb-4"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        Why Choose Us
      </h1>

      <p className="text-gray-700 mb-8">
        We combine industry expertise, practical training and technology to make learners job-ready — fast.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {points.map((p) => (
          <article
            key={p.title}
            className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition"
            aria-labelledby={p.title.replace(/\s+/g, "-").toLowerCase()}
          >
            <h2
              id={p.title.replace(/\s+/g, "-").toLowerCase()}
              className="font-semibold text-lg text-indigo-600 mb-2"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {p.title}
            </h2>
            <p className="text-gray-600">{p.desc}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Get in touch
        </a>
      </div>
    </div>
  );
}
