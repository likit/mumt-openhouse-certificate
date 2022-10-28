import firebase_admin
from firebase_admin import auth, credentials, firestore
import pandas as pd
import sys

cred = credentials.Certificate('mumt-openhouse-certificate-firebase-adminsdk-swnrd-8cdcd9ee89.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

collection = db.collection('participants')

excel_file = sys.argv[1]

df = pd.read_excel(excel_file)

for idx, row in df.iterrows():
    collection.add({'firstname': row['firstname'], 'lastname': row['lastname']})

print('Done.')