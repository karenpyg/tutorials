class Dummy(object):
    def __getattribute__(self, attr):
        __dict__ = super(Dummy, self).__getattribute__('__dict__')
        if attr in __dict__:
            return super(Dummy, self).__getattribute__(attr)
        return attr.upper()