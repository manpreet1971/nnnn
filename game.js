class Game{
   
    constructor(){}


      getState(){

         var gameStateRef= database.ref('gameState');
         gameStateRef.on("value", function(data){
            gameState= data.val();
         
         });

    }

   start(){

        if(gameState===0){
       
            form=new Form();
            form.display();
            console.log(gameState);

         }
        

   }

  



}