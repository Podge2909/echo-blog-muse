
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    
    setIsLoading(true);
    
    // Simulate API call to subscribe
    setTimeout(() => {
      toast({
        title: "Subscribed!",
        description: "You've been added to our newsletter.",
      });
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-blog-highlight text-white rounded-lg p-6 md:p-8">
      <h3 className="text-xl font-bold mb-2">Subscribe to our newsletter</h3>
      <p className="text-sm text-white/80 mb-6">
        Get the latest posts and updates delivered to your inbox.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-white/20 border-white/30 placeholder:text-white/60 text-white"
        />
        <Button 
          type="submit" 
          className="w-full bg-white text-blog-highlight hover:bg-white/90"
          disabled={isLoading}
        >
          {isLoading ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
    </div>
  );
};

export default Newsletter;
