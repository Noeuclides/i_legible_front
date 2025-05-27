import { Link } from 'react-router-dom';

const LessonCard = ({ lesson }) => {
  return (
    <Link
      to={`/lessons/${lesson.id}`}
      className="block w-full border border-blue-500 bg-yellow-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 no-underline mb-2"
    >
      <h2 className="font-handwriting text-xl text-black underline mb-2">
        {lesson.title}
      </h2>
      <p className="font-handwriting text-sm text-black italic">
        {lesson.summary}
      </p>
    </Link>
  );
};

export default LessonCard;
