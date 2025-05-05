
import Layout from '@/components/layout/Layout';
import FeaturedPost from '@/components/blog/FeaturedPost';
import PostCard from '@/components/blog/PostCard';
import CategoryList from '@/components/blog/CategoryList';
import Newsletter from '@/components/blog/Newsletter';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { mockPosts, mockCategories } from '@/lib/mockData';

const Index = () => {
  // Featured post is the first post from our mock data
  const featuredPost = mockPosts[0];
  // Recent posts are the next 6 posts
  const recentPosts = mockPosts.slice(1, 7);
  
  return (
    <Layout>
      {/* Hero section with enhanced gradient and animations */}
      <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 py-16 md:py-24 mb-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 0%, transparent 50%)'
          }}></div>
        </div>
        <div className="blog-container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
            <span className="inline-block bg-yellow-500/20 text-yellow-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
              AI-Powered Business Transformation
            </span>
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              AI Agents for <span className="text-gradient bg-gradient-to-r from-yellow-300 to-amber-300 bg-clip-text text-transparent">Business Growth</span>
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Discover how startups and growing businesses can leverage AI agents to automate tasks, 
              gain insights, and scale operations efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-black font-medium border-0">
                <NavLink to="/blog">Explore Strategies</NavLink>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/20">
                <NavLink to="/about">About Us</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured post section */}
      <section className="blog-container mb-16 animate-fade-up">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-serif text-3xl font-bold text-gray-800">Featured Article</h2>
        </div>
        <FeaturedPost post={featuredPost} />
      </section>
      
      {/* Recent posts section */}
      <section className="blog-container mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-serif text-3xl font-bold text-gray-800">Latest AI Business Insights</h2>
          <Button asChild variant="outline" className="border-blog-highlight text-blog-highlight hover:bg-blog-highlight/10">
            <NavLink to="/blog">View All</NavLink>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
      
      {/* Business AI categories and newsletter section */}
      <section className="blog-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h2 className="font-serif text-3xl font-bold mb-6 text-gray-800">AI Solutions by Business Need</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {mockCategories.slice(0, 4).map(category => (
                <NavLink 
                  key={category.id} 
                  to={`/category/${category.slug}`} 
                  className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow group"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blog-highlight to-blog-accent flex items-center justify-center text-white mb-4">
                    <span className="text-lg font-bold">{category.name.charAt(0)}</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-blog-highlight transition-colors">{category.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {category.description}
                  </p>
                  <span className="text-blog-highlight text-sm flex items-center">
                    {category.count} articles
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
          <div>
            <CategoryList categories={mockCategories} title="Browse All Topics" />
            <div className="mt-6">
              <Newsletter />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
