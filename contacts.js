const fs= require ('fs/promises');
const path = require ('path');
const crypto = require ('crypto'); // модуль для шифрования данных. И тут есть генерация айдишников


 const contactsPath = path.join(__dirname, "/db", "contacts.json");
 

const readContent = async ()=> {
    console.log ("Запущен readContent")
    // const content = await fs.readFile (path.join(__dirname, 'db', 'contacts.json'), 'utf8');
    const content = await fs.readFile (contactsPath, 'utf8')
    const result = JSON.parse(content);
    return result;
}


const listContacts = async () => {
    // console.log ("Запущен listContacts")
    return await readContent();
    const result = contacts
  }
  
 const getContactById= async (contactId) => {
    const contacts = await readContent();
    const [contact] = contacts.filter ((contact)=> contact.id===contactId)
    return contact;
    
  }
  
  function removeContact(contactId) {
    // ...твой код
  }
  
  const addContact =  async (name, email, phone) => {
    const contacts = await readContent();
    const newContact = { name, email, phone, id: crypto.randomUUID() }
    contacts.push (newContact);
    await fs.writeFile (contactsPath, JSON.stringify (contacts, null, 2))

    return newContact;
  }



  module.exports = {listContacts, getContactById, removeContact, addContact}