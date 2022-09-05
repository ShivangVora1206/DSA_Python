class Result {
  // Return the final string after expansion
  static String expandString(String str) {
    // Write your code here
    String res = "";
    
    for(int i=0;i<str.length()-1;i++){
      char curr = str.charAt(i);
      char next = str.charAt(i+1);
      
      if(Character.isAlphabetic(curr) && Character.isDigit(next)){
        int j = i+1;
        String num = "";
        
        while(j < str.length() && (Character.isDigit(str.charAt(j)))){
          num += str.charAt(j);
          
          j++;
        }
        
        for(int k=0;k<Integer.parseInt(num);k++){
          res += curr;
        }
      }else if(Character.isAlphabetic(curr)){
        res += curr;
      }
    }
    
    if(Character.isAlphabetic(str.charAt(str.length()-1))){
      res += str.charAt(str.length()-1);
    }
    
    return res;
  }
}