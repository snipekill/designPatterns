const { readFileSync, existsSync, unlink, writeFile} = require('fs');

class LocalStorage {
    constructor()
    {
        if(existsSync('./localStorage.txt'))
        {
            const raw_data = JSON.parse(readFileSync('./localStorage.txt').toString());
            this.storage = new Map(raw_data);
        }
        else
            this.storage = new Map();
    }

    setItem(key, value){
        this.storage.set(key, value);
        writeFile('./localStorage.txt', JSON.stringify([ ...this.storage.entries()]),(error)=>{
            if(error) console.log("was unable to save the data", error);
        });
    }

    getItem(key){
        return this.storage.get(key);
    }

    clear()
    {
        this.storage.clear();
        unlink('./localStorage.txt',()=>{});
    }

    get length(){
        return this.storage.size;
    }
}

module.exports = new LocalStorage();