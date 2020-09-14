import Icomments from "./Icomments";



interface cards {

   
   description:string,
   id:number,
   title:string,
   url:string,
   userid:string,
   user:{
       display_name:string,
       avatar_url:string,
        },
        comments: [Icomments]
        
     
        

};


export default cards;