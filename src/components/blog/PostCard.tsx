
import { NavLink } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon } from 'lucide-react';

interface PostCardProps {
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

const PostCard = ({ post }: PostCardProps) => {
  const formattedDate = new Date(post.published_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="blog-card group h-full flex flex-col animate-fade-up">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={post.cover_image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <NavLink to={`/category/${post.category.slug}`}>
            <Badge className="bg-blog-light hover:bg-blog-light/80 text-blog-highlight">
              {post.category.name}
            </Badge>
          </NavLink>
          <div className="flex items-center text-xs text-muted-foreground">
            <CalendarIcon className="mr-1 h-3 w-3" />
            <span>{formattedDate}</span>
          </div>
        </div>
        <NavLink to={`/blog/${post.slug}`} className="flex-grow">
          <h3 className="font-bold mb-2 group-hover:text-blog-highlight transition-colors">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {post.excerpt}
          </p>
        </NavLink>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
          <div className="flex items-center">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-7 w-7 rounded-full mr-2 object-cover"
            />
            <span className="text-xs font-medium">{post.author.name}</span>
          </div>
          <span className="text-xs text-muted-foreground">
            {post.reading_time} min read
          </span>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
