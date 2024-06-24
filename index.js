
function scuberGreetingForFeet(distance){

  if (distance>2500)
    {return 'No can do.'}

  else if(distance < 400)
    {return "This one is on me!";}

    else if(distance>=400 &&  distance <= 2000)
      {return "That will be twenty bucks."}

    else if(distance>2000)
      {return "I will gladly take your thirty bucks."}

    else if(distance>2500) 
      {return "No can do."}


}

function ternaryCheckCity(destination){

  return destination === 'NYC'? 'Ok, sounds good.' : 'No go.';
  
 }

function switchOnCharmFromTip(tip = 0){

if (typeof tip!== 'number') 
  {return 'Bye' ;}

if (tip >= 20) 
  {return 'Thank you so much.';}

else if (tip>=10)
  {return 'Thank you.';}

else{return 'Bye.';}


}