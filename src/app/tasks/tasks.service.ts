import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";

@Injectable({
    providedIn: 'root'
})
export class TasksService {
    private tasks = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary: 'Learn all about Angular framework and build awesome web applications.',
            dueDate: '2025-12-31',
        },
        {
            id: 't2',
            userId: 'u3',
            title: 'Build First Prototype',
            summary: 'Build the first prototype of the new project using Angular and Node.js.',
            dueDate: '2024-05-31',
        },
        {
            id: 't3',
            userId: 'u3',
            title: 'Prepare issue template',
            summary: 'Prepare a comprehensive issue template for the project repository on GitHub.',
            dueDate: '2024-06-31',
        }
    ];

    getUserTasks(userId: string) {
        return this.tasks.filter(task => task.userId === userId);
    }

    addTask(taskData: NewTaskData, userId: string) {
        this.tasks.unshift({
            id: 't' + (this.tasks.length + 1),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
        });
    }

    removeTask(taskId: string) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
}