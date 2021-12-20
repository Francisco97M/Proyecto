#Francisco Javier Morales Amaya program of solid

class Food:
    def __init__(self, meal,ingredient, price):
        self.meal = meal
        self.price = price
        self.ingredient = ingredient

class Type:
    def __init__(self,tickets):
        self.tickets = tickets

#This is where I did a class of the ticket where I add the dishes, the ticket, the method of payment and the identification
#Also I did the function to print a presentable ticket with all the data they give us
class Ticket:
    def __init__(self,dishes,tickets,method,id):
        self.tickets = Type(tickets)
        self.dishes = dishes
        self.total = 0
        self.method = method
        self.id = id

    def print_date(self):
        print("Date: 5/11/21 \n")

    def print_tickets(self):
        print("Type: " + self.tickets.tickets)

    def print_pay_method(self):
        print("Paying method: " + self.method)

    def print_identification(self):
        print("Identification: " + self.id + "\n")   
        
    def print_dishes(self):
        for food in self.dishes:
            print(food.meal + ' of ' + food.ingredient + ': $' + str(food.price))     

    def print_total(self):
        for food in self.dishes:
            self.total = self.total + food.price
        print("\nTotal (in MXN): $" + str(self.total))
    
    def print_finishline(self):
        print("-------------")

    def print_ticket(self):
        self.print_date()
        self.print_tickets()
        self.print_pay_method()
        self.print_identification()
        self.print_dishes()
        self.print_total()
        self.print_finishline()

#Class of the order where here we're going to add all the info for the ticket
class Order:
    def __init__(self, dishes,tickets):
        self.dishes = dishes
        self.method = Pay_Method()
        self.ticket = Ticket(dishes,tickets,self.method.pay_method,self.method.identification.type)
        self.tickets = tickets

    def set_pay_method(self):
        self.ticket = Ticket(self.dishes,self.tickets,self.method.pay_method,self.method.identification.type)

#Class with all the functions of facial recognition
class Identification:
    def __init__(self):
        self.type = 'Facial recognition'

    def use_cash(self):
        self.pay_method = 'Facial recognition'
        self.identification.use_id()

    def use_id(self):
        self.type = 'ID'

    def use_sms(self):
        self.type = 'SMS code'

#Class with all the functions of the paying methods
class Pay_Method:
    def __init__(self):
        self.pay_method = 'Cash'
        self.identification = Identification()

    def cash(self):
        self.pay_method = 'Cash'
        self.identification.use_id()

    def debit(self):
        self.pay_method = 'Banca movil'
        self.identification.use_id()

    def appleplay(self):
        self.pay_method = 'Apple Pay'
        self.identification.use_sms()

#The data we gave to the ticket and we print it
order = Order([Food('Burrito','picadillo',75),Food('Pizza','three meats',139),Food('Soup','chicken',50),Food('Tacos','trompo',60)],'In Place')
order2 = Order([Food('Burrito','deshebrada',75),Food('Pizza','pepperoni',79),Food('Soup','meat',85)],'Delivery')
order.ticket.print_ticket()


order2.method.cash()
order2.set_pay_method()
order2.ticket.print_ticket()