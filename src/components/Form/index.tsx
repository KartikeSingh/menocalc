import { useMemo, useState } from "react";
import { DEAFULT_QUESTIONS } from "../../utils/constants";
import { Question } from "../Question";

export function Form() {
   const [questions, setQuestions] = useState<Question[]>(
      DEAFULT_QUESTIONS.map((v, i) => {
         return {
            ...v,
            index: i,
            value: "",
            selected: -1,
            isBmi: v.isBmi,
         };
      }) as Question[]
   );
   const [activeQuestion, setActiveQuestion] = useState(0);

   const question = questions[activeQuestion];

   const result = useMemo(() => {
      if (activeQuestion <= questions.length - 1) {
         return 0;
      } else {
         return (50 +
            DEAFULT_QUESTIONS.filter(
               (v) => typeof v.calculateChange === "function"
            )
               .map(
                  (v, i) =>
                     v.calculateChange(
                        v.type === 2
                           ? questions[i].selected
                           : questions[i].value
                     ) as number
               )
               .reduce((a, b) => a + b));
      }
   }, [activeQuestion]);

   return (
      <div>
         {activeQuestion <= questions.length - 1 && (
            <Question
               // {...questions[activeQuestion]}
               id={activeQuestion.toString()}
               isLast={activeQuestion === questions.length - 1}
               index={activeQuestion}
               answerType={question.type}
               onNext={(value) => {
                  if (question.type === 1) {
                     if (!value) return alert("Please enter a value!");

                     question.value = parseInt(value + "") || 0;
                  } else if (question.type === 2) {
                     if (value === -1) return alert("Please select an option!");

                     question.selected = value as number;
                  } else {
                     if (!value) return alert("Please enter a value!");

                     question.value = value;
                  }
                  setQuestions(questions);
                  setActiveQuestion(activeQuestion + 1);
               }}
               onPrevious={() => setActiveQuestion(activeQuestion - 1)}
               question={
                  question.isBmi ? (
                     <h1 className="text-lg font-semibold">
                        What is your BMI?
                        <a
                           href="https://www.calculator.net/bmi-calculator.html"
                           className="text-sm font-normal cursor-pointer"
                           target="_blank"
                        >
                           Calculate here
                        </a>
                     </h1>
                  ) : (
                     question.question
                  )
               }
               defaultSelected={question.selected}
               defaultValue={question.value + ""}
               options={question.options}
               key={question.index + ""}
            />
         )}
         {activeQuestion >= questions.length && (
            <div>
               <h1 className="text-xl font-bold">Thank you for answering</h1>
               <p>Likely your menopause age will be <b>{result}</b></p>
            </div>
         )}
      </div>
   );
}
