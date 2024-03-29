import React from 'react';
import {Provider} from "mobx-react";
import ArepaStore from './stores/FotosStore';
import Menu from "./Menu";

export default function App(){
  return (
    <Provider ArepaStore={ArepaStore}>
      <Menu/>
    </Provider>
  )
}