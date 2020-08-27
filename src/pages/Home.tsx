import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons,IonCard, IonItemDivider, IonItem, IonInput, IonCol } from '@ionic/react';
import React, { useState } from 'react';


const Home: React.FC = () => {

  
  const [title, setTitle] = useState<string>();
  const [desc, setDesc] = useState<string>();
  const [url, seturl] = useState<string>();
  

   function addCard(){
    console.log("im working");
  
    const cardsSlot= document.getElementById("cards");

    const cardElement= document.createElement('Ion-card');

    console.log(title,url,desc);



    cardElement.innerHTML= `<Ion-Card>
    <img src=${url} alt=''/>
    <Ion-Card-Header>
    
      <Ion-Card-Subtitle></Ion-Card-Subtitle>
      <Ion-Card-Title>${title}</Ion-Card-Title>
    </Ion-Card-Header>

    <Ion-Card-Content>
    ${desc}
</Ion-Card-Content>
  </Ion-Card>`
  ;
    cardsSlot?.appendChild(cardElement);

    setTitle('');
    setDesc('');
    seturl('')

   };


   

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
            <IonInput   value={title} placeholder="Enter Title" onIonChange={e => setTitle(e.detail.value!)}  id="titletxt"  clearInput></IonInput>
          </IonItem>

          <IonItemDivider color="primary">Description</IonItemDivider>
          <IonItem>
            <IonInput  value={desc} placeholder="Enter Description" onIonChange={e => setDesc(e.detail.value!)}  id="desctxt" clearInput></IonInput>
          </IonItem>

          <IonItemDivider color="primary">Picture Url</IonItemDivider>
          <IonItem>
            <IonInput value={url} placeholder="Enter Imageurl" onIonChange={e => seturl(e.detail.value!)}  id="urltxt"  clearInput></IonInput>
          </IonItem>

          
            
            <IonButton onClick={addCard} color="success"  >
            Add +
            </IonButton>


            <IonCol id="cards">

            </IonCol>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;