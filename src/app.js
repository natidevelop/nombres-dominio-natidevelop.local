/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon", "telecom", "puedes"];

  let extensions = [`es`, `uy`, `ve`, `br`, `py`, `com`];

  let dominios = [];

  pronoun.forEach(start => {
    adj.forEach(mid => {
      noun.forEach(last => {
        extensions.forEach(ex => {
          let domain = `${start}${mid}${last}.${ex}`;

          if (last.endsWith(ex)) {
            let domainHack = `${start}${mid}${last.slice(
              0,
              -1 * ex.length
            )}.${ex}`;
            dominios.push(domainHack);
          } else {
            dominios.push(domain);
          }
        });
      });
    });
  });
  let elementos = dominios.map(domainHack => {
    return `<li class="alert alert-primary">` + domainHack + `</li>`;
  });

  document.getElementById("listadominios").innerHTML = elementos.join(" ");
};
