import React from 'react';
import NewsCard from '../components/NewsCard';
import newsData from '../data/data.json';
import img1 from '../assets/img1.jpg';

const Home: React.FC = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsData.map((news) => (
                <NewsCard
                    key={news.id}
                    id={news.id}
                    title={news.title}
                    description={news.description}
                    // image={news.image} รอข้อมูลจริง rest ลง data json
                    image={img1} // ชั่วคราว
                    meta={news.meta}
                />
            ))}
        </section>
    );
};

export default Home;