import { useEffect, useState } from 'react';
import LessonCard from '../components/LessonCard';

const Home = () => {
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('jwt');
        fetch('http://localhost:3000/api/v1/lessons', {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then(res => {
                if (!res.ok) throw new Error('Unauthorized');
                return res.json();
            })
            .then(setLessons)
            .catch(err => console.error('Failed to load lessons:', err));
    }, []);

    return (
        <main className="min-h-screen bg-white p-8">
            <div className="max-w-[800px] mx-auto">
                <h1 className="text-4xl text-center mb-8 font-handwriting">iLegible</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {lessons.map((lesson) => (
                        <LessonCard key={lesson.id} lesson={lesson} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Home;
