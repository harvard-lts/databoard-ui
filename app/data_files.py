from flask import current_app
import os, json

class DataFiles():
    def get_data(self):
        current_app.logger.info('Loading data from json file.')
        filename = os.path.join(current_app.static_folder, 'files', 'files_per_owner.json')
        with open(filename) as data_file:
            drs_data = json.load(data_file)
        current_app.logger.info('Successfully loaded data.')
        return json.dumps(drs_data)