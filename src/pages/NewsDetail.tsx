import React from 'react';
import { useParams, Link } from 'react-router-dom';
import newsData from '../data/data.json';
import img1 from '../assets/img1.jpg';

const NewsDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const news = newsData.find((item) => item.id === parseInt(id || '0'));

    if (!news) {
        return (
            <div className="text-center text-gray-400">
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">ไม่พบข่าวสาร</h2>
                <Link to="/" className="text-yellow-400 hover:text-yellow-300 underline">
                    กลับไปหน้าแรก
                </Link>
            </div>
        );
    }

    return (
        <section className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-yellow-400 mb-4">{news.title}</h1>
            <img src={img1} alt={news.title} className="w-full h-96 object-cover rounded-lg mb-4" />
            {/* <img src={news.image} alt={news.title} className="w-full h-96 object-cover rounded-lg mb-4" /> */}

            <p className="text-sm text-gray-500 mb-4">{news.meta}</p>
            <p className="text-gray-300 leading-relaxed">{news.content}</p>
            <Link to="/" className="inline-block mt-6 text-yellow-400 hover:text-yellow-300 underline">
                กลับไปหน้าแรก
            </Link>
        </section>
    );
};

export default NewsDetail;