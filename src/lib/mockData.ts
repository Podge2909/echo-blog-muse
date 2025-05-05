
// Mock data for blog posts
export const mockPosts = [
  {
    id: '1',
    title: 'The Future of Web Development: What to Expect in 2025',
    excerpt: 'Explore upcoming trends and technologies that will shape web development in the coming years, from AI integration to new frameworks.',
    slug: 'future-web-development-2025',
    cover_image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&h=675',
    published_at: '2025-04-15T08:00:00Z',
    author: {
      id: 'author1',
      name: 'Alex Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: 'Senior Developer and Tech Writer with 10+ years of experience in web technologies.'
    },
    category: {
      id: 'cat1',
      name: 'Technology',
      slug: 'technology'
    },
    reading_time: 8,
    content: [
      {
        type: 'paragraph',
        content: 'Web development continues to evolve at a breakneck pace. As we approach 2025, several emerging technologies and methodologies are poised to redefine how we build for the web.'
      },
      {
        type: 'heading',
        content: 'AI-Powered Development Tools'
      },
      {
        type: 'paragraph',
        content: 'Artificial intelligence is not just changing how we interact with applications but also how we build them. New AI-powered tools can generate code, detect bugs before they happen, and even suggest architecture improvements based on your project requirements.'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&h=600',
        caption: 'AI tools are revolutionizing development workflows'
      },
      {
        type: 'paragraph',
        content: 'These tools don\'t replace developers but instead augment their capabilities, allowing them to focus on the creative and strategic aspects of web development rather than repetitive tasks.'
      },
      {
        type: 'heading',
        content: 'The Rise of Edge Computing'
      },
      {
        type: 'paragraph',
        content: 'With users expecting ever-faster experiences, edge computing has become increasingly important. By processing data closer to where it\'s needed, edge functions reduce latency and improve user experiences globally.'
      },
      {
        type: 'quote',
        content: 'The best user experience is the one the user doesn\'t notice. It just works.',
        author: 'Steve Jobs'
      },
      {
        type: 'paragraph',
        content: 'Major cloud providers are expanding their edge networks, and new frameworks are making it easier than ever to deploy code to the edge without managing complex infrastructure.'
      },
      {
        type: 'heading',
        content: 'WebAssembly Goes Mainstream'
      },
      {
        type: 'paragraph',
        content: 'WebAssembly (Wasm) is finally having its breakthrough moment. As browsers improve their Wasm support and the ecosystem matures, we\'re seeing complex applications—from video editors to 3D games—running natively in the browser at near-native speed.'
      },
      {
        type: 'paragraph',
        content: 'This opens up new possibilities for web applications that previously required native installations, further blurring the line between web and desktop experiences.'
      },
      {
        type: 'paragraph',
        content: 'As we move forward, the developers who stay ahead will be those who embrace these changes, continuously learning and adapting their skillsets to the evolving landscape of web development.'
      }
    ]
  },
  {
    id: '2',
    title: 'Designing for Accessibility: Beyond the Basics',
    excerpt: 'Learn advanced techniques for creating truly inclusive web experiences that go beyond compliance checkboxes.',
    slug: 'designing-accessibility-beyond-basics',
    cover_image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&h=675',
    published_at: '2025-04-10T10:30:00Z',
    author: {
      id: 'author2',
      name: 'Jamie Smith',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'UX Designer specializing in accessible interfaces and inclusive design systems.'
    },
    category: {
      id: 'cat2',
      name: 'Design',
      slug: 'design'
    },
    reading_time: 6,
    content: [
      {
        type: 'paragraph',
        content: "When we talk about web accessibility, many developers and designers stop at meeting WCAG guidelines. But true accessibility goes beyond checkboxes and compliance—it's about creating genuinely inclusive experiences."
      },
      {
        type: 'heading',
        content: 'Understanding Different Types of Disabilities'
      },
      {
        type: 'paragraph',
        content: 'To design truly accessible interfaces, we need to understand the wide spectrum of disabilities users may have. These include visual, auditory, motor, cognitive, and neurological differences, each requiring different design considerations.'
      },
      {
        type: 'paragraph',
        content: 'For example, users with ADHD might struggle with cluttered interfaces, while someone with dyslexia might need special consideration for typography and text presentation.'
      },
      {
        type: 'heading',
        content: 'Testing with Real Users'
      },
      {
        type: 'paragraph',
        content: "Automated accessibility checkers are useful, but they can't replace testing with actual users who have disabilities. Organizations should include people with diverse abilities in their user research and testing processes."
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1530811761207-8d9d22f0a141?auto=format&fit=crop&w=1000&h=600',
        caption: 'User testing sessions provide invaluable insights for accessibility improvements'
      },
      {
        type: 'quote',
        content: "Accessibility isn't about checking boxes. It's about empathy and understanding the diverse ways people interact with technology.",
        author: 'Jamie Smith'
      },
      {
        type: 'paragraph',
        content: "By involving users with disabilities throughout the design process, you'll discover issues no automated tool would catch and build solutions that actually solve real problems."
      },
      {
        type: 'heading',
        content: 'Designing for Cognitive Accessibility'
      },
      {
        type: 'paragraph',
        content: 'Cognitive accessibility is often overlooked but affects a large number of users. Clear language, consistent navigation, thoughtful use of animation, and reducing cognitive load are all essential.'
      },
      {
        type: 'paragraph',
        content: 'As web professionals, we have the responsibility to ensure our creations are usable by everyone. By going beyond the basics of accessibility compliance, we create better experiences not just for users with disabilities, but for all users.'
      }
    ]
  },
  {
    id: '3',
    title: 'Building Resilient Microservices: Lessons from the Field',
    excerpt: 'Practical insights from building and maintaining microservice architectures at scale, including common pitfalls and solutions.',
    slug: 'resilient-microservices-lessons',
    cover_image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=675',
    published_at: '2025-04-05T14:20:00Z',
    author: {
      id: 'author3',
      name: 'Marcus Chen',
      avatar: 'https://randomuser.me/api/portraits/men/15.jpg',
      bio: 'Principal Software Architect specializing in distributed systems and cloud infrastructure.'
    },
    category: {
      id: 'cat3',
      name: 'Backend',
      slug: 'backend'
    },
    reading_time: 12,
    content: [
      {
        type: 'paragraph',
        content: 'Microservices have become the dominant architectural pattern for building scalable, maintainable applications. But as many organizations have discovered, they also introduce significant complexity and operational challenges.'
      },
      {
        type: 'heading',
        content: 'The Promise vs. Reality'
      },
      {
        type: 'paragraph',
        content: 'While microservices offer benefits like independent deployment, technological diversity, and organizational alignment, they also come with distributed system challenges: network latency, message serialization, and more complex failure modes.'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&h=600',
        caption: 'The growing complexity of distributed systems architecture'
      },
      {
        type: 'paragraph',
        content: "After working with dozens of companies transitioning to microservices, I've observed that success depends less on the technology choices and more on organizational practices and design principles."
      },
      {
        type: 'heading',
        content: 'Designing for Failure'
      },
      {
        type: 'paragraph',
        content: 'In a distributed system, failures are inevitable. The key is designing services that degrade gracefully when their dependencies fail. This means implementing patterns like circuit breakers, timeouts, and fallback mechanisms.'
      },
      {
        type: 'paragraph',
        content: 'For example, if the product recommendation service is down, your e-commerce site should still display the product page—just without personalized recommendations.'
      },
      {
        type: 'quote',
        content: 'Hope is not a strategy. In distributed systems, we must expect and design for failure at every level.',
        author: 'Werner Vogels, CTO of Amazon'
      },
      {
        type: 'heading',
        content: 'Observability: Beyond Basic Monitoring'
      },
      {
        type: 'paragraph',
        content: "Traditional monitoring isn't sufficient for microservices. Teams need comprehensive observability through logs, metrics, and traces to understand system behavior and quickly diagnose issues."
      },
      {
        type: 'paragraph',
        content: 'Implementing distributed tracing across service boundaries has been one of the most valuable investments for many organizations, providing visibility into request flows and identifying performance bottlenecks.'
      },
      {
        type: 'paragraph',
        content: 'Building resilient microservices requires a combination of technical practices and organizational adaptations. The most successful implementations come from teams that embrace complexity rather than trying to hide it, and that build both their systems and their teams for resilience.'
      }
    ]
  },
  {
    id: '4',
    title: 'The Underappreciated Art of Technical Documentation',
    excerpt: 'Why documentation is crucial for project success and how to create documentation developers actually want to read.',
    slug: 'art-of-technical-documentation',
    cover_image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&h=675',
    published_at: '2025-03-28T09:15:00Z',
    author: {
      id: 'author4',
      name: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      bio: 'Technical Writer and Developer Advocate with a passion for making complex technologies accessible.'
    },
    category: {
      id: 'cat4',
      name: 'Development',
      slug: 'development'
    },
    reading_time: 7,
    content: [
      {
        type: 'paragraph',
        content: "Good documentation is often treated as an afterthought in software development, but it's one of the most valuable investments a team can make—both for internal efficiency and external adoption."
      },
      {
        type: 'heading',
        content: 'Why Documentation Matters'
      },
      {
        type: 'paragraph',
        content: 'Clear, comprehensive documentation reduces onboarding time for new team members, prevents knowledge siloing, reduces support burden, and makes your software more accessible to users and potential contributors.'
      },
      {
        type: 'paragraph',
        content: 'Yet despite these benefits, documentation is frequently neglected because it\'s seen as separate from "real work" of coding. This mindset costs organizations significantly in the long run.'
      },
      {
        type: 'heading',
        content: 'Writing Documentation People Actually Read'
      },
      {
        type: 'paragraph',
        content: "The secret to effective documentation isn't just writing it—it's writing it in a way that people want to read and can easily understand."
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1000&h=600',
        caption: 'Well-organized documentation significantly improves developer experience'
      },
      {
        type: 'paragraph',
        content: 'The best documentation combines clear writing, thoughtful organization, relevant examples, and visual aids like diagrams. It anticipates questions and provides answers before users even need to ask.'
      },
      {
        type: 'quote',
        content: 'Documentation is like a love letter you write to your future self.',
        author: 'Damian Conway'
      },
      {
        type: 'heading',
        content: 'Documentation as Living Artifact'
      },
      {
        type: 'paragraph',
        content: "Too often, documentation becomes outdated because it's treated as a one-time task rather than an ongoing responsibility. Effective teams build documentation maintenance into their workflows, updating docs with every code change."
      },
      {
        type: 'paragraph',
        content: 'Modern documentation tools and approaches—like docs-as-code, automated testing of code examples, and integrating documentation into CI/CD pipelines—help keep documentation accurate and up-to-date.'
      },
      {
        type: 'paragraph',
        content: "By elevating the importance of documentation within your organization and treating it as a first-class citizen alongside your code, you'll create a more maintainable codebase, a more efficient team, and ultimately, a better product for your users."
      }
    ]
  },
  {
    id: '5',
    title: 'Sustainable Web Design: Reducing Digital Carbon Footprints',
    excerpt: 'How web designers and developers can build beautiful, functional sites while minimizing environmental impact.',
    slug: 'sustainable-web-design-carbon-footprint',
    cover_image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=675',
    published_at: '2025-03-20T11:45:00Z',
    author: {
      id: 'author2',
      name: 'Jamie Smith',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'UX Designer specializing in accessible interfaces and inclusive design systems.'
    },
    category: {
      id: 'cat2',
      name: 'Design',
      slug: 'design'
    },
    reading_time: 9,
    content: [
      {
        type: 'paragraph',
        content: "The internet consumes a massive amount of energy. From data centers to the devices we use to access the web, our digital activities have a significant environmental impact—an aspect of design that's often overlooked."
      },
      {
        type: 'heading',
        content: 'Understanding Digital Carbon Footprints'
      },
      {
        type: 'paragraph',
        content: 'Every website has an environmental cost. When a user visits a web page, data must be transferred from servers to their device, consuming electricity at every step. The more data transferred, the more energy used, and the larger the carbon footprint.'
      },
      {
        type: 'paragraph',
        content: 'Research suggests that the internet produces about 3.7% of global carbon emissions—similar to the airline industry—and this percentage is growing as more of the world comes online.'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=1000&h=600',
        caption: 'Digital sustainability is becoming increasingly important as internet usage grows'
      },
      {
        type: 'heading',
        content: 'Principles of Sustainable Web Design'
      },
      {
        type: 'paragraph',
        content: "Sustainable web design doesn't mean sacrificing aesthetics or functionality. Instead, it's about making conscientious choices that reduce unnecessary resource consumption while still creating effective websites."
      },
      {
        type: 'paragraph',
        content: 'Key principles include optimizing images and videos, reducing JavaScript bundle sizes, implementing efficient caching strategies, choosing green hosting providers that use renewable energy, and designing with page weight in mind.'
      },
      {
        type: 'quote',
        content: "The most sustainable web page is the one that's never loaded.",
        author: 'Tom Greenwood, Sustainable Web Design'
      },
      {
        type: 'heading',
        content: 'Business Benefits of Green Web Design'
      },
      {
        type: 'paragraph',
        content: "Sustainability isn't just good for the planet—it's good for business too. Lighter, faster websites improve user experience, boost SEO rankings, reduce bounce rates, and lower hosting costs. They're also more accessible to users with slower connections or older devices."
      },
      {
        type: 'paragraph',
        content: 'As consumers become increasingly environmentally conscious, brands that demonstrate commitment to sustainability—including through their digital presence—can also build stronger connections with their audiences.'
      },
      {
        type: 'paragraph',
        content: "By applying sustainable design principles, we can create beautiful, effective websites that perform well for users while minimizing their impact on the planet. It's a win-win approach that aligns business goals with environmental responsibility."
      }
    ]
  },
  {
    id: '6',
    title: 'The Revival of Server-Side Rendering in Modern Web Apps',
    excerpt: 'How SSR is making a comeback through frameworks like Next.js and Remix, offering the best of both static and dynamic approaches.',
    slug: 'revival-server-side-rendering-modern-web',
    cover_image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&h=675',
    published_at: '2025-03-15T16:30:00Z',
    author: {
      id: 'author1',
      name: 'Alex Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: 'Senior Developer and Tech Writer with 10+ years of experience in web technologies.'
    },
    category: {
      id: 'cat4',
      name: 'Development',
      slug: 'development'
    },
    reading_time: 10,
    content: [
      {
        type: 'paragraph',
        content: 'In the ever-swinging pendulum of web development approaches, server-side rendering (SSR) is experiencing a renaissance, but with modern twists that address the limitations of traditional server rendering.'
      },
      {
        type: 'heading',
        content: 'The Evolution of Rendering Strategies'
      },
      {
        type: 'paragraph',
        content: "Web rendering has come full circle. We started with server-rendered pages, shifted to client-heavy SPAs, and now we're moving toward hybrid approaches that combine the best aspects of both."
      },
      {
        type: 'paragraph',
        content: 'The problem with pure client-side rendering became apparent as JavaScript bundles grew larger: poor initial load performance, SEO challenges, and less-than-ideal user experiences on slower devices or connections.'
      },
      {
        type: 'heading',
        content: 'Modern SSR Frameworks'
      },
      {
        type: 'paragraph',
        content: 'Frameworks like Next.js, Remix, and SvelteKit are leading this revival by providing tooling that makes SSR easier to implement and more powerful than ever before.'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=1000&h=600',
        caption: 'Modern SSR frameworks offer the best of both static and dynamic approaches'
      },
      {
        type: 'paragraph',
        content: 'These frameworks handle complex concerns like code splitting, hydration, and data fetching, allowing developers to focus on building features rather than infrastructure.'
      },
      {
        type: 'quote',
        content: 'The best user experience is often the result of rendering the right things in the right places.',
        author: 'Rich Harris, creator of Svelte'
      },
      {
        type: 'heading',
        content: 'Islands Architecture: A Middle Ground'
      },
      {
        type: 'paragraph',
        content: 'Emerging approaches like Islands Architecture take SSR further by allowing selective hydration—rendering the page on the server and only adding interactivity to specific components or "islands" on the client.'
      },
      {
        type: 'paragraph',
        content: 'This pattern, pioneered by frameworks like Astro, provides fast initial loads with minimal JavaScript while still enabling rich interactivity where needed.'
      },
      {
        type: 'paragraph',
        content: "As web development continues to mature, we're seeing more nuanced approaches that move beyond the false dichotomy of \"server vs. client\" rendering. The future belongs to hybrid strategies that leverage the strengths of each approach while mitigating their weaknesses."
      }
    ]
  },
  {
    id: '7',
    title: 'State Management in 2025: Beyond Redux and Context',
    excerpt: 'Exploring the evolution of state management in React applications, from traditional solutions to modern alternatives.',
    slug: 'state-management-2025-beyond-redux',
    cover_image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1200&h=675',
    published_at: '2025-03-10T13:20:00Z',
    author: {
      id: 'author3',
      name: 'Marcus Chen',
      avatar: 'https://randomuser.me/api/portraits/men/15.jpg',
      bio: 'Principal Software Architect specializing in distributed systems and cloud infrastructure.'
    },
    category: {
      id: 'cat1',
      name: 'Technology',
      slug: 'technology'
    },
    reading_time: 8,
    content: [
      {
        type: 'paragraph',
        content: 'State management remains one of the most discussed topics in frontend development, with approaches constantly evolving. As we look at the landscape in 2025, several key trends are reshaping how we think about state.'
      },
      {
        type: 'heading',
        content: 'The Problem with Traditional State Management'
      },
      {
        type: 'paragraph',
        content: 'For years, Redux dominated React state management with its centralized store and unidirectional data flow. While powerful, it introduced significant boilerplate and complexity that often felt disproportionate to the problems being solved.'
      },
      {
        type: 'paragraph',
        content: 'Context API emerged as a built-in alternative, but it too has limitations—particularly around performance and composition—that make it suboptimal for complex applications.'
      },
      {
        type: 'heading',
        content: 'The Rise of Server State'
      },
      {
        type: 'paragraph',
        content: 'One of the biggest shifts has been the recognition that much of what we considered "application state" is actually "server state" being cached on the client. Tools like React Query, SWR, and Apollo Client specialized in managing this type of state with features like caching, revalidation, and optimistic updates.'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&h=600',
        caption: 'Modern state management recognizes the different types of state in applications'
      },
      {
        type: 'paragraph',
        content: 'This led to the realization that we need different tools for different types of state, rather than trying to shoehorn everything into a single solution.'
      },
      {
        type: 'quote',
        content: "The best state management solution is often the one you don't notice.",
        author: 'Tanner Linsley, creator of React Query'
      },
      {
        type: 'heading',
        content: 'Atomic and Derived State'
      },
      {
        type: 'paragraph',
        content: 'Inspired by reactive programming models, libraries like Jotai, Recoil, and Zustand have gained popularity by focusing on atomic state that can be composed together. This approach allows for more granular updates and easier code splitting.'
      },
      {
        type: 'paragraph',
        content: 'These tools embrace the principle of derived state—calculating values on the fly rather than storing and synchronizing them—which leads to more predictable applications with fewer bugs.'
      },
      {
        type: 'paragraph',
        content: "As React itself evolves with features like Server Components and automatic memoization, we're seeing state management become less of a third-party concern and more integrated into the framework itself. The future belongs to more specialized, right-sized solutions rather than monolithic state containers."
      }
    ]
  },
];

