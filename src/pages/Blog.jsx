import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/FadeInSection';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const markdownFiles = import.meta.glob('../blog/*.md');
        
        const allPosts = await Promise.all(
          Object.entries(markdownFiles).map(async ([filepath, loader]) => {
            try {
              const post = await loader();
              const slug = filepath.split('/').pop().replace('.md', '');
              
              return {
                slug,
                title: post.attributes?.title || 'Untitled Post',
                date: post.attributes?.date || new Date().toISOString(),
                excerpt: post.attributes?.excerpt || 'No excerpt available',
                tags: post.attributes?.tags || []
              };
            } catch (err) {
              console.error(`Error loading ${filepath}:`, err);
              return null;
            }
          })
        );

        // Filter out any null entries and sort by date
        const validPosts = allPosts
          .filter(post => post !== null)
          .sort((a, b) => new Date(b.date) - new Date(a.date));

        setPosts(validPosts);
      } catch (err) {
        console.error('Error loading blog posts:', err);
        setError('Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen bg-gray-900 text-white pt-24">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">Loading...</h1>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen bg-gray-900 text-white pt-24">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-red-500">Error</h1>
          <p>{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="min-h-screen bg-gray-900 text-white pt-24">
      <FadeInSection>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            Blog
          </h1>
          {posts.length === 0 ? (
            <p className="text-xl text-gray-400">No posts found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <article 
                  key={post.slug} 
                  className="bg-gray-950 rounded-lg shadow-md p-6 transition-transform duration-300 hover:transform hover:scale-105"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 mb-2">
                      {new Date(post.date).toLocaleDateString()}
                    </p>
                    <p className="text-lg mb-4">{post.excerpt}</p>
                    {post.tags?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map(tag => (
                          <span 
                            key={tag}
                            className="px-2 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <span className="text-pink-400 hover:underline inline-block">
                      Read more →
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          )}
            <div className="mt-16 text-center">
            <p className="text-sm text-gray-500 italic">
              The views and opinions expressed in this blog are my own and do not necessarily reflect the official policy or position of my employer, The MITRE Corporation.
            </p>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Blog;