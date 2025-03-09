"use client";

export default function Contact() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('nilay1943@gmail.com');
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('6317478638');
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.08),transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Get In Touch</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          I'm currently open to new opportunities. Feel free to reach out!
        </p>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              {/* Email */}
              <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] transition-all duration-500 border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <a 
                      href="mailto:nilay1943@gmail.com"
                      className="text-sky-600 hover:text-sky-700 transition-colors"
                    >
                      nilay1943@gmail.com
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                    title="Copy email"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] transition-all duration-500 border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <a 
                      href="tel:+16317478638"
                      className="text-sky-600 hover:text-sky-700 transition-colors"
                    >
                      (631) 747-8638
                    </a>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                    title="Copy phone"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Resume Download */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-sm bg-white rounded-xl p-8 shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] transition-all duration-500 border border-gray-100 text-center">
                <div className="w-16 h-16 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Resume</h3>
                <p className="text-gray-600 mb-6">Download my resume to learn more about my experience and qualifications.</p>
                <a
                  href="/images/resume.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 bg-sky-500 text-white hover:bg-sky-600 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg w-full"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 