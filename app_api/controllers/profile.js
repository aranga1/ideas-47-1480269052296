var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.profileRead = function(req, res) {
  console.log("payload is");
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

module.exports.add_idea = function(req, res) {
  console.log("got to add_idea");
  console.log(req.body);
  if (!req.body.userName) {
    res.status(401).json({
      "message" : "UnauthorizedError: User not Validated"
    });
  } else {
    console.log("Got to this");
    User.findOne({'email': req.body.userName}).exec(function(err, user) {
        if (err) {
          console.log(err);
          res.status(401).json({
            "message" : "UnauthorizedError: user not found"
          });
        } else {
          console.log("found user with id" + req.body.userName);
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
              //res.status(200).json(result);
              //res.json(result);
              res.redirect('/profile');
            }
          });
        }
    });
  }
}
