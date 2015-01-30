//client only code
if (Meteor.isClient) {
  var Items = [
    {
      price: 500,
      name: 'apple',
      unit: 'bushel'
    },
    {
      price: 1000,
      name: 'bananas',
      unit: 'kilo'
    },
    {
      price: 2000,
      name: 'cake',
      unit: 'slice'
    }
  ];
  
  Template.selectItem.helpers({
    items: Items
  });
  
  Template.selectItem.events({
    'change .select_item': function(event, template) {
      event.preventDefault();
      
      console.log(this);
      console.log(template.data);
      console.log(Blaze.getData(event.target));
      var view = Blaze.getView(event.target);
      console.log(view);
      var item = Blaze.getData(event.target);
      console.log(item);
      Blaze.renderWithData(Template.selectedResults, item, document.getElementById('results'));
    }
  });
}