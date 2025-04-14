class HandlerRegistry:
    _handlers = {}
    
    @classmethod
    def register(cls, name):
        def decorator(handler_class):
            cls._handlers[name] = handler_class
            return handler_class
        return decorator
    
    @classmethod
    def get_handler(cls, name, *args, **kwargs):
        handler_class = cls._handlers.get(name)
        if not handler_class:
            raise ValueError(f"No handler registered for {name}")
        return handler_class(*args, **kwargs)

# Usage
@HandlerRegistry.register("email")
class EmailNotificationHandler:
    def send(self, message):
        print(f"Sending email: {message}")

@HandlerRegistry.register("sms")
class SMSNotificationHandler:
    def send(self, message):
        print(f"Sending SMS: {message}")

# Client code
handler = HandlerRegistry.get_handler("email")
handler.send("Hello World!")