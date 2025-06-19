import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
} from "lucide-react"

export default function Component() {
  const skills = [
    "Java",
    "Selenium",
    "Python",
    "TypeScript",
    "Playwright",
    "LLMs",
    "Cucumber",
    "AWS",
    "Docker",
    "Kubernetes",
    "Test Management",
    "Project Management",
    "Agile Scrum Master",
    "DeepEval",
    "ConfidentAI",
    "JIRA",
    "Linear",
    "Azure DevOps",
    "K6",
    "JMeter",
    "TestRail",
    "TestMO",
    "X-Ray",
    "TestNG",
    "Pytest",
    "Test Automation Strategy",
    "Quality Engineering",
    "Test Data Management",
    "DevOps",
    "Security Testing",
    "OWASP",
    "Burp Suite",
    "API Testing",
    "Postman",
    "Swagger",
    "Kafka",
    "Kibana",
    "Grafana",
    "Appium",
    "XCTest",
    "Geb & Spock",
    "HP ALM",
    "UFT",
    "CircleCI",
    "SonarQube",
    "BrowserStack",
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

  const achievements = [
    "Reduced UI script failures to less than 1% through AI-powered auto-healing strategies",
    "Achieved 80% reduction in manual testing effort through automation frameworks",
    "Successfully built and led teams of 15+ SDETs across multiple organizations",
    "Implemented AI-integrated test automation frameworks using cutting-edge technologies",
    "Established quality gates and CI/CD pipelines for reliable software delivery",
  ]

  const certifications = [
    "Advanced Certified Scrum Master (A-CSM) - Scrum Alliance (2024)",
    "Certified Scrum Master (CSM) - Scrum Alliance (2022)",
    "BTech Computer Science - GEC Idukki (2011)",
  ]

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
                <Button className="bg-blue-600 hover:bg-blue-700">
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience Section */}
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

            {/* Key Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Award className="w-6 h-6 text-green-600" />
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                      <Award className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">{achievement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-purple-600" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-orange-600" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TestTube className="w-5 h-5 text-red-600" />
                  Quick Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Years of Experience</span>
                    <Badge className="bg-blue-100 text-blue-800">14+</Badge>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Projects Delivered</span>
                    <Badge className="bg-green-100 text-green-800">50+</Badge>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Team Members Led</span>
                    <Badge className="bg-purple-100 text-purple-800">15+</Badge>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Manual Effort Reduction</span>
                    <Badge className="bg-orange-100 text-orange-800">80%</Badge>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">UI Failure Rate</span>
                    <Badge className="bg-orange-100 text-orange-800">&lt;1%</Badge>
                  </div>
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
