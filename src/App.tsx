import * as React from "react";
import {Component} from "react";
import './assets/styles/index.scss';
import {TodoList} from "./pages/TodoList";

export default class App extends Component {
  render() {
    return (
      <TodoList/>
    )
  }
}