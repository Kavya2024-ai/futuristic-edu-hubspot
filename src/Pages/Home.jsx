export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="w-full px-6 py-12 text-center">
          <h1
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Futuristic Edu Hubspot Pvt Ltd
          </h1>
          <p
            className="mt-4 max-w-2xl mx-auto text-lg text-blue-100"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Empowering learners with practical job-ready skills in Finance,
            Taxation & Auditing.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/about"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Learn More
            </a>
            <a
              href="/contact"
              className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div className="p-8 bg-white border rounded-xl shadow hover:shadow-md transition">
          <h2
            className="font-bold text-xl text-blue-600"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Our Mission
          </h2>
          <p className="mt-2 text-gray-600">
            Equip learners with practical skills and job-ready experience so
            they succeed in corporate roles.
          </p>
        </div>
        <div className="p-8 bg-white border rounded-xl shadow hover:shadow-md transition">
          <h2
            className="font-bold text-xl text-indigo-600"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Our Vision
          </h2>
          <p className="mt-2 text-gray-600">
            Revolutionize education by combining theory, hands-on practice and
            AI-driven guidance.
          </p>
        </div>
      </section>
    </div>
  );
}
