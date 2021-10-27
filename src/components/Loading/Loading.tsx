import { useEffect, useState } from "react";

const Loading = () => {
  const [text, setText] = useState("Now Loading..");
  useEffect(() => {
    const id = setInterval(() => {
      setText((prev) => `${prev}.`);
    }, 300);

    return () => {
        clearInterval(id);
    }
  }, []);

  return <div>{text}</div>;
};

export default Loading;
