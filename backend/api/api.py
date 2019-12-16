from flask_injector import inject

from  app.models import Product
from  services.productService import productService


@inject
def search(data_provider: productService) -> list:
    return data_provider.read_products()