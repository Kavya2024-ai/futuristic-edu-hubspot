export default function Team() {
  return (
    <div className="w-full mx-auto px-6 py-12">

      {/* Director Section (Added) */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h2
          className="text-2xl font-bold text-blue-600 mb-6"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Director's Message
        </h2>

        <div className="bg-white border rounded-xl shadow p-6">
          <img
            src="/director.jpg"  // 👉 put image in public folder
            alt="Director"
            className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
          />

          <h3 className="text-xl font-semibold text-indigo-600">
            K R Dileep Kumar
          </h3>
          <p className="text-gray-500 mb-3">Director</p>

          <p className="text-gray-600 text-sm leading-relaxed">
            Mr. K R Dileep Kumar, Director of the organization, is committed to
            providing faithful and honest services to society through a dedicated
            team that delivers impactful results and success stories. With expertise
            in education, tax consultancy, and auditing services, he has played a
            key role in building trust and credibility.
          </p>

          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
            Under his leadership, the company has grown into a trusted name known
            for innovation and excellence. His vision and dedication continue to
            drive the mission of empowering individuals and organizations to achieve
            their full potential.
          </p>
        </div>
      </div>

      {/* Existing Code (Unchanged) */}
      <h1
        className="text-3xl font-bold text-blue-600 mb-6"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        Our Team
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { name: "K R Dileep Kumar", role: "Founder & CEO" },
          { name: "John Doe", role: "Head of Training" },
          { name: "Jane Smith", role: "Operations Lead" },
        ].map((member) => (
          <div
            key={member.name}
            className="p-6 bg-white border rounded-xl shadow hover:shadow-md transition text-center"
          >
            <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full mb-4" />
            <h2
              className="font-semibold text-lg text-indigo-600"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {member.name}
            </h2>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}