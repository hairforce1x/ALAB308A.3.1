// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
  try { 
    const returnedValue = await central(id);
    // const data = dbs[returnedValue](id);
    // const restricted = vault(id);
    const allData = await Promise.all([dbs[returnedValue](id), vault(id)])
    console.log(allData)
    const result = {
      id: id,
      name: allData[1].name,
      username: allData[0].username,
      email: allData[1].email,
      address: allData[1].address,
      phone: allData[1].phone,
      website: allData[0].website,
      company: allData[0].company
    }
    console.log(result)
    return result;
  } catch (error) {
    console.log(error.message)
  }

}

getUserData(6)

// console.log(getUserData(5))
async function getFormattedData(id){
  const result = await getUserData(id)
  // console.log(result)
}

// getFormattedData(5)