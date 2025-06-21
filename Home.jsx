import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User, Calendar, Smartphone, Brain, Heart, Shield } from 'lucide-react';
import heroBanner from '../assets/images/hero_banner.png';

const Home = () => {
  const blogPosts = [
    {
      slug: 'hidden-cost-social-media',
      title: 'The Hidden Cost of Social Media: How Your Mental Health Pays the Price',
      excerpt: 'Discover the psychological mechanisms behind social media addiction and learn how constant connectivity affects your mental well-being.',
      readTime: '8 min read',
      date: 'December 20, 2024',
      category: 'Mental Health'
    },
    {
      slug: '5-signs-social-media-addiction',
      title: '5 Signs You\'re Addicted to Social Media (And What to Do About It)',
      excerpt: 'Recognize the warning signs of social media addiction and discover practical strategies to regain control over your digital habits.',
      readTime: '7 min read',
      date: 'December 18, 2024',
      category: 'Digital Wellness'
    },
    {
      slug: 'digital-detox-guide',
      title: 'Digital Detox: A Step-by-Step Guide to Reclaiming Your Life',
      excerpt: 'Learn how to implement an effective digital detox with our comprehensive guide to reducing screen time and improving mental health.',
      readTime: '10 min read',
      date: 'December 15, 2024',
      category: 'Lifestyle'
    }
  ];

  const features = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: 'Evidence-Based Content',
      description: 'All our articles are backed by scientific research and expert insights from mental health professionals.'
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: 'Compassionate Approach',
      description: 'We understand the challenges of digital wellness and provide supportive, non-judgmental guidance.'
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: 'Safe Space',
      description: 'Our platform prioritizes your privacy and mental health, creating a secure environment for learning and growth.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-background py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Reclaim Your
                  <span className="text-primary block">Mental Health</span>
                  from Social Media
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Discover practical strategies to build a healthier relationship with technology, 
                  reduce digital overwhelm, and protect your mental well-being in our hyperconnected world.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/blog/hidden-cost-social-media"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
                >
                  Start Reading
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/resources"
                  className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors duration-200"
                >
                  Explore Resources
                </Link>
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>10,000+ readers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4" />
                  <span>Evidence-based</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>Safe & supportive</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={heroBanner} 
                alt="Digital wellness concept showing hands holding a phone with peaceful nature imagery"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Digital Wellness Hub?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're committed to providing you with the tools, knowledge, and support you need 
              to thrive in the digital age while protecting your mental health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-card p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow duration-200">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our latest insights on digital wellness, social media psychology, 
              and practical strategies for mental health in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-card rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow duration-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Digital Life?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of others who have taken control of their relationship with technology 
            and improved their mental well-being.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/blog/digital-detox-guide"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors duration-200"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/resources"
              className="inline-flex items-center justify-center px-8 py-4 border border-primary-foreground/20 text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors duration-200"
            >
              Browse Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

