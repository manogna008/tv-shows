import { useState } from "react";
import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar({ onSubmit }) {
  const [value, setValue] = useState();
  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
      setValue("");
    }
  }

  function getValue(e) {
    setValue(e.target.value);
  }
  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input
        onChange={getValue}
        onKeyUp={submit}
        type="text"
        className={s.input}
        placeholder={"Search a Tv Show you may like"}
        value={value}
      />
    </>
  );
}
