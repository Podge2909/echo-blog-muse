
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface Comment {
  id: string;
  content: string;
  created_at: string;
  user: {
    id: string;
    name: string;
    avatar?: string;
  };
}

interface CommentSectionProps {
  postId: string;
  comments: Comment[];
}

const CommentSection = ({ postId, comments: initialComments }: CommentSectionProps) => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // In a real app, this would call the Supabase API to post a comment
  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const fakeComment: Comment = {
        id: Date.now().toString(),
        content: newComment,
        created_at: new Date().toISOString(),
        user: {
          id: 'guest',
          name: 'Guest User',
        },
      };
      
      setComments([fakeComment, ...comments]);
      setNewComment('');
      setIsSubmitting(false);
    }, 500);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold mb-6">Comments ({comments.length})</h3>
      
      {/* Comment form */}
      <form onSubmit={handleSubmitComment} className="mb-10">
        <Textarea
          placeholder="Share your thoughts..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="mb-3 min-h-[100px]"
        />
        <Button 
          type="submit" 
          className="blog-button-primary"
          disabled={isSubmitting || !newComment.trim()}
        >
          {isSubmitting ? 'Posting...' : 'Post Comment'}
        </Button>
      </form>
      
      {/* Comments list */}
      {comments.length > 0 ? (
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="p-4 rounded-md bg-blog-light">
              <div className="flex items-start">
                <Avatar className="h-10 w-10 mr-3">
                  {comment.user.avatar ? (
                    <AvatarImage src={comment.user.avatar} alt={comment.user.name} />
                  ) : (
                    <AvatarFallback className="bg-blog-highlight text-white">
                      {comment.user.name.charAt(0)}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-sm">{comment.user.name}</h4>
                    <span className="text-xs text-muted-foreground">
                      {formatDate(comment.created_at)}
                    </span>
                  </div>
                  <p className="text-sm">{comment.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-muted-foreground">Be the first to comment on this post!</p>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
