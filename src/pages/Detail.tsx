import React from "react";
import { IonToolbar, IonPage, IonHeader, IonTitle, IonContent, IonLabel, IonButtons, IonBackButton } from "@ionic/react";
import PostCard from "../components/PostCard";

import cards from "../models/cards";

const Detail = (props: any) => {

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
        
      </IonContent>
    </IonPage>
  )
};

export default Detail;