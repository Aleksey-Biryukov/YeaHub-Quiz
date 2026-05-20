import Footer from "@/widgets/footer/Footer";
import Header from "@/widgets/header/Header";
import styles from "./MainLayout.module.css";
import { Outlet, useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";
import { useAppDispatch } from "../hooks/hooks";
import { clearSpecialization } from "@/entities/specializations";
import { clear } from "@/entities/quiz-questions";

function MainLayout() {
  const location = useLocation();
  const prevPath = useRef(location.pathname);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const wasInQuiz = prevPath.current.startsWith("/interview-quiz");

    const isOutsideQuiz = !location.pathname.startsWith("/interview-quiz");

    if (wasInQuiz && isOutsideQuiz) {
      localStorage.removeItem("quizQuestions");
      dispatch(clearSpecialization());
      dispatch(clear());
    }

    prevPath.current = location.pathname;
  }, [location.pathname, dispatch]);

  return (
    <div className={styles.layout}>
      <header className={styles.layout_header}>
        <Header />
      </header>

      <main className={styles.layout_main}>
        <Outlet />
      </main>
      <footer className={styles.layout_footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;
