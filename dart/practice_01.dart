main() {
  // null aware operators
  var monday = 'doctor';
  var tuesday;
  var next = tuesday ?? monday;
  print('next appointment is $next');

  // the ??= operator assigns a value iff it is not null 
  String thursday;
  next ??= wednesday; 

  
}
