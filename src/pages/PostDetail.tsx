
import { useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import CommentSection from '@/components/blog/CommentSection';
import CategoryList from '@/components/blog/CategoryList';
import Newsletter from '@/components/blog/Newsletter';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon } from 'lucide-react';
import { mockPosts, mockCategories, mockComments } from '@/lib/mockData';
import NotFound from './NotFound';

const PostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the post with the matching slug
  const post = mockPosts.find(p => p.slug === slug);
  
  // Scroll to top when post changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  if (!post) {
    return <NotFound />;
  }
  
  const formattedDate = new Date(post.published_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  // Find related posts (same category, excluding current post)
  const relatedPosts = mockPosts
    .filter(p => p.category.slug === post.category.slug && p.id !== post.id)
    .slice(0, 2);
  
  return (
    <Layout>
      <div className="blog-container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            {/* Article header */}
            <div className="mb-8">
              <NavLink to={`/category/${post.category.slug}`}>
                <Badge className="bg-blog-light hover:bg-blog-light/80 text-blog-highlight mb-4">
                  {post.category.name}
                </Badge>
              </NavLink>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>
              
              <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-4 mb-6">
                <div className="flex items-center">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-8 w-8 rounded-full mr-2 object-cover"
                  />
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="mr-1 h-4 w-4" />
                  <span>{formattedDate}</span>
                </div>
                <div>{post.reading_time} min read</div>
              </div>
            </div>
            
            {/* Featured image */}
            <div className="mb-8">
              <img
                src={post.cover_image}
                alt={post.title}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            
            {/* Article content */}
            <div className="prose prose-lg max-w-none mb-12">
              {post.content.map((section, index) => (
                <div key={index}>
                  {section.type === 'paragraph' && <p>{section.content}</p>}
                  {section.type === 'heading' && <h2>{section.content}</h2>}
                  {section.type === 'image' && (
                    <figure>
                      <img 
                        src={section.url} 
                        alt={section.caption || post.title}
                        className="rounded-lg" 
                      />
                      {section.caption && (
                        <figcaption className="text-center text-muted-foreground text-sm mt-2">
                          {section.caption}
                        </figcaption>
                      )}
                    </figure>
                  )}
                  {section.type === 'quote' && (
                    <blockquote>
                      <p>{section.content}</p>
                      {section.author && <cite>— {section.author}</cite>}
                    </blockquote>
                  )}
                </div>
              ))}
            </div>
            
            {/* Related articles */}
            {relatedPosts.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedPosts.map(relatedPost => (
                    <NavLink 
                      key={relatedPost.id} 
                      to={`/blog/${relatedPost.slug}`}
                      className="blog-card flex p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="w-24 h-24 mr-4 shrink-0">
                        <img 
                          src={relatedPost.cover_image} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover rounded-md" 
                        />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1 line-clamp-2">{relatedPost.title}</h4>
                        <span className="text-xs text-muted-foreground">
                          {new Date(relatedPost.published_at).toLocaleDateString()}
                        </span>
                      </div>
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
            
            {/* Comments section */}
            <CommentSection postId={post.id} comments={mockComments} />
          </div>
          
          <div className="lg:col-span-4 space-y-6">
            {/* Author info */}
            <div className="bg-white border border-border rounded-lg p-6 text-center">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-20 w-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold mb-2">{post.author.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {post.author.bio || "Writer and content creator specializing in technology and modern culture."}
              </p>
              <NavLink 
                to={`/author/${post.author.id}`}
                className="text-sm text-blog-highlight hover:text-blog-accent"
              >
                View all posts
              </NavLink>
            </div>
            
            <CategoryList categories={mockCategories} />
            <Newsletter />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostDetail;
