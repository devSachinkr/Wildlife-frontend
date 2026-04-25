import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  Leaf, 
  ExternalLink,
  Target,
  Rocket,
  Code2,
  Database,
  Server,
  Cloud,
  Shield,
  Zap,
  Globe,
  Award,
  TrendingUp,
  Heart
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Navbar } from '../components/layout/NavbarPublic'
import { FaGithub } from 'react-icons/fa'
export const About = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const techGroups = [
    {
      title: "Frontend",
      icon: <Code2 className="h-5 w-5" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      techs: [
        { name: "React 18", icon: "⚛️", desc: "UI Library" },
        { name: "TypeScript", icon: "📘", desc: "Type Safety" },
        { name: "Tailwind CSS", icon: "🎨", desc: "Styling" },
        { name: "Framer Motion", icon: "🎭", desc: "Animations" },
        { name: "Zustand", icon: "🐻", desc: "State Management" },
        { name: "React Query", icon: "📡", desc: "Data Fetching" },
        { name: "Shadcn/UI", icon: "🎯", desc: "Components" },
        { name: "Vite", icon: "⚡", desc: "Build Tool" },
      ]
    },
    {
      title: "Backend",
      icon: <Server className="h-5 w-5" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      techs: [
        { name: "Node.js", icon: "🟢", desc: "Runtime" },
        { name: "Express", icon: "🚂", desc: "Framework" },
        { name: "TypeScript", icon: "📘", desc: "Type Safety" },
        { name: "Prisma", icon: "🗄️", desc: "ORM" },
        { name: "JWT", icon: "🔐", desc: "Authentication" },
        { name: "Bcrypt", icon: "🔒", desc: "Encryption" },
        { name: "Zod", icon: "✅", desc: "Validation" },
        { name: "Helmet", icon: "🪖", desc: "Security" },
      ]
    },
    {
      title: "Database & Storage",
      icon: <Database className="h-5 w-5" />,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/10",
      techs: [
        { name: "PostgreSQL", icon: "🐘", desc: "Database" },
        { name: "Neon Tech", icon: "⚡", desc: "Cloud DB" },
        { name: "Prisma", icon: "🗄️", desc: "ORM" },
        { name: "Cloudinary", icon: "☁️", desc: "Image Storage" },
      ]
    },
    {
      title: "DevOps & Deployment",
      icon: <Cloud className="h-5 w-5" />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      techs: [
        { name: "Vercel", icon: "▲", desc: "Frontend Hosting" },
        { name: "Render", icon: "⚡", desc: "Backend Hosting" },
        { name: "Git", icon: "📦", desc: "Version Control" },
        { name: "GitHub", icon: "🐙", desc: "Repository" },
      ]
    }
  ]

  const timelineEvents = [
    { date: "Week 1-2", title: "Planning & Setup", description: "Project requirements analysis, database schema design, tech stack finalization", icon: Target, status: "completed" },
    { date: "Week 3-4", title: "Backend Development", description: "API development, authentication, role-based access, database integration", icon: Server, status: "completed" },
    { date: "Week 5-6", title: "Frontend Development", description: "UI/UX design, component development, dashboard implementation", icon: Code2, status: "completed" },
    { date: "Week 7", title: "Integration & Testing", description: "API integration, end-to-end testing, bug fixes", icon: Shield, status: "completed" },
    { date: "Week 8", title: "Deployment", description: "Production deployment on Vercel & Render, final polishing", icon: Rocket, status: "completed" },
  ]

  const features = [
    { icon: Shield, title: "Role-based Access", description: "Admin, Conservationist, and Researcher roles with specific permissions" },
    { icon: Globe, title: "Multi-location Support", description: "Track activities across multiple forest locations" },
    { icon: TrendingUp, title: "Advanced Analytics", description: "Interactive charts and real-time statistics" },
    { icon: Zap, title: "Real-time Updates", description: "Live monitoring with WebSocket integration" },
    { icon: Heart, title: "Conservation Focused", description: "Built specifically for wildlife protection" },
    { icon: Award, title: "Production Ready", description: "Scalable, secure, and performant architecture" },
  ]



  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navbar />

      <section ref={targetRef} className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            style={{ opacity }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 backdrop-blur-sm"
            >
              <Leaf className="h-4 w-4" />
              <span className="text-sm font-medium">About The Project</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              Forest & Wildlife
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Monitoring Dashboard
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
            >
              A comprehensive full-stack web application designed for conservationists, 
              researchers, and environmental organizations to track and monitor forest 
              conservation efforts and wildlife activities in real-time.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Problem Statement</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Create an interactive dashboard for tracking forest and wildlife conservation efforts. 
                Conservationists, researchers, and environmental organizations will register and provide 
                updates about forest and wildlife monitoring activities. Administrators will validate 
                participants, and users can filter content based on location, species, and conservation 
                status to stay informed about environmental protection initiatives.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tech Stack</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Modern technologies powering this application
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {techGroups.map((group, groupIdx) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: groupIdx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-${group.color.split(' ')[1]}/50 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${group.color} flex items-center justify-center shadow-lg`}>
                      {group.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{group.title}</h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {group.techs.map((tech, idx) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -3 }}
                        className="text-center p-3 rounded-xl bg-muted/20 hover:bg-muted/40 transition-all"
                      >
                        <div className="text-2xl mb-1">{tech.icon}</div>
                        <p className="font-medium text-sm">{tech.name}</p>
                        <p className="text-xs text-muted-foreground">{tech.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What makes this platform powerful and unique
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Project Timeline</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Journey of building this platform
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timelineEvents.map((event, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0"
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div className="flex flex-wrap items-center gap-4 mb-2">
                    <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {event.date}
                    </span>
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{event.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-secondary/20 p-12 text-center"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 to-transparent" />
            <div className="relative z-10">
              <FaGithub className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">View on GitHub</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Check out the complete source code, documentation, and contribute to the project
              </p>
              <div className='flex  justify-center space-x-7'>

              <Button  className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg transition-all duration-300">
                <a href="https://github.com/devSachinkr/Wildlife-frontend.git" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 font-bold'>
                  <FaGithub className="h-4 w-4" />
                  Frontend
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
              <Button  className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg transition-all duration-300">
                <a href="https://github.com/devSachinkr/Wildlife-Backend.git" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 font-bold'>
                  <FaGithub className="h-4 w-4" />
                  Backend
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
              
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}