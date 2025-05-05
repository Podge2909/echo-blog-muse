
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate auth API call
    setTimeout(() => {
      toast({
        title: isLogin ? "Welcome back!" : "Account created!",
        description: isLogin 
          ? "You have successfully logged in." 
          : "Please check your email to verify your account.",
      });
      setIsLoading(false);
    }, 1000);
  };
  
  return (
    <Layout>
      <div className="blog-container py-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">{isLogin ? 'Welcome Back' : 'Join Echo'}</h1>
            <p className="text-muted-foreground mt-2">
              {isLogin 
                ? 'Log in to access your dashboard and manage your content.' 
                : 'Create an account to start writing and sharing your ideas.'}
            </p>
          </div>
          
          <div className="bg-white p-8 border border-border rounded-lg shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required={!isLogin}
                  />
                </div>
              )}
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              
              {isLogin && (
                <div className="text-right">
                  <NavLink
                    to="/forgot-password"
                    className="text-sm text-blog-highlight hover:text-blog-accent"
                  >
                    Forgot password?
                  </NavLink>
                </div>
              )}
              
              <Button 
                type="submit" 
                className="w-full bg-blog-highlight hover:bg-blog-accent text-white"
                disabled={isLoading}
              >
                {isLoading 
                  ? (isLogin ? 'Logging in...' : 'Creating account...') 
                  : (isLogin ? 'Log In' : 'Sign Up')}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  type="button"
                  className="ml-1 text-blog-highlight hover:text-blog-accent"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? 'Sign Up' : 'Log In'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
