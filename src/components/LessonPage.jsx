import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const LessonPage = () => {
  const { id } = useParams();
  const [words, setWords] = useState([]);
  const [lesson, setLesson] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/lessons/${id}`)
      .then(res => res.json())
      .then(setLesson)
      .catch(err => console.error('Failed to load lesson', err));

    fetch(`http://localhost:3000/api/v1/lessons/${id}/vocabulary_entries`)
      .then(res => res.json())
      .then(setWords)
      .catch(err => console.error('Failed to load words', err));
  }, [id]);

  if (!lesson) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-3xl">📘 {lesson.title} ({lesson.date})</h2>
      <div className="space-y-4">
        {words.map(entry => (
          <div key={entry.id} className="p-4 border rounded-xl bg-white shadow flex items-start justify-between">
            <div>
              <p className="text-xl">{entry.word} → {entry.translation}</p>
              <p className="text-sm italic text-gray-500">{entry.context}</p>
            </div>
            <div className="flex gap-2">
              <button className="text-blue-600 hover:underline">✏️</button>
              <button className="text-red-500 hover:underline">🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonPage;