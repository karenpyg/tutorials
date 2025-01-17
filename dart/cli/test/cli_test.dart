import 'package:cli/cli.dart';


void main(List<String> arguments) {
  final taskManager = TaskManager();

  if (arguments.isNotEmpty) {
    final command = arguments[0];

    switch (command) {
      case 'add':
        taskManager.addTask(arguments[1]);
        break;
      case 'remove':
        taskManager.removeTask(arguments[1]);
        break;
      case 'list':
        taskManager.listTasks();
        break;
      default:
        print('Unknown command');
    }
  } else {
    print('No command provided');
  }
}
