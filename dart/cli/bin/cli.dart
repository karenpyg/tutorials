import 'package:cli/cli.dart';
// bin/cli.dart

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

String greetings(String name, [String title = '']) {
  if (title.isEmpty) {
    return 'hello $name';
  }

  return '';
}

String WithNamedParams(String name, {String title = ''}) {
  if (title.isEmpty) {
    return "hello $name";
  }

  return "hello $title $name";
}

void connect(String host,
    {int port = 3306, required String user, required String password}) {
  print("Connecting to $host on $port using $user/$password"); 
  }
