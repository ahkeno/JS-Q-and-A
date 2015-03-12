function VowelCount(str) { 
  var vowels = str.match(/[aeiou]/g);
  return vowels.length;
}