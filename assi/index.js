const todo = require("./todo");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to the Todo List application!');

rl.question('Enter a Action (add/update/delete/display/exit): ', Action => {
  switch (Action) {
    case 'add':
      rl.question('Enter the task to add: ', task => {
        todo.addTask(task);
      });
      break;
    case 'update':
      rl.question('Enter the ID of the task to update: ', id => {
        rl.question('Enter the updated task: ', task => {
          todo.updateTask(Number(id), task);
        });
      });
      break;
    case 'delete':
      rl.question('Enter the ID of the task to delete: ', id => {
        todo.deleteTask(Number(id));
      });
      break;
    case 'display':
      todo.displayTodoList();
      break;
    case 'exit':
      rl.close();
      break;
    default:
      console.error('Invalid Action!');
  }
});