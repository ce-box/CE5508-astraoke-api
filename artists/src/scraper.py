from src.model import Artist
from bs4 import BeautifulSoup
import requests, string

URL = "https://en.wikipedia.org/wiki"


def format_input(input):

    ''' '''

    input = string.capwords(input)
    input = input.replace(' ','_')
    return input


def artist_has_wiki(name):

    ''' '''

    query = format_input(name)
    url_open = requests.get(f'{URL}/{query}')
    return url_open.status_code != 404


def get_artist_info(name):

    ''' '''
    results = dict()
    query = format_input(name)
    
    url_open = requests.get(f'{URL}/{query}')
    soup = BeautifulSoup(url_open.content, 'html.parser')
    
    details = soup('table', {'class':'infobox'})

    for element in details:
        h = element.find_all('tr')
        for j in h:
            heading = j.find_all('th')
            detail = j.find_all('td')
            if heading and detail:
                for head,det in zip(heading, detail):
                    results[head.text] = det.text
    
    if results == {}:
        return None

    about = [ p.text for p in soup('p')[1:3]]
    
    results['about'] = about
    results['name'] = name

    return results


def format_data(input_dict, fields):
    
    args = {}

    for key in input_dict:
        _key = key.lower()
        if _key in fields:
            args[_key] = input_dict[key]

    return Artist(**args)
