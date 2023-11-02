
//import fetch from 'node-fetch'

// export default async (req, context) => {
//     return new Response("Hello, world!");
//   };


  // export default async (req, context) => {
  //   const { city, country } = context.params;
  // const PANDA_API = "https://api.pandascore.co/valorant/matches/upcoming"
  //    const options = { 
  //   method : "GET",
  //   // mode : "no-cors",
  //   cache: "no-cache",
  //   credential: "same-origin",
  //   headers:{
  //       "Content-Type" : "application/json",
  //       authorization: 'Bearer zZPjgAB6F45VSq8m_KkFT3lRm6WACovbn1bzx-86Q3-CPK3IAH0'
  //   }, 
  //  }
  //   const response = await fetch(PANDA_API , options)
  //   const data = await response.json()
 
  //   // return new Response(`You're visiting ${city} in ${country}!`);
  //   return new Response(data);
  // };
  
  // import fetch from 'node-fetch'

export const handler = async (event , context) => {
    // console.log({event}, {context})
   const POKE_API = "https://pokeapi.co/api/v2/pokedex/kanto"
   const PANDA_API = "https://api.pandascore.co/valorant/matches/upcoming"
   const options = { 
    method : "GET",
    // mode : "no-cors",
    cache: "no-cache",
    credential: "same-origin",
    headers:{
        "Content-Type" : "application/json",
        authorization: 'Bearer zZPjgAB6F45VSq8m_KkFT3lRm6WACovbn1bzx-86Q3-CPK3IAH0'
    },
   }
   const response = await fetch(PANDA_API , options)
   const data = await response.json()
//    console.log(data)
    return{
        statusCode : 200, 
        body: JSON.stringify({
         //  pokemon: data
            region: 'hoenn',
        //    teams01: data[0].videogame.name,
        //    teams02: data[0].live,
        //    teams03: data[0].id,
            teams04: data[0].opponents[0].opponent,
            teams05: data[0].opponents[0].opponent.image_url,
        
        //    all: data
        })
    }
}

  //   export const handler = async () => {
//     return {
//       statusCode: 200,
//       body: JSON.stringify({
//         message: 'Hello World!',
//       }),
//     }
//   }

// import { Context } from "@netlify/functions"

// export default async (req = Request, context = Context) => {
//   if (context.cookies.get("chocolate")) {
//     return new Response("Sorry, no more cookies for you")
//   }

//   context.cookies.set("chocolate", "yummy")

//   return new Response("Here's a chocolate cookie! 🍪")
// }