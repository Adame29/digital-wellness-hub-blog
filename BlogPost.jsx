import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Share2 } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();

  // Blog posts data
  const blogPosts = {
    'hidden-cost-social-media': {
      title: 'The Hidden Cost of Social Media: How Your Mental Health Pays the Price',
      content: `
        <p>In the glow of our smartphone screens, we scroll through endless feeds of perfectly curated lives, witty comments, and breaking news. Social media has become as natural as breathing for millions of Americans, with the average person spending over 2.5 hours daily on various platforms. But beneath the surface of likes, shares, and comments lies a hidden cost that many of us are only beginning to understand: the profound impact on our mental health.</p>

        <h2>The Invisible Epidemic</h2>
        <p>Sarah, a 28-year-old marketing professional from Denver, thought she had her life together. She had a good job, a loving relationship, and what appeared to be a thriving social life based on her Instagram posts. Yet, she found herself feeling increasingly anxious, inadequate, and disconnected from real happiness. It wasn't until she took a week-long break from social media that she realized the correlation between her online habits and her mental state.</p>

        <p>Sarah's story isn't unique. Research from the American Psychological Association shows that heavy social media use is linked to increased rates of anxiety, depression, and feelings of social isolation among adults aged 18-35. The very platforms designed to connect us are, paradoxically, leaving many feeling more alone than ever.</p>

        <h2>Understanding the Psychological Mechanisms</h2>
        <p>To comprehend how social media affects our mental health, we need to look at what happens in our brains when we engage with these platforms. Every notification, like, or comment triggers a small release of dopamine – the same neurotransmitter involved in addiction. This creates a cycle where we constantly seek the next digital "hit," leading to compulsive checking behaviors that can interfere with our daily lives.</p>

        <p>Dr. Anna Lembke, author of "Dopamine Nation," explains that our brains are not equipped to handle the constant stimulation that social media provides. "We're living in an unprecedented time of dopamine abundance," she notes. "Our brains, which evolved to seek pleasure and avoid pain, are now overwhelmed by the constant availability of digital rewards."</p>

        <p>The comparison trap is another significant factor. Social media presents us with highlight reels of other people's lives, leading to what psychologists call "compare and despair." When we constantly measure our behind-the-scenes reality against others' carefully curated presentations, feelings of inadequacy and low self-worth naturally follow.</p>

        <h2>The Anxiety Connection</h2>
        <p>One of the most documented effects of excessive social media use is increased anxiety. The constant stream of information, the pressure to maintain an online persona, and the fear of missing out (FOMO) all contribute to heightened stress levels. A study published in the Journal of Social and Clinical Psychology found that limiting social media use to 30 minutes per day for just one week led to reduced loneliness and depression.</p>

        <p>The anxiety often manifests in several ways:</p>
        <ul>
          <li><strong>Performance Anxiety:</strong> The pressure to present a perfect life online can create significant stress. Users report feeling anxious about posting content, worrying about how many likes or comments they'll receive, and constantly monitoring their online image.</li>
          <li><strong>Information Overload:</strong> The endless stream of news, opinions, and updates can overwhelm our cognitive processing abilities, leading to decision fatigue and increased stress hormones.</li>
          <li><strong>Sleep Disruption:</strong> The blue light from screens interferes with our natural circadian rhythms, while the stimulating content keeps our minds active when they should be winding down for rest.</li>
        </ul>

        <h2>The Path Forward</h2>
        <p>Recognizing the hidden costs of social media doesn't mean we need to abandon these platforms entirely. Instead, it means developing a more conscious, intentional relationship with technology. This involves understanding how these platforms affect us individually and taking steps to protect our mental health while still enjoying the benefits of digital connection.</p>

        <p>The first step is awareness. By understanding the psychological mechanisms at play and recognizing how social media affects your own mental state, you can begin to make more informed choices about your digital consumption. This awareness is the foundation for developing healthier habits and creating boundaries that serve your well-being rather than undermining it.</p>

        <p>Your mental health is worth more than any number of likes, shares, or followers. It's time to reclaim control over your digital life and prioritize your psychological well-being in an increasingly connected world.</p>
      `,
      readTime: '8 min read',
      date: 'December 20, 2024',
      author: 'Digital Wellness Hub',
      category: 'Mental Health'
    },
    '5-signs-social-media-addiction': {
      title: '5 Signs You\'re Addicted to Social Media (And What to Do About It)',
      content: `
        <p>The notification sound pings, and before you know it, you're reaching for your phone. What started as a quick check turns into an hour-long scroll through feeds, stories, and comments. Sound familiar? You're not alone. Social media addiction is a growing concern that affects millions of people worldwide, yet many don't recognize the signs until the habit has significantly impacted their daily lives.</p>

        <h2>What Is Social Media Addiction?</h2>
        <p>Social media addiction, while not officially recognized in the Diagnostic and Statistical Manual of Mental Disorders (DSM-5), shares many characteristics with other behavioral addictions. It involves the compulsive use of social media platforms despite negative consequences to one's personal, social, or professional life.</p>

        <h2>Sign #1: You Check Social Media First Thing in the Morning and Last Thing at Night</h2>
        <p>One of the most telling signs of social media addiction is when checking your phone becomes the first and last thing you do each day. If you find yourself reaching for your phone before your feet hit the floor in the morning, or scrolling through feeds when you should be winding down for sleep, this pattern indicates that social media has become deeply integrated into your daily routine.</p>

        <p><strong>What to do about it:</strong> Create phone-free zones in your bedroom. Invest in a traditional alarm clock so you don't need your phone by your bedside. Establish a "digital sunset" routine where you put away all devices at least one hour before bedtime.</p>

        <h2>Sign #2: You Experience Anxiety When You Can't Access Social Media</h2>
        <p>Do you feel anxious, restless, or agitated when you can't check your social media accounts? This could happen when your phone battery dies, you're in an area with poor reception, or you're in a situation where phone use isn't appropriate. If the inability to access social media causes significant distress, this is a strong indicator of dependency.</p>

        <p><strong>What to do about it:</strong> Practice gradual exposure by intentionally leaving your phone in another room for increasing periods. Start with 30 minutes and gradually work up to several hours. During these times, engage in activities that require your full attention.</p>

        <h2>Sign #3: Your Social Media Use Interferes with Real-Life Activities and Relationships</h2>
        <p>When social media use begins to interfere with work, school, relationships, or other important activities, it's a clear sign that the behavior has become problematic. This might manifest as checking social media during meetings, scrolling through feeds instead of engaging in conversations with family or friends, or staying up late online and feeling tired the next day.</p>

        <p><strong>What to do about it:</strong> Implement specific boundaries around social media use. Designate certain times and places as phone-free zones, such as during meals, family time, or work hours.</p>

        <h2>Sign #4: You Use Social Media as Your Primary Coping Mechanism</h2>
        <p>If you automatically reach for social media when you're feeling stressed, sad, bored, or anxious, this indicates that you're using these platforms as a coping mechanism. While occasional distraction isn't necessarily harmful, relying on social media as your primary way to deal with difficult emotions can prevent you from developing healthier coping strategies.</p>

        <p><strong>What to do about it:</strong> Develop a toolkit of alternative coping strategies. When you feel the urge to check social media in response to negative emotions, try deep breathing exercises, going for a walk, calling a friend, journaling, or engaging in a hobby you enjoy.</p>

        <h2>Sign #5: You've Tried to Cut Back But Can't Stick to Your Limits</h2>
        <p>Perhaps you've noticed that your social media use has become excessive and you've tried to reduce it. Maybe you've deleted apps from your phone, only to reinstall them within days. Or you've set time limits that you consistently ignore or override. The inability to stick to self-imposed limits is a hallmark of addictive behavior.</p>

        <p><strong>What to do about it:</strong> Start with very small, achievable goals rather than dramatic changes. Instead of trying to eliminate social media entirely, aim to reduce your usage by 15 minutes per day for a week. Use built-in screen time controls on your devices to track your usage and set realistic limits.</p>

        <h2>Moving Forward</h2>
        <p>Recognizing these signs is the first step toward developing a healthier relationship with social media. The goal isn't necessarily to eliminate these platforms from your life entirely, but to use them in a way that enhances rather than detracts from your well-being.</p>

        <p>Remember that social media companies have invested billions of dollars in making their platforms as engaging as possible. You're not weak or lacking willpower if you struggle with excessive use – you're responding normally to systems designed to capture and hold your attention.</p>
      `,
      readTime: '7 min read',
      date: 'December 18, 2024',
      author: 'Digital Wellness Hub',
      category: 'Digital Wellness'
    },
    'digital-detox-guide': {
      title: 'Digital Detox: A Step-by-Step Guide to Reclaiming Your Life',
      content: `
        <p>The average American checks their phone 96 times per day – that's once every 10 minutes during waking hours. If this statistic makes you uncomfortable, you're not alone. Millions of people are recognizing that their relationship with technology has become unhealthy and are seeking ways to regain control. Enter the digital detox: a intentional period of time when you step away from digital devices to focus on real-world activities and connections.</p>

        <h2>Understanding the Need for Digital Detox</h2>
        <p>Before diving into the how-to, it's important to understand why digital detoxes have become necessary in our modern world. Our brains evolved to handle a much simpler information environment than what we face today. The constant stream of notifications, updates, and digital stimulation can overwhelm our cognitive processing abilities and trigger chronic stress responses.</p>

        <p>Research from the University of California, Irvine, found that it takes an average of 23 minutes and 15 seconds to fully refocus after a digital interruption. With the average knowledge worker checking email every 6 minutes, we're living in a state of continuous partial attention that prevents deep focus and meaningful engagement with our tasks and relationships.</p>

        <h2>Types of Digital Detox</h2>
        <p>Not all digital detoxes are created equal. Depending on your goals, lifestyle, and level of digital dependency, different approaches may work better for you:</p>

        <ul>
          <li><strong>Micro-Detoxes:</strong> Short periods of disconnection, such as phone-free meals, device-free mornings, or technology-free hours before bed. These are perfect for beginners or those who can't commit to longer periods offline.</li>
          <li><strong>Daily Digital Sabbaths:</strong> Setting aside specific days each week (often weekends) to disconnect from non-essential technology. This approach allows for regular reset periods while maintaining connectivity for work and emergencies.</li>
          <li><strong>Extended Detoxes:</strong> Longer periods of disconnection, ranging from a few days to several weeks. These intensive detoxes can provide deeper insights and more significant behavioral changes but require more planning and commitment.</li>
          <li><strong>Selective Detoxes:</strong> Choosing to disconnect from specific platforms or types of technology while maintaining others. For example, you might delete social media apps while keeping communication tools for work and family.</li>
        </ul>

        <h2>Phase 1: Preparation (Days 1-3)</h2>
        <p>Success in a digital detox starts with proper preparation. Jumping into a detox without planning often leads to failure and frustration.</p>

        <p><strong>Assess Your Current Usage:</strong> Before you can change your digital habits, you need to understand them. Use your phone's built-in screen time features or apps like RescueTime to track how much time you spend on different platforms and activities.</p>

        <p><strong>Set Clear Intentions:</strong> Why do you want to do a digital detox? Are you hoping to reduce anxiety, improve sleep, strengthen relationships, or increase productivity? Write down your specific goals and refer back to them when motivation wanes.</p>

        <p><strong>Choose Your Detox Type and Duration:</strong> Based on your goals and lifestyle, decide what type of detox makes sense for you. If you're new to digital detoxing, start small with micro-detoxes or a single day offline.</p>

        <h2>Phase 2: Implementation (The Detox Period)</h2>
        <p><strong>Create Physical Barriers:</strong> Make it harder to access your devices impulsively. Put your phone in another room, log out of social media accounts, or even give your devices to a trusted friend or family member.</p>

        <p><strong>Establish New Routines:</strong> Replace your digital habits with healthier alternatives. If you normally check your phone first thing in the morning, try meditation, journaling, or stretching instead.</p>

        <p><strong>Practice Mindfulness:</strong> Use your detox period to practice being present. Notice when you have urges to check your phone or go online. Instead of judging these urges, simply observe them and let them pass.</p>

        <h2>Phase 3: Managing Challenges</h2>
        <p><strong>Dealing with FOMO:</strong> Fear of missing out is one of the biggest challenges during a digital detox. Remember that most of what happens online isn't truly urgent or important.</p>

        <p><strong>Handling Withdrawal Symptoms:</strong> It's normal to experience some discomfort when reducing digital stimulation. You might feel anxious, restless, or bored. These feelings are temporary and will pass as your brain adjusts.</p>

        <h2>Phase 4: Reintegration (Post-Detox)</h2>
        <p><strong>Reflect on Your Experience:</strong> After your detox period, take time to reflect on what you learned. How did you feel during the detox? What activities did you enjoy most?</p>

        <p><strong>Identify What You Want to Change:</strong> Based on your detox experience, decide what changes you want to make to your regular digital habits.</p>

        <p><strong>Reintroduce Technology Mindfully:</strong> When you return to using digital devices, do so intentionally. Before picking up your phone or opening a social media app, pause and ask yourself why you're doing it.</p>

        <h2>Creating Sustainable Digital Habits</h2>
        <p>The goal of a digital detox isn't to live without technology forever, but to develop a more intentional, balanced relationship with it. Regular mini-detoxes, mindful technology use, and prioritizing real-world activities can help you maintain the benefits of your detox long-term.</p>

        <p>Remember that developing a healthier relationship with technology is a process, not a destination. Be patient with yourself, celebrate small victories, and don't be afraid to adjust your approach as you learn what works best for you.</p>
      `,
      readTime: '10 min read',
      date: 'December 15, 2024',
      author: 'Digital Wellness Hub',
      category: 'Lifestyle'
    }
  };

  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/"
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-muted/30 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/"
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </div>
              <button className="flex items-center hover:text-primary transition-colors duration-200">
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Disclaimer */}
          <div className="mt-12 p-6 bg-muted/50 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground">
              <strong>Disclaimer:</strong> This article is for informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. If you're struggling with mental health issues or addiction, please consider reaching out to a mental health professional.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;

