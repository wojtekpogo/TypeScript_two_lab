import {ToDoInterface} from './interface';

class ToDo implements ToDoInterface{
    
    myTaskArray: Array<string> = [];

    addTask(task: string): number {

        this.myTaskArray.push(task);
        console.log("Item " + task + " has been added to the Array.");
        return this.myTaskArray.length;
    
    }//addTask function

    listAllItems(): void {

        /*
        for (let i = 0; i < myTaskArray.length; i++) {
            //console.log("Task number "+i+" "+);
        }
        */
        console.log("List of items in the array is ::");
        this.myTaskArray.forEach(function (item) {
            console.log(item);
        })
    }//listAllItems function

    deleteTask(task: string): number {

        let num = this.myTaskArray.indexOf(task);
    
        if (num > -1) {
            this.myTaskArray.splice(num, 1);
            console.log("Item " + task + " index: " + num + " has been removed");
        }
        else {
            console.log("Item " + task + " is not in the array.");
        }
    
        return this.myTaskArray.length;
    }
}//class