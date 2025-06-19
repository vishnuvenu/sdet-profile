"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  Code,
  TestTube,
  Briefcase,
  GraduationCap,
  Star,
  Download,
  Linkedin,
  Github,
  Folder,
  Zap,
} from "lucide-react"

export default function Component() {
  const skills = [
    { name: "Java", level: "Expert", category: "Programming" },
    { name: "Selenium", level: "Expert", category: "Automation" },
    { name: "Python", level: "Advanced", category: "Programming" },
    { name: "TypeScript", level: "Advanced", category: "Programming" },
    { name: "Playwright", level: "Expert", category: "Automation" },
    { name: "LLMs", level: "Advanced", category: "AI/ML" },
    { name: "Cucumber", level: "Expert", category: "Testing" },
    { name: "AWS", level: "Advanced", category: "Cloud" },
    { name: "Docker", level: "Advanced", category: "DevOps" },
    { name: "Kubernetes", level: "Intermediate", category: "DevOps" },
    { name: "Test Management", level: "Expert", category: "Management" },
    { name: "Project Management", level: "Expert", category: "Management" },
    { name: "Agile Scrum Master", level: "Expert", category: "Management" },
    { name: "DeepEval", level: "Advanced", category: "AI/ML" },
    { name: "ConfidentAI", level: "Advanced", category: "AI/ML" },
    { name: "JIRA", level: "Expert", category: "Tools" },
    { name: "Azure DevOps", level: "Advanced", category: "DevOps" },
    { name: "K6", level: "Advanced", category: "Performance" },
    { name: "JMeter", level: "Expert", category: "Performance" },
    { name: "API Testing", level: "Expert", category: "Testing" },
    { name: "Security Testing", level: "Advanced", category: "Testing" },
    { name: "Mobile Testing", level: "Advanced", category: "Testing" },
  ]

  const experience = [
    {
      title: "Staff SDET",
      company: "Ohai.ai",
      period: "Feb 2024 - Present",
      duration: "10+ months",
      responsibilities: [
        "Developed an AI-integrated Test Automation Framework using Playwright and TypeScript, enhancing test coverage and release quality",
        "Designed and implemented Mobile Automation framework for iOS using Appium and XCTest",
        "Reduced UI script failures to less than 1% by implementing AI-powered auto-healing strategies",
        "Championed validation tools like DeepEval and ConfidentAI for LLMs, accelerating model selection",
        "Led performance testing initiatives using K6 and JMeter to optimize system throughput",
        "Implemented CI/CD pipelines enabling shift-left testing for rapid and reliable deployments",
      ],
    },
    {
      title: "Head of QA",
      company: "HOK (Furlenco.com)",
      period: "Aug 2021 - Nov 2023",
      duration: "2+ years",
      responsibilities: [
        "Recruited and led 15+ SDETs; managed hiring, coaching, and performance evaluations",
        "Designed and executed test automation frameworks (Java, Cucumber) with 80% reduction in manual effort",
        "Instituted Quality Gates using CircleCI, SonarQube, Kubernetes ensuring stable releases",
        "Drove cross-functional Agile delivery with metrics-driven quality planning",
        "Owned and reported KPIs, test coverage, defect leakage, and quality metrics to stakeholders",
      ],
    },
    {
      title: "Lead QA",
      company: "Baker Hughes",
      period: "Feb 2019 - Aug 2021",
      duration: "2.5 years",
      responsibilities: [
        "Directed QA activities for major products, overseeing high-performing teams",
        "Developed robust test automation framework with Java, Cucumber, and Azure DevOps",
        "Conducted comprehensive QA process improvements, enhancing efficiency and effectiveness",
        "Authored test strategies and comprehensive plans for releases",
        "Trained community and team in Agile practices for continuous learning",
      ],
    },
    {
      title: "Sr QA Engineer",
      company: "Amadeus Labs",
      period: "Aug 2016 - Feb 2019",
      duration: "2.5 years",
      responsibilities: [
        "Automated functional scenarios using Geb & Spock, significantly increasing test coverage",
        "Managed Selenium and Geb Spock Tests execution, transitioning from systems to UAT",
        "Oversaw automation test migration from Selenium to Geb & Spock",
        "Maintained and managed Jenkins for Continuous Integration",
        "Reported results to stakeholders for informed decision-making",
      ],
    },
    {
      title: "Sr Software Engineer",
      company: "Accenture",
      period: "Jun 2011 - Aug 2016",
      duration: "5+ years",
      responsibilities: [
        "Analyzed requirements working closely with Business Analysts and users",
        "Devised Test Plans and approaches based on new requirements",
        "Created scripts in BPT framework using HP ALM and Selenium WebDriver",
        "Conducted test execution and managed defects maintaining high quality standards",
        "Automated testing with UFT, Java, and Selenium optimizing test procedures",
      ],
    },
  ]

  const projects = [
    {
      name: "AI-Integrated Test Automation Framework",
      company: "Ohai.ai",
      description:
        "Built comprehensive automation framework using Playwright and TypeScript with AI-powered auto-healing capabilities",
      technologies: ["Playwright", "TypeScript", "AI/ML", "DeepEval"],
      achievements: ["<1% UI failure rate", "90% test coverage", "50% faster execution"],
      status: "Active",
    },
    {
      name: "Mobile iOS Automation Suite",
      company: "Ohai.ai",
      description: "Designed and implemented mobile automation framework for iOS applications using Appium and XCTest",
      technologies: ["Appium", "XCTest", "iOS", "Swift"],
      achievements: ["100% critical path coverage", "Automated regression suite", "CI/CD integration"],
      status: "Active",
    },
    {
      name: "Enterprise QA Framework",
      company: "HOK (Furlenco.com)",
      description: "Architected scalable test automation framework reducing manual testing effort by 80%",
      technologies: ["Java", "Cucumber", "Selenium", "TestNG"],
      achievements: ["80% manual effort reduction", "15+ team members", "Quality gates implementation"],
      status: "Completed",
    },
    {
      name: "Performance Testing Suite",
      company: "Baker Hughes",
      description: "Developed comprehensive performance testing framework for enterprise applications",
      technologies: ["JMeter", "K6", "Azure DevOps", "Grafana"],
      achievements: ["Load testing automation", "Performance benchmarking", "Scalability validation"],
      status: "Completed",
    },
    {
      name: "API Testing Framework",
      company: "Amadeus Labs",
      description: "Built robust API testing suite with comprehensive validation and reporting",
      technologies: ["REST Assured", "Postman", "Newman", "Jenkins"],
      achievements: ["API test automation", "Contract testing", "Continuous validation"],
      status: "Completed",
    },
  ]

  const achievements = [
    "Reduced UI script failures to less than 1% through AI-powered auto-healing strategies",
    "Achieved 80% reduction in manual testing effort through automation frameworks",
    "Successfully built and led teams of 15+ SDETs across multiple organizations",
    "Implemented AI-integrated test automation frameworks using cutting-edge technologies",
    "Established quality gates and CI/CD pipelines for reliable software delivery",
  ]

  const certifications = [
    {
      name: "Advanced Certified Scrum Master (A-CSM)",
      issuer: "Scrum Alliance",
      date: "May 2024",
      id: "001140585",
    },
    {
      name: "Certified Scrum Master (CSM)",
      issuer: "Scrum Alliance",
      date: "May 2022",
      id: "001140585",
    },
  ]

  const education = [
    {
      degree: "Bachelor of Technology (BTech)",
      field: "Computer Science",
      institution: "Government Engineering College (GEC) Idukki",
      location: "Cochin, India",
      period: "Sep 2007 - Jun 2011",
      duration: "4 years",
    },
  ]

  const getSkillColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-100 text-green-800"
      case "Advanced":
        return "bg-blue-100 text-blue-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getProjectStatusColor = (status: string) => {
    return status === "Active" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
  }

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume/VISHNU_AV_Staff_SDET_14Years.pdf"
    link.download = "VISHNU_AV_Staff_SDET_14Years.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Section */}
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10" />
          <CardContent className="relative p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Profile" />
                <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                  VA
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 space-y-4">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">Vishnu AV</h1>
                  <h2 className="text-2xl text-blue-600 font-semibold mb-4">Senior SDET Manager</h2>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                    QA Engineering Manager with 14 years of hands-on and leadership experience in building
                    high-performance SDET teams, architecting automation frameworks, and delivering scalable quality
                    strategies. Proven expertise in test automation (Selenium, Appium, Playwright), CI/CD, DevOps, and
                    AI-led QA practices. Adept at managing cross-functional teams, driving KPIs, and integrating testing
                    into fast-paced Agile environments.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Bengaluru, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>venuvis89@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+91 8848987009</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>14+ Years Experience</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Button onClick={handleDownloadResume} className="bg-blue-600 hover:bg-blue-700">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <TestTube className="w-5 h-5 text-red-600" />
              Career Highlights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">14+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">15+</div>
                <div className="text-sm text-gray-600">Team Members Led</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">80%</div>
                <div className="text-sm text-gray-600">Manual Effort Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">&lt;1%</div>
                <div className="text-sm text-gray-600">UI Failure Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">50+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content with Tabs */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="experience" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="experience" className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Experience
                </TabsTrigger>
                <TabsTrigger value="skills" className="flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  Skills
                </TabsTrigger>
                <TabsTrigger value="projects" className="flex items-center gap-2">
                  <Folder className="w-4 h-4" />
                  Projects
                </TabsTrigger>
              </TabsList>

              {/* Experience Tab */}
              <TabsContent value="experience">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Briefcase className="w-6 h-6 text-blue-600" />
                      Professional Experience
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    {experience.map((job, index) => (
                      <div key={index} className="relative">
                        {index !== experience.length - 1 && (
                          <div className="absolute left-6 top-12 w-0.5 h-full bg-gray-200" />
                        )}
                        <div className="flex gap-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Briefcase className="w-6 h-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                              <Badge variant="secondary" className="w-fit">
                                {job.duration}
                              </Badge>
                            </div>
                            <p className="text-blue-600 font-medium mb-1">{job.company}</p>
                            <p className="text-gray-500 text-sm mb-4">{job.period}</p>
                            <ul className="space-y-2">
                              {job.responsibilities.map((resp, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-gray-700">
                                  <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Skills Tab */}
              <TabsContent value="skills">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Code className="w-6 h-6 text-purple-600" />
                      Technical Skills & Expertise
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[
                        "Programming",
                        "Automation",
                        "Testing",
                        "AI/ML",
                        "Cloud",
                        "DevOps",
                        "Management",
                        "Tools",
                        "Performance",
                      ].map((category) => (
                        <div key={category}>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">{category}</h3>
                          <div className="flex flex-wrap gap-2">
                            {skills
                              .filter((skill) => skill.category === category)
                              .map((skill, index) => (
                                <div key={index} className="flex items-center gap-2">
                                  <Badge variant="outline" className="text-sm">
                                    {skill.name}
                                  </Badge>
                                  <Badge className={`text-xs ${getSkillColor(skill.level)}`}>{skill.level}</Badge>
                                </div>
                              ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Projects Tab */}
              <TabsContent value="projects">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Folder className="w-6 h-6 text-green-600" />
                      Key Projects & Initiatives
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {projects.map((project, index) => (
                      <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">{project.name}</h3>
                            <p className="text-blue-600 font-medium">{project.company}</p>
                          </div>
                          <Badge className={getProjectStatusColor(project.status)}>{project.status}</Badge>
                        </div>
                        <p className="text-gray-700 mb-4">{project.description}</p>
                        <div className="space-y-3">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                            <ul className="space-y-1">
                              {project.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                  <Zap className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                {education.map((edu, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                    <p className="text-blue-600 font-medium">{edu.field}</p>
                    <p className="text-sm text-gray-700">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.location}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{edu.period}</span>
                      <Badge variant="outline">{edu.duration}</Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-orange-600" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="border-l-4 border-orange-200 pl-4 py-2">
                      <h4 className="font-semibold text-gray-900 text-sm">{cert.name}</h4>
                      <p className="text-orange-600 text-sm font-medium">{cert.issuer}</p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-gray-500">{cert.date}</span>
                        <Badge variant="outline" className="text-xs">
                          ID: {cert.id}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-green-600" />
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <Award className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
              <CardHeader>
                <CardTitle className="text-center">Ready to Connect?</CardTitle>
                <CardDescription className="text-center">
                  Let's discuss how I can help drive quality and automation in your organization.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
