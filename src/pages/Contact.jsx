import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                "service_3axwi0f",
                "template_jlxpa1i",
                form.current,
                "q5niYFVqmj_8Wb7-F"
            )
            .then(
                () => {
                    alert("Message sent successfully!");
                    form.current.reset();
                    setLoading(false);
                },
                (error) => {
                    console.error(error);
                    alert("Failed to send message");
                    setLoading(false);
                }
            );
    };

    const message = encodeURIComponent(
        "Hi Veer, I saw your portfolio and would like to connect."
    );

    const whatsappLink = `https://wa.me/917496813276?text=${message}`;

    return (
        <section className="w-full bg-[#0f0f0f] pt-6 pb-16 px-6 md:px-16 ">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold text-[#f5f5f5] mb-3">
                        Get in Touch
                    </h2>
                    <p className="text-[#a1a1aa]">
                        Have a project or just want to connect? Feel free to reach out.
                    </p>
                </div>

                {/* Layout */}
                <div className="grid md:grid-cols-2 gap-12">

                    {/* LEFT */}
                    <div className="space-y-6">

                        <div className="bg-[#111111] p-6 rounded-2xl border border-[#27272a]">
                            <h3 className="text-lg font-medium text-[#f5f5f5] mb-2">
                                Quick Contact
                            </h3>
                            <p className="text-sm text-[#a1a1aa] mb-4">
                                Reach out instantly through these platforms.
                            </p>

                            <div className="flex flex-col gap-3">

                                {/* WhatsApp */}
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full text-center py-3 rounded-lg border border-[#27272a] text-[#f5f5f5] hover:bg-[#18181b] transition"
                                >
                                    Chat on WhatsApp
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/veer-singh-190b9631b/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full text-center py-3 rounded-lg border border-[#27272a] text-[#f5f5f5] hover:bg-[#18181b] transition"
                                >
                                    Connect on LinkedIn
                                </a>
                            </div>
                        </div>

                        {/* Email Info */}
                        <div className="bg-[#111111] p-6 rounded-2xl border border-[#27272a]">
                            <h3 className="text-lg font-medium text-[#f5f5f5] mb-2">
                                Email
                            </h3>
                            <p className="text-sm text-[#a1a1aa]">
                                Prefer email? Send me a message using the form.
                            </p>
                        </div>

                    </div>

                    {/* RIGHT: Form */}
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="bg-[#111111] p-8 rounded-2xl border border-[#27272a] space-y-6"
                    >
                        <div>
                            <label className="text-sm text-[#a1a1aa]">Name</label>
                            <input
                                type="text"
                                name="user_name"
                                required
                                className="w-full mt-1 border border-[#27272a] rounded-lg bg-[#0f0f0f] text-white px-4 py-2 focus:ring-1 focus:ring-white outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-[#a1a1aa]">Email</label>
                            <input
                                type="email"
                                name="user_email"
                                required
                                className="w-full mt-1 border border-[#27272a] rounded-lg bg-[#0f0f0f] text-white px-4 py-2 focus:ring-1 focus:ring-white outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-[#a1a1aa]">Message</label>
                            <textarea
                                name="message"
                                rows="5"
                                required
                                className="w-full mt-1 border border-[#27272a] rounded-lg bg-[#0f0f0f] text-white px-4 py-2 focus:ring-1 focus:ring-white outline-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-[#e5e5e5] transition disabled:opacity-50"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contact;