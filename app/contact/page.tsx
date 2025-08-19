export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
        
        <form 
          action="https://formspree.io/f/mvgqjaoe"   // ✅ yaha tera Formspree endpoint
          method="POST"
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input 
              type="text" 
              name="name" 
              required 
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input 
              type="email" 
              name="email" 
              required 
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea 
              name="message" 
              rows={4} 
              required 
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-400"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
