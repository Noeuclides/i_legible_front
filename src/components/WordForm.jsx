import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

const WordForm = ({ onAdd }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [wordTypes, setWordTypes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/word_types')
            .then(res => res.json())
            .then(setWordTypes)
            .catch(err => console.error('Failed to load word types', err));
    }, []);

    const onSubmit = (data) => {
        onAdd(data);
        reset();
    };

    return (
        <div className="max-w-xl mx-auto bg-white shadow-xl p-8 rounded-3xl border border-gray-200 space-y-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-gray-100 p-6 rounded-2xl shadow-inner">
                <div>
                    <input
                        type="text"
                        placeholder="Word"
                        className={`w-full p-3 rounded-xl border ${errors.word ? 'border-red-400' : 'border-gray-300'}`}
                        {...register('word', { required: true })}
                    />
                    {errors.word && <p className="text-red-500 text-sm mt-1">Word is required</p>}
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Translation"
                        className={`w-full p-3 rounded-xl border ${errors.translation ? 'border-red-400' : 'border-gray-300'}`}
                        {...register('translation', { required: true })}
                    />
                    {errors.translation && <p className="text-red-500 text-sm mt-1">Translation is required</p>}
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Context (optional)"
                        className="w-full p-3 rounded-xl border border-gray-200 italic"
                        {...register('context')}
                    />
                </div>

                <div>
                    <select
                        {...register('word_type_id', { required: true })}
                        className={`w-full p-3 rounded-xl border ${errors.word_type_id ? 'border-red-400' : 'border-gray-300'}`}
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Select word type...
                        </option>
                        {wordTypes.map((type) => (
                            <option key={type.id} value={type.id}>
                                {type.name}
                            </option>
                        ))}
                    </select>
                    {errors.word_type_id && <p className="text-red-500 text-sm mt-1">Word type is required</p>}
                </div>

                <button
        type="submit"
        className="bg-blue-500 text-white px-5 py-2 rounded-xl hover:bg-blue-600 transition"
                >
                    ➕ Add Word
                </button>
            </form>
        </div>
    );
};

export default WordForm;
