import React, { useState } from "react";
import { IonToolbar, IonPage, IonHeader, IonTitle, IonContent, IonLabel, IonButtons, IonBackButton, IonCol, IonCard, IonItem, IonList, IonImg } from "@ionic/react";
import PostCard from "../components/PostCard";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";


import cards from "../models/cards";





  //   const GET_USER = gql`
  //   query {
  //     users(where: { id: { _eq: } }) {
  //       id
  //       display_name
  //     }
  //   }
  //   }
  // `;
  
 
  

  


const Detail = (props: any) => {

  // const {loading, data} = useQuery<user>(GET_USER);

  // if (loading){
  //   return <IonLabel>laster data </IonLabel>
  // }
    
    
    
    
  //   if(data){
  //   console.log(data)
  // }


 
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