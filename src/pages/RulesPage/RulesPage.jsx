import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addRulesStatusIndexedBD } from "../../common/servicesIndexdBD/lessonsIndexedBD.js";
import "./RulesPage.scss";

const RulesPage = () => {
  const navigate = useNavigate();
  const [acceptedRules, setAcceptedRules] = useState(false);

  return (
    <div className="rules-container">
      <h2 className="rules-title">Правила пользования практикумом</h2>
      <p className="rules-note">
        Прежде чем приступить к выполнению заданий, внимательно ознакомься с
        правилами использования практикума. Это поможет тебе избежать множество
        ошибок, а проверка твоего кода будет более качественная.
      </p>
      <ul>
        <li className="rules-text">
          Для обозначения строк всегда используй только одинарные кавычки.
        </li>
        <li className="rules-text">
          Избегай лишних пробелов, это может спровоцировать неправильную
          проверку твоего кода.
        </li>
        <li className="rules-text">
          Не используй точку с запятой в конце строк.
        </li>
        <li className="rules-text">
          В зависимости от темы урока, твой ответ может появляться в консоли, в
          форме или в текстовом поле под заданием.
        </li>

        <li className="rules-text">
          За прохождение некоторых уроков, ты можешь получить дополнительный
          кристалл. Чтобы добавить его к уже имеющимся у тебя кристаллам, просто
          сделай скриншот сообщения или скопируй уникальный код и отправь Коту.
        </li>

        <li className="rules-text">
          Если ты столкнулась с какими-то трудностями, ты всегда можешь
          обратиться к Филину!
        </li>
      </ul>
      <p className="rules-note">
        Если ты вдруг забудешь, как правильно пользоваться практикумом - не
        переживай! В начале каждого урока, мы еще раз напомним тебе правила и
        обратим внимание на все нюансы!
      </p>

      <div className="rules-checkbox-container">
        <label className="rules-label">
          <input
            className="rules-input"
            type="checkbox"
            onChange={() => setAcceptedRules(!acceptedRules)}
          />
          С правилами ознакомилась
        </label>
      </div>
      <div className="rules-btn-container">
        <button
          className="rules-btn"
          onClick={async () => {
            await addRulesStatusIndexedBD(true);
            navigate(-1);
          }}
          disabled={!acceptedRules}
        >
          Подтвердить
        </button>
      </div>
    </div>
  );
};
export default RulesPage;
