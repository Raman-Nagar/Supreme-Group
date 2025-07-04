"use client";
import { useForm } from "@/context/form-context";

export default function ContactSection() {
  const { values, handleChange, handleSubmit, loading } = useForm();

  return (
    <section className="bg-[#0067B1] py-16 px-6 lg:px-40" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Get in touch</h2>
          <div className="h-[2px] w-10 bg-[#FFFFFF] mb-6"></div>
          <p className="mb-4">For general enquiries</p>

          <div className="mb-4">
            <strong>Address :</strong>
            <br />
            110, 16th Road, Chembur, Mumbai – 400071
          </div>
          <div className="mb-4">
            <strong>Phone :</strong>
            <br />
            +91 22 25208822
          </div>
          <div>
            <strong>Email :</strong>
            <br />
            info@supremegroup.co.in
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Full name"
            className="w-full border-b border-[#FFFFFF] bg-transparent placeholder-[#FFFFFF] py-2 outline-none"
            required
          />
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="E-mail"
            className="w-full border-b border-[#FFFFFF] bg-transparent placeholder-[#FFFFFF] py-2 outline-none"
            required
          />
          <input
            name="subject"
            value={values.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full border-b border-[#FFFFFF] bg-transparent placeholder-[#FFFFFF] py-2 outline-none"
            required
          />
          <textarea
            name="message"
            rows={4}
            value={values.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full border-b border-[#FFFFFF] bg-transparent placeholder-[#FFFFFF] py-2 outline-none resize-none"
            required
          />
          <button
            type="submit"
            className="bg-[#FFFFFF] w-full md:w-auto disabled:bg-gray-300 disabled:cursor-text cursor-pointer text-[#006bb6] px-6 py-2 rounded-full hover:bg-gray-100 transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}
