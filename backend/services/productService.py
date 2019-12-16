import requests
from app import db

from app.models import Product
from sqlalchemy import update


class productService(object):
    def  __init__(self):
        pass

    def read_products(self) -> tuple:
        return [row.as_dict() for row in Product.query.all()], 200
