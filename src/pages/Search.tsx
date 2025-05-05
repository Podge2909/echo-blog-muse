
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import PostCard from '@/components/blog/PostCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { mockPosts } from '@/lib/mockData';
import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    if (initialQuery) {
      performSearch(initialQuery);
    }
  }, [initialQuery]);
  
  const performSearch = (query) => {
    // In a real app, this would be an API call to Supabase
    const filtered = mockPosts.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(query.toLowerCase())
    );
    
    setResults(filtered);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery.trim() });
      performSearch(searchQuery.trim());
    }
  };
  
  return (
    <Layout>
      <div className="blog-container py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Search Results</h1>
        
        <div className="max-w-2xl mx-auto mb-12">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <div className="relative flex-grow">
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <Button type="submit">Search</Button>
          </form>
        </div>
        
        {initialQuery && (
          <div className="mb-6">
            <p className="text-muted-foreground">
              {results.length} results for "{initialQuery}"
            </p>
          </div>
        )}
        
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          initialQuery && (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No results found</h3>
              <p className="text-muted-foreground mb-4">
                We couldn't find any posts matching "{initialQuery}"
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery('');
                  setSearchParams({});
                }}
              >
                Clear Search
              </Button>
            </div>
          )
        )}
      </div>
    </Layout>
  );
};

export default Search;
