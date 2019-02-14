function royalRumble(roman) {
  if (roman === "")           return 0;
  if (roman.startsWith("L"))  return 50 + royalRumble(roman.substr(1));
  if (roman.startsWith("XL")) return 40 + royalRumble(roman.substr(2));
  if (roman.startsWith("X"))  return 10 + royalRumble(roman.substr(1));
  if (roman.startsWith("IX")) return 9  + royalRumble(roman.substr(2));
  if (roman.startsWith("V"))  return 5  + royalRumble(roman.substr(1));
  if (roman.startsWith("IV")) return 4  + royalRumble(roman.substr(2));
  if (roman.startsWith("I"))  return 1  + royalRumble(roman.substr(1));
  return 0;
}
var name = ["Louis IX","Louis VIII","David II"];

var sortName = ["Louis IX","Louis VIII","David II"].map((n) => ({name: n, num: royalRumble(n.split(" ").pop())}))
      .sort((a, b) => (a.num - b.num))
      .map(({name, num}) => name);
      
console.log("sortName: ",sortName);   
