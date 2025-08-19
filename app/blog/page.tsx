export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">CyberWebStack Blog</h1>
      <p className="text-lg text-gray-300 max-w-2xl text-center">
        Welcome to our blog! ?? Here we share insights, tutorials, and the latest trends in 
        <span className="text-cyan-400"> Cloud & DevOps</span>, 
        <span className="text-cyan-400"> AI Automation</span>, 
        <span className="text-cyan-400"> Cybersecurity</span>, and 
        <span className="text-cyan-400"> IT Infrastructure</span>.
      </p>

      <div className="mt-10 text-gray-400">
        <p>? New posts coming soon. Stay tuned!</p>
      </div>
    </div>
  );
}
