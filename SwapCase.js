function SwapCase(str) { 
  return str.replace(/[a-z]/ig,function(c){
    if(c == c.toUpperCase()) return c.toLowerCase()  
    return c.toUpperCase();
  });
}