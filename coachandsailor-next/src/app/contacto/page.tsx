"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function ContactoPage() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        // Simulate send
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    }

    return (
        <>
            <Navbar active="/contacto" />

            <main className="flex-1 w-full max-w-[480px] mx-auto px-4 pb-12">
                {/* Hero Section */}
                <div className="pt-8 pb-6">
                    <h2 className="text-white tracking-tight text-3xl font-bold leading-tight">Have a question?</h2>
                    <p className="text-slate-400 text-base font-normal mt-2">
                        Our team is here to help your club succeed. Send us a message and we&apos;ll get back to you shortly.
                    </p>
                </div>

                {/* Contact Form */}
                <form className="space-y-5" onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div className="flex flex-col gap-2">
                        <label className="text-slate-300 text-sm font-semibold px-1">Full Name</label>
                        <div className="relative">
                            <input
                                className="flex w-full rounded-xl text-white focus:outline-0 border border-slate-800 bg-slate-900/50 h-14 placeholder:text-slate-600 px-4 text-base font-normal transition-all focus:border-primary focus:shadow-[0_0_0_1px_#137fec]"
                                placeholder="John Doe" required type="text"
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col gap-2">
                        <label className="text-slate-300 text-sm font-semibold px-1">Email Address</label>
                        <div className="relative">
                            <input
                                className="flex w-full rounded-xl text-white focus:outline-0 border border-slate-800 bg-slate-900/50 h-14 placeholder:text-slate-600 px-4 text-base font-normal transition-all focus:border-primary focus:shadow-[0_0_0_1px_#137fec]"
                                placeholder="name@example.com" required type="email"
                            />
                        </div>
                    </div>

                    {/* Organization Field */}
                    <div className="flex flex-col gap-2">
                        <label className="text-slate-300 text-sm font-semibold px-1">Organization (Club/Team)</label>
                        <div className="relative">
                            <input
                                className="flex w-full rounded-xl text-white focus:outline-0 border border-slate-800 bg-slate-900/50 h-14 placeholder:text-slate-600 px-4 text-base font-normal transition-all focus:border-primary focus:shadow-[0_0_0_1px_#137fec]"
                                placeholder="United Athletic Club" type="text"
                            />
                        </div>
                    </div>

                    {/* Interest Dropdown */}
                    <div className="flex flex-col gap-2">
                        <label className="text-slate-300 text-sm font-semibold px-1">Reason for Inquiry</label>
                        <div className="relative group">
                            <select
                                className="appearance-none flex w-full rounded-xl text-white focus:outline-0 border border-slate-800 bg-slate-900/50 h-14 px-4 text-base font-normal transition-all pr-10 focus:border-primary focus:shadow-[0_0_0_1px_#137fec]"
                                defaultValue=""
                            >
                                <option disabled value="">Select an interest</option>
                                <option value="rental">Rental Inquiry</option>
                                <option value="coaching">Coaching Support</option>
                                <option value="event">Event Support</option>
                                <option value="other">Other</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                                <span className="material-symbols-outlined">expand_more</span>
                            </div>
                        </div>
                    </div>

                    {/* Message Textarea */}
                    <div className="flex flex-col gap-2">
                        <label className="text-slate-300 text-sm font-semibold px-1">Message</label>
                        <div className="relative">
                            <textarea
                                className="flex w-full rounded-xl text-white focus:outline-0 border border-slate-800 bg-slate-900/50 placeholder:text-slate-600 p-4 text-base font-normal transition-all resize-none focus:border-primary focus:shadow-[0_0_0_1px_#137fec]"
                                placeholder="Tell us more about your needs..." rows={4}
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            className="w-full bg-primary hover:bg-primary/90 active:scale-[0.98] transition-all text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                            type="submit"
                        >
                            <span>Send Message</span>
                            <span className="material-symbols-outlined text-lg">send</span>
                        </button>
                    </div>
                </form>

                {/* Alternative Contact */}
                <div className="mt-12 text-center">
                    <p className="text-slate-400 text-sm">Or email us directly at</p>
                    <a className="text-primary font-semibold hover:underline decoration-2 underline-offset-4" href="mailto:support@example.com">
                        support@example.com
                    </a>
                    <div className="flex justify-center gap-6 mt-8">
                        {/* Facebook */}
                        <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                            <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                        {/* Twitter */}
                        <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                            <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                        </a>
                        {/* YouTube */}
                        <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                            <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.295 2.342L10 14.342V9.658z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </main>

            {/* Success Toast */}
            <div
                className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-[400px] bg-slate-800 border border-emerald-500/30 text-emerald-400 p-4 rounded-xl shadow-2xl flex items-center gap-3 transform transition-all duration-300 ${submitted ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
            >
                <span className="material-symbols-outlined bg-emerald-500/20 p-1.5 rounded-full text-lg">check_circle</span>
                <div className="flex-1">
                    <p className="font-bold text-sm">Message Sent!</p>
                    <p className="text-xs text-slate-400">We&apos;ll get back to you within 24 hours.</p>
                </div>
                <button className="text-slate-400 hover:text-white" onClick={() => setSubmitted(false)}>
                    <span className="material-symbols-outlined text-sm">close</span>
                </button>
            </div>
        </>
    );
}
