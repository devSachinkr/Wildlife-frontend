import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  ArrowRight, 
  UserPlus, 
  FileText, 
  BarChart3, 
  Users,
  MapPin,
  PawPrint,
  Shield,
  CheckCircle,
  Bell,
  Download,
  Share2,
  Globe,
  Zap
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Navbar } from '../components/layout/NavbarPublic'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../stores/authStore'

export const HowItWorks = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  })
  const { isAuthenticated } = useAuthStore()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const steps = [
    {
      number: "01",
      title: "Create Your Account",
      subtitle: "Get started in minutes",
      icon: UserPlus,
      color: "from-blue-500 to-cyan-500",
      description: "Sign up as a Conservationist, Researcher, or Organization member. Choose your role and complete your profile.",
      details: [
        "Free registration with email verification",
        "Choose your role (Conservationist/Researcher)",
        "Complete your organization profile",
        "Wait for admin verification (if applicable)"
      ],
      image: "📝"
    },
    {
      number: "02",
      title: "Report Monitoring Activities",
      subtitle: "Log what you observe",
      icon: FileText,
      color: "from-emerald-500 to-teal-500",
      description: "Document forest patrols, wildlife sightings, illegal activities, and conservation efforts in real-time.",
      details: [
        "Add location data",
        "Record species sightings with counts",
        "Document findings and actions taken",
        "Submit for admin verification"
      ],
      image: "📸"
    },
    {
      number: "03",
      title: "Admin Verification",
      subtitle: "Quality assurance",
      icon: Shield,
      color: "from-purple-500 to-pink-500",
      description: "Administrators review and verify submitted activities to ensure data accuracy and reliability.",
      details: [
        "Pending activities require admin review",
        "Get notified when verified/rejected",
        "Verified data becomes publicly visible",
        "Build trust in the platform"
      ],
      image: "✅"
    },
    {
      number: "04",
      title: "Track & Analyze",
      subtitle: "Make data-driven decisions",
      icon: BarChart3,
      color: "from-orange-500 to-red-500",
      description: "Access interactive dashboards, charts, and maps to analyze conservation trends and patterns.",
      details: [
        "Real-time statistics and metrics",
        "Interactive maps with activity locations",
        "Filter by species, location, and status",
        "Export data for research"
      ],
      image: "📊"
    },
    {
      number: "05",
      title: "Collaborate & Share",
      subtitle: "Work together for conservation",
      icon: Users,
      color: "from-rose-500 to-pink-500",
      description: "Connect with other organizations, share insights, and coordinate conservation efforts.",
      details: [
        "Partner with verified organizations",
        "Share activities with team members",
        "Comment and collaborate",
        "Receive alerts and notifications"
      ],
      image: "🤝"
    }
  ]

  const features = [
    { icon: MapPin, title: "Location Tracking", description: "GPS-enabled location tagging for accurate reporting" },
    { icon: PawPrint, title: "Species Database", description: "Comprehensive database of local wildlife species" },
    { icon: Bell, title: "Real-time Alerts", description: "Instant notifications for critical activities" },
    { icon: Download, title: "Data Export", description: "Export reports in CSV/PDF format" },
    { icon: Share2, title: "Easy Sharing", description: "Share findings with stakeholders" },
    { icon: Globe, title: "Public Access", description: "Transparent conservation data" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, type: 'spring', stiffness: 100 } }
  } as const

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
              <Zap className="h-4 w-4" />
              <span className="text-sm font-medium">Simple & Intuitive</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              How It Works
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Start Protecting Wildlife Today
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
            >
              A simple 5-step process to start monitoring, reporting, and protecting 
              forest ecosystems and wildlife.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  <Card className="overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300 group p-5">
                    <CardContent className="p-0">
                      <div className="flex flex-col lg:flex-row">
                        <div className={`relative lg:w-80 p-8 bg-gradient-to-br ${step.color} text-white rounded-3xl`}>
                          <div className="text-6xl font-bold opacity-20 mb-4">{step.number}</div>
                          <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                            <Icon className="h-8 w-8" />
                          </div>
                          <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                          <p className="text-white/80 text-sm">{step.subtitle}</p>
                          <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block">
                            <div className="w-8 h-8 rounded-full bg-background shadow-lg flex items-center justify-center">
                              <ArrowRight className="h-4 w-4 text-primary" />
                            </div>
                          </div>
                        </div>

                        <div className="flex-1 p-8">
                          <p className="text-muted-foreground mb-6">{step.description}</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {step.details.map((detail, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6 text-4xl">{step.image}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute left-[320px] top-full h-8 w-px bg-gradient-to-b from-primary/50 to-transparent" />
                  )}
                </motion.div>
              )
            })}
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Workflow Overview</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visual representation of how data flows through the system
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center p-6 rounded-2xl bg-card border border-border/50"
              >
                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                  <UserPlus className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="font-semibold mb-2">1. User Registration</h3>
                <p className="text-sm text-muted-foreground">Users sign up and get verified</p>
                <ArrowRight className="h-5 w-5 text-primary mx-auto mt-3 hidden md:block" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center p-6 rounded-2xl bg-card border border-border/50"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-emerald-500" />
                </div>
                <h3 className="font-semibold mb-2">2. Activity Reporting</h3>
                <p className="text-sm text-muted-foreground">Conservationists log activities</p>
                <ArrowRight className="h-5 w-5 text-primary mx-auto mt-3 hidden md:block" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center p-6 rounded-2xl bg-card border border-border/50"
              >
                <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="font-semibold mb-2">3. Admin Verification</h3>
                <p className="text-sm text-muted-foreground">Admins review and verify</p>
                <ArrowRight className="h-5 w-5 text-primary mx-auto mt-3 hidden md:block" />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center p-6 rounded-2xl bg-card border border-border/50 md:col-start-2"
              >
                <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-semibold mb-2">4. Data Analysis</h3>
                <p className="text-sm text-muted-foreground">Track trends and insights</p>
              </motion.div>
            </div>
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Additional Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need for effective conservation monitoring
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
                  className="p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
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

      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the community of conservationists and researchers protecting our forests and wildlife.
            </p>
              {!isAuthenticated ? (
                <Button
                  
                  size="lg"
                  className="gap-2 group bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg transition-all duration-300"
                >
                  <Link to="/register" className="flex items-center gap-x-2">
                    Create Free Account
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              ):(
                <Button
                  
                  size="lg"
                  className="gap-2 group bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg transition-all duration-300"
                >
                  <Link to="/dashboard" className="flex items-center gap-x-2 font-bold">
                    Go to Dashboard
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}