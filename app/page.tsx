import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Palette, Zap } from "lucide-react"

export default function Portfolio() {
  const skills = [
    { name: "HTML", icon: Code, description: "Semantic markup and accessibility" },
    { name: "CSS", icon: Palette, description: "Modern styling and responsive design" },
    { name: "JavaScript", icon: Zap, description: "Interactive web applications" },
  ]

  const projects = [
    {
      title: "Responsive Landing Page",
      description:
        "A modern landing page built with HTML, CSS, and JavaScript featuring smooth animations and mobile-first design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "#",
    },
    {
      title: "Interactive Dashboard",
      description: "Dynamic dashboard with real-time data visualization using vanilla JavaScript and CSS Grid.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "#",
    },
    {
      title: "E-commerce Product Gallery",
      description:
        "Product showcase with filtering, search functionality, and shopping cart built with pure JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">Amir Alakbarov</h1>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">
                About
              </Button>
              <Button variant="ghost" size="sm">
                Skills
              </Button>
              <Button variant="ghost" size="sm">
                Projects
              </Button>
              <Button variant="ghost" size="sm">
                Contact
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
              AA
            </div>
            <h1 className="text-5xl font-bold text-slate-800 mb-4">Amir Alakbarov</h1>
            <p className="text-xl text-slate-600 mb-6">Frontend Developer</p>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8">
              Passionate about creating beautiful, interactive web experiences using HTML, CSS, and JavaScript. I bring
              designs to life with clean code and attention to detail.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 mb-6">
                I'm a dedicated frontend developer with a passion for creating engaging web experiences. My expertise
                lies in the fundamental technologies of web development: HTML, CSS, and JavaScript.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                I believe in writing clean, semantic code and creating websites that are not only visually appealing but
                also accessible and performant. Every project is an opportunity to learn something new and push the
                boundaries of what's possible with these core technologies.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3 text-blue-600" />
                  Based in Azerbaijan
                </li>
                <li className="flex items-center">
                  <Code className="w-4 h-4 mr-3 text-blue-600" />
                  Frontend Developer
                </li>
                <li className="flex items-center">
                  <Zap className="w-4 h-4 mr-3 text-blue-600" />
                  Specializing in Vanilla JS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">My Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{skill.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-slate-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas
            to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>amir.alakbarov@email.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+994 XX XXX XX XX</span>
            </div>
          </div>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Mail className="w-4 h-4 mr-2" />
            Send Message
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Amir Alakbarov. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
