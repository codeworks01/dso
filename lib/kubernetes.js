const Client = require('kubernetes-client').Client



// async function getNamespaces() {
//   try {
//     const client = new Client({ version: '1.13' })

//     //
//     // Get all the Namespaces.
//     const namespaces = await client.api.v1.namespaces('dso').get();
//     // const keys = Object.keys(namespaces)
//     console.log(namespaces);

//     return namespaces;

//     // END of Try
//   } catch (err) {
//     console.error('Error: ', err)
//   }
// }




async function getPods() {
  try {
    const client = new Client({ version: '1.13' })

    //
    // Get all the Namespaces.
    const pods = await client.api.v1.namespaces('dso').pods();
    // const keys = Object.keys(namespaces)
    console.log(pods);

    return pods;

    // END of Try
  } catch (err) {
    console.error('Error: ', err)
  }
}

// getNamespaces();

getPods();