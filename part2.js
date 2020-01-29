var myTaskArray = [];
function addTask(task) {
    myTaskArray.push(task);
    console.log("Item " + task + " has been added to the Array.");
    return myTaskArray.length;
} //addTask function
function listAllItems() {
    /*
    for (let i = 0; i < myTaskArray.length; i++) {
        //console.log("Task number "+i+" "+);
    }
    */
    console.log("List of items in the array is ::");
    myTaskArray.forEach(function (item) {
        console.log(item);
    });
} //listAllItems function
function deleteTask(task) {
    var num = myTaskArray.indexOf(task);
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
var itemsInArray = addTask("Complete Part B");
console.log("Number of items in array is " + itemsInArray);
listAllItems();
var count = deleteTask("Complete Part A");
console.log("Number of items in array is " + count);
