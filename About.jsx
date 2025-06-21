import React from 'react';
import { Brain, Heart, Target, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About Digital Wellness Hub
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're dedicated to helping people build healthier relationships with technology 
            and protect their mental well-being in our hyperconnected world.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                In an age where social media and digital technology dominate our daily lives, 
                we believe everyone deserves to understand how these tools affect their mental health 
                and well-being. Our mission is to provide evidence-based, practical guidance that 
                empowers people to take control of their digital habits.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're not anti-technology. Instead, we advocate for mindful, intentional use of 
                digital tools that enhance rather than detract from our lives. Through research-backed 
                articles, practical strategies, and supportive resources, we help individuals navigate 
                the complex relationship between technology and mental health.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                <Brain className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Evidence-Based</h3>
                <p className="text-sm text-muted-foreground">
                  All content backed by scientific research and expert insights
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                <Heart className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Compassionate</h3>
                <p className="text-sm text-muted-foreground">
                  Non-judgmental support for your digital wellness journey
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                <Target className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Practical</h3>
                <p className="text-sm text-muted-foreground">
                  Actionable strategies you can implement immediately
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                <Users className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Community</h3>
                <p className="text-sm text-muted-foreground">
                  Building a supportive community of digital wellness advocates
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
            Why We Started This Journey
          </h2>
          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground">
            <p>
              Digital Wellness Hub was born from a simple observation: despite being more connected 
              than ever before, many people feel increasingly isolated, anxious, and overwhelmed. 
              The very technologies designed to bring us together seemed to be pulling us apart.
            </p>
            <p>
              As we researched the growing body of evidence linking excessive social media use to 
              mental health challenges, we realized there was a gap between academic research and 
              practical, accessible guidance for everyday people. Most resources were either too 
              technical for general audiences or too simplistic to create lasting change.
            </p>
            <p>
              We founded Digital Wellness Hub to bridge this gap. Our goal is to translate complex 
              psychological research into practical strategies that anyone can understand and implement. 
              We believe that with the right knowledge and tools, everyone can develop a healthier, 
              more intentional relationship with technology.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Scientific Integrity</h3>
              <p className="text-muted-foreground">
                We base all our recommendations on peer-reviewed research and evidence-based practices, 
                ensuring our content is accurate and trustworthy.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Empathy & Understanding</h3>
              <p className="text-muted-foreground">
                We recognize that changing digital habits is challenging and approach every topic 
                with compassion and understanding.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Practical Application</h3>
              <p className="text-muted-foreground">
                Every piece of content includes actionable steps and practical strategies that 
                readers can implement in their daily lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Important Disclaimer</h2>
            <div className="prose prose-base max-w-none prose-headings:text-foreground prose-p:text-muted-foreground">
              <p>
                Digital Wellness Hub provides general information and educational content about 
                digital wellness and mental health. Our content is not intended as a substitute 
                for professional medical advice, diagnosis, or treatment.
              </p>
              <p>
                If you are experiencing mental health challenges, thoughts of self-harm, or any 
                other serious psychological distress, please seek help from qualified mental health 
                professionals immediately.
              </p>
              <p>
                <strong>Crisis Resources:</strong>
              </p>
              <ul>
                <li>National Suicide Prevention Lifeline: 988</li>
                <li>Crisis Text Line: Text HOME to 741741</li>
                <li>SAMHSA National Helpline: 1-800-662-4357</li>
              </ul>
              <p>
                Always consult with healthcare providers regarding any medical concerns or before 
                making significant changes to your mental health care routine.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

