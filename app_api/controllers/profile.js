var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.profileRead = function(req, res) {
  console.log(req.payload);
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    User.findById(req.payload._id).exec(function(err, user) {
        res.status(200).json(user);
      });
  }

};

// function that saves idea, description with userID
module.exports.add_idea = function(req, res) {
  console.log(req.body);
  if (!req.body.userName) {
    res.status(401).json({
      "message" : "UnauthorizedError: User not Validated"
    });
  } else {
    // finds information of user by user email
    User.findOne({'email': req.body.userName}).exec(function(err, user) {
        if (err) {
          console.log(err);
          res.status(401).json({
            "message" : "UnauthorizedError: user not found"
          });
        } else {
          var idea = {};
          idea.ideaName = req.body.ideaName;
          idea.ideaDescription = req.body.ideaDescription;
          user.ideas.push(idea);
          console.log(user.ideas);
          user.save(function(err, result) {
            if (err) {
              console.log(err);
            }
            else {
              res.redirect('/profile');
            }
          });
        }
    });
  }
}
