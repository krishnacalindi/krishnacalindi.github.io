export const siteConfig = {
  firstName: "Krishna",
  lastName: "Calindi",
  name: "Krishna Calindi",
  title: "Machine Learning Engineer",
  description: "Professional portfolio of Krishna Calindi.",
  accentColor: "#00bc7d",
  social: {
    email: "kxc@tamu.edu",
    linkedin: "https://www.linkedin.com/in/krishna-calindi/",
    github: "https://github.com/krishnacalindi/",
    orcid: "https://orcid.org/0009-0007-3586-6743"
  },
  aboutMe:
    "Machine learning engineer with a Master of Science in Computer Science from Texas A&M University (2026). Interested in application-driven machine learning.",
  skills: ["Satellite data reconstruction", "Environmental modeling", "Imbalanced learning"],
  publications: [
    {
      citation: "Timothy Logan, Victoria Fortner, Lijun Zhao, and Krishna Calindi. 2026. Comparison study of the electrical nature of two smoke-enhanced sea breeze thunderstorm cases during TRACER. Journal of Geophysical Research: Atmospheres (2026).",
      link: "https://doi.org/10.1029/2025JD045999"
    },
  ],
  projects: [
    {
      name: "A Deep Learning Approach to Predict Severe Thunderstorms Using Lightning Mapping Array Data",
      description: "Master's thesis. Trained a deep learning model on four years of lightning, satellite, and precipitation data to predict storm severity, outperforming existing approaches.",
      link: "https://oaktrust.library.tamu.edu/items/4aa96e47-e511-407d-9c85-3ad0817ce877",
      skills: ["Python", "PyTorch", "LibAUC", "classification of imbalanced datasets"]
    },
    {
      name: "Aggie XLMA",
      description: "Desktop application to analyze lightning data, capable of rendering 2.7 million sources in under 1.5 seconds written in C++ with OpenGL.",
      link: "https://github.com/krishnacalindi/aggie-xlma-cpp",
      skills: ["C++", "SQL", "OpenGL"],
    }
  ],
  experience: [
    {
      company: "Texas A&M University",
      title: "Student Technician",
      dateRange: "Aug 2024 - May 2026",
      bullets: [
        "Spearheaded the development of an application to process lightning data to improve research workflows.",
        "Supported two research publications by analyzing data and producing high-quality figures.",
        "Built a lightning-based warning model, resulting in an abstract submission to several conferences",
      ],
    },
  ],
  education: [
    {
      school: "Texas A&M University",
      degree: "Master of Science in Computer Science",
      dateRange: "2024 - 2026",
      achievements: [
        "Graduated with 4.0 GPA",
        "Thesis research in lightning-based severe storm prediction",
        "Contributed to a publication in Journal of Geophysical Research",
      ],
    },
    {
      school: "University of Texas at Dallas",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2020 - 2024",
      achievements: [
        "Graduated with Collegium V Honors and 3.62 GPA",
        "Minor in Business Administration",
        "Achieved Academic Excellence Scholarship and Dean's List honors",
      ],
    },
  ],
};