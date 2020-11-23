class Iterator {
    constructor(inventory)
    {
        this.inventory = inventory;
        this.index = 0;
    }
    first()
    {
        const [ first ] = this.inventory;
        this.index = 0;
        return first;
    }

    last()
    {
        const [ first ] = [...this.inventory].reverse();
        this.index = this.inventory.length - 1;
        return first;
    }

    hasNext()
    {
        return this.index < (this.inventory.length - 1);
    }

    current()
    {
        return this.inventory[this.index];
    }

    next()
    {
        // console.log(this.hasNext());
        if(this.hasNext())
            this.index = this.index + 1;
        return this.current();
    }

    prev()
    {
        if(this.index!==0)
            this.index = this.index - 1;
        return this.current();
    }
}

module.exports = Iterator;