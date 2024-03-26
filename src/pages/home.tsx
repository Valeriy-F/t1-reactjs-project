import { Quiz } from "../components/organisms";
import { HomeTemplate } from "../components/templates";

const Main = () => {
  return <HomeTemplate quizSection={<Quiz />} />;
};

export default Main;
