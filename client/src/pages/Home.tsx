
import {
  ArrowRight,
  FileText,
  Sparkles,
  Mic,
  ChartNoAxesCombined,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Resume Builder",
    description:
      "Create professional, ATS-friendly resumes with an easy-to-use builder.",
  },
  {
    icon: Sparkles,
    title: "AI Resume Review",
    description:
      "Get intelligent feedback, keyword suggestions, and actionable improvements.",
  },
  {
    icon: Mic,
    title: "AI Interview Practice",
    description:
      "Practice realistic interviews and receive personalized feedback on your answers.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Performance Analytics",
    description:
      "Track your resume quality and interview performance as you improve.",
  },
];

function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">
          CareerPilot<span className="text-violet-400"> AI</span>
        </h1>

        <div className="hidden md:flex items-center gap-8 text-slate-300">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#about" className="hover:text-white">About</a>
        </div>

        <button className="bg-violet-600 hover:bg-violet-700 px-5 py-2.5 rounded-lg font-medium">
          Get Started
        </button>
      </nav>

      <section className="max-w-7xl mx-auto px-8 py-28 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300 mb-8">
          <Sparkles size={16} />
          Your AI-powered career companion
        </div>

        <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          Build Your Future.
          <br />
          <span className="text-violet-400">
            One Step at a Time.
          </span>
        </h2>

        <p className="mt-8 max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed">
          Build professional resumes, get AI-powered feedback,
          and prepare for interviews with confidence.
          Your career journey starts here.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <button className="flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 px-7 py-4 rounded-xl font-semibold">
            Get Started <ArrowRight size={18} />
          </button>

          <a
            href="#features"
            className="border border-slate-700 hover:bg-slate-800 px-7 py-4 rounded-xl font-semibold"
          >
            Explore Features
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-slate-400">
          {["Build better resumes", "Practice interviews", "Track your progress"].map(
            (item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-violet-400" />
                {item}
              </span>
            )
          )}
        </div>
      </section>

      <section id="features" className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-violet-400 font-semibold mb-3">OUR FEATURES</p>
          <h3 className="text-3xl md:text-4xl font-bold">
            Everything You Need to Grow
          </h3>
          <p className="text-slate-400 mt-4">
            Powerful tools to help you become career-ready.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="border border-slate-800 bg-slate-900/60 rounded-2xl p-7 hover:border-violet-500/60 transition-colors"
              >
                <div className="bg-violet-500/10 text-violet-400 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Icon size={24} />
                </div>

                <h4 className="text-xl font-semibold mt-6">
                  {feature.title}
                </h4>

                <p className="text-slate-400 mt-3 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        © 2026 CareerPilot AI. All rights reserved.
      </footer>
    </main>
  );
}

export default Home;
