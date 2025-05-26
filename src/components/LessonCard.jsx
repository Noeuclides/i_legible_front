import { Link } from 'react-router-dom';

const LessonCard = ({ lesson }) => {
  return (
    <Link to={`/lessons/${lesson.id}`} className="bg-yellow-200 hover:bg-yellow-300 transition p-4 rounded-xl shadow-md border border-yellow-400 space-y-1">
      <div className="text-xl font-hand">📒 {lesson.title}</div>
      <div className="text-sm text-gray-600">🗓 {lesson.date}</div>
      <div className="text-md italic">{lesson.summary}</div>
    </Link>
  );
};

export default LessonCard;