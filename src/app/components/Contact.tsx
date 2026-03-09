'use client';
import React, {useState, useRef, useEffect, FormEvent} from "react";

const Contact: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [honeypot, setHoneypot] = useState("");
    const [cooldown, setCooldown] = useState(false);
    const mountTime = useRef(Date.now());

    useEffect(() => {
        mountTime.current = Date.now();
    }, []);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Honeypot - bots fill hidden fields
        if (honeypot) return;

        // Minimum 3s to fill the form
        if (Date.now() - mountTime.current < 3000) return;

        // Rate limit - 30s cooldown
        if (cooldown) return;

        setCooldown(true);
        setTimeout(() => setCooldown(false), 30000);

        const subject = encodeURIComponent(`Contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
        window.location.href = `mailto:brutusek952@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="text-gray-300 font-inter px-8 py-12">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-oldMoneyGreen mb-10">
                    Contact
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot - hidden from humans, bots fill it */}
                    <div className="absolute opacity-0 top-0 left-0 h-0 w-0 -z-10" aria-hidden="true">
                        <label htmlFor="website">Website</label>
                        <input
                            id="website"
                            type="text"
                            tabIndex={-1}
                            autoComplete="off"
                            value={honeypot}
                            onChange={(e) => setHoneypot(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            required
                            maxLength={100}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 bg-backgroundGray border-2 border-neutral-700 rounded-lg text-white focus:border-oldMoneyGreen focus:outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            maxLength={254}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 bg-backgroundGray border-2 border-neutral-700 rounded-lg text-white focus:border-oldMoneyGreen focus:outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            required
                            rows={5}
                            maxLength={2000}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full px-4 py-2 bg-backgroundGray border-2 border-neutral-700 rounded-lg text-white focus:border-oldMoneyGreen focus:outline-none resize-none"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={cooldown}
                        className="w-full py-3 bg-oldMoneyGreen text-black font-bold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {cooldown ? "Please wait..." : "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
