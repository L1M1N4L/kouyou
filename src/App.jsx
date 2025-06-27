import React, { useState } from 'react';
import { 
  Globe, 
  BookOpen, 
  UserCheck, 
  Video, 
  ArrowRight, 
  Menu, 
  Leaf,
  X ,
  ChevronDown,
  MessageCircleQuestion,
  Plus,
  Mail, 
  Linkedin, 
  Instagram, 
  Youtube,
  MessageCircle,
  Phone,

} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ModuleHomepage from './ModuleHomepage';

function KouyouInstitute() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Image-driven course data
  const courses = [
    {
        id: 1,
        title: 'JLPT N5 Beginners',
        level: 'Starter',
        image: '/n5.jpeg',
        backgroundImage: 'linear-gradient(135deg, rgba(33,150,243,0.8), rgba(0,188,212,0.8))',
        features: [
            'Fundamental Grammar',
            'Basic Conversation Skills',
            'Kanji Introduction'
        ]
    },
    {
        id: 2,
        title: 'JLPT N4 Elementary',
        level: 'Beginner',
        image: '/n4.jpg',
        backgroundImage: 'linear-gradient(135deg, rgba(76,175,80,0.8), rgba(0,230,118,0.8))',
        features: [
            'Expanded Grammar Patterns',
            'Everyday Vocabulary',
            'Basic Reading Skills'
        ]
    },
    {
        id: 3,
        title: 'JLPT N3 Intermediate',
        level: 'Advanced',
        image: '/n3.jpg',
        backgroundImage: 'linear-gradient(135deg, rgba(156,39,176,0.8), rgba(103,58,183,0.8))',
        features: [
            'Complex Grammar',
            'Contextual Vocabulary',
            'Reading Comprehension'
        ]
    },
    {
        id: 4,
        title: 'JLPT N2 Upper Intermediate',
        level: 'Advanced',
        image: '/n2.avif',
        backgroundImage: 'linear-gradient(135deg, rgba(255,152,0,0.8), rgba(255,87,34,0.8))',
        features: [
            'Advanced Grammar Structures',
            'Academic and Professional Vocabulary',
            'Complex Reading and Listening'
        ]
    },
    {
        id: 5,
        title: 'JLPT N1 Mastery',
        level: 'Expert',
        image: '/n1.jpg',
        backgroundImage: 'linear-gradient(135deg, rgba(244,67,54,0.8), rgba(233,30,99,0.8))',
        features: [
            'Academic Japanese',
            'Professional Communication',
            'Cultural Nuances'
        ]
    }
];

 
  

  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Leaf className="text-blue-600 w-8 h-8" />
          <span className="text-2xl font-bold text-gray-800">Kouyou</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
          <a href="#courses" className="text-gray-700 hover:text-blue-600 transition">Courses</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
         
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg">
          <a href="#home" className="block px-4 py-3 border-b hover:bg-gray-100">Home</a>
          <a href="#courses" className="block px-4 py-3 border-b hover:bg-gray-100">Courses</a>
          <a href="#about" className="block px-4 py-3 border-b hover:bg-gray-100">About</a>

        </div>
      )}
    </nav>
  );

  const HeroSection = () => (
    <section 
      className="relative h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: 'url(/classroom.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'top'
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-4xl text-center px-4">
        <h1 className="text-5xl font-bold mb-6 text-white">
          Your Journey to Japanese Mastery Starts Here
        </h1>
        <p className="text-xl mb-10 text-white/90">
          Comprehensive JLPT preparation with personalized learning experiences
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="#courses" 
            className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition flex items-center"
          >
            Explore Courses <ArrowRight className="ml-2" />
          </a>
          <a 
            href="#about" 
            className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/20 transition flex items-center"
          >
            Learn More <Video className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );

  const CoursesSection = () => (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Our JLPT Preparation Paths
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map(course => (
            <div 
              key={course.id} 
              className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-101 transition-all duration-300"
              style={{ backgroundImage: course.backgroundImage }}
            >
              <div 
                className="h-64 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${course.image})` }}
              >
                <div className="absolute top-4 right-4 bg-white/80 px-3 py-1 rounded-full text-sm font-semibold">
                  {course.level}
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{course.title}</h3>
                <ul className="space-y-2 mb-6">
                  {course.features.map((feature, index) => (
                    <li 
                      key={index} 
                      className="flex items-center text-gray-600"
                    >
                      <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const TestimonialsSection = () => (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div 
            className="bg-cover bg-center rounded-2xl overflow-hidden relative h-96"
            style={{ backgroundImage: 'url(/Michelle.jpg)' }}
          >
            <div className="absolute inset-0 bg-black/50 flex items-end p-8">
              <div className="text-white">
                <p className="text-xl italic mb-4">"Kouyou offers an exceptional Japanese course experience!  The curriculum is well-structured, allowing me to quickly grasp the language. Thank you, Kouyou, for helping me achieve my language goals!"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full mr-4 flex items-center justify-center">
                    <UserCheck className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Michelle Jacqueline Fraser</h4>
                    <p className="text-sm">JLPT N3 Graduate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div 
            className="bg-cover bg-center rounded-2xl overflow-hidden relative h-96"
            style={{ backgroundImage: 'url(/dhamma.jpg)' }}
          >
            <div className="absolute inset-0 bg-black/50 flex items-end p-8">
              <div className="text-white">
                <p className="text-xl italic mb-4">"Kouyou's teaching is detailed yet easy to follow—not too much, not too little. Thanks to their guidance, I've improved a lot and am now an intern at ASO College!"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full mr-4 flex items-center justify-center">
                    <UserCheck className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Dhamma Yo</h4>
                    <p className="text-sm">JLPT N2 Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );


const FAQSection = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const faqData = [
    {
      id: 1,
      question: "What are the course levels?",
      answer: "We offer courses from beginner (N5) to advanced (N1) levels. A free placement test helps you start at the right level. No prior Japanese knowledge needed for entry-level courses."
    },
    {
      id: 2,
      question: "How are classes conducted?",
      answer: "Live online classes via Google Meet with experienced Japanese language instructors. Small group sessions ensure personalized learning. Interactive, conversation-focused approach with real-time feedback."
    },
    {
      id: 3,
      question: "What makes Kouyou unique?",
      answer: "We focus on practical communication and cultural immersion. Our instructors are highly qualified and passionate about teaching. We go beyond traditional textbook learning to make Japanese engaging."
    },
    {
      id: 4,
      question: "JLPT Preparation?",
      answer: "Targeted exam preparation with mock tests and strategic workshops. Our curriculum directly aligns with JLPT level requirements to boost your certification chances."
    },
    {
      id: 5,
      question: "Future Learning Tools?",
      answer: "We're developing Onigiri, our custom learning platform. Stay tuned for advanced digital resources to complement our live classes. Currently focusing on high-quality live instruction."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <MessageCircleQuestion 
            className="mx-auto text-blue-600" 
            size={64} 
            strokeWidth={1.5} 
          />
          <h2 className="text-4xl font-extrabold text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Quick answers to help you start your Japanese learning journey
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq) => (
            <div 
              key={faq.id} 
              className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden"
            >
              <div 
                onClick={() => setActiveQuestion(activeQuestion === faq.id ? null : faq.id)}
                className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors group"
              >
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors md-2">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-6 h-6 text-gray-400 transition-transform ${
                    activeQuestion === faq.id ? 'rotate-180' : ''
                  }`} 
                />
              </div>
              
              <AnimatePresence>
                {activeQuestion === faq.id && (
                  <div
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 border-t">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Have more questions?
          </p>
          <a 
            href="#contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center shadow-md hover:shadow-lg"
          >
            Contact Our Team
            <ChevronDown className="ml-2 rotate-[-90deg]" />
          </a>
        </div>
      </div>
    </section>
  );
};
function ContactSection() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      nameJP: 'リンクトイン',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/kouyou-institute',
      color: 'text-blue-600 hover:text-blue-700'
    },
    {
      name: 'Instagram',
      nameJP: 'インスタグラム',
      icon: Instagram,
      url: 'https://www.instagram.com/kouyouinstitute',
      color: 'text-pink-600 hover:text-pink-700'
    },
    {
      name: 'Discord',
      nameJP: 'ヂィスコード',
      icon: MessageCircle,
      url: 'https://discord.com/invite/rDgGMXu4fh',
      color: 'text-indigo-500 hover:text-indigo-600'
    },
    {
      name: 'YouTube',
      nameJP: 'ユーチューブ',
      icon: Youtube,
      url: 'https://www.youtube.com/channel/UCeXA4Mzy01rKBFRNIzvErHg',
      color: 'text-red-600 hover:text-red-700'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Leaf className="mx-auto text-blue-600 mb-6" size={56} />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Connect with Kouyou | 紅葉と繋がる
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's continue your Japanese learning journey together
            <br />
            日本語学習の旅を共に歩もう
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 border-b pb-4">
                Get in Touch | お問い合わせ
              </h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="w-8 h-8 text-blue-600 mr-6" />
                  <div>
                    <a 
                      href="mailto:support@kouyounihongogakuin.com" 
                      className="text-xl text-gray-700 hover:text-blue-600 transition block"
                    >
                      support@kouyounihongogakuin.com
                    </a>
                    <span className="text-sm text-gray-500">
                      サポートセンター
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-8 h-8 text-blue-600 mr-6" />
                  <div>
                    <a 
                      href="tel:+62 811-170-8055" 
                      className="text-xl text-gray-700 hover:text-blue-600 transition block"
                    >
                      +62 811-170-8055 (Indonesia)
                    </a>
                    <span className="text-sm text-gray-500">
                      カスタマーサポート
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 border-b pb-4">
                Our Social Channels | ソーシャルメディア
              </h3>
              <div className="space-y-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 group"
                  >
                    <social.icon 
                      className={`w-7 h-7 ${social.color} transition-colors group-hover:scale-110`} 
                    />
                    <div>
                      <span 
                        className="text-xl text-gray-700 group-hover:text-blue-600 transition block"
                      >
                        {social.name} | {social.nameJP}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
  

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-6">
            <Leaf className="text-blue-400 w-8 h-8 mr-2" />
            <span className="text-2xl font-bold">Kouyou</span>
          </div>
          <p className="text-gray-400">
            Empowering global communication through comprehensive Japanese language education
          </p>
        </div>
        <div>
          <h5 className="text-xl font-semibold mb-6">Quick Links</h5>
          <ul className="space-y-3">
            <li><a href="#courses" className="text-gray-300 hover:text-white">Courses</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">JLPT Resources</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Study in Japan</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-xl font-semibold mb-6">Contact</h5>
          <p className="text-gray-400">
            Email: support@kouyounihongogakuin.com<br />
          </p>
        </div>
        <div>
          <h5 className="text-xl font-semibold mb-6">Connect</h5>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
            <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
            <a href="#" className="text-gray-300 hover:text-white">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );

  const AboutUsSection = () => (
    <section id="about-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 text-gray-800">
              Our Story: Beyond Language Learning
            </h2>
            <div className="space-y-6 text-gray-600">
              <p>
                Kouyou was born from a transformative experience. Our founders, experienced linguists and passionate Japan enthusiasts, realized that traditional language education often misses the soul of communication – cultural nuance, contextual understanding, and genuine connection.
              </p>
              <p>
                What started as a dedicated language learning initiative has grown into a global platform, connecting learners across multiple countries with the rich tapestry of Japanese language and culture.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 italic">
                "Language is a bridge between worlds. We're not just teaching Japanese; we're opening doors to understanding, empathy, and global citizenship."
                <div className="text-right mt-2 text-sm">— Founders of Kouyou</div>
              </div>
              <div className="flex space-x-4">
                <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">5+</h3>
                  <p className="text-gray-600">Countries Taught In</p>
                </div>
                <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-green-600 mb-2">2</h3>
                  <p className="text-gray-600">University Partnerships</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-cover bg-center h-80 rounded-2xl shadow-lg relative overflow-hidden"
              style={{ backgroundImage: 'url(/whiteboard.jpg)' }}>
              <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold">Guiding You to Fluency</h3>
                  <p className="text-white/80">Focuses on their role in language mastery.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <UserCheck className="w-10 h-10 text-blue-600 mb-4" />
                <h4 className="font-semibold mb-2">Diverse Instructors</h4>
                <p className="text-gray-600 text-sm">Native Kaiwa teachers with international teaching experience</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Globe className="w-10 h-10 text-green-600 mb-4" />
                <h4 className="font-semibold mb-2">University Partnerships</h4>
                <p className="text-gray-600 text-sm">Teaching at LBI Universitas Indonesia & BINUS ASO School of Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="bg-gray-50">
      <Navigation />
      <HeroSection />
      <AboutUsSection />
      <CoursesSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<KouyouInstitute />} />
        <Route path="/module-homepage" element={<ModuleHomepage />} />
      </Routes>
    </BrowserRouter>
  );
}