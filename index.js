// const {MongoClient}=require('mongodb');

// async function main(){

//     const uri="mongodb+srv://amardodda23:Thiago240687@mymongodb.siyyrge.mongodb.net/?retryWrites=true&w=majority&appName=MyMongoDB";

//     const client= new MongoClient(uri);

//     try{
//         await client.connect();

//         console.log('Connected to MongoDB server');

//         const database=client.db('sample_airbnb');

//         const collection =database.collection('listingsAndReviews');

//         const query={"address.country":"Brazil"};

//         const cursor=collection.find(query);

//         const listings=await cursor.sort({price:-1}).limit(10).toArray();

//         res=listings.map(listing=>[listing.name,parseFloat((listing.price).toString())]);

//         console.log(res);

//         // await cursor.forEach(doc=>{
//         //     console.log(doc.name);
//         // })

//     }catch(e){
//         console.error(e)

//     }finally{
//         await client.close();

//     }

// }

// main()


const data='\nThis is a new line of text.';

fs.appendFile('test.txt',data,(err)=>{

    if(err){
        console.log(err);
        return;
    }
    console.log('File written successfully')




});