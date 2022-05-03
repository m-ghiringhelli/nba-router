export async function fetchTeams() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
      'X-RapidAPI-Key': '77051106a7mshc2f1b63be6ddaaep19214fjsn94b70334c0f7'
    }
  };
    
  const response = await fetch('https://api-nba-v1.p.rapidapi.com/teams', options);
  const data = await response.json();
  const res = data.response;
  // filter out NBA teams and remove one random team from data set that is not actually an NBA team
  const teams = res.filter((team) => (team.nbaFranchise === true && team.id !== 37));
  
  return teams;
}