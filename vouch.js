if (Meteor.isClient) {
  Template.takePhoto.events({
    'click .capture': function() {
      console.log("Button clicked.");
    }
  });
}

MeteorCamera.getPicture();

MeteorCamera.getPicture({});

MeteorCamera.getPicture({}, function(error, data) {
  // something goes here
});

MeteorCamera.getPicture({}, function(error, data) {
  console.log(data);
});

MeteorCamera.getPicture({}, function(error, data) {
  Session.set('photo', data);
});

Template.takePhoto.helpers({
  'photo': function() {
    /// code goes here
  }
});

Template.takePhoto.helpers({
  'photo': function() {
    return Session.get('photo');
  }
});

< template name = "takePhoto" >
  < p > < input type = "button"
class = "capture"
value = "Take Photo" > < /p> < p > {
  {
    photo
  }
} < /p> < /template>

< template name = "takePhoto" >
  < p > < input type = "button"
class = "capture"
value = "Take Photo" > < /p> < p > < img src = "{{photo}}" > < /p> < /template>
