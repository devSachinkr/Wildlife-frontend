import {  useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Trees,
  PawPrint,
  Users,
  Shield,
  Activity,
  MapPin,
  BarChart3,
  Globe,
  ChevronRight,
  Sparkles,
  Eye,
  Zap,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { useAuthStore } from "../stores/authStore";
import { Navbar } from "../components/layout/NavbarPublic";

export const Home = () => {
  const { isAuthenticated } = useAuthStore();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const stats = [
    {
      icon: Trees,
      value: 50,
      label: "Protected Areas",
      suffix: "+",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: PawPrint,
      value: 150,
      label: "Species Tracked",
      suffix: "+",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Activity,
      value: 1000,
      label: "Activities",
      suffix: "+",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      value: 30,
      label: "Partner Orgs",
      suffix: "+",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const features = [
    {
      icon: MapPin,
      title: "Real-time Tracking",
      description: "Monitor forest activities and wildlife sightings instantly",
      color: "from-emerald-400 to-emerald-600",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Visualize conservation data with beautiful charts",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Shield,
      title: "Role-based Access",
      description: "Admin, Conservationist, and Researcher roles",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: Globe,
      title: "Multi-location",
      description: "Track activities across multiple forest areas",
      color: "from-cyan-400 to-cyan-600",
    },
    {
      icon: Eye,
      title: "Live Monitoring",
      description: "Real-time updates from the field",
      color: "from-rose-400 to-rose-600",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimized for speed and reliability",
      color: "from-yellow-400 to-yellow-600",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Create Account",
      description: "Sign up as a Conservationist or Researcher to get started",
      icon: Users,
    },
    {
      number: "02",
      title: "Report Activity",
      description: "Log patrols, wildlife sightings, or illegal activities",
      icon: Activity,
    },
    {
      number: "03",
      title: "Track & Analyze",
      description: "Monitor progress through interactive dashboard",
      icon: BarChart3,
    },
    {
      number: "04",
      title: "Collaborate",
      description: "Work with organizations to protect wildlife",
      icon: Shield,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 100 },
    },
  }as const;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Public Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        ref={targetRef}
        className="relative overflow-hidden min-h-[90vh] flex items-center"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            style={{ opacity, scale }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">
                AI-Powered Conservation Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Protect Nature,
              <br />
              <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                Track Wildlife
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              A comprehensive platform for conservationists, researchers, and
              organizations to monitor forest activities and protect wildlife in
              real-time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {isAuthenticated ? (
                <Button
                  
                  size="lg"
                  className=" cursor-pointer gap-2 group text-lg px-8 py-6 rounded-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg transition-all duration-300"
                >
                  <Link to="/dashboard" className="flex items-center gap-x-2 ">
                    Go to Dashboard
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              ) : (
                <>
                  <Button
                    
                    size="lg"
                    className="gap-2 group text-lg px-8 py-6 rounded-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg transition-all duration-300"
                  >
                    <Link to="/login">
                      Get Started Free
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                    
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 rounded-full backdrop-blur-sm"
                  >
                    <Link to="/about">Learn More</Link>
                  </Button>
                </>
              )}
            </motion.div>

            {/* Stats Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group relative overflow-hidden p-5 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10 flex items-center justify-center mb-3 mx-auto`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-2xl font-bold">
                      {stat.value}
                      {stat.suffix}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to monitor and protect forest ecosystems in
              one place
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple four-step process to start monitoring and protecting
              wildlife
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.5,
                    type: "spring",
                  }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="text-center">
                    <div className="relative inline-block">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center font-bold text-primary">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/3 -right-3 text-primary/30">
                      <ChevronRight className="h-6 w-6" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Start Monitoring?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of conservationists and researchers in protecting
                our forests and wildlife.
              </p>
              {!isAuthenticated && (
                <Button
                  
                  size="lg"
                  className="gap-2 group bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg transition-all duration-300"
                >
                  <Link to="/register" className="flex items-center gap-x-2">
                    Create Free Account
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
