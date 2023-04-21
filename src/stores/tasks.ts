import type { Task } from "@/frontType";
import { defineStore } from "pinia";

import DATA from "../data.json";

export const useTaskStore = defineStore("tasks", {
  state() {
    return{
      tasks: JSON.parse(JSON.stringify(DATA)),
    }
  },
  getters: {
    getTasks() : Task[] {
      return this.tasks;
    },
    getLastId() : number {
      return this.tasks[this.tasks.length - 1].id;
    }
  },
  actions: {
    addTask(task : Task){
      this.tasks.push(task)
    },
    updateColumn(id: number, column: string){
      const index = this.tasks.findIndex((task: Task) => task.id === id)
      this.tasks[index].column = column
    },
  }
});
