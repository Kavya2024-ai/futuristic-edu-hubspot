export default function Team() {
  return (
    <div className="w-full mx-auto px-6 py-12">
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
