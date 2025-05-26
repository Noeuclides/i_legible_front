import React from "react"

const WordCard = ({ word, translation, context }) => {
    return (
        <div className="bg-white/80 border-2 border-accent rounded-2xl shadow-lg p-6 font-hand relative">
            <span className="text-2xl text-ink">{word}</span>
            <span className="mx-3 text-accent text-2xl">→</span>
            <span className="text-xl text-ink">{translation}</span>
            {context && (
                <div className="mt-2 text-ink/70 italic text-base">
                    <span className="inline-block bg-highlight/50 px-2 py-1 rounded">{context}</span>
                </div>
            )}
            {/* Example doodle */}
            <svg className="absolute top-2 right-2 w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 12h20M12 2v20" />
            </svg>
        </div>
    );
}

export default WordCard;