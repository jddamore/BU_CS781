import os
import json

files = os.listdir("./samples")

for x in files:
    file = open("./samples/" + x, "r")
    data = json.load(file)
    id = data["entry"][0]["resource"]["id"]
    print(id)
