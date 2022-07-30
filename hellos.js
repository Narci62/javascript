var dt=new Date();
var international=new Intl.DateTimeFormat("fr-FR", {
 hour12: false,
 hour: "2-digit",
 minute: "2-digit",
 second:"2-digit"});
console.log("Bonjour !");
console.log("Il est exactement "+international.format(dt));
