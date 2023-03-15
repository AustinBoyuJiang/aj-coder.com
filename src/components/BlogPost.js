import React from 'react';
import PropTypes from 'prop-types';

const BlogPost = ({ title, content, date, link }) => (
    <a href={link} className="blog-post">
        <h2 className="blog-post-title">{title}</h2>
        <p>{content}</p>
        <span className="blog-post-date">{date}</span>
    </a>
);

BlogPost.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};

export default BlogPost;
