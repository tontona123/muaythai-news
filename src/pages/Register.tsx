import React from 'react';

const Register: React.FC = () => {
    return (
        <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">สมัครสมาชิก</h2>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
                <p className="text-gray-400 mb-4">เข้าร่วมชุมชน MuayThai News ได้ง่าย ๆ ผ่าน Line</p>
                <a
                    href="https://line.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded hover:bg-yellow-400 transition"
                >
                    สมัครผ่าน Line
                </a>
            </div>
        </section>
    );
};

export default Register;