const ResumeCard = ({paper, topic, year, place}) => {

  return (
    <div className="ResumeCard">
      <div>
        <h2>{paper}</h2>
        <p>{topic}</p>
        <p>{year}</p>
      </div>
      <p>{place}</p>
    </div>
  );
};

export default ResumeCard;