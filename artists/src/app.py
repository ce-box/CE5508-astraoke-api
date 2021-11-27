from flask import Flask
from flask_cors import CORS

from src.service import ArtistService

app = Flask(__name__)
CORS(app)

@app.route('/')
def root():
    return 'hello'


@app.route('/api/v1/artists/<name>', methods=['GET'])
def get_artist(name):

    service = ArtistService()

    try:
        response = service.get_artist_info(name)
        return response, 200
    except Exception:
        return {'message':f'Artist {name} not found'},404 
