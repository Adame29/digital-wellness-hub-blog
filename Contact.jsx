import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Have questions about digital wellness? Want to share your story? 
            We'd love to hear from you and support your journey.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Whether you have questions, feedback, or want to share your digital wellness 
                journey, we're here to listen and support you.
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-700">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="story">Share My Story</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="support">Need Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 resize-vertical"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Other Ways to Connect
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Response Time
                  </h3>
                  <p className="text-muted-foreground">
                    We typically respond to messages within 24-48 hours during business days. 
                    For urgent mental health concerns, please contact the crisis resources 
                    listed on our Resources page.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    What We Can Help With
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Questions about digital wellness strategies</li>
                    <li>• Feedback on our content and resources</li>
                    <li>• Sharing your digital wellness success story</li>
                    <li>• Collaboration opportunities</li>
                    <li>• General support and encouragement</li>
                    <li>• Suggestions for new topics or resources</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Privacy & Confidentiality
                  </h3>
                  <p className="text-muted-foreground">
                    We respect your privacy and will never share your personal information 
                    without your explicit consent. All communications are kept confidential 
                    and secure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Support Reminder */}
      <section className="py-16 bg-red-50 border-l-4 border-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Phone className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-red-800 mb-4">
            Need Immediate Help?
          </h2>
          <p className="text-lg text-red-700 mb-6">
            If you're experiencing a mental health crisis or thoughts of self-harm, 
            please reach out for immediate professional help.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg border border-red-200">
              <p className="text-sm text-red-600 mb-1">Crisis Support</p>
              <p className="text-xl font-bold text-red-800">988</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-red-200">
              <p className="text-sm text-red-600 mb-1">Crisis Text Line</p>
              <p className="text-lg font-bold text-red-800">Text HOME to 741741</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-red-200">
              <p className="text-sm text-red-600 mb-1">SAMHSA Helpline</p>
              <p className="text-lg font-bold text-red-800">1-800-662-4357</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Are you mental health professionals?
              </h3>
              <p className="text-muted-foreground">
                Digital Wellness Hub provides educational content and general guidance. 
                We are not licensed mental health professionals. Our content is for 
                informational purposes only and should not replace professional medical advice.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Can you provide personal counseling or therapy?
              </h3>
              <p className="text-muted-foreground">
                We cannot provide personal counseling or therapy services. If you need 
                professional mental health support, we encourage you to contact a licensed 
                therapist or counselor in your area.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                How can I share my digital wellness story?
              </h3>
              <p className="text-muted-foreground">
                We love hearing success stories! Please use the contact form above with 
                "Share My Story" as the subject. We may feature inspiring stories on our 
                blog (with your permission and anonymized if requested).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

