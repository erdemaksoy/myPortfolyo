import React, { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './blog.css';

interface Post {
    id: number;
    title: string;
    date: string;
    tags: string[];
    content: string;
}

const Blog: React.FC = () => {
    const { t } = useTranslation();
    const blogData = t('blog', { returnObjects: true }) as any;
    const posts: Post[] = blogData.posts || [];

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [activePost, setActivePost] = useState<Post | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [activeTab, setActiveTab] = useState<'posts' | 'filters'>('posts');

    // Check if mobile view
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    const allTags = useMemo(() => {
        const tags = new Set<string>();
        posts.forEach(post => {
            post.tags.forEach(tag => tags.add(tag));
        });
        return Array.from(tags);
    }, [posts]);

    const filteredPosts = useMemo(() => {
        return posts.filter(post => {
            const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
            const matchesSearch = searchTerm.trim() === '' ? true :
                post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.content.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesTag && matchesSearch;
        });
    }, [posts, selectedTag, searchTerm]);

    const handleTagClick = (tag: string | null) => {
        setSelectedTag(tag);
        // On mobile, switch to posts tab after selecting a tag
        if (isMobile) {
            setActiveTab('posts');
        }
    };

    const openModal = (post: Post) => {
        setActivePost(post);
    };

    const closeModal = () => {
        setActivePost(null);
    };

    const handleTabChange = (tab: 'posts' | 'filters') => {
        setActiveTab(tab);
    };

    return (
        <section className="blog section">
            <h2 className="section__title">{blogData.title}</h2>
            <span className="section__subtitle">{blogData.subtitle}</span>

            <div className="blog__container container">
                {/* Mobile Tabs */}
                <div className="blog__tabs">
                    <div className="blog__tab-buttons">
                        <button 
                            className={`blog__tab-button ${activeTab === 'posts' ? 'active' : ''}`}
                            onClick={() => handleTabChange('posts')}
                        >
                            <i className="uil uil-newspaper"></i> {blogData.posts_tab || "Yazılar"}
                        </button>
                        <button 
                            className={`blog__tab-button ${activeTab === 'filters' ? 'active' : ''}`}
                            onClick={() => handleTabChange('filters')}
                        >
                            <i className="uil uil-filter"></i> {blogData.filters_tab || "Filtrele"}
                        </button>
                    </div>
                </div>

                {/* Desktop Sidebar */}
                <aside className="blog__sidebar">
                    <h3 className="blog__sidebar-title">{blogData.filter_by_tags}</h3>
                    <input
                        type="text"
                        className="blog__search-input"
                        placeholder={blogData.search_placeholder}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <ul className="blog__tags-list">
                        <li
                            className={`blog__tag ${selectedTag === null ? 'active' : ''}`}
                            onClick={() => handleTagClick(null)}
                        >
                            {blogData.all_tags}
                        </li>
                        {allTags.map(tag => (
                            <li
                                key={tag}
                                className={`blog__tag ${selectedTag === tag ? 'active' : ''}`}
                                onClick={() => handleTagClick(tag)}
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Mobile Filter Tab Content */}
                <div className={`blog__tab-content ${activeTab === 'filters' ? 'active' : ''}`}>
                    <div className="blog__mobile-sidebar">
                        <input
                            type="text"
                            className="blog__search-input"
                            placeholder={blogData.search_placeholder}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <ul className="blog__tags-list">
                            <li
                                className={`blog__tag ${selectedTag === null ? 'active' : ''}`}
                                onClick={() => handleTagClick(null)}
                            >
                                {blogData.all_tags}
                            </li>
                            {allTags.map(tag => (
                                <li
                                    key={tag}
                                    className={`blog__tag ${selectedTag === tag ? 'active' : ''}`}
                                    onClick={() => handleTagClick(tag)}
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Posts Tab Content */}
                <div className={`blog__tab-content ${activeTab === 'posts' ? 'active' : ''}`}>
                    <div className="blog__posts-container">
                        <div className="blog__posts">
                            {filteredPosts.length > 0 ? (
                                filteredPosts.map(post => (
                                    <article key={post.id} className="blog__post-card" onClick={() => openModal(post)}>
                                        <p className="blog__post-date">{post.date}</p>
                                        <h3 className="blog__post-title">{post.title}</h3>
                                        <div className="blog__post-tags">
                                            {post.tags.map(tag => (
                                                <span key={tag} className="blog__post-tag-badge">{tag}</span>
                                            ))}
                                        </div>
                                        <span className="blog__post-readmore">
                                            {blogData.read_more} <i className="uil uil-arrow-right"></i>
                                        </span>
                                    </article>
                                ))
                            ) : (
                                <div className="blog__no-posts">
                                    <p>{blogData.no_posts_found || "No posts found matching your criteria."}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {activePost && (
                <div className={`blog__modal ${activePost ? 'active' : ''}`} onClick={closeModal}>
                    <div className="blog__modal-content" onClick={(e) => e.stopPropagation()}>
                        <i className="uil uil-times blog__modal-close" onClick={closeModal}></i>
                        <h2 className="blog__modal-title">{activePost.title}</h2>
                        <p className="blog__modal-date">{activePost.date}</p>
                        <div className="blog__modal-tags">
                            {activePost.tags.map(tag => (
                                <span key={tag} className="blog__post-tag-badge">{tag}</span>
                            ))}
                        </div>
                        <div
                            className="blog__modal-body"
                            dangerouslySetInnerHTML={{ __html: activePost.content }}
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Blog; 