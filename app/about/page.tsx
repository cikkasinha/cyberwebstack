import Navbar from "../../components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
        <p className="mb-4">
          CyberWebStack is a next-gen IT solutions provider focused on cloud, automation, and digital transformation.
        </p>
        <p>
          With expertise across AWS, DevOps, AI, and cybersecurity, we help enterprises scale securely.
        </p>
      </section>
    </div>
  );
}
