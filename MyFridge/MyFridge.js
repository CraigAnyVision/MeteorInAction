Products = new Mongo.Collection('products');

if (Meteor.isClient) {

    Template.fridge.helpers({
      products: function () {
          return Products.find({
              place: 'fridge'
          });
      }
    });

    Template.productList.helpers({
        products: function(){
            return Products.find({place: 'supermarket'});
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {

        // clear the database of previous objects
        Products.remove({});

        // fill the database with some products
        Products.insert({
            name: 'Milk',
            img: '/milk.png',
            place: 'fridge'
        });

        Products.insert({
            name: 'Bread',
            img: '/bread.png',
            place: 'supermarket'
        });
    })
}