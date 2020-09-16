import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons,IonCard, IonItemDivider, IonItem, IonInput, IonCol, IonIcon, generateId, IonImg, IonLabel, useIonViewWillEnter, IonBackButton } from '@ionic/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useHistory } from "react-router-dom";
import cardsList from '../models/cardsList';
import PostCard from '../components/PostCard';
import { auth } from '../utils/nhost';


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
        id
        avatar_url
      }
      comments {
        comment
        id
        user {
          display_name
          id
          avatar_url
        }
      }
    }
    
  }
`;


const Home: React.FC = () => {


  const logOutUser = async () =>{
    try{
      await auth.logout();
      history.replace('/login');
    }
    catch(e){

    }
    
    
  }

  let history= useHistory();
  useIonViewWillEnter(()=>{
    
    if(!auth.isAuthenticated()){
      history.replace("/login");
    }
    
      })
  
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
    <IonPage color="light">
      <IonHeader color="primary">
        <IonToolbar color="primary">
        <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
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


   
            <IonButton  color="success"  >
            Add +
            </IonButton>

            <IonButton onClick={logOutUser} color="success"  >
            Logout
            </IonButton>


        {
          data?.posts.map( post =>(
            <Link style={{textDecoration :'none'}} key={post.id} to={{
              pathname:'/Detail/${post.id}',
              state:{
                post
              }
            }}>
            <PostCard {...post}/>

            </Link>



          ))

        }
        
      </IonContent> 
    </IonPage>
  );
};

export default Home;