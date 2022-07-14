import React from "react"

export const Button: React.FC<{ text: string, onClick: React.MouseEventHandler<HTMLButtonElement> }> = ({
  text,
  onClick
}) => {
  return (
    <button
      className="bg-blue-500 text-white rounded-lg mx-1 py-2 px-4 font-semibold"
      onClick={onClick}
    >
      {text}
    </button>
  )
}
