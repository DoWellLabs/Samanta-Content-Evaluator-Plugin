import { memo } from "react";

const DisplayResult = ({
  confidenceLevelCreatedByAI,
  confidenceLevelCreatedByHuman,
  aICheck,
  plagiarised,
  creative,
  totalCharacters,
  totalSentences,
  totalParagraphs,
  title,
  content,
}) => {
  return (
    <div className="result">
      <p>
        Title : <span>{title}</span>
      </p>
      <p>
        Content : <span>{content}</span>
      </p>
      <p>
        AI Check : <span className="ai-check">{aICheck}</span>
      </p>
      <p>
        Confidence Level Created By AI : {" "}
        <span>{confidenceLevelCreatedByAI}</span>
      </p>
      <p>
        Confidence Level Created By Human :{" "}
        <span>{confidenceLevelCreatedByHuman}</span>
      </p>
      <p>
        Plagiarised Check : <span>{plagiarised}</span>
      </p>
      <p>
        Creative : <span>{creative}</span>
      </p>
      <p>
        Total Characters : <span>{totalCharacters}</span>
      </p>
      <p>
        Total Sentences : <span> {totalSentences}</span>
      </p>
      <p>
        Total Paragraphs : <span>{totalParagraphs}</span>
      </p>
    </div>
  );
};

export default memo(DisplayResult);
