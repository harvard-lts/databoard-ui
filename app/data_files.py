from flask import current_app
import os, json

class DataFiles():
    def get_files_per_owner(self):
        current_app.logger.info('Loading files per owner data from json file.')
        filename = os.path.join(current_app.static_folder, 'files', 'files_per_owner.json')
        with open(filename) as files_per_owner_file:
            files_per_owner_data = json.load(files_per_owner_file)
        current_app.logger.info('Successfully loaded files per owner data.')
        return json.dumps(files_per_owner_data)