import React from 'react';

const Live: React.FC = () => {
    return (
        <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">ดูถ่ายทอดสด</h2>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
                <p className="text-gray-400 mb-4">ขณะนี้ยังไม่มีถ่ายทอดสด</p>
                <p className="text-gray-400">โปรดติดตามตารางการแข่งขันเพื่อรับชมการถ่ายทอดสดในอนาคต</p>
            </div>
        </section>
    );
};

export default Live;