import React from "react";
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from "@ionic/react";
import cards from "../models/cards";

const PostCard = ({ id, title, description, url, user:{display_name} }: cards) => {

  return (
    <IonCard>
      <img src={url} />
      <IonCardHeader>
        <IonCardSubtitle>
          @ {display_name} &bull; {} likes
                </IonCardSubtitle>
        <IonCardTitle>
          {title}
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {description}
      </IonCardContent>
    </IonCard>
  )
};

export default PostCard;