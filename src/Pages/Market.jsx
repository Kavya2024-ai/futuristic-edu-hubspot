export default function Market() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Market Presence</h1>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left - Content */}
        <div>
          <p className="text-lg leading-relaxed mb-4">
            Futuristic Edu Hubspot has a growing footprint across India and international
            markets. By partnering with universities, training institutes, and industry
            leaders, we are consistently expanding our reach to serve a diverse community
            of learners and professionals.
          </p>
          <ul className="list-disc pl-6 text-lg leading-relaxed">
            <li>Strong presence in Indian metropolitan cities</li>
            <li>Collaborations with international universities</li>
            <li>Expanding into online & digital learning platforms</li>
            <li>Strategic tie-ups with corporate training partners</li>
          </ul>
        </div>

        {/* Right - Image */}
        <div>
          <img
            src="https://source.unsplash.com/600x400/?business,global"
            alt="Market Presence"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
