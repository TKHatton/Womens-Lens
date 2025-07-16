import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { 
  Sparkles, 
  Shield, 
  Users, 
  Globe, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Zap,
  Target,
  Heart,
  BookOpen,
  Award,
  ChevronDown,
  Play,
  Clock,
  MapPin,
  Lightbulb,
  TrendingUp,
  MessageSquare,
  Camera,
  Search,
  Mic
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('overview')
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const courses = [
    {
      id: 'spark',
      name: 'AI Spark Intensive',
      tagline: 'Ignite Your Digital Power in 3 Days',
      duration: '3 Days',
      format: 'Intensive Workshop',
      description: 'Fast-track your AI journey with essential skills for immediate impact',
      highlights: [
        'Digital safety & security mastery',
        'AI-powered fact-checking tools',
        'Content creation acceleration',
        'Mobile-first approach',
        'Immediate implementation'
      ],
      skills: [
        'Password management & 2FA setup',
        'Harassment recognition & response',
        'MyAIFactChecker & Dubawa tools',
        'AI writing assistants (Grammarly, QuillBot)',
        'Basic research enhancement',
        'Social media optimization'
      ],
      ideal: 'Busy professionals needing quick AI skills for immediate challenges',
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      id: 'elevate',
      name: 'AI Elevate Program',
      tagline: 'Transform Your Professional Practice in 2 Weeks',
      duration: '2 Weeks',
      format: 'Comprehensive Training',
      description: 'Deep skill development with balanced learning and practical application',
      highlights: [
        'Advanced fact-checking mastery',
        'Multi-platform content strategy',
        'Investigation enhancement',
        'Audience engagement tactics',
        'Professional integration'
      ],
      skills: [
        'Advanced verification workflows',
        'Cross-platform investigation',
        'Multimedia content creation',
        'Data analysis with AI tools',
        'Crisis communication strategies',
        'Professional branding'
      ],
      ideal: 'Professionals seeking comprehensive AI integration into their work',
      icon: TrendingUp,
      color: 'from-blue-500 to-purple-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 'leadership',
      name: 'AI Leadership Academy',
      tagline: 'Become a Community AI Champion in 6 Months',
      duration: '6 Months',
      format: 'Professional Development',
      description: 'Comprehensive transformation with leadership and mentorship capabilities',
      highlights: [
        'Expert-level AI competencies',
        'Leadership development',
        'Community training skills',
        'Advanced investigation techniques',
        'Sustainable impact creation'
      ],
      skills: [
        'Complex investigation leadership',
        'AI tool innovation & experimentation',
        'Training & mentorship capabilities',
        'Community organizing skills',
        'Policy communication strategies',
        'Impact measurement & evaluation'
      ],
      ideal: 'Leaders ready to champion AI adoption and train others in their communities',
      icon: Award,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  ]

  const coreSkills = [
    {
      icon: Shield,
      title: 'Digital Safety & Security',
      description: 'Master password management, harassment mitigation, and privacy protection',
      color: 'text-red-600'
    },
    {
      icon: Search,
      title: 'AI-Powered Fact-Checking',
      description: 'Combat misinformation with advanced verification tools and techniques',
      color: 'text-blue-600'
    },
    {
      icon: Camera,
      title: 'Content Creation & Enhancement',
      description: 'Create compelling multimedia content with AI assistance',
      color: 'text-green-600'
    },
    {
      icon: BookOpen,
      title: 'Research & Investigation',
      description: 'Enhance investigative capabilities with AI-powered research tools',
      color: 'text-purple-600'
    },
    {
      icon: MessageSquare,
      title: 'Audience Engagement',
      description: 'Build and maintain engaged communities across platforms',
      color: 'text-orange-600'
    },
    {
      icon: Star,
      title: 'Professional Development',
      description: 'Advance your career and build leadership capabilities',
      color: 'text-pink-600'
    }
  ]

  const testimonials = [
    {
      name: 'Amina Hassan',
      role: 'Investigative Journalist, Uganda',
      quote: 'The AI tools I learned have revolutionized my fact-checking process. I can now verify information 5x faster while maintaining accuracy.',
      course: 'AI Elevate Program'
    },
    {
      name: 'Grace Wanjiku',
      role: 'Local Councilor, Tanzania',
      quote: 'These skills helped me communicate more effectively with my constituents and create professional campaign materials on a limited budget.',
      course: 'AI Spark Intensive'
    },
    {
      name: 'Sarah Nyong',
      role: 'Radio Journalist, South Sudan',
      quote: 'I now train other women journalists in my community. The leadership skills I gained are creating ripple effects across our region.',
      course: 'AI Leadership Academy'
    }
  ]

  const stats = [
    { number: '300%', label: 'Increase in disinformation campaigns across Africa', icon: TrendingUp },
    { number: '90%', label: 'Of women journalists in Sudan became unemployed due to conflict', icon: Users },
    { number: '20-24%', label: 'Current AI adoption rate in African journalism', icon: Globe },
    { number: '6x', label: 'Faster spread of false news vs. accurate news on social media', icon: Zap }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-orange-50">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-12 w-12 text-yellow-400 mr-4" />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Women's Lens
              </h1>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              AI Academy for East African Voices
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Empowering women journalists and politicians in Uganda, Tanzania, and South Sudan with cutting-edge AI skills
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg"
                onClick={() => setActiveTab('courses')}
              >
                Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 text-lg"
                onClick={() => setActiveTab('impact')}
              >
                See Impact <Play className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <div className="w-4 h-4 bg-yellow-400 rounded-full opacity-70"></div>
        </div>
        <div className="absolute top-40 right-20 animate-pulse">
          <div className="w-6 h-6 bg-orange-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-bounce delay-1000">
          <div className="w-3 h-3 bg-pink-400 rounded-full opacity-80"></div>
        </div>
      </motion.section>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 h-16">
              <TabsTrigger value="overview" className="text-sm font-medium">Overview</TabsTrigger>
              <TabsTrigger value="courses" className="text-sm font-medium">Courses</TabsTrigger>
              <TabsTrigger value="impact" className="text-sm font-medium">Impact</TabsTrigger>
              <TabsTrigger value="contact" className="text-sm font-medium">Get Started</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          
          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-16">
            {/* Problem Statement */}
            <motion.section 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                The Challenge We're Addressing
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                  >
                    <stat.icon className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Core Skills */}
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Essential AI Skills for Modern Professionals
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coreSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <skill.icon className={`h-12 w-12 ${skill.color} mb-4`} />
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{skill.title}</h3>
                    <p className="text-gray-600">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Testimonials */}
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8"
            >
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                Voices of Transformation
              </h2>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="text-center max-w-3xl mx-auto"
                >
                  <blockquote className="text-xl md:text-2xl italic text-gray-700 mb-6">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  <div className="flex items-center justify-center">
                    <div>
                      <div className="font-bold text-lg text-gray-900">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-600">
                        {testimonials[currentTestimonial].role}
                      </div>
                      <Badge variant="secondary" className="mt-2">
                        {testimonials[currentTestimonial].course}
                      </Badge>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </motion.section>
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">
                Choose Your AI Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Three transformative pathways designed for different schedules, experience levels, and professional goals
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  className={`${course.bgColor} rounded-2xl border-2 ${course.borderColor} overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
                >
                  <div className={`bg-gradient-to-r ${course.color} p-6 text-white`}>
                    <course.icon className="h-12 w-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{course.name}</h3>
                    <p className="text-lg opacity-90">{course.tagline}</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </Badge>
                      <Badge variant="outline">{course.format}</Badge>
                    </div>
                    
                    <p className="text-gray-700 mb-6">{course.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                        <ul className="space-y-1">
                          {course.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Skills You'll Master:</h4>
                        <div className="flex flex-wrap gap-1">
                          {course.skills.slice(0, 3).map((skill, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {course.skills.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{course.skills.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-600 mb-4">
                          <strong>Ideal for:</strong> {course.ideal}
                        </p>
                        <Button className={`w-full bg-gradient-to-r ${course.color} hover:opacity-90 text-white`}>
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Course Comparison */}
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
                Compare Our Programs
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
                      <th className="text-center py-4 px-4 font-semibold text-orange-600">AI Spark</th>
                      <th className="text-center py-4 px-4 font-semibold text-blue-600">AI Elevate</th>
                      <th className="text-center py-4 px-4 font-semibold text-purple-600">AI Leadership</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Duration</td>
                      <td className="text-center py-3 px-4">3 Days</td>
                      <td className="text-center py-3 px-4">2 Weeks</td>
                      <td className="text-center py-3 px-4">6 Months</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Digital Safety Training</td>
                      <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">AI Fact-Checking Tools</td>
                      <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Advanced Investigation</td>
                      <td className="text-center py-3 px-4 text-gray-400">Basic</td>
                      <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                      <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium">Leadership Training</td>
                      <td className="text-center py-3 px-4 text-gray-400">—</td>
                      <td className="text-center py-3 px-4 text-gray-400">Basic</td>
                      <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Train-the-Trainer</td>
                      <td className="text-center py-3 px-4 text-gray-400">—</td>
                      <td className="text-center py-3 px-4 text-gray-400">—</td>
                      <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.section>
          </TabsContent>

          {/* Impact Tab */}
          <TabsContent value="impact" className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Creating Lasting Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our curriculum addresses critical challenges while building sustainable capabilities for long-term success
              </p>
            </motion.div>

            {/* Regional Focus */}
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  country: 'Uganda',
                  flag: '🇺🇬',
                  challenges: ['30M people without mobile internet', 'Political restrictions on media', 'Security concerns in some regions'],
                  adaptations: ['English with Luganda support', 'Partnership with civil society', 'Mobile-first approach']
                },
                {
                  country: 'Tanzania',
                  flag: '🇹🇿',
                  challenges: ['Swahili-English bilingual context', 'Media restrictions', 'Varying technology access'],
                  adaptations: ['Balanced English-Swahili delivery', 'Cultural sensitivity training', 'Mobile money integration']
                },
                {
                  country: 'South Sudan',
                  flag: '🇸🇸',
                  challenges: ['Ongoing conflict impacts', 'Limited infrastructure', 'Significant safety concerns'],
                  adaptations: ['Offline-capable materials', 'Flexible delivery methods', 'Comprehensive security protocols']
                }
              ].map((region, index) => (
                <motion.div
                  key={region.country}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{region.flag}</div>
                    <h3 className="text-xl font-bold text-gray-900">{region.country}</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">Challenges:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {region.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Our Adaptations:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {region.adaptations.map((adaptation, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {adaptation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.section>

            {/* Success Metrics */}
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
                Expected Outcomes & Impact
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Users, title: 'Individual Growth', desc: 'Enhanced digital skills, career advancement, increased safety' },
                  { icon: Globe, title: 'Media Quality', desc: 'Improved fact-checking, reduced misinformation, better content' },
                  { icon: Heart, title: 'Community Impact', desc: 'Stronger networks, peer support, knowledge sharing' },
                  { icon: Target, title: 'Democratic Engagement', desc: 'Better political communication, increased transparency' }
                ].map((outcome, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="text-center"
                  >
                    <outcome.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">{outcome.title}</h4>
                    <p className="text-sm text-gray-600">{outcome.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Tools & Technologies */}
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
                AI Tools & Technologies We Teach
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'MyAIFactChecker', type: 'African-developed', desc: 'Swift news verification using reputable sources', color: 'bg-green-100 text-green-800' },
                  { name: 'Dubawa AI', type: 'WhatsApp-integrated', desc: 'Real-time fact-checking with audio transcription', color: 'bg-blue-100 text-blue-800' },
                  { name: 'Google Pinpoint', type: 'Research tool', desc: 'Investigative stories and fact-checking', color: 'bg-purple-100 text-purple-800' },
                  { name: 'Grammarly', type: 'Writing assistant', desc: 'Grammar, style, and clarity enhancement', color: 'bg-orange-100 text-orange-800' },
                  { name: 'Perplexity AI', type: 'Research platform', desc: 'Comprehensive information gathering', color: 'bg-pink-100 text-pink-800' },
                  { name: 'QuillBot', type: 'Content creation', desc: 'Paraphrasing and writing assistance', color: 'bg-indigo-100 text-indigo-800' }
                ].map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-white rounded-lg p-4 shadow-md border border-gray-100"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-gray-900">{tool.name}</h4>
                      <Badge className={tool.color}>{tool.type}</Badge>
                    </div>
                    <p className="text-sm text-gray-600">{tool.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact" className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">
                Ready to Transform Your Impact?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join the growing community of empowered women journalists and politicians across East Africa
              </p>
            </motion.div>

            {/* Implementation Phases */}
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
                Implementation Roadmap
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    phase: 'Phase 1',
                    title: 'Pilot Implementation',
                    duration: 'Months 1-3',
                    activities: ['Start with AI Spark workshops', 'Test curriculum effectiveness', 'Build trainer expertise', 'Establish safety protocols'],
                    color: 'from-green-500 to-emerald-500'
                  },
                  {
                    phase: 'Phase 2',
                    title: 'Expansion & Refinement',
                    duration: 'Months 4-9',
                    activities: ['Introduce AI Elevate programs', 'Regional adaptations', 'Trainer certification', 'Partnership development'],
                    color: 'from-blue-500 to-cyan-500'
                  },
                  {
                    phase: 'Phase 3',
                    title: 'Scaling & Sustainability',
                    duration: 'Months 10-18',
                    activities: ['Launch AI Leadership Academy', 'Train-the-trainer programs', 'Impact documentation', 'Long-term sustainability'],
                    color: 'from-purple-500 to-violet-500'
                  }
                ].map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="relative"
                  >
                    <div className={`bg-gradient-to-r ${phase.color} rounded-t-xl p-4 text-white`}>
                      <div className="text-sm font-medium opacity-90">{phase.phase}</div>
                      <h4 className="text-xl font-bold">{phase.title}</h4>
                      <div className="text-sm opacity-90">{phase.duration}</div>
                    </div>
                    <div className="bg-white rounded-b-xl p-4 shadow-lg border-x border-b border-gray-100">
                      <ul className="space-y-2">
                        {phase.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Call to Action */}
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-2xl p-12 text-white text-center"
            >
              <h3 className="text-3xl font-bold mb-4">
                Ready to Empower Your Community?
              </h3>
              <p className="text-xl mb-8 text-blue-100">
                Contact Women's Lens to discuss implementation options and customize the curriculum for your organization's needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg"
                >
                  Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 text-lg"
                >
                  Download Curriculum Overview <BookOpen className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.section>

            {/* Contact Information */}
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: MapPin,
                  title: 'Regional Coverage',
                  details: ['Uganda', 'Tanzania', 'South Sudan'],
                  color: 'text-green-600'
                },
                {
                  icon: Users,
                  title: 'Target Audiences',
                  details: ['Women Journalists', 'Local Politicians', 'Community Leaders'],
                  color: 'text-blue-600'
                },
                {
                  icon: Lightbulb,
                  title: 'Key Benefits',
                  details: ['Immediate skill application', 'Cultural sensitivity', 'Sustainable impact'],
                  color: 'text-purple-600'
                }
              ].map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
                >
                  <info.icon className={`h-12 w-12 ${info.color} mx-auto mb-4`} />
                  <h4 className="font-bold text-gray-900 mb-3">{info.title}</h4>
                  <ul className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-gray-600">{detail}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.section>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-yellow-400 mr-3" />
            <h3 className="text-2xl font-bold">Women's Lens AI Academy</h3>
          </div>
          <p className="text-gray-400 mb-6">
            Empowering East African voices through cutting-edge AI education
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <span>© 2025 Women's Lens</span>
            <span>•</span>
            <span>Curriculum by Manus AI</span>
            <span>•</span>
            <span>Designed for Impact</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

