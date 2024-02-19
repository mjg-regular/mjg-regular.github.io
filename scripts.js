document.addEventListener('DOMContentLoaded', function() {
    const tiers = ['Winner', 'Finalists', 'Qualifiers', 'Participants', 'Grinches'];
    const names = ['Rena', 'Plana', 'Shittim', 'Player 4', 'Player 5']; //placeholder names
    const creditRoll = document.querySelector('.credit-roll');
  
    tiers.forEach(tier => {
      const tierDiv = document.createElement('div');
      tierDiv.classList.add('tier');
      const tierTitle = document.createElement('h2');
      tierTitle.textContent = tier;
      tierDiv.appendChild(tierTitle);
  
      names.forEach(name => {
        const nameDiv = document.createElement('div');
        nameDiv.classList.add('name');
        nameDiv.textContent = name;
        tierDiv.appendChild(nameDiv);
      });
  
      creditRoll.appendChild(tierDiv);
    });
  });
  