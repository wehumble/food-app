import React from 'react';
import './Blog.css';

const Blog = () => {
  const posts = [
    { 
      id: 1, 
      title: '10 Healthy Recipes for 2024', 
      date: 'Jan 15, 2024', 
      excerpt: 'Discover our top healthy recipes for the new year that are both delicious and nutritious.',
      category: 'Recipes',
      readTime: '5 min read'
    },
    { 
      id: 2, 
      title: 'The Art of Food Presentation', 
      date: 'Dec 20, 2023', 
      excerpt: 'Learn how to make your dishes look as good as they taste with these simple presentation tips.',
      category: 'Tips',
      readTime: '4 min read'
    },
    { 
      id: 3, 
      title: 'Sustainable Cooking Tips', 
      date: 'Nov 10, 2023', 
      excerpt: 'How to cook more sustainably and reduce food waste in your kitchen.',
      category: 'Sustainability',
      readTime: '6 min read'
    },
  ];

  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#333' }}>Food Blog</h1>
      <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '40px' }}>
        Latest updates, recipes, and food tips from our culinary team.
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {posts.map(post => (
          <article key={post.id} style={{ 
            borderBottom: '1px solid #eee', 
            paddingBottom: '30px',
            ':last-child': { borderBottom: 'none' }
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '15px'
            }}>
              <span style={{ 
                background: '#ff6b6b', 
                color: 'white', 
                padding: '5px 12px', 
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: '600'
              }}>
                {post.category}
              </span>
              <span style={{ 
                color: '#888', 
                fontSize: '0.9rem' 
              }}>
                {post.readTime}
              </span>
            </div>
            
            <h2 style={{ 
              fontSize: '1.5rem', 
              marginBottom: '10px',
              color: '#333'
            }}>
              {post.title}
            </h2>
            
            <p style={{ 
              color: '#666', 
              marginBottom: '15px',
              lineHeight: '1.6'
            }}>
              {post.excerpt}
            </p>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ color: '#888', fontSize: '0.9rem' }}>
                {post.date}
              </span>
              <button style={{ 
                background: 'transparent',
                color: '#ff6b6b',
                border: '1px solid #ff6b6b',
                padding: '8px 20px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                ':hover': { 
                  background: '#ff6b6b',
                  color: 'white'
                }
              }}>
                Read More →
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
