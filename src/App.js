import { useState } from "react";
import style from "./App.module.css";
function App() {
  let [isOpen, setIsOpen] = useState(true);
  let [step, setStep] = useState(1);
  let [message] = useState([
    "Learn react",
    "Apply for jobs",
    "invest your new income",
  ]);

  function handleNext() {
    if (step < 3) {
      setStep(step + 1);
    }
  }

  function handlePrev() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  function toggle() {
    if (isOpen) setIsOpen(false);
    else setIsOpen(true);
    // setIsOpen(!isOpen);
  }

  return (
    <>
      <i className={`${style.x} fa-solid fa-bars`} onClick={() => toggle()}></i>

      {isOpen ? (
        <div className={style.parent}>
          <div className={style.box}>
            <div className={style.numbers}>
              <div className={step === 1 ? style.active : ""}>1</div>
              <div className={step === 2 ? style.active : ""}>2</div>
              <div className={step === 3 ? style.active : ""}>3</div>
            </div>
            <p className={style.textCenter}>
              step: {step} {message[step - 1]}
            </p>

            <div className={style.buttons}>
              <button
                onClick={() => handlePrev()}
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
              >
                prev
              </button>
              <button
                onClick={() => handleNext()}
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
              >
                next
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
