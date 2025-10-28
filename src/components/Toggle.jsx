//     const Toggle = ({ showWebOnly, setShowWebOnly }) => {
//   return (
//     <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full backdrop-blur-md shadow-md border border-white/10 w-fit">
//       <label className="flex items-center cursor-pointer">
//         <input
//           type="checkbox"
//           className="sr-only peer"
//           checked={showWebOnly}
//           onChange={() => setShowWebOnly(!showWebOnly)}
//         />
//         <div className="w-11 h-6 bg-gray-400 peer-checked:bg-purple-600 rounded-full relative transition-colors duration-300">
//           <div className="absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-all duration-300 transform peer-checked:translate-x-5" />
//         </div>
//         <span className="ml-3 text-white font-medium text-sm">
//           View Web Projects Only
//         </span>
//       </label>
//     </div>
//   );
// };


// export default Toggle;

import { useState } from "react";

const Toggle = ({
  checked: controlledChecked,
  onChange,
  disabled = false,
  label = "Toggle Option",
  className = "",
  id,
}) => {
  const [internalChecked, setInternalChecked] = useState(false);

  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : internalChecked;

  const handleChange = (newChecked) => {
    if (!disabled) {
      if (!isControlled) {
        setInternalChecked(newChecked);
      }
      onChange?.(newChecked);
    }
  };

  return (
    <div
      className={(
        "flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full backdrop-blur-md shadow-md border border-white/10 w-fit transition-all duration-300 hover:bg-white/10",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <label
        htmlFor={id}
        className={`flex items-center cursor-pointer disabled:cursor-not-allowed`}
      >
        <input
          id={id}
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={(e) => handleChange(e.target.checked)}
          disabled={disabled}
        />

        <div
          className={
            `w-12 h-6 rounded-full relative transition-all duration-300 shadow-inner",
            ${checked ? "bg-gradient-to-r from-purple-500 to-pink-500 shadow-purple-500/20" : "dark:bg-white/20 border bg-gray-300  border-white/30"}
            disabled:cursor-not-allowed`
          }
        >
          <div
            className={
              `absolute top-[1px] w-5 h-5 dark:bg-white bg-black rounded-full transition-all duration-300 shadow-lg flex items-center justify-center"
              ${checked ? "left-[26px] shadow-purple-200/50" : "left-[2px] shadow-gray-200/50"}
              ${!disabled && "hover:scale-110"}`
            }
          >
          </div>
        </div>

        {/* Label */}
        <span
          className={
            `ml-3 font-medium text-sm transition-colors duration-200 ${disabled ? "dark:text-white/50" : "dark:text-white hover:text-white/90"}
          `}
        >
          {label}
        </span>
      </label>
    </div>
  );
};

export default Toggle;
