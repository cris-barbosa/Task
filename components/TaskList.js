/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {ScrollView, View, Text, TextInput, Button, Keyboard} from 'react-native';

import style from '../styles/TaskList'

class TaskList extends Component {
  constructor() {
    super();
    this.state = {
      newTask: '',
      tasks: [
        {
          done: false,
          title: 'Nice'
        }
      ],
    };
  }

  createTask = () => {
    const { tasks } = this.state
    Keyboard.dismiss()
    this.setState({
      tasks: [...tasks, {
        done: false,
        title: this.state.newTask
      }],
      newTask: '',
    })
  }

  render() {
    return (
      <View style={style.container}>
        <ScrollView style={style.scrollableView}>
          {
            this.state.tasks.map((task, index) => {
              return (<Text key={index}>{task.title}</Text>)
            })
          }
        </ScrollView>
        <View style={style.taskInputContainer}>
          <TextInput
            value={this.state.newTask}
            placeholder="Enter New Task Here..."
            onChangeText={(newTask) => {
              this.setState({
                newTask
              })
            }}
            style={style.taskInput}
            onSubmitEditing={() => {
              this.createTask()
            }}
          />
          <Button
            onPress={() => {
              this.createTask()
            }}
            disabled={this.state.newTask == ''}
            title="Add"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    );
  }
}

export default TaskList;
