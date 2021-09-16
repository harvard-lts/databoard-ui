from flask_restx import Resource, Api
from flask import request, current_app, make_response, jsonify, render_template
import os, json

# Import custom class files here
#from . import <class> <class>

def define_resources(app):
    api = Api(app, version='1.0', title='DRS Data Dashboard', description='A tool to report and visualize vital, high-level data points about the Harvard Library Digital Repository Service (DRS)')
    dashboard = api.namespace('/', description="A tool to report and visualize vital, high-level data points about the Harvard Library Digital Repository Service (DRS)")

    # Heartbeat/health check route
    @dashboard.route('/version', endpoint="version", methods=['GET'])
    class Version(Resource):
        def get(self):
            version = os.environ.get('APP_VERSION', "NOT FOUND")
            return {"version": version}
    @app.route('/hello-world')
    def hello_world():
        return render_template('index.html')