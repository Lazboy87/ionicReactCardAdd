import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons,IonCard, IonItemDivider, IonItem, IonInput, IonCol, IonIcon, generateId, IonImg, IonLabel } from '@ionic/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cards from '../models/cards';
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { idText } from 'typescript';
import cardsList from '../models/cardsList';

const GET_CARDS = gql`
  query {
    posts {
      description
      id
      title
      url
      user_id
      user {
        display_name
      }
    }
    
  }
`;


const Home: React.FC = () => {

  

  
  const [titleinp, setTitle] = useState<string>();
  const [descinp, setDesc] = useState<string>();
  const [urlinp, seturl] = useState<string>();
  const [commentinp, setcomment] = useState<string>();
  

  
   const {loading, data} = useQuery<cardsList>(GET_CARDS);

   if (loading){
     return <IonLabel>laster data </IonLabel>
   }
     
     
     
     
     if(data){
     console.log(data)
   }
 

  return (
    <IonPage color="primary">
      <IonHeader color="primary">
        <IonToolbar color="primary">
          <IonTitle>Card Add</IonTitle >
        
        </IonToolbar>
      </IonHeader>
       <IonContent fullscreen color="primary" >
      <IonItemDivider color="primary">Title</IonItemDivider>
          <IonItem>
            <IonInput   value={titleinp} placeholder="Enter Title" onIonChange={e => setTitle(e.detail.value!)}  id="titletxt"  clearInput></IonInput>
          </IonItem>

          <IonItemDivider color="primary">Description</IonItemDivider>
          <IonItem>
            <IonInput  value={descinp} placeholder="Enter Description" onIonChange={e => setDesc(e.detail.value!)}  id="desctxt" clearInput></IonInput>
          </IonItem>

          <IonItemDivider color="primary">Picture Url</IonItemDivider>
          <IonItem>
            <IonInput value={urlinp} placeholder="Enter Imageurl" onIonChange={e => seturl(e.detail.value!)}  id="urltxt"  clearInput></IonInput>
          </IonItem>


   
            <IonButton onClick={addCard} color="success"  >
            Add +
            </IonButton>


         <IonCol id="cards">
            {
            posts?.map( post => (
      <IonCard key={post.title}>

<IonHeader>
      
      <IonTitle>{post.title}</IonTitle>
    </IonHeader>
      <IonImg src={post.imgurl}></IonImg>
      
      <IonContent slot="" color="light">
      {post.description}
  </IonContent>
  <IonCol>
        <IonButton size="small">
          
          <IonIcon icon="list-box"/>
          
        </IonButton>
      </IonCol>
    </IonCard>
    ))}
            </IonCol> 
        
      </IonContent> 
    </IonPage>
  );
};

export default Home;