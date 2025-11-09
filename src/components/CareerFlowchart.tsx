interface CareerFlowchartProps {
  stream: string;
  onBackToStreams: () => void;
}

interface FlowchartNode {
  icon: string;
  title: string;
  content: string;
  items?: string[];
  colleges?: { name: string; cutoff: string }[];
}

interface CareerData {
  title: string;
  description: string;
  flowchart: FlowchartNode[];
}

const careerData: Record<string, CareerData> = {
  PCM: {
    title: 'Science (PCM) - Career Path',
    description: 'Physics, Chemistry & Mathematics - Engineering, Technology & Innovation',
    flowchart: [
      {
        icon: '📘',
        title: 'Subjects Studied',
        content: 'Core subjects in Science stream with Mathematics focus',
        items: [
          'Physics - Mechanics, Thermodynamics, Electromagnetism',
          'Chemistry - Organic, Inorganic, Physical Chemistry',
          'Mathematics - Calculus, Algebra, Statistics',
          'Computer Science (Optional) - Programming Fundamentals'
        ]
      },
      {
        icon: '🎓',
        title: 'Popular Courses',
        content: 'Undergraduate programs available after Class 12',
        items: [
          'B.Tech / B.E. - Computer Science, Mechanical, Electrical, Civil',
          'B.Arch - Architecture & Design',
          'BCA - Bachelor of Computer Applications',
          'BSc - Physics, Mathematics, Chemistry, Data Science',
          'Integrated M.Sc / M.Tech Programs'
        ]
      },
      {
        icon: '🧭',
        title: 'Entrance Exams',
        content: 'Key competitive exams for admissions',
        items: [
          'JEE Main - For NITs, IIITs, GFTIs',
          'JEE Advanced - For IITs',
          'BITSAT - For BITS Pilani campuses',
          'NATA - For Architecture colleges',
          'VITEEE, SRMJEEE, COMEDK - For private universities'
        ]
      },
      {
        icon: '💼',
        title: 'Career Roles',
        content: 'Professional opportunities in various sectors',
        items: [
          'Software Engineer / Developer',
          'Data Scientist / AI-ML Engineer',
          'Mechanical / Civil / Electrical Engineer',
          'Architect / Urban Designer',
          'Research Scientist',
          'Aerospace Engineer',
          'Robotics Engineer'
        ]
      },
      {
        icon: '🏫',
        title: 'Top Colleges in India',
        content: 'Premier institutions with approximate cutoff scores',
        colleges: [
          { name: 'IIT Bombay, Mumbai', cutoff: 'JEE Advanced Rank < 2000' },
          { name: 'IIT Delhi, New Delhi', cutoff: 'JEE Advanced Rank < 3000' },
          { name: 'IIT Madras, Chennai', cutoff: 'JEE Advanced Rank < 2500' },
          { name: 'IIT Kanpur, Uttar Pradesh', cutoff: 'JEE Advanced Rank < 3500' },
          { name: 'IIT Kharagpur, West Bengal', cutoff: 'JEE Advanced Rank < 4000' },
          { name: 'IIT Roorkee, Uttarakhand', cutoff: 'JEE Advanced Rank < 4500' },
          { name: 'IIT Guwahati, Assam', cutoff: 'JEE Advanced Rank < 5000' },
          { name: 'NIT Trichy, Tamil Nadu', cutoff: 'JEE Main Rank < 12000' },
          { name: 'NIT Surathkal, Karnataka', cutoff: 'JEE Main Rank < 15000' },
          { name: 'NIT Warangal, Telangana', cutoff: 'JEE Main Rank < 14000' },
          { name: 'BITS Pilani, Rajasthan', cutoff: 'BITSAT Score 330+' },
          { name: 'BITS Goa Campus', cutoff: 'BITSAT Score 320+' },
          { name: 'BITS Hyderabad Campus', cutoff: 'BITSAT Score 315+' },
          { name: 'IIIT Hyderabad', cutoff: 'JEE Main Rank < 5000' },
          { name: 'IIIT Bangalore', cutoff: 'JEE Main Rank < 8000' },
          { name: 'IIIT Delhi', cutoff: 'JEE Main Rank < 7000' },
          { name: 'DTU (Delhi Technological University)', cutoff: 'JEE Main Rank < 10000' },
          { name: 'NSUT (Netaji Subhas University of Technology), Delhi', cutoff: 'JEE Main Rank < 12000' },
          { name: 'VIT Vellore, Tamil Nadu', cutoff: 'VITEEE Rank < 15000' },
          { name: 'VIT Chennai Campus', cutoff: 'VITEEE Rank < 25000' },
          { name: 'Manipal Institute of Technology', cutoff: 'MET Rank < 20000' },
          { name: 'SRM Institute of Science and Technology, Chennai', cutoff: 'SRMJEEE Rank < 30000' },
          { name: 'Anna University, Chennai', cutoff: 'TNEA Rank < 5000' },
          { name: 'PSG College of Technology, Coimbatore', cutoff: 'TNEA Rank < 8000' },
          { name: 'Jadavpur University, Kolkata', cutoff: 'WBJEE Rank < 2000' },
          { name: 'Thapar Institute of Engineering, Patiala', cutoff: 'JEE Main Rank < 40000' },
          { name: 'PEC University, Chandigarh', cutoff: 'JEE Main Rank < 25000' }
        ]
      },
      {
        icon: '🧠',
        title: 'Key Skills to Build',
        content: 'Essential competencies for success',
        items: [
          'Programming - Python, Java, C++, JavaScript',
          'Problem Solving & Logical Thinking',
          'Mathematical & Analytical Skills',
          'Innovation & Creative Thinking',
          'Project Management',
          'Technical Communication',
          'CAD/Design Software (for Architecture/Engineering)'
        ]
      }
    ]
  },
  PCB: {
    title: 'Science (PCB) - Career Path',
    description: 'Physics, Chemistry & Biology - Medicine, Healthcare & Life Sciences',
    flowchart: [
      {
        icon: '📘',
        title: 'Subjects Studied',
        content: 'Core subjects in Science stream with Biology focus',
        items: [
          'Physics - Biophysics, Medical Physics',
          'Chemistry - Biochemistry, Organic Chemistry',
          'Biology - Botany, Zoology, Human Anatomy',
          'English & Additional Language'
        ]
      },
      {
        icon: '🎓',
        title: 'Popular Courses',
        content: 'Undergraduate programs in healthcare and life sciences',
        items: [
          'MBBS - Bachelor of Medicine & Surgery',
          'BDS - Bachelor of Dental Surgery',
          'BAMS / BHMS - Ayurveda / Homeopathy',
          'B.Pharm - Bachelor of Pharmacy',
          'BSc - Nursing, Biotechnology, Microbiology',
          'BPT - Physiotherapy',
          'BVSC - Veterinary Science'
        ]
      },
      {
        icon: '🧭',
        title: 'Entrance Exams',
        content: 'Medical and healthcare entrance examinations',
        items: [
          'NEET UG - For MBBS, BDS & related medical courses',
          'AIIMS - All India Institute of Medical Sciences',
          'JIPMER - Jawaharlal Institute of Postgraduate Medical Education',
          'GPAT - Graduate Pharmacy Aptitude Test',
          'ICAR AIEEA - For agriculture & veterinary sciences'
        ]
      },
      {
        icon: '💼',
        title: 'Career Roles',
        content: 'Healthcare and research career opportunities',
        items: [
          'Medical Doctor (General Physician / Specialist)',
          'Dentist / Orthodontist',
          'Pharmacist / Clinical Pharmacologist',
          'Biotechnology Researcher',
          'Physiotherapist / Occupational Therapist',
          'Nutritionist / Dietitian',
          'Medical Laboratory Technician',
          'Veterinary Doctor'
        ]
      },
      {
        icon: '🏫',
        title: 'Top Colleges in India',
        content: 'Premier medical institutions with cutoff scores',
        colleges: [
          { name: 'AIIMS Delhi - All India Institute of Medical Sciences', cutoff: 'NEET Score 695+ marks (out of 720)' },
          { name: 'AIIMS Jodhpur, Rajasthan', cutoff: 'NEET Score 680+ marks' },
          { name: 'AIIMS Bhopal, Madhya Pradesh', cutoff: 'NEET Score 675+ marks' },
          { name: 'AIIMS Rishikesh, Uttarakhand', cutoff: 'NEET Score 670+ marks' },
          { name: 'AIIMS Patna, Bihar', cutoff: 'NEET Score 665+ marks' },
          { name: 'AFMC Pune - Armed Forces Medical College', cutoff: 'NEET Score 650+ marks' },
          { name: 'JIPMER Puducherry', cutoff: 'NEET Score 670+ marks' },
          { name: 'Maulana Azad Medical College, Delhi', cutoff: 'NEET Score 680+ marks' },
          { name: 'University College of Medical Sciences (UCMS), Delhi', cutoff: 'NEET Score 675+ marks' },
          { name: 'Lady Hardinge Medical College, Delhi', cutoff: 'NEET Score 670+ marks' },
          { name: 'Christian Medical College (CMC), Vellore', cutoff: 'NEET Score 660+ marks' },
          { name: 'CMC Ludhiana, Punjab', cutoff: 'NEET Score 640+ marks' },
          { name: 'KGMC Lucknow - King George\'s Medical University', cutoff: 'NEET Score 640+ marks' },
          { name: 'Grant Medical College, Mumbai', cutoff: 'NEET Score 645+ marks' },
          { name: 'Seth GS Medical College, Mumbai', cutoff: 'NEET Score 640+ marks' },
          { name: 'Kasturba Medical College, Manipal', cutoff: 'NEET Score 600+ marks' },
          { name: 'St. John\'s Medical College, Bangalore', cutoff: 'NEET Score 610+ marks' },
          { name: 'Bangalore Medical College', cutoff: 'NEET Score 630+ marks' },
          { name: 'Madras Medical College, Chennai', cutoff: 'NEET Score 635+ marks' },
          { name: 'Stanley Medical College, Chennai', cutoff: 'NEET Score 625+ marks' },
          { name: 'Jawaharlal Institute of Postgraduate Medical Education (JIPMER), Karaikal', cutoff: 'NEET Score 650+ marks' },
          { name: 'Government Medical College, Chandigarh', cutoff: 'NEET Score 650+ marks' },
          { name: 'B.J. Medical College, Ahmedabad', cutoff: 'NEET Score 630+ marks' },
          { name: 'SMS Medical College, Jaipur', cutoff: 'NEET Score 620+ marks' },
          { name: 'Gandhi Medical College, Hyderabad', cutoff: 'NEET Score 625+ marks' }
        ]
      },
      {
        icon: '🧠',
        title: 'Key Skills to Build',
        content: 'Essential skills for medical and healthcare careers',
        items: [
          'Medical Knowledge & Clinical Skills',
          'Patient Care & Empathy',
          'Attention to Detail & Precision',
          'Problem Solving under Pressure',
          'Communication & Interpersonal Skills',
          'Research & Analytical Abilities',
          'Time Management & Dedication'
        ]
      }
    ]
  },
  Commerce: {
    title: 'Commerce - Career Path',
    description: 'Business, Finance & Economics - Corporate & Entrepreneurship',
    flowchart: [
      {
        icon: '📘',
        title: 'Subjects Studied',
        content: 'Core commerce subjects for business education',
        items: [
          'Accountancy - Financial & Management Accounting',
          'Business Studies - Principles of Management',
          'Economics - Micro & Macro Economics',
          'Mathematics / Informatics Practices',
          'English & Additional Language'
        ]
      },
      {
        icon: '🎓',
        title: 'Popular Courses',
        content: 'Undergraduate programs in commerce and business',
        items: [
          'B.Com - Bachelor of Commerce (General/Honors)',
          'BBA - Bachelor of Business Administration',
          'CA - Chartered Accountancy',
          'CS - Company Secretary',
          'CMA - Cost & Management Accountant',
          'BMS - Bachelor of Management Studies',
          'BBE - Bachelor of Business Economics'
        ]
      },
      {
        icon: '🧭',
        title: 'Entrance Exams',
        content: 'Key exams for commerce admissions',
        items: [
          'CA Foundation - For Chartered Accountancy',
          'CS Foundation - For Company Secretary',
          'IPMAT - For Integrated MBA programs (IIM)',
          'CUET - Common University Entrance Test',
          'DU JAT - Delhi University Joint Admission Test',
          'NPAT - NMIMS Programs After Twelfth',
          'SET, FEAT - For Symbiosis & other universities'
        ]
      },
      {
        icon: '💼',
        title: 'Career Roles',
        content: 'Professional opportunities in business sectors',
        items: [
          'Chartered Accountant (CA)',
          'Financial Analyst / Investment Banker',
          'Business Consultant',
          'Company Secretary (CS)',
          'Marketing Manager',
          'HR Manager / Talent Acquisition',
          'Entrepreneur / Business Owner',
          'Tax Consultant / Auditor'
        ]
      },
      {
        icon: '🏫',
        title: 'Top Colleges in India',
        content: 'Premier commerce institutions with cutoff details',
        colleges: [
          { name: 'Shri Ram College of Commerce (SRCC), Delhi', cutoff: 'CUET Score 99+ percentile' },
          { name: 'Lady Shri Ram College (LSR), Delhi', cutoff: 'CUET Score 98+ percentile' },
          { name: 'Hindu College, Delhi University', cutoff: 'CUET Score 97+ percentile' },
          { name: 'Hansraj College, Delhi University', cutoff: 'CUET Score 96+ percentile' },
          { name: 'St. Xavier\'s College, Mumbai', cutoff: 'Class 12: 90%+ aggregate' },
          { name: 'H.R. College of Commerce, Mumbai', cutoff: 'Class 12: 88%+ aggregate' },
          { name: 'Sydenham College, Mumbai', cutoff: 'Class 12: 85%+ aggregate' },
          { name: 'Loyola College, Chennai', cutoff: 'Class 12: 85%+ aggregate' },
          { name: 'Christ University, Bangalore', cutoff: 'Entrance Test + Interview' },
          { name: 'St. Joseph\'s College of Commerce, Bangalore', cutoff: 'Entrance Test + Class 12: 80%+' },
          { name: 'NMIMS Mumbai - B.Com / BBA', cutoff: 'NPAT Score 90+ percentile' },
          { name: 'Symbiosis College of Arts & Commerce, Pune', cutoff: 'SET Score 85+ percentile' },
          { name: 'Narsee Monjee College, Mumbai', cutoff: 'Class 12: 87%+ aggregate' },
          { name: 'Jai Hind College, Mumbai', cutoff: 'Class 12: 85%+ aggregate' },
          { name: 'Madras Christian College, Chennai', cutoff: 'Class 12: 82%+ aggregate' },
          { name: 'Presidency College, Chennai', cutoff: 'Class 12: 83%+ aggregate' },
          { name: 'Sri Venkateswara College, Delhi', cutoff: 'CUET Score 95+ percentile' },
          { name: 'Ramjas College, Delhi', cutoff: 'CUET Score 94+ percentile' },
          { name: 'Shaheed Sukhdev College of Business Studies, Delhi', cutoff: 'CUET Score 96+ percentile' },
          { name: 'IIM Indore - Integrated Program in Management (IPM)', cutoff: 'IPMAT Score + Interview' },
          { name: 'IIM Rohtak - Integrated Program in Management', cutoff: 'IPMAT Score + Interview' },
          { name: 'Keshav Mahavidyalaya, Delhi', cutoff: 'CUET Score 92+ percentile' },
          { name: 'Mithibai College, Mumbai', cutoff: 'Class 12: 84%+ aggregate' },
          { name: 'Wilson College, Mumbai', cutoff: 'Class 12: 82%+ aggregate' }
        ]
      },
      {
        icon: '🧠',
        title: 'Key Skills to Build',
        content: 'Skills for business and finance careers',
        items: [
          'Financial Management & Accounting',
          'Business Analytics & Data Interpretation',
          'Communication & Negotiation',
          'Leadership & Team Management',
          'Digital Marketing & E-commerce',
          'Excel, Tally & Financial Software',
          'Strategic Thinking & Decision Making'
        ]
      }
    ]
  },
  Arts: {
    title: 'Arts / Humanities - Career Path',
    description: 'Literature, Social Sciences & Creative Arts - Diverse Career Opportunities',
    flowchart: [
      {
        icon: '📘',
        title: 'Subjects Studied',
        content: 'Core humanities and social science subjects',
        items: [
          'English Literature / Language',
          'History - Ancient, Medieval, Modern',
          'Political Science / Sociology',
          'Psychology / Philosophy',
          'Economics / Geography',
          'Fine Arts / Music / Physical Education (Optional)'
        ]
      },
      {
        icon: '🎓',
        title: 'Popular Courses',
        content: 'Undergraduate programs in arts and humanities',
        items: [
          'BA - Bachelor of Arts (English, History, Pol. Science, etc.)',
          'BFA - Bachelor of Fine Arts',
          'BA LLB - Integrated Law Program',
          'BJ&MC - Journalism & Mass Communication',
          'BDes - Bachelor of Design',
          'BA Psychology / Sociology',
          'Hotel Management (BHM)'
        ]
      },
      {
        icon: '🧭',
        title: 'Entrance Exams',
        content: 'Exams for arts, design, law and other fields',
        items: [
          'CLAT - Common Law Admission Test',
          'AILET - All India Law Entrance Test (NLU Delhi)',
          'UPSC - Civil Services Examination',
          'UCEED / CEED - Design entrance exams',
          'NID DAT - National Institute of Design',
          'CUET - Common University Entrance Test',
          'JMI, BHU, AMU entrance tests for various programs'
        ]
      },
      {
        icon: '💼',
        title: 'Career Roles',
        content: 'Diverse career paths in creative and social sectors',
        items: [
          'Civil Servant (IAS, IPS, IFS)',
          'Lawyer / Advocate / Legal Advisor',
          'Journalist / Content Writer',
          'Graphic Designer / UI-UX Designer',
          'Psychologist / Counselor',
          'Social Worker / NGO Manager',
          'Film Director / Media Producer',
          'Fashion Designer / Stylist',
          'Teacher / Professor / Researcher'
        ]
      },
      {
        icon: '🏫',
        title: 'Top Colleges in India',
        content: 'Leading institutions for arts and humanities',
        colleges: [
          { name: 'St. Stephen\'s College, Delhi', cutoff: 'CUET Score 99+ percentile' },
          { name: 'Lady Shri Ram College, Delhi', cutoff: 'CUET Score 98+ percentile' },
          { name: 'Hindu College, Delhi University', cutoff: 'CUET Score 97+ percentile' },
          { name: 'Miranda House, Delhi', cutoff: 'CUET Score 97+ percentile' },
          { name: 'Ramjas College, Delhi', cutoff: 'CUET Score 95+ percentile' },
          { name: 'Hansraj College, Delhi', cutoff: 'CUET Score 95+ percentile' },
          { name: 'National Law School (NLSIU), Bangalore', cutoff: 'CLAT Rank < 500' },
          { name: 'NALSAR Hyderabad - Law', cutoff: 'CLAT Rank < 800' },
          { name: 'NLU Delhi (NLUD)', cutoff: 'AILET Rank < 600' },
          { name: 'Gujarat National Law University (GNLU)', cutoff: 'CLAT Rank < 1200' },
          { name: 'NLIU Bhopal - Law', cutoff: 'CLAT Rank < 1500' },
          { name: 'NID Ahmedabad - Design', cutoff: 'NID DAT Selection' },
          { name: 'NIFT Delhi - Fashion Design', cutoff: 'NIFT Entrance Test' },
          { name: 'NIFT Mumbai - Fashion Design', cutoff: 'NIFT Entrance Test' },
          { name: 'FTII Pune - Film & Television', cutoff: 'FTII JET Selection' },
          { name: 'IIMC Delhi - Journalism', cutoff: 'IIMC Entrance Test' },
          { name: 'Symbiosis Institute of Media & Communication, Pune', cutoff: 'SET Score + Interview' },
          { name: 'Xavier Institute of Communication (XIC), Mumbai', cutoff: 'Entrance Test + GD/PI' },
          { name: 'Jamia Millia Islamia - Mass Communication', cutoff: 'JMI Entrance Test' },
          { name: 'Christ University - Psychology / Journalism', cutoff: 'Entrance Test + Interview' },
          { name: 'Fergusson College, Pune', cutoff: 'Class 12: 85%+ aggregate' },
          { name: 'Presidency University, Kolkata', cutoff: 'Entrance Test / Merit Based' },
          { name: 'St. Xavier\'s College, Mumbai', cutoff: 'Class 12: 88%+ aggregate' },
          { name: 'Sophia College for Women, Mumbai', cutoff: 'Class 12: 85%+ aggregate' },
          { name: 'Loyola College, Chennai', cutoff: 'Class 12: 85%+ aggregate' },
          { name: 'Madras Christian College, Chennai', cutoff: 'Class 12: 82%+ aggregate' },
          { name: 'Jawaharlal Nehru University (JNU), Delhi', cutoff: 'CUET Score + Entrance' },
          { name: 'Banaras Hindu University (BHU) - Arts', cutoff: 'BHU UET' },
          { name: 'Aligarh Muslim University (AMU) - Arts', cutoff: 'AMU Entrance Test' }
        ]
      },
      {
        icon: '🧠',
        title: 'Key Skills to Build',
        content: 'Essential competencies for arts careers',
        items: [
          'Creative & Critical Thinking',
          'Communication & Writing Skills',
          'Research & Analytical Abilities',
          'Design & Visual Aesthetics',
          'Public Speaking & Presentation',
          'Social Awareness & Empathy',
          'Digital Tools (Adobe Suite, Figma, etc.)',
          'Time Management & Self-discipline'
        ]
      }
    ]
  }
};

