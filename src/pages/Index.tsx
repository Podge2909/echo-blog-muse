
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
      {/* Hero section */}
      <section className="bg-blog-light py-12 md:py-20 mb-16">
        <div className="blog-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Explore Ideas That <span className="text-blog-highlight">Matter</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Thoughtful writing on technology, design, and the modern world. Join our community of curious minds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="blog-button-primary">
                <NavLink to="/blog">Explore Articles</NavLink>
              </Button>
              <Button asChild variant="outline">
                <NavLink to="/about">About Us</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured post section */}
      <section className="blog-container mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-serif text-3xl font-bold">Featured Post</h2>
        </div>
        <FeaturedPost post={featuredPost} />
      </section>
      
      {/* Recent posts section */}
      <section className="blog-container mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-serif text-3xl font-bold">Recent Articles</h2>
          <Button asChild variant="outline">
            <NavLink to="/blog">View All</NavLink>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
      
      {/* Categories and newsletter section */}
      <section className="blog-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h2 className="font-serif text-3xl font-bold mb-6">Discover by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {mockCategories.slice(0, 4).map(category => (
                <NavLink 
                  key={category.id} 
                  to={`/category/${category.slug}`} 
                  className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-xl mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {category.description}
                  </p>
                  <span className="text-blog-highlight text-sm">
                    {category.count} articles
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
          <div>
            <CategoryList categories={mockCategories} title="Browse All Categories" />
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
