// console.log ("Hello, World! :)")

const chalk = require ('chalk')
const { Command } = require('commander');

// const {
//     listContacts,
//     getContactById,
//     removeContact,
//     addContact,
// } = require ('./contacts.js');

const {listContacts}= require ('./controllers/contacts/listContacts');
const {getContactById}= require ('./controllers/contacts/getContactById');
const {removeContact}= require ('./controllers/contacts/removeContact');
const {addContact}= require ('./controllers/contacts/addContact.js');


const program = new Command();
program
  .requiredOption('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const contacts = await listContacts();
      console.table(contacts);
      break;

    case 'get':
      // ... id
      const contactBuId  = await getContactById(id);
      if (contactBuId) {
          console.log (chalk.green ('Contact found') );
        } else {
            console.log (chalk.yellow('Contact not found') );
        }
      break;

    case 'add':
      // ... name email phone
      const contact = await  addContact(name, email, phone);
      console.log (chalk.green ('Add new contact'));
      console.log (contact);
      break;

    case 'remove':
      // ... id
      const removedContact = await removeContact(id);
      console.log (chalk.green ('Contact was removed!'));
      console.log ("Removed contact : ", removedContact);
      break;

    default:
      console.warn(chalk.red("Unknown action type!") );
  }
}


// invokeAction(argv).then( ()=> console.log ('Operation success!'))
(async()=>{ await invokeAction(argv) })()