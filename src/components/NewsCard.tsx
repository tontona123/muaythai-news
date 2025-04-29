import React from 'react';
import { Link } from 'react-router-dom';

interface NewsItem {
    id: number;
    title: string;
    description: string;
    image: string;
    meta: string;
}

const NewsCard: React.FC<NewsItem> = ({ id, title, description, image, meta }) => {
    return (
        <Link to={`/news/${id}`} className="block">
            <article className="bg-gray-800 rounded-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
                <img src={image} alt={title} className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h3 className="text-lg text-yellow-400 font-semibold mb-2">{title}</h3>
                    <p className="text-sm text-gray-400 mb-3">{description}</p>
                    <div className="text-xs text-gray-500">{meta}</div>
                </div>
            </article>
        </Link>
    );
};

export default NewsCard;