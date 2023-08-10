import firebase_admin
from firebase_admin.credentials import Certificate
import json

# Inicializando o SDK do Firebase usando credenciais do arquivo JSON
with open('../credentials.json', 'r') as f:
    credentials = json.load(f)
cred = Certificate(credentials)

default_app = firebase_admin.initialize_app(cred, {
	'databaseURL':credentials['databaseURL']
	})
	