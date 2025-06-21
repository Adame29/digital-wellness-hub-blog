import React from 'react';
import { Book, Smartphone, Heart, Phone, ExternalLink, Download } from 'lucide-react';

const Resources = () => {
  const books = [
    {
      title: "Digital Minimalism",
      author: "Cal Newport",
      description: "A philosophy for living better with less technology in our increasingly connected world.",
      link: "#"
    },
    {
      title: "How to Break Up with Your Phone",
      author: "Catherine Price",
      description: "A practical guide to reducing phone addiction and reclaiming your life.",
      link: "#"
    },
    {
      title: "The Tech-Wise Family",
      author: "Andy Crouch",
      description: "Strategies for creating healthy technology habits for the whole family.",
      link: "#"
    },
    {
      title: "Dopamine Nation",
      author: "Dr. Anna Lembke",
      description: "Understanding pleasure, pain, and addiction in the age of indulgence.",
      link: "#"
    }
  ];

  const apps = [
    {
      name: "Forest",
      description: "Stay focused and build healthy phone usage habits by planting virtual trees.",
      platform: "iOS & Android"
    },
    {
      name: "Moment",
      description: "Track your screen time and set daily limits to reduce phone addiction.",
      platform: "iOS & Android"
    },
    {
      name: "Freedom",
      description: "Block distracting websites and apps across all your devices.",
      platform: "iOS, Android & Desktop"
    },
    {
      name: "Headspace",
      description: "Meditation and mindfulness exercises to reduce stress and anxiety.",
      platform: "iOS & Android"
    },
    {
      name: "Calm",
      description: "Sleep stories, meditation, and relaxation techniques for better mental health.",
      platform: "iOS & Android"
    }
  ];

  const crisisResources = [
    {
      name: "National Suicide Prevention Lifeline",
      contact: "988",
      description: "24/7 crisis support for people in suicidal crisis or emotional distress.",
      type: "phone"
    },
    {
      name: "Crisis Text Line",
      contact: "Text HOME to 741741",
      description: "Free, 24/7 crisis support via text message.",
      type: "text"
    },
    {
      name: "SAMHSA National Helpline",
      contact: "1-800-662-4357",
      description: "Treatment referral and information service for mental health and substance abuse.",
      type: "phone"
    },
    {
      name: "National Alliance on Mental Illness (NAMI)",
      contact: "1-800-950-6264",
      description: "Support and information for individuals and families affected by mental illness.",
      type: "phone"
    }
  ];

  const websites = [
    {
      name: "Mental Health America",
      url: "https://www.mhanational.org",
      description: "Comprehensive mental health resources, screening tools, and support information."
    },
    {
      name: "National Institute of Mental Health",
      url: "https://www.nimh.nih.gov",
      description: "Research-based information about mental health conditions and treatments."
    },
    {
      name: "Center for Humane Technology",
      url: "https://www.humanetech.com",
      description: "Resources for understanding and addressing the negative impacts of technology."
    },
    {
      name: "Digital Wellness Institute",
      url: "https://www.digitalwellnessinstitute.com",
      description: "Research and resources for digital wellness and healthy technology use."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Digital Wellness Resources
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Curated tools, books, apps, and support resources to help you on your 
            digital wellness journey and protect your mental health.
          </p>
        </div>
      </section>

      {/* Crisis Resources - Priority Section */}
      <section className="py-20 bg-red-50 border-l-4 border-red-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Phone className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-red-800 mb-4">
              Crisis Support Resources
            </h2>
            <p className="text-lg text-red-700 max-w-3xl mx-auto">
              If you're experiencing a mental health crisis or thoughts of self-harm, 
              please reach out for immediate help. These resources are available 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {crisisResources.map((resource, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-red-200">
                <h3 className="text-xl font-semibold text-red-800 mb-2">
                  {resource.name}
                </h3>
                <p className="text-2xl font-bold text-red-600 mb-3">
                  {resource.contact}
                </p>
                <p className="text-red-700">
                  {resource.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Books */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Book className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Recommended Reading
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deepen your understanding of digital wellness and mental health with these 
              expert-recommended books.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {books.map((book, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow duration-200">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {book.title}
                </h3>
                <p className="text-primary font-medium mb-3">
                  by {book.author}
                </p>
                <p className="text-muted-foreground mb-4">
                  {book.description}
                </p>
                <a 
                  href={book.link}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200"
                >
                  Learn More
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Helpful Apps */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Helpful Apps
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Technology tools that can help you manage screen time, practice mindfulness, 
              and build healthier digital habits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apps.map((app, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow duration-200">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {app.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {app.platform}
                </p>
                <p className="text-muted-foreground">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mental Health Websites */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Mental Health Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted websites and organizations providing mental health information, 
              support, and professional resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {websites.map((website, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow duration-200">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {website.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {website.description}
                </p>
                <a 
                  href={website.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200"
                >
                  Visit Website
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Wellness Tips */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Quick Digital Wellness Tips
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple strategies you can implement today to improve your digital well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Create Phone-Free Zones
              </h3>
              <p className="text-muted-foreground">
                Designate specific areas of your home (like the bedroom or dining room) 
                as phone-free zones to encourage real-world connections and better sleep.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Practice the 20-20-20 Rule
              </h3>
              <p className="text-muted-foreground">
                Every 20 minutes, look at something 20 feet away for 20 seconds to 
                reduce eye strain and give your mind a break from screens.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Turn Off Non-Essential Notifications
              </h3>
              <p className="text-muted-foreground">
                Reduce digital interruptions by turning off notifications for social media 
                and non-urgent apps. Keep only essential notifications active.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Schedule Regular Digital Breaks
              </h3>
              <p className="text-muted-foreground">
                Set specific times each day to disconnect from all devices and engage 
                in offline activities like reading, walking, or spending time with loved ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Disclaimer:</strong> The resources listed on this page are for informational 
              purposes only. Digital Wellness Hub does not endorse specific products or services, 
              and inclusion does not constitute a recommendation. Always consult with healthcare 
              professionals for personalized advice regarding mental health concerns.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;

