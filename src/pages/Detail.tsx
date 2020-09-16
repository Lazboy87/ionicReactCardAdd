import React, { useState } from "react";
import { IonToolbar, IonPage, IonHeader, IonTitle, IonContent, IonLabel, IonButtons, IonBackButton, IonCol, IonCard, IonItem, IonList, IonImg, useIonViewWillEnter, IonIcon } from "@ionic/react";
import PostCard from "../components/PostCard";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";


import cards from "../models/cards";
import { useHistory } from "react-router";
import { auth } from "../utils/nhost";




  
  
 
  

  


const Detail = (props: any) => {
  
  let history= useHistory();
  useIonViewWillEnter(()=>{
   
    if(auth.isAuthenticated() == false){
      history.replace("/login");
    }
    
      })



 
  const post: cards = props.location?.state?.post;
  if (!post){
    return <div></div>
  }
 
  

 



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonButtons slot="end">
        <IonIcon name="log-out"></IonIcon>
          </IonButtons>
          <IonTitle>Detail View!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <PostCard {...post} />
        <IonCard>
          <IonList>
          {
          post.comments.map(comment => (
            <IonItem key={comment.id}>

            <IonLabel>
           <img height="50px" width="50px" src={comment.user.avatar_url} />
          <h2>{comment.user.display_name} </h2>
              <p>{comment.comment}</p>
            </IonLabel>
          </IonItem>
          ))
        }
                
            
          </IonList>
        </IonCard>
        
      </IonContent>
    </IonPage>
  )
};

export default Detail;