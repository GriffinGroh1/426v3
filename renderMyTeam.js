
export const renderHeader = function() {
  
  return `<section>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <a href="http://nfl.com">
    <img src="logo.png" width="100" height="100">
  </a>
  <div class="navbar-brand">

  <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>
</div>

<div id="navbarBasicExample" class="navbar-menu">
  <div class="navbar-start">
    <a class="navbar-item" onclick="window.open('index.html','_self')">
      Home
    </a>

    <a class="navbar-item" onclick="window.open('players.html', '_self')">
      Players
    </a>

    <a class="navbar-item" onclick="window.open('teams.html', '_self')">
      Teams
    </a>

    <a class="navbar-item" onclick="window.open('myTeam.html', '_self')">
      My Team
    </a>
    <a class="navbar-item">
      <input class="input" type="text" placeholder="Search">
    </a>
  
    
      </div>
    </div>
  </div>

  <div class="navbar-end">
    <div class="navbar-item">
      <div class="buttons">
        <a class="button is-info" onclick="window.open('signup.html', '_self')">
          <strong>Sign up</strong>
        </a>
        <a class="button is-light" onclick="window.open('signup.html', '_self')">
          Log in
        </a>
      </div>
    </div>
  </div>
</div>
</nav>

</br>

<div id="pageheader">
</div>
  </section>`;

  
};

export const renderPage = function(player, team) {
  
 return`<p class="title is-4" style="background: ${team.Primary}; color: white;">
 <img class="image" style="display: inline-block; width: 7%; height: 7%" src="${team.Img}">
 <img class="image" style="display: inline-block; width: 10%; height: 10%" src="${player.Img}">
 &nbsp;&nbsp;${player.Player} -- ${player.FantPos} -- ${team.Place} ${team.Mascot}
<span style="float: right">Points: ${player.FantPt}&nbsp;&nbsp;&nbsp;<button class="button is-dark">Remove Player</button></span></p>
 <p class="subtitle is-6" style="background: ${team.Primary}; color: white; text-align: center">
 <span style="font-weight: bold">Pass Att: </span>${player.PassAtt} &nbsp;&nbsp;
 <span style="font-weight: bold">Pass Yds: </span>${player.PassYds} &nbsp;&nbsp;
 <span style="font-weight: bold">Pass TDs: </span>${player.PassTD} &nbsp;&nbsp;
 <span style="font-weight: bold">Rush Att: </span>${player.RushAtt} &nbsp;&nbsp;
 <span style="font-weight: bold">Rush Yds: </span>${player.RushYds} &nbsp;&nbsp;
 <span style="font-weight: bold">Rush TDs: </span>${player.RushTD} &nbsp;&nbsp;
 <span style="font-weight: bold">Recs: </span>${player.Rec} &nbsp;&nbsp;
 <span style="font-weight: bold">Rec Yds: </span>${player.RecYds} &nbsp;&nbsp;
 <span style="font-weight: bold">Rec TDs: </span>${player.RecTD}
 
 </p>`;
};


export const handleFlipSubmit = function(event) {
    

    event.preventDefault();
    let PlayerCode = $(event.currentTarget).attr("data");

    let editPlayer = playerData.find((player) => player.PlayerCode == PlayerCode);
    let team = teamData.find((t) => t.Team == editPlayer.Tm);
    let editPlayerForm = renderBackCard(editPlayer, team);
    
  $(`#${editPlayer.PlayerCode}`).replaceWith(editPlayerForm);
    

};

export const handleFlipBackSubmit = function(event) {
  

  event.preventDefault();
  
  let PlayerCode = $(event.currentTarget).attr("data");

  let editPlayer = playerData.find((player) => player.PlayerCode == PlayerCode);
  let team = teamData.find((t) => t.Team == editPlayer.Tm);
  let PlayerForm = renderPage(editPlayer, team);
  
  $(`#${editPlayer.PlayerCode}`).replaceWith(PlayerForm);
  

};

export const loadPage = function(players) {

     // Grab a jQuery reference to the root HTML element
     
    
     const $root = $('#root');
    $root.on("click", "#flip-button", handleFlipSubmit);
    $root.on("click", "#flip-back-button", handleFlipBackSubmit);

    $root.append(renderHeader);
    $('#pageheader').append('<div id="addhere" class="column"><p class="title is-2" style="text-align: center">--- Welcome to My Team ---</p><p class="subtitle" style="text-align: center">Add Players to Find the Best Possible Team</p>');
    let team;
    let totalPoints = 0;
    let totPassAtt = 0;
    let totPassYds =0;
    let totPassTD = 0;
    let totRushAtt = 0;
    let totRushYds = 0;
    let totRushTD = 0;
    let totRec = 0;
    let totRecYds = 0;
    let totRecTD = 0;

     for(let x = 0; x<9; x++) {
      team = teamData.find((t) => t.Team == players[x].Tm);
      totalPoints += players[x].FantPt;
      totPassAtt += players[x].PassAtt;
      totPassYds += players[x].PassYds;
      totPassTD += players[x].PassTD;
      totRushAtt += players[x].RushAtt;
      totRushYds += players[x].RushYds;
      totRushTD += players[x].RushTD;
      totRec += players[x].Rec;
      totRecYds += players[x].RecYds;
      totRecTD += players[x].RecTD;
      $('#addhere').append(renderPage(players[x], team));
    }
    $('#addhere').append('<p class="title is-3" style="text-align: center; background: black; color: white">Team Totals:</p>');
    $('#addhere').append(`<p class="subtitle is-6" style="background: black; color: white; text-align: center">
 <span style="font-weight: bold">Pass Att: </span>${totPassAtt} &nbsp;&nbsp;
 <span style="font-weight: bold">Pass Yds: </span>${totPassYds} &nbsp;&nbsp;
 <span style="font-weight: bold">Pass TDs: </span>${totPassTD} &nbsp;&nbsp;
 <span style="font-weight: bold">Rush Att: </span>${totRushAtt} &nbsp;&nbsp;
 <span style="font-weight: bold">Rush Yds: </span>${totRushYds} &nbsp;&nbsp;
 <span style="font-weight: bold">Rush TDs: </span>${totRushTD} &nbsp;&nbsp;
 <span style="font-weight: bold">Recs: </span>${totRec} &nbsp;&nbsp;
 <span style="font-weight: bold">Rec Yds: </span>${totRecYds} &nbsp;&nbsp;
 <span style="font-weight: bold">Rec TDs: </span>${totRecTD}
 
 </p>`);
 $('#addhere').append(`<p class="title is-4" style="background: black; color: white; text-align: center">======> Total Team Points: ${totalPoints} <=====</p>`);
    $('#addhere').append('</div>');
     
};



$(function() {
    loadPage(playerData);
    
    
});
