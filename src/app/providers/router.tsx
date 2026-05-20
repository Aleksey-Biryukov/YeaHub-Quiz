import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { MainPage } from "@/pages";
import { QuizPage } from "@/pages";
import { BaseQuestionsPage } from "@/pages";
import { QuizSettingsPage } from "@/pages";
import { LongAnswerPage } from "@/pages";
import { NotFoundPage } from "@/pages";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: "interview-settings",
          element: <QuizSettingsPage />,
        },
        {
          path: "interview-quiz/:questionId",
          element: <QuizPage />,
        },
        {
          path: "questions",
          element: <BaseQuestionsPage />,
        },
        {
          path: "questions/:index",
          element: <LongAnswerPage />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  },
);

export default router;
