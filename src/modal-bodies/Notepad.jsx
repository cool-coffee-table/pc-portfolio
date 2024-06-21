import React, { useCallback, useEffect, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const SAVE_INTERVAL_MS = 2000;
const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  [ "code-block"],
  ["clean"],
];

const TextEditor = () => {
  const [quill, setQuill] = useState(null);

  const editorRef = useCallback((wrapper) => {
    if (!wrapper) return;
    const editorElement = document.createElement("div");
    wrapper.innerHTML = ""; // Clear any previous content
    wrapper.append(editorElement);

    const q = new Quill(editorElement, {
      theme: "snow",
      modules: { toolbar: TOOLBAR_OPTIONS },
    });
    // Enable the editor after initialization
    q.enable(true);
    setQuill(q);
  }, []);

  useEffect(() => {
    if (!quill) return;
    const interval = setInterval(() => {
      localStorage.setItem("document", quill.root.innerHTML);
    }, SAVE_INTERVAL_MS);
    return () => {
      clearInterval(interval);
    };
  }, [quill]);

  useEffect(() => {
    if (!quill) return;
    const savedContent = localStorage.getItem("document");
    if (savedContent) {
      quill.root.innerHTML = savedContent;
    }
    // Cleanup function
    return () => {
      quill.off("text-change");
      quill.off("selection-change");
      quill.off("editor-change");
      quill.off("selection-change");
      setQuill(null);
    };
  }, [quill]);

  return <div className="h-full relative z-50" ref={editorRef}></div>;
};

export default TextEditor;