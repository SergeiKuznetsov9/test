import { Counter } from "../../components/Counter/Counter";
import cls from "./MainPage.module.css";

function MainPage() {
  return (
    <div className={cls.MainPage}>
      <Counter />
    </div>
  );
}

export default MainPage;
