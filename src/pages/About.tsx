
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      <div className="blog-container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Echo</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Welcome to Echo, a modern blog platform dedicated to amplifying voices and ideas that matter in today's rapidly evolving digital landscape.
            </p>
            
            <h2>Our Mission</h2>
            <p>
              At Echo, we believe in the power of thoughtful writing to inspire, educate, and connect. Our mission is to create a space where writers and readers can engage with important ideas and perspectives across technology, design, culture, and more.
            </p>
            
            <h2>Our Story</h2>
            <p>
              Echo was founded in 2023 by a group of writers, developers, and designers who saw the need for a platform that prioritizes quality content over engagement metrics. We wanted to build a space where thoughtful writing could flourish without the pressure of algorithms or clickbait.
            </p>
            
            <p>
              Today, Echo hosts hundreds of writers from diverse backgrounds, sharing their expertise and perspectives with our growing community of curious readers.
            </p>
            
            <h2>Core Values</h2>
            <ul>
              <li><strong>Quality Over Quantity</strong> - We prioritize thoughtful, well-crafted content rather than chasing volume or trends.</li>
              <li><strong>Diverse Voices</strong> - We actively seek out and amplify perspectives from writers of all backgrounds.</li>
              <li><strong>Reader-First Design</strong> - Our platform is designed to provide the best possible reading experience, free from distractions.</li>
              <li><strong>Community Focus</strong> - We foster meaningful connections between writers and readers through comments and discussions.</li>
            </ul>
            
            <h2>Our Team</h2>
            <p>
              Echo is built and maintained by a dedicated team of developers, designers, and content specialists who are passionate about creating the best possible platform for writers and readers.
            </p>
            
            <h2>Join Our Community</h2>
            <p>
              Whether you're a writer looking to share your voice or a reader seeking thoughtful content, we invite you to join the Echo community.
            </p>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Button asChild className="blog-button-primary">
              <NavLink to="/contact">Get in Touch</NavLink>
            </Button>
            <Button asChild variant="outline">
              <NavLink to="/blog">Explore Our Content</NavLink>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
