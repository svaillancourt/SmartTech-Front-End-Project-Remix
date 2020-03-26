function RevealPassword()
{
    var y = document.getElementById("pwd2");

   
    if (y.type === 'text')
        {
            y.type ='password';
         }

    else
         {
             y.type = 'text';
         }


}