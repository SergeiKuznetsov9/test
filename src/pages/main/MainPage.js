import { AsyncComponent } from "../../components/AsyncComponent/AsyncComponent";
import { Counter } from "../../components/Counter/Counter";
import { Events } from "../../components/Events/Events";
import { Fetching } from "../../components/Fetching/Fetching";
import { Greeting } from "../../components/Greeting/Greeting";
import cls from "./MainPage.module.css";

function MainPage() {
  return (
    <div className={cls.MainPage}>
      {/* <Greeting /> */}
      {/* <AsyncComponent /> */}
      {/* <Events /> */}
      <Fetching />
      {/* <Counter /> */}
    </div>
  );
}

export default MainPage;