// Mock categories
export const mockCategories = [
  {
    id: 'cat1',
    name: 'Technology',
    slug: 'technology',
    count: 5,
    description: 'The latest in tech innovations, trends, and analysis'
  },
  {
    id: 'cat2',
    name: 'Design',
    slug: 'design',
    count: 8,
    description: 'Inspiration and insights for visual and UX design'
  },
  {
    id: 'cat3',
    name: 'Backend',
    slug: 'backend',
    count: 3,
    description: 'Server-side development, databases, and infrastructure'
  },
  {
    id: 'cat4',
    name: 'Development',
    slug: 'development',
    count: 10,
    description: 'Best practices, tools, and techniques for efficient coding'
  },
  {
    id: 'cat5',
    name: 'Career',
    slug: 'career',
    count: 6,
    description: 'Growth, learning, and navigating the tech industry'
  }
];

// Mock comments
export const mockComments = [
  {
    id: 'comment1',
    content: "This article opened my eyes to the potential of AI in development. I've started experimenting with some of the tools mentioned and am already seeing improvements in my workflow.",
    created_at: '2025-05-02T09:43:00Z',
    user: {
      id: 'user1',
      name: 'Michael Roberts',
      avatar: 'https://randomuser.me/api/portraits/men/42.jpg'
    }
  },
  {
    id: 'comment2',
    content: "I'd add that edge computing is not just about performance but also about enabling new types of applications that weren't possible before. Great article overall!",
    created_at: '2025-05-01T14:27:00Z',
    user: {
      id: 'user2',
      name: 'Emily Chen',
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg'
    }
  },
  {
    id: 'comment3',
    content: 'WebAssembly has been "going mainstream" for years now. I\'m skeptical that 2025 will be any different, but I hope I\'m wrong.',
    created_at: '2025-04-30T19:15:00Z',
    user: {
      id: 'user3',
      name: 'David Wilson',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
    }
  }
];
