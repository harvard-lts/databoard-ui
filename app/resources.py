from flask_restx import Resource, Api
from flask import request, current_app, make_response, jsonify, render_template
import os, json

# Import data files
from . import data_files

def define_resources(app):
    api = Api(app, version='1.0', title='The Databoard!', description='A tool to report and visualize vital, high-level data points about the Harvard Library Digital Repository Service (DRS)')
    databoard = api.namespace('/', description="A tool to report and visualize vital, high-level data points about the Harvard Library Digital Repository Service (DRS)")

    # Heartbeat/health check route
    @databoard.route('/version', endpoint="version", methods=['GET'])
    class Version(Resource):
        def get(self):
            version = os.environ.get('APP_VERSION', "NOT FOUND")
            return {"version": version}
    @app.route('/hello-world')
    def hello_world():
        return render_template('hello-world.html')
    @app.route('/databoard')
    def databoard():
        data_service = data_files.DataFiles()
        files_per_owner_data = data_service.get_files_per_owner()
        return render_template('databoard.html', files_per_owner_data = files_per_owner_data)
