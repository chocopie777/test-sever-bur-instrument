import React from "react";
import {Component} from "react";
import {ListType} from "../types/types";
import {Task} from "./Task";

//типизация пропсов для компоненты Tasks
interface TasksProps extends ListType {
  onCheckbox: (id: string) => void,
  onClickRemove: (id: string) => void,
  onClickEdit: (id: string, e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
}

export class Tasks extends Component<TasksProps, {}> {

  render() {
    return (
      <div>
        {/*с помощью map перебираем все элементы массива list  данные каждого элемента массива передаем в компоненту Task
        для генерации задач на основе переднных ей данных*/}
        {this.props.list.map(item =>
          <Task
            key={item.id}
            {...item}
            onCheckbox={this.props.onCheckbox}
            onClickRemove={this.props.onClickRemove}
            onClickEdit={this.props.onClickEdit}
          />)}
      </div>
    );
  }
}