class client:
    _loaded = {}
    _db_file = "file.db"

    def __new__(cls, client_id):
        if (client:= cls._loaded.get(client_id)) is not None:
            print(f"returning existing client {client_id} from cache")
            return client 
        client = super().__new__(cls)
        cls._loaded[client_id] = client
        client._init_from_db(client_id, cls._db_file)
        return client 
    
def _init_from_db():
    pass 

