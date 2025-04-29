import React from 'react';
import ScheduleCard from '../components/ScheduleCard';

const scheduleData = [
    {
        date: "10 พฤษภาคม 2568",
        match: "'เสือดำ' ปะทะ 'จอมโหด'",
        location: "สนามมวยลุมพินี"
    },
    {
        date: "15 พฤษภาคม 2568",
        match: "'นักรบ' ปะทะ 'พยัคฆ์ทมิฬ'",
        location: "เวทีมวยราชดำเนิน"
    },
    {
        date: "20 พฤษภาคม 2568",
        match: "'มังกร' ปะทะ 'สิงห์แดง'",
        location: "ONE Championship Arena"
    }
];

const Schedule: React.FC = () => {
    return (
        <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">โปรแกรมการแข่งขัน</h2>
            {scheduleData.map((schedule, index) => (
                <ScheduleCard
                    key={index}
                    date={schedule.date}
                    match={schedule.match}
                    location={schedule.location}
                />
            ))}
        </section>
    );
};

export default Schedule;
