const profiles = require('../models/profiles.js')

  module.exports = {
    getProfiles: function (req, res) {
      const user = req.session.currentUser;
      const friends = user.friends;
      const friendProfiles = [];

      for (var friend of friends) {
        for (var profile of profiles) {
          if (profile.name === friend) {
            friendProfiles.push(profile)
          }
        }
      }

      return res.status(200).json({currentUser: user, friends: friendProfiles})
    }
  }
