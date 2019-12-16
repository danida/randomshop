from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import connexion
from connexion.resolver import RestyResolver
from flask_injector import FlaskInjector
db = SQLAlchemy()

from services.productService import productService


from injector import Binder

def configure(binder: Binder) -> Binder:
    binder.bind(productService,
                productService())

def create_app():

    app = connexion.FlaskApp(__name__, port=9090, specification_dir='../swagger')
    app.add_api('api.yaml', resolver=RestyResolver('api'))
    app.app.config.from_pyfile('../config.py')
    CORS(app.app)
    FlaskInjector(app=app.app,modules=[configure])

    db.init_app(app.app)
    with app.app.app_context():
        from . import models
        db.create_all()
        db.session.commit()

    return app