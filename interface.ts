export interface ToDoInterface{

    addTask(task: string): number;
    listAllItems(): void;
    deleteTask(task: string): number;

    myTaskArray: Array<string>;
}