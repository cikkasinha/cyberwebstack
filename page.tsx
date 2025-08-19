// app/contact/page.tsx
export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="mb-4">We’d love to hear from you. Reach us via the form below:</p>

      <form className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded p-2"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border rounded p-2"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border rounded p-2 h-32"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </form>

      <div className="mt-6 text-center">
        <p>Email: <a href="mailto:chandrakant.sinha@cyberwebstack.com" className="text-blue-600">chandrakant.sinha@cyberwebstack.com</a></p>
        <p>Phone: <a href="tel:+918595802675" className="text-blue-600">+91 8595802675</a></p>
      </div>
    </div>
  );
}
