function updateGreeting() 
{
    const currTime=new Date();
    const currHour=currTime.getHours();
    let greeting;
    if(currHour<12) 
    {
        greeting='Good Morning!';
    } 
    else if(currHour<18) 
    {
        greeting='Good Afternoon!';
    } 
    else 
    {
        greeting='Good Evening!';
    }
  
    document.getElementById('greeting').textContent=greeting;
}
updateGreeting();