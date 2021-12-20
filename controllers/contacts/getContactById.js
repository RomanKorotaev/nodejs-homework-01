const {readContent} = require ('./readContent.js')

const getContactById= async (contactId) => {
    const contacts = await readContent();
    const [contact] = contacts.filter ((contact)=> contact.id===contactId)
    return contact;
    
  }
  
  
module.exports = {getContactById}