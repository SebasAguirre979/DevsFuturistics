import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ReactLoading from 'react-loading';

const RutasPrivadas = ({ children }) => {
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  

  useEffect(() => {
    const fetchAuth0Token = async () => {
      
  
     
        const accessToken = await getAccessTokenSilently({
          audience: "api-autenticacion-devsfuturistics",
          
        });
        localStorage.setItem("token", accessToken);
        
        console.log(accessToken);
        };
        if (isAuthenticated){
        fetchAuth0Token();
        }
        },[isAuthenticated, getAccessTokenSilently]);
        
  
  if (isLoading) {
    return <div><center><ReactLoading type="spin" color="#28007b" height={200} width={200} /></center></div>;
  }

  return(
    isAuthenticated ? <> {children} </> : <div>No estas autorizado</div>
      
        
      
  )
  
};

export default RutasPrivadas;