import pytest
from solidpoo import Order,Food

def test_order():
        try:
                order = Order([Food('Burrito','picadillo',75),Food('Pizza','three meats',139),Food('Soup','chicken',50),Food('Tacos','trompo',60)],'In Place')
                assert True
        except:
                raise

def test_order1():
        try:
                order = Order([Food('Burrito','picadillo',75),Food('Pizza','three meats',139),Food('Soup','chicken',50),Food('Tacos','trompo',60)],'In Place')
                order.ticket.print_ticket()
                assert True
        except:
                raise

def test_method():
        try:
                order2 = Order([Food('Burrito','deshebrada',75),Food('Pizza','pepperoni',79),Food('Soup','meat',85)],'Delivery')
                order2.method.cash()
                order2.set_pay_method()
                order2.ticket.print_ticket()
                assert True
        except:
                raise
