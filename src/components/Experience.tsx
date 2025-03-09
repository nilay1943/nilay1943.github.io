interface Experience {
  company: string;
  position: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export default function Experience() {
  const experiences: Experience[] = [
    {
      company: "Institute of Nuclear Power Operations",
      position: "Software Development Intern",
      location: "Atlanta, Georgia",
      period: "Jan 2022 - Apr 2022",
      description: [
        "Identified issues via mock user testing, found root causes and fixed bugs related to permissions, on-boarding, and database inputs, improving usability for over 200 internal users",
        "Facilitated cross-team collaboration to resolve database/server configuration issues, preventing downtime for 3 services essential to internal logins and employee on-boarding",
        "Optimized 9 weekly used SQL reports and queries, enhancing data delivery to end users by streamlining information",
        "Refactored the .Net framework using C# to organize information on internal web pages"
      ],
      technologies: ["SQL Reports", "Service Now", "Microsoft Office", "T-SQL", "Visual Studio", ".NET", "C#"]
    },
    {
      company: "Datascan",
      position: "Software Development Intern",
      location: "Alpharetta, GA",
      period: "June 2019 - Aug 2019",
      description: [
        "Modernized Spring MVC Framework to use Java 8 libraries, increasing efficiency and making future development more intuitive",
        "Triaged and collaborated with front-end team to resolve REST API bugs, increasing data transfer reliability between systems",
        "Reduced unnecessary table joins, enabling Redis cache integration and improving SQL query efficiency for frequently accessed data by approx. 20%"
      ],
      technologies: ["Docker", "Jenkins", "JIRA", "Postman", "Unix", "IntelliJ", "Springboot", "AWS"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.08),transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Experience</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Building innovative solutions and driving technical excellence</p>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative pl-8 pb-12 last:pb-0 border-l-2 border-sky-200 hover:border-sky-500 transition-colors duration-300"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-sky-500 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.3)] group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300"></div>
              <div className="bg-white rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] transition-all duration-500 border border-gray-100">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-sky-600 transition-colors duration-300">
                          {exp.position}
                        </h3>
                        <span className="text-sky-600/90 text-sm px-3 py-1 rounded-full border border-sky-100 bg-sky-50">
                          {exp.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="font-medium text-gray-800">{exp.company}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((bullet, i) => (
                      <li key={i} className="flex gap-3 group/item">
                        <span className="text-sky-500 mt-1.5">
                          <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                        </span>
                        <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                          {bullet}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-sky-50 text-sky-600 rounded-full text-sm border border-sky-100 hover:bg-sky-100 hover:border-sky-200 transition-all duration-300 group-hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 