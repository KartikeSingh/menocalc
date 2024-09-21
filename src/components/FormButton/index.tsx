export function FormButton({
   text,
   onClick,
}: {
   text: string;
   onClick: () => void;
}) {
   return (
      <button className="block my-2 font-semibold bg-[#b6aff5] text-white px-3 py-0.5 rounded hover:bg-[#a096ff] delay-75 transition-all" onClick={onClick}>
         {text}
      </button>
   );
}
