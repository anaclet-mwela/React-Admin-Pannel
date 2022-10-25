import './style.css';
import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import {
  LineChart,
  Tooltip,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Lengend,
} from 'recharts';

export default function App() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const data = [
    { name: 'Janvier', uv: 400, pv: 2400, amt: 700 },
    { name: 'Fevrier', uv: 700, pv: 2600, amt: 5000 },
    { name: 'Mars', uv: 300, pv: 640, amt: 1500 },
    { name: 'Avril', uv: 300, pv: 768, amt: 350 },
  ];
  return (
    <div>
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="amt" stroke="#000048" />
        <CartesianGrid stroke="#d4d4d4" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Lengend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#da1212"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#488000" />
      </LineChart>
      {/* <h1>Hello StackBlitz!</h1>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      /> */}
    </div>
  );
}
