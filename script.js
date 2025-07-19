window.onload = function() {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];

  let domains = [];

  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        domains.push(`${p}${a}${n}.com`);
      }
    }
  }

  let randomIndex = Math.floor(Math.random() * domains.length);
  let randomDomain = domains[randomIndex];

  document.getElementById("domain-box").textContent = randomDomain;
};