

export const renderHeader = function() {
    
    return `<section>
    
    <nav class="navbar" role="navigation" aria-label="main navigation" >
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

<div id="pageheader">
</div>

    </section>`;

    
};


export const renderPage = function(team) {
  
  return `
  <div class="column is-one-quarter" style="background: ${team.Primary}; width:12.5%">
    
      <img src="${team.Img}" alt="Placeholder image">
      <p class="title is-4" style="font-size: large; text-align: center; color: ${team.Secondary}">${team.Place}</br>${team.Mascot}</p>
      <button class="button is-dark" style="width: 100%" data="${team.Team}" onclick="window.open('individualTeam.html','_self')">View Team</button>
    
  </div>
  `};

export const handleTeamButton = function(event){
  event.preventDefault();
  const $root = $('#root');
  let teamId = $(event.currentTarget).attr("data");
  console.log(teamId);
  localStorage.setItem("teamId", teamId);
  
}




export const loadPage = function(teamData) {

     
     const $root = $('#root');
      $root.append(renderHeader());

      $root.on("click", ".button, is-dark", handleTeamButton);
     
   $('#pageheader').append('<p class="title is-2" style="text-align: center">Select a Team to View Players</p><div class="columns is-multiline" id="addhere">');
  
      teamData.forEach(element =>{
      
        $('#addhere').append(renderPage(element));
        
      });

     $('#addhere').append('</div>');
     
       
      
     
};




$(function() {
    loadPage(teamData);
});