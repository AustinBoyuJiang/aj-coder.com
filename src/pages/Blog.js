import React from 'react';
import '../assets/styles/Blog.css';
import BlogPost from '../components/BlogPost';

const blogPosts = [
    {
        title: 'My First Blog Post',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam, nulla vel ullamcorper dignissim, magna elit vehicula odio, quis consequat sapien diam eu neque. Duis nec fringilla purus. Sed congue dui id urna eleifend convallis.',
        date: 'March 1, 2023',
        link: '/my-first-blog-post'
    },
    {
        title: 'Another Blog Post',
        content: 'Pellentesque eget blandit augue. Aenean nec urna vel massa dictum efficitur vel sed nulla. Donec eu arcu euismod, pulvinar nulla in, bibendum ipsum. Sed eget enim at leo suscipit iaculis.',
        date: 'March 5, 2023',
        link: '/another-blog-post'
    },
    {
        title: 'One More Blog Post',
        content: 'Vivamus consectetur enim a felis rutrum, ac malesuada sapien suscipit. Fusce ornare libero vitae turpis bibendum suscipit. Sed scelerisque, dui a bibendum lobortis, turpis velit varius lectus, at bibendum diam diam eu eros.',
        date: 'March 10, 2023',
        link: '/one-more-blog-post'
    }
];

const BlogPage = () => {
    return (
        <div className="blog">
            <h1>My Blog</h1>
            {blogPosts.map(post => (
                <BlogPost key={post.title} title={post.title} content={post.content} date={post.date} link={post.link} />
            ))}
        </div>
    );
};

export default BlogPage;
