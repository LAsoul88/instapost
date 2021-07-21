// post model

class Post {
    constructor(data) {
      this.user = data.user;
      this.image = data.image;
      this.content = data.content;
      this.isPrivate = data.isPrivate;
      this.likes = 0;
      this.id = this.#generateId();
    }
  
      /**
     * @description This is a private method that returns an unique id
     * @param {number} len
     * @returns string
     */
  
    #generateId(len = 10) {
      const characters = "qwertyuio1p2a3s4d5f6g7h8j9k0lzxcvbnm";
      let uid = "";
  
      for (let count = 0; count < len; count++) {
        const character = Math.floor(Math.random() * characters.length);
        uid += characters[character];
      }
  
      return uid;
    }
  }

// collection class

class Collection {
  #Model;
  #items;
  constructor(model, startingData) {
    this.#Model = model;
    this.#items = startingData.map(item => new this.#Model(item));
  }

  /**
   * @description Will return an array with all items availible in this.items
   * @returns array
   */

  find() {
    return this.#items;
  }

  /**
   * @description Will return item match with the itemId
   * @param { string } itemId
   * @param { function } callBack Will return error or item
   * @returns function;
   */
  findById(itemId, callBack) {
    if (!itemId) return console.log("missing id in first argument");

    if (typeof callBack !== "function") {
      return console.log("missing function in second argument");
    }

    const item = this.#items.find(({ id }) => id === itemId);
    let error;

    if (!item) {
      error = { message: `item can't be found` };
    }

    return callBack(error, item);
  }
}

module.exports = new Collection(Post, [
    {
        user: {
            username: "Super Cool Coder Person",
            avatar: "https://media.npr.org/assets/img/2021/06/08/australotitan_cooperensis_vladkonstantinov_scotthocknull_-c-eromanganaturalhistorymuseum_lowres1_wide-10b7d7a237a55a2ff5be011ede1cd83536ae9fe2.jpg?s=1400", 
        },
        image: "https://www.sciencenewsforstudents.org/wp-content/uploads/2019/11/860-header-non-dinos1.jpg",
        content: "Doing some things", 
        isPrivate: false
    },
])