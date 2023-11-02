
//import fetch from 'node-fetch'

export default async (req, context) => {
    return new Response("Hello, world!");
  };




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