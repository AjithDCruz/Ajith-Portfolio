interface Props {
  children: React.ReactNode;
}

const ChapterNarrative = ({ children }: Props) => {

  return (

    <div className="chapter-story">

      <p>{children}</p>

    </div>

  );

};

export default ChapterNarrative;