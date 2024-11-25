import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import FadeInSection from '../components/FadeInSection';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const markdownFiles = import.meta.glob('../blog/*.md', {
          eager: true,
          as: 'raw'
        });
        
        const fileKey = Object.keys(markdownFiles).find(key => 
          key.includes(`/${slug}.md`)
        );

        if (!fileKey) {
          throw new Error('Post not found');
        }

        const rawContent = markdownFiles[fileKey];
        const [, frontmatter, content] = rawContent.split('---');
        
        const attributes = {};
        frontmatter.trim().split('\n').forEach(line => {
          const [key, ...valueParts] = line.split(':');
          if (key && valueParts.length) {
            let value = valueParts.join(':').trim();
            if (value.startsWith('[') && value.endsWith(']')) {
              value = value
                .slice(1, -1)
                .split(',')
                .map(item => item.trim().replace(/'/g, '').replace(/"/g, ''));
            }
            attributes[key.trim()] = value;
          }
        });

        setPost({
          title: attributes.title || 'Untitled Post',
          date: attributes.date || new Date().toISOString(),
          content: content.trim(),
          tags: attributes.tags || []
        });

        document.title = `DVN | ${attributes.title}`;
        return () => {
          document.title = "DVN | Forever Curious";
        };
      } catch (error) {
        console.error('Failed to load blog post:', error);
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug, navigate]);

  const MarkdownComponents = {
    h1: props => (
      <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
    ),
    h2: props => (
      <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />
    ),
    h3: props => (
      <h3 className="text-xl font-bold mt-4 mb-2" {...props} />
    ),
    p: props => (
      <p className="mb-4 leading-relaxed" {...props} />
    ),
    ul: props => (
      <ul className="list-disc list-inside mb-4 pl-4" {...props} />
    ),
    ol: props => (
      <ol className="list-decimal list-inside mb-4 pl-4" {...props} />
    ),
    li: props => (
      <li className="mb-2" {...props} />
    ),
    a: props => (
      <a className="text-pink-400 hover:underline" {...props} />
    ),
    em: props => (
      <em className="italic" {...props} />
    ),
    strong: props => (
      <strong className="font-bold" {...props} />
    ),
    blockquote: props => (
      <blockquote className="border-l-4 border-pink-500 pl-4 italic my-4" {...props} />
    ),
    code: ({ inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          style={vscDarkPlus}
          language={match[1]}
          PreTag="div"
          className="mb-4"
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className="bg-gray-800 px-1 rounded" {...props}>
          {children}
        </code>
      );
    },
    pre: props => (
      <pre className="mb-4" {...props} />
    ),
  };

  if (loading) return (
    <section className="min-h-screen bg-gray-900 text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Loading...</h1>
      </div>
    </section>
  );

  if (error) return (
    <section className="min-h-screen bg-gray-900 text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-red-500">Error</h1>
        <p>{error}</p>
      </div>
    </section>
  );

  if (!post) return null;

  return (
    <section className="min-h-screen bg-gray-900 text-white pt-24">
      <FadeInSection>
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-gray-400">
              {new Date(post.date).toLocaleDateString()}
            </p>
            {post.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2">
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
          </div>
          <div className="markdown-content">
            <ReactMarkdown components={MarkdownComponents}>
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default BlogPost;