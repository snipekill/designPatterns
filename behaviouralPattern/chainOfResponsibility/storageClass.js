class StorageClass {
    constructor(name, inventory, days)
    {
        this.name = name;
        this.inventory = inventory;
        this.days = days;
        this.next = null;
    }

    setNext(next){
        this.next = next;
    }

    lookInLocalInventory(itemName){
        return this.inventory[this.inventory.map(item => item.name).indexOf(itemName)];
    }

    find(itemName)
    {
        const found = this.lookInLocalInventory(itemName);
        if(found)
        {
            return {
                ...found, 
                location: this.name,
                deleiveryTime: this.days || 'now'
            }
        }
        else if(this.next)
        {
            return this.next.find(itemName);
        }
        else return 'We dont carry this item';
    }
}

module.exports = StorageClass;