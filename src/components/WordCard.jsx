import React from "react"

const WordCard = ({ word, translation, context }) => {
    return (
        <div className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-md border border-gray-200">
            <span className="text-xl font-hand">{word}</span>
            <span className="text-2xl font-hand">→</span>
            <div>
                <p className="text-lg font-hand">{translation}</p>
                {context && <p className="text-sm italic text-gray-500">{context}</p>}
            </div>
        </div>
    );
}

export default WordCard;