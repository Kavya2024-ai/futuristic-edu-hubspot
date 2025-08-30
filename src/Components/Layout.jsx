import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* keep all page content inside centered container */}
        <div className="mx-auto max-w-7xl px-6 py-10">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

