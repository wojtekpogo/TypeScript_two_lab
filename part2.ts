let myTaskArray: Array<string> = [];

function addTask(task: string): number {

    myTaskArray.push(task);
    console.log("Item " + task + " has been added to the Array.");
    return myTaskArray.length;

}//addTask function

function listAllItems(): void {

    /*
    for (let i = 0; i < myTaskArray.length; i++) {
        //console.log("Task number "+i+" "+);
    }
    */
    console.log("List of items in the array is ::");
    myTaskArray.forEach(function (item) {
        console.log(item);
    })
}//listAllItems function

function deleteTask(task: string): number {

    let num = myTaskArray.indexOf(task);

    if (num > -1) {
        myTaskArray.splice(num, 1);
        console.log("Item " + task + " index: " + num + " has been removed");
    }
    else {
        console.log("Item " + task + " is not in the array.");
    }

    return myTaskArray.length;
}

addTask("Complete Part A");

let itemsInArray: number = addTask("Complete Part B");
console.log("Number of items in array is " + itemsInArray);
listAllItems();

let count:number = deleteTask("Complete Part A");
console.log("Number of items in array is " + count);





