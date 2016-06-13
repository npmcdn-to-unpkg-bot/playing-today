angular.module('Playing').component('games', {
    bindings: {
        games: '<',
        highlightCount: '<'
    },
    template: "\n    <div>\n      <!-- Nav tabs -->\n      <ul class=\"nav nav-tabs\" role=\"tablist\">\n        <li role=\"presentation\" class=\"active\"><a href=\"#home\" aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Home</a></li>\n        <li role=\"presentation\"><a href=\"#profile\" aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\">Profile</a></li>\n      </ul>\n\n      <!-- Tab panes -->\n      <div class=\"tab-content\">\n        <div role=\"tabpanel\" class=\"tab-pane active\" id=\"home\">\n        </div>\n        <div role=\"tabpanel\" class=\"tab-pane\" id=\"profile\">\n        </div>\n      </div>\n    </div>\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>Game</th>\n          <th>Number of Players</th>\n        </tr>\n      </thead>\n      <tr ng-repeat=\"game in $ctrl.games | orderBy:'name'\">\n        <td class=\"name\">{{ game.name }}</td>\n        <td>\n          <recommended-players num-players=\"game.numberOfPlayers\"\n            highlight-count=\"$ctrl.highlightCount\"></recommended-players>\n        </td>\n      </tr>\n    </table>"
});