export default function CareerFlowchart({ stream, onBackToStreams }: CareerFlowchartProps) {
  const data = careerData[stream] || careerData.PCM;

  return (
    <main className="min-h-[calc(100vh-80px)] px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBackToStreams}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 text-[#667eea] rounded-full shadow-lg hover:shadow-xl hover:-translate-x-1 transition-all mb-8"
        >
          ← Back to Streams
        </button>

        <h1 className="text-center text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent animate-fadeInUp">
          {data.title}
        </h1>
        <p className="text-center text-xl text-slate-700 mb-12 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          {data.description}
        </p>

        {/* Flowchart Nodes */}
        <div className="space-y-10">
          {data.flowchart.map((node, index) => (
            <div key={index}>
              <div
                className="bg-white/95 p-8 rounded-3xl shadow-lg animate-fadeInUp"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">{node.icon}</div>
                  <h2 className="text-slate-800">{node.title}</h2>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">{node.content}</p>

                {node.items && (
                  <ul className="space-y-3">
                    {node.items.map((item, i) => (
                      <li
                        key={i}
                        className="p-4 bg-[#667eea]/5 border-l-4 border-[#667eea] rounded-lg hover:bg-[#667eea]/10 hover:translate-x-1 transition-all"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {node.colleges && (
                  <div className="space-y-3 mt-4">
                    {node.colleges.map((college, i) => (
                      <div
                        key={i}
                        className="p-4 bg-[#667eea]/5 border-l-4 border-[#667eea] rounded-lg"
                      >
                        <div className="text-slate-800 mb-1">{college.name}</div>
                        <div className="text-[#667eea]">Cutoff: {college.cutoff}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Arrow Connector */}
              {index < data.flowchart.length - 1 && (
                <div className="flex flex-col items-center my-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-[#667eea] to-[#764ba2]" />
                  <div className="text-2xl text-[#764ba2]">▼</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tip Section */}
        <div className="mt-12 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white p-8 rounded-3xl shadow-2xl flex gap-6 items-start animate-fadeInUp">
          <div className="text-6xl">💡</div>
          <div>
            <h3 className="mb-3">Pro Tip</h3>
            <p className="leading-relaxed opacity-95">
              Plan your studies early and aim for your dream college with dedication and smart preparation. 
              Start exploring entrance exam patterns from Class 11 itself!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}