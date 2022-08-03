
import React from 'react'
import { useEffect } from 'react'



function handleCallbackResponse(response){
console.log('Encoded JWT ID token '+response.credential)

}

export const Signup = () => {
useEffect(()=>{
  /* global google */ 
  google.accounts.id.initialize({client_id:'1048663511892-bfi8if3tpdokh0daar7rbkjc54s5bhbl.apps.googleusercontent.com', 
  callback:handleCallbackResponse});
  
  google.accounts.id.renderButton(
    document.getElementById('sign in div'),
    {theme: 'outline', size:'large'}
  )
},[])
return (
    <div id='sign in div'>hi</div>
   
  )
}
