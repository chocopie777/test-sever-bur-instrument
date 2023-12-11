import React, {Component} from "react";
import {Checkbox, Divider, IconButton, Paper, TextField} from "@mui/material";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

//типизация пропсов для компоненты Task
interface TaskProps {
  text: string,
  isChecked: boolean,
  id: string,
  onCheckbox: (id: string) => void,
  onClickRemove: (id: string) => void,
  onClickEdit: (id: string, e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
}

export class Task extends Component<TaskProps, { isEdit: boolean }> {
  //конструктор в котором инициализируем начальное состояние компоненты
  constructor(props: TaskProps) {
    super(props);
    this.state = {
      isEdit: false,
    }
  }

  //метод с помощью которого меняем состояние поля isEdit
  // чтобы отобразить html элементы для редактирования назхвания существующей компоненты
  handleEditTask = () => {
    this.setState({
      isEdit: !this.state.isEdit,
    });
  }

  //метод который вызывает метод handleEditTask по нажатию клавишы Enter
  handlePressEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if(e.key === 'Enter') {
      this.handleEditTask();
    }
  }

  render() {
    return (
      <Paper sx={{marginBottom: '10px', display: 'flex', height: '50px'}} variant='outlined'>
        <Checkbox checked={this.props.isChecked}
                  onClick={() => this.props.onCheckbox(this.props.id)}/>
        <Divider orientation='vertical' flexItem/>
        {/*Если isEdit равен true то отображает разметку после "?"
        , а если false то после ":" (тернарный оператор)*/}
        {this.state.isEdit ?
          <>
            <TextField sx={{width: '100%', justifyContent: 'center', marginLeft: '10px'}}
                       variant="standard"
                       value={this.props.text}
                       autoFocus
                       onKeyDown={(e) => this.handlePressEnter(e)}
                       onChange={e => this.props.onClickEdit(this.props.id, e)}/>
            <IconButton color='primary' onClick={this.handleEditTask}>
              <DoneIcon/>
            </IconButton>
          </>
          :
          <>
            <p className='text'>{this.props.text}</p>
            <Divider orientation='vertical' flexItem/>
            <IconButton color='default' onClick={this.handleEditTask}>
              <BorderColorIcon/>
            </IconButton>
          </>
        }
        <Divider orientation='vertical' flexItem/>
        <IconButton color='error' onClick={() => this.props.onClickRemove(this.props.id)}>
          <DeleteIcon/>
        </IconButton>
      </Paper>
    );
  }
}