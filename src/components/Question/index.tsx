import { ReactElement, useState } from "react";
import { FormButton } from "../FormButton";

interface QuestionProps {
   question: string | ReactElement;
   options?: string[];
   answerType: number;
   id: string;
   onNext: (value: number | string | number[]) => void;
   onPrevious: () => void;
   isLast?: boolean;
   index: number;
   defaultValue?: string;
   defaultSelected?: number[];
}

export function Question({
   id,
   options,
   question,
   onNext,
   onPrevious,
   isLast,
   index,
   answerType,
   defaultSelected,
   defaultValue,
}: QuestionProps) {
   const [selected, setSelected] = useState(
      Array.isArray(defaultSelected) ? defaultSelected : []
   );
   const [value, setValue] = useState(defaultValue || "");

   return (
      <div
         key={id}
         className="bg-gray-100 px-3 py-2 rounded shadow max-w-[80vw] w-96"
      >
         {typeof question === "string" ? (
            <h1 className="text-lg font-semibold">{question}</h1>
         ) : (
            question
         )}
         <div className="flex gap-x-2 gap-y-1 flex-wrap my-3">
            {options?.map((option, i) => (
               <p
                  onClick={() => {
                     if (answerType === 2) setSelected([i]);
                     else {
                        if (selected.includes(i)) setSelected(selected.filter((v) => v !== i));
                        else setSelected([...new Set([...selected, i])]);
                     }
                  }}
                  className={`border-2 w-fit px-2 py-0.5 my-1 rounded-sm cursor-pointer ${selected.includes(i) ? "bg-gray-300" : ""
                     }`}
               >
                  {option}
               </p>
            ))}
         </div>
         {[1, 2].includes(answerType) && !options?.length && (
            <input
               placeholder="Input"
               onChange={(e) => setValue(e.target.value)}
               value={value}
               className="px-0.5"
            />
         )}
         <div className="flex gap-2 my-1">
            {index > 0 && (
               <FormButton onClick={() => onPrevious()} text={"Previous"} />
            )}
            <FormButton
               onClick={() => onNext([2,3].includes(answerType)? selected : value)}
               text={isLast ? "Submit" : "Next"}
            />
         </div>
      </div>
   );
}
