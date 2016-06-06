import { Mongo } from 'meteor/mongo';

export const Bins = new Mongo.Collection('bins');

Meteor.methods({
  'bins.insert': function () {
    return Bins.insert({
      createdAt: new Date(),
      content: '',
      sharedWith: [],
      owner: this.userId
    });
  },
  'bins.remove': function (bin) {
    return Bins.remove(bin);
  },
  'bins.update': function (bin, content) {
    return Bins.update( bin._id, {
      $set : { content }
    });
  }
});
