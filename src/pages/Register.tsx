import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons,IonCard, IonItemDivider, IonItem, IonInput, IonCol, IonIcon, generateId, IonImg, IonLabel, IonList, useIonViewWillEnter, IonBackButton } from '@ionic/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import { auth } from '../utils/nhost';
import { useHistory } from "react-router-dom";






const Register = () => {

 

    let history= useHistory();

    const [usernameinp, setuser] = useState<string>("");
    const [passinp, setpass] = useState<string>("");
  

  
    
    

    const registerUser = async () =>{
      try{
        await auth.register(usernameinp,passinp)
        history.replace('/login');
      }
      catch(e){

      }
      
      
    }

 



    return (
      <IonPage>
        <IonHeader>    
        <IonToolbar>

        </IonToolbar>
        <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
        <IonTitle> Login </IonTitle>
        </IonHeader> 

        <IonContent>
          <IonCard>
         <IonList>

         <IonItemDivider color="primary">User Email</IonItemDivider>
          <IonItem>
            <IonInput value={usernameinp} placeholder="Register email" onIonChange={e => setuser(e.detail.value!)} id="usertxt" clearInput></IonInput>
          </IonItem>

          <IonItemDivider color="primary">Password</IonItemDivider>
          <IonItem>
            <IonInput  value={passinp} placeholder="Register password" onIonChange={e => setpass(e.detail.value!)} id="passtxt" clearInput></IonInput>
          </IonItem>

          {/* <IonItemDivider color="primary">IMG url for avatar</IonItemDivider>
          <IonItem>
            <IonInput  value={urlinp} placeholder="Register avatar img url" onIonChange={e => seturl(e.detail.value!)} id="urltxt" clearInput></IonInput>
          </IonItem> */}

          <IonButton color="success" onClick={registerUser}>
            Register new user
          </IonButton>

         
         </IonList>


          </IonCard>


          

        </IonContent>
        
        </IonPage>
    )
  };
  
  export default Register;