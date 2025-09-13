import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch(`${API_BASE}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });


      const data = await res.json();
      setStatus(data.message);
      if (res.ok) e.target.reset();
    } catch (err) {
      setStatus("❌ Failed to send message.");
    }

    setLoading(false);
  };

  return (

    <div className='md:m-auto bg-card md:w-3/4 p-8 rounded-lg shadow-xs '>
      <h3 className='text-2xl text-start px-1 font-semibold mb-6'> Send a Message</h3>

      <form onSubmit={handleSubmit} className='space-y-6'>
        <div className="flex justify-between gap-5">
          <div className="w-1/2 ">

            <input type="text" name="name" placeholder='Enter your name ' id="name" required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' />
          </div>

          <div className="w-1/2 ">

            <input type="email" name="email" placeholder='john@gmail.com ' id="email" required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' />
          </div>
        </div>

        <div className="">

          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="Hello, I'd like to talk about..."
            required
            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 resize-none focus:ring-primary"
          />

        </div>
        <button type='submit' className={`cosmic-button w-full flex items-center justify-center gap-2`}> {loading ? "Sending" : "Send Message"} <Send size={16} /> </button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
