import React from 'react';

interface ScheduleItem {
    date: string;
    match: string;
    location: string;
}

const ScheduleCard: React.FC<ScheduleItem> = ({ date, match, location }) => {
    return (
        <div className="bg-gray-800 rounded-lg p-4 mb-4 transform hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-lg text-yellow-400 font-semibold mb-2">{match}</h3>
            <p className="text-sm text-gray-400">วันที่: {date}</p>
            <p className="text-sm text-gray-400">สถานที่: {location}</p>
        </div>
    );
};

export default ScheduleCard;