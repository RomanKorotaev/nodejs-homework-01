const {readContent} = require ('./readContent.js')

const listContacts = async () => {
    return await readContent();
  }

  
module.exports = {listContacts}