export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-500 flex justify-between">
        <div>© {new Date().getFullYear()} VAYKR Academy Pvt Ltd</div>
        <div>Contact: taxon.educouns50@outlook.com</div>
      </div>
    </footer>
  );
}
