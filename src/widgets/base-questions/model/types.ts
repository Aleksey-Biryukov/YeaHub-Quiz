import type { Question } from "@/entities/base-questions";

export type QuestionItemProps = {
  question: Question;
  index: number;
  questionIsOpenID: number | null;
  setQuestionIsOpenID: React.Dispatch<React.SetStateAction<number | null>>;
};

export type OpenQuestionProps = {
  question: Question;
  index: number;
  setQuestionIsOpenID: React.Dispatch<React.SetStateAction<number | null>>;
};

export type LongAnswerTitleProps = {
  question: Question;
};

export type SelectedOptionsProps = {
  question: Question;
};
