import { useState } from 'react';
import WordCard from '../components/WordCard';
import WordForm from '../components/WordForm';

export default function Home() {
  const [entries, setEntries] = useState([]);

  function handleAdd(entry) {
    setEntries([...entries, entry]);
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-hand">📘 iLegible Vocabulary</h1>
      <WordForm onAdd={handleAdd} />
      <div className="space-y-4">
        {entries.map((e, i) => <WordCard key={i} {...e} />)}
      </div>
    </div>
  );
}