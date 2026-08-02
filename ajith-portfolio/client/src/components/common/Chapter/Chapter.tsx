import "./Chapter.css";

import ChapterHeader from "./ChapterHeader";
import ChapterNarrative from "./ChapterNarrative";

import { ChapterData } from "../../../types/chapter";

interface Props {
  data: ChapterData;
}

const Chapter = ({ data }: Props) => {

  return (

    <section className="chapter">

      <div className="chapter-container">

        <ChapterHeader
          chapter={data.chapter}
          title={data.title}
          quote={data.quote}
        />

        <div className="chapter-layout">

          {data.scene}

          {data.card}

        </div>

        <ChapterNarrative>

          {data.description}

        </ChapterNarrative>

      </div>

    </section>

  );

};

export default Chapter;