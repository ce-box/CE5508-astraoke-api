import json

class Artist:

    def __init__(self, name, genres, about):
        self.name = name
        #self.origin = origin
        self.genres= genres
        self.about = about

    
    def to_dict(self):
        return vars(self)

    
    @staticmethod
    def schema():
        return ['name','genres','about']