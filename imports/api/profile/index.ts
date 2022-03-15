import { Meteor } from "meteor/meteor";

Meteor.methods({
  "profile.update": function ({ locale, theme }) {
    const user = Meteor.users.findOne(this.userId);
    if (!user) throw new Meteor.Error(400);

    const newProfile = {
      ...user.profile,
      locale: locale || user.profile?.locale,
      theme: theme || user.profile?.theme,
    };

    Meteor.users.update(this.userId, {
      $set: {
        profile: newProfile,
      },
    });
  },
});
