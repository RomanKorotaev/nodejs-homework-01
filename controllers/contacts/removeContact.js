const {readContent} = require ('./readContent.js')
const path = require ('path');
const fs= require ('fs/promises');

const contactsPath = path.join(__dirname, "/db", "contacts.json");

const removeContact = async (contactId ) => {
    const contacts = await readContent();
    const updatedArray = contacts.filter ((contact)=> contact.id!==contactId)
    await fs.writeFile (contactsPath, JSON.stringify (updatedArray, null, 2))

    const removedContact = contacts.filter ((contact)=> contact.id===contactId)
    return removedContact;
  }
  
module.exports = {removeContact}