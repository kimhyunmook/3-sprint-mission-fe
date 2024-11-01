import { useEffect, useState } from "react";

export function useItmeList(items, leng) {
  const [_list, _setList] = useState(items);
  const [_length, _setLength] = useState(leng);
  return {
    value: _list,
    setValue: (setItems) => {
      _setList(setItems);
    },
    length: _length,
    setLength: (setLeng) => {
      _setLength(setLeng);
    },
  };
}

export function usePageNavi(sNum, lNum) {
  const [start, setStart] = useState(sNum);
  const [last, setLast] = useState(lNum);
  return {
    start,
    setStart: (startNum) => {
      setStart(startNum);
    },
    last,
    setLast: (lastNum) => {
      setLast(lastNum);
    },
  };
}

export function useChange() {
  const [value, setValue] = useState("");
  const handler = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  return {
    value,
    set: (v) => setValue(v),
    onChange: handler,
  };
}

export function useScreenSize() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    const handle = () => setWindowSize(window.innerWidth);
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("resize", handle);
    };
  }, []);

  return windowSize;
}
