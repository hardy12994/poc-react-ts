import React from 'react';
import ReactDOM from 'react-dom/client';
import MyElement from "./components/demoElement";
import Button from "./components/button";
import Form from "./components/form";
import Input from "./components/input";

const element = document.getElementById('root')!;
const root = ReactDOM.createRoot(element);

root.render(
  <React.StrictMode>
      <hr/>

      <MyElement />
      <hr/>

      <Button />
      <hr/>

      <Input />
      <hr/>

      <Form />

  </React.StrictMode>
);
