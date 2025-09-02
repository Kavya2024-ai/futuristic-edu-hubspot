import { BookOpen, Users, Globe, Briefcase } from "lucide-react";

export default function Services() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Our Services
      </h1>

      <p className="text-lg text-center mb-10">
        At Futuristic Edu Hubspot, we deliver high-quality services designed to 
        support students, institutions, and professionals at every stage of 
        their journey.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Service 1 */}
        <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
          <BookOpen className="mx-auto text-blue-600" size={40} />
          <h3 className="font-semibold text-xl mt-4 mb-2 text-center">
            Academic Guidance
          </h3>
          <p className="text-sm text-gray-600 text-center">
            Helping students build strong academic foundations with personalized 
            learning paths.
          </p>
        </div>

        {/* Service 2 */}
        <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
          <Users className="mx-auto text-green-600" size={40} />
          <h3 className="font-semibold text-xl mt-4 mb-2 text-center">
            Career Counselling
          </h3>
          <p className="text-sm text-gray-600 text-center">
            Providing expert advice and mentorship to align strengths with career goals.
          </p>
        </div>

        {/* Service 3 */}
        <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
          <Globe className="mx-auto text-indigo-600" size={40} />
          <h3 className="font-semibold text-xl mt-4 mb-2 text-center">
            Global Opportunities
          </h3>
          <p className="text-sm text-gray-600 text-center">
            Guidance for pursuing higher education and collaborations worldwide.
          </p>
        </div>

        {/* Service 4 */}
        <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
          <Briefcase className="mx-auto text-yellow-600" size={40} />
          <h3 className="font-semibold text-xl mt-4 mb-2 text-center">
            Corporate Training
          </h3>
          <p className="text-sm text-gray-600 text-center">
            Customized training programs to upskill professionals and businesses.
          </p>
        </div>
      </div>
    </section>
  );
}
