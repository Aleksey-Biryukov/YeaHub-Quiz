export type { Question } from "./model/types";
export { useGetBaseQuestionsQuery } from "./api/baseQuestionsApi";
export { useLazyGetBaseQuestionsQuery } from "./api/baseQuestionsApi";
export {
  setSession,
  setCurrentIndex,
  setCurrentPage,
} from "./model/questionsSessionSlice";

export { default as questionsSessionReducer } from "./model/questionsSessionSlice";
