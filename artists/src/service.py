from src.model import Artist
import src.scraper as scp

class ArtistService:

    def __init__(self) -> None:
        pass

    def get_artist_info(self, name):

        '''
            Returns 
        '''
        
        if not scp.artist_has_wiki(name):
            print (f'ERROR: {name} does not have a wiki page...')
            raise Exception()
        
        content = scp.get_artist_info(name)
        #print(content)
        if not content:
            print (f'ERROR: {name} does not have a wiki page...')
            raise Exception()

        artist = scp.format_data(content, fields=Artist.schema())
        return artist.to_dict()
