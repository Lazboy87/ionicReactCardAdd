import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons,IonCard, IonItemDivider, IonItem, IonInput, IonCol, IonIcon, generateId, IonImg, IonLabel, IonList, useIonViewWillEnter } from '@ionic/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import { auth } from '../utils/nhost';
import { useHistory } from "react-router-dom";






const Login = () => {

 

    let history= useHistory();

    const [usernameinp, setuser] = useState<string>("");
    const [passinp, setpass] = useState<string>("");


    const authenbticateUser = async () =>{
      try{
        await auth.login(usernameinp,passinp)
        history.replace('/home');
      }
      catch(e){

      }
      
      
    }

    useIonViewWillEnter(()=>{
      if(auth.isAuthenticated()){
        history.replace("/home");
      }
      
      
        })



    return (
      <IonPage color="light">
        <IonHeader>    
        <IonToolbar>

        </IonToolbar>
       
        </IonHeader> 
        <IonTitle> Login </IonTitle>
        <IonContent>
          <IonCard>
         <IonList>

         <IonItemDivider color="primary">User Email</IonItemDivider>
          <IonItem>
            <IonInput value={usernameinp} placeholder="Enter email" onIonChange={e => setuser(e.detail.value!)} id="usertxt" clearInput></IonInput>
          </IonItem>

          <IonItemDivider color="primary">Password</IonItemDivider>
          <IonItem>
            <IonInput type="password" value={passinp} placeholder="Enter password" onIonChange={e => setpass(e.detail.value!)} id="passtxt" clearInput></IonInput>
          </IonItem>

          <IonButton color="success" onClick={authenbticateUser}>
            Login
          </IonButton>

          <Link to={{pathname:"/register"}}>
          <IonButton color="success" >
            Register User
          </IonButton>
          </Link>
         </IonList>


          </IonCard>


          

        </IonContent>
        
        </IonPage>
    )
  };
  
  export default Login;