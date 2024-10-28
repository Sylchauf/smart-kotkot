import { Meteor } from "meteor/meteor";

Meteor.methods({
  "profile.update": async function ({ locale, theme }) {
    const user = await Meteor.users.findOneAsync(this.userId);
    if (!user) throw new Meteor.Error(400);

    const newProfile = {
      ...user.profile,
      locale: locale || user.profile?.locale,
      theme: theme || user.profile?.theme,
    };

    await Meteor.users.updateAsync(this.userId, {
      $set: {
        profile: newProfile,
      },
    });
  },
});
