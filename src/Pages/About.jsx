import { Users, Target, Award } from "lucide-react";

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">About Us</h1>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left side - Text */}
        <div>
          <p className="text-lg leading-relaxed mb-4">
            Futuristic Edu Hubspot is a forward-thinking educational consultancy
            dedicated to shaping bright futures. With years of expertise in guiding
            students, institutions, and professionals, we provide solutions that
            bridge the gap between ambition and achievement.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Our mission is to empower learners with the right knowledge, skills,
            and opportunities to excel in today’s fast-changing world. From academic
            guidance to career development, we deliver quality services with
            integrity, innovation, and impact.
          </p>
        </div>

        {/* Right side - Image */}
        <div>
          <img
            src="https://source.unsplash.com/600x400/?education,students"
            alt="About Futuristic Edu Hubspot"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Icons Section */}
      <div className="grid md:grid-cols-3 gap-6 mt-10 text-center">
        <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
          <Users className="mx-auto text-blue-600" size={40} />
          <h3 className="font-semibold mt-2">Trusted by Students</h3>
          <p className="text-sm text-gray-600">Guided 1000+ learners globally</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
          <Target className="mx-auto text-green-600" size={40} />
          <h3 className="font-semibold mt-2">Focused Approach</h3>
          <p className="text-sm text-gray-600">Clear strategies for career growth</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
          <Award className="mx-auto text-yellow-600" size={40} />
          <h3 className="font-semibold mt-2">Proven Expertise</h3>
          <p className="text-sm text-gray-600">Years of success in education consultancy</p>
        </div>
      </div>
    </section>
  );
}
