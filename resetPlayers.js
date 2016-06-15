'use strict';
let firebase = require('firebase');
let _ = require('lodash');

firebase.initializeApp({
  serviceAccount: 'Playing-df6b999b486a.json',
  databaseURL: 'https://playing-4376d.firebaseio.com'
});

let playersRef = firebase.database().ref('players');

playersRef.on('value', (snapshot) => {
  let players = snapshot.val();

  let playersUpdate = _.fromPairs(_.map(players, (player, uid) => {
    return [ `${uid}/playingToday`, false ];
  }));

  playersRef.update(playersUpdate);
});