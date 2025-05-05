
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon } from 'lucide-react';

interface FeaturedPostProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    slug: string;
    cover_image: string;
    published_at: string;
    author: {
      name: string;
      avatar: string;
    };
    category: {
      name: string;
      slug: string;
    };
    reading_time: number;
  };
}

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  const formattedDate = new Date(post.published_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="blog-card group animate-fade-up">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative h-64 md:h-full overflow-hidden">
          <img
            src={post.cover_image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <div>
            <div className="flex items-center justify-between mb-4">
              <NavLink to={`/category/${post.category.slug}`}>
                <Badge className="bg-blog-light hover:bg-blog-light/80 text-blog-highlight">
                  {post.category.name}
                </Badge>
              </NavLink>
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarIcon className="mr-1 h-3 w-3" />
                <span>{formattedDate}</span>
              </div>
            </div>
            <NavLink to={`/blog/${post.slug}`}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-blog-highlight transition-colors">
                {post.title}
              </h2>
            </NavLink>
            <p className="text-muted-foreground mb-6 line-clamp-3">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-8 w-8 rounded-full mr-2 object-cover"
                />
                <span className="text-sm font-medium">{post.author.name}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                {post.reading_time} min read
              </span>
            </div>
          </div>
          <div className="mt-6">
            <Button asChild className="blog-button-primary">
              <NavLink to={`/blog/${post.slug}`}>Read Article</NavLink>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
