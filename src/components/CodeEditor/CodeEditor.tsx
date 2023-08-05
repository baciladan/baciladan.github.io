/*
 *    Copyright ©️ [ / ] Studios 2023
 */

import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { useState, useEffect } from "react";
import "./CodeEditor.css";

export const CodeEditor = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="editor-container">
      <div className="editor-control-buttons">
        <div className="control-button control-button-close"></div>
        <div className="control-button control-button-minify"></div>
        <div className="control-button control-button-expand"></div>
      </div>
      <div className="editor-action-window">
        <div className="editor-file-explorer"></div>
        <div className="editor-file-header">
          <div className="file-header-item"></div>
        </div>
        <div className="editor-open-file">
          <pre>
            <code></code>
          </pre>
        </div>
      </div>
    </div>
  );
};
