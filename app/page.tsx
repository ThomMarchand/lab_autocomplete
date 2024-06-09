"use client";

import { useState } from "react";

import { autocomplete } from "@/utils/autocomplete";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>();

  // state for autocomplete
  const [cursorIndex, setCursorIndex] = useState<number>();

  // console.log("inputValue state =>", inputValue);
  // console.log("suggestions state", suggestions);

  const handleInputChange = (e: any) => {
    const { value, selectionStart } = e.target;

    if (value) {
      const sugestions = autocomplete({
        userValue: value,
        indexCursor: selectionStart,
      });

      if (sugestions && sugestions.length > 0) {
        setCursorIndex(selectionStart);

        setSuggestions(sugestions);
      } else {
        setCursorIndex(undefined);

        setSuggestions([]);
      }

      setInputValue(value);
    } else {
      setInputValue("");

      setCursorIndex(undefined);
    }
  };

  const handleClick = (e: any) => {
    const { outerText } = e.target;

    autocomplete({
      onClickUserValue: inputValue,
      onClickSelectedValue: outerText,
      indexCursor: cursorIndex,
    });
  };

  const handleKeyDown = (e: any) => {
    if (suggestions) {
      if (e.key === "Tab" && suggestions.length > 0) {
        e.preventDefault();
        setInputValue(suggestions[0]);
        setSuggestions([]);
      }
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="App">
        <textarea
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          style={{ width: "300px", padding: "10px", fontSize: "16px" }}
        />
        {suggestions && suggestions.length > 0 && (
          <ul
            style={{
              border: "1px solid #ccc",
              listStyleType: "none",
              padding: "0",
              marginTop: "10px",
            }}
          >
            {suggestions &&
              suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  style={{ padding: "10px", cursor: "pointer" }}
                  onClick={handleClick}
                >
                  {suggestion}
                </li>
              ))}
          </ul>
        )}
      </div>
    </main>
  );
}
