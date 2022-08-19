function scuberGreetingForFeet(Scuber){
  
  if (Scuber <= 400){
    return 'This one is on me!'
  }
  else if(Scuber > 2000 && Scuber < 2500)
  {
    return 'I will gladly take your thirty bucks.'
  }
  else 
  {return 'No can do.'}
  };


function ternaryCheckCity(city){
  return city == 'NYC' ?'Ok, sounds good.' : 'No go.'
};

function switchOnCharmFromTip(charm){
  // Write your code here!
switch (charm){
  case 'generous':
    return "Thank you so much."

    case 'not as generous':
      return "Thank you."

      default:
        return "Bye."
}
};