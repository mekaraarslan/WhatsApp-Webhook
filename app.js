// Express.js'yi içe aktar const express = require ( 'express' );


// Bir Express uygulaması oluştur const app = express ();


// JSON gövdelerini ayrıştırmak için ara yazılım 
app . use ( express . json ());

// Portu ve doğrulama_belirtecini ayarlayın const port = process.env.PORT || 3000 ; const verifyToken = process.env.VERIFY_TOKEN ;​​​​
 


// GET istekleri için rota 
app.get ( '/' , ( req , res ) = > { const { 'hub.mode' : mode , ' hub.challenge ' : challenge , 'hub.verify_token' : token } = req.query ;   
       

  eğer ( mod === 'abone ol ' && belirteç === doğrulama belirteci ) { 
    konsol.günlük ( 'WEBHOOK DOĞRULANDI' ) ; res.durum ( 200 ) .gönder ( 
    meydanokuma ) ; } değilse { res.durum 
    ( 403 ) .son ( ) ; } } );    
    
  


// POST istekleri için rota 
app . post ( '/' , ( req , res ) => { const timestamp = new Date ( ). toISOString (). replace ( 'T' , ' ' ). slice ( 0 , 19 ) ; 
  console.log (` \ n\n Webhook alındı $ { timestamp } \ n` ); console.log 
  ( JSON.stringify ( req.body , null , 2 ) ) ; res.stat 
  ( 200 ) .end ( ) ; } ) ;   
        


// Sunucu 
uygulamasını başlatın . listen ( port , () => { 
  console . log (` \n $ { port } numaralı portta dinleme yapılıyor \n `); });   
