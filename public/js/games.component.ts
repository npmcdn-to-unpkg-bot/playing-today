angular.module('Playing').component('games', {
  bindings: {
    games: '<',
    highlightCount: '<'
  },
  template: `
    <div>
      <!-- Nav tabs -->
      <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a></li>
        <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
      </ul>

      <!-- Tab panes -->
      <div class="tab-content">
        <div role="tabpanel" class="tab-pane active" id="home">
        </div>
        <div role="tabpanel" class="tab-pane" id="profile">
        </div>
      </div>
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Game</th>
          <th>Number of Players</th>
        </tr>
      </thead>
      <tr ng-repeat="game in $ctrl.games | orderBy:'name'">
        <td class="name">{{ game.name }}</td>
        <td>
          <recommended-players num-players="game.numberOfPlayers"
            highlight-count="$ctrl.highlightCount"></recommended-players>
        </td>
      </tr>
    </table>`
});
