
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import PostCard from '@/components/blog/PostCard';
import CategoryList from '@/components/blog/CategoryList';
import Newsletter from '@/components/blog/Newsletter';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { mockPosts, mockCategories } from '@/lib/mockData';
import { Search } from 'lucide-react';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter posts based on search query
  const filteredPosts = searchQuery
    ? mockPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : mockPosts;
    
  return (
    <Layout>
      <div className="bg-blog-light py-16 mb-8">
        <div className="blog-container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Blog</h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our latest articles, insights, and stories about technology, design, and the modern world.
          </p>
          
          <div className="max-w-lg mx-auto relative">
            <Input
              type="search"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>
      
      <div className="blog-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium mb-2">No articles found</h3>
                <p className="text-muted-foreground mb-4">Try a different search term or browse categories</p>
                <Button variant="outline" onClick={() => setSearchQuery('')}>
                  Clear Search
                </Button>
              </div>
            )}
          </div>
          
          <div className="lg:col-span-4 space-y-6">
            <CategoryList categories={mockCategories} />
            <Newsletter />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
