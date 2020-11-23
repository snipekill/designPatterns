const commands = require("./commands");

class Conductor {

    constructor()
    {
        this.history = [];
        this.undoCommands = [];
    }

    run(command) {
        console.log(`Executing command: ${command.name}`);
        this.history.push(command);
        command.execute();
    }

    printHistory(){
        this.history.forEach(command => console.log(`${command.name}`));
    }

    undo()
    {
        const prevCommand = this.history.pop();
        console.log(`Undoing ${prevCommand.name}`);
        prevCommand.undo();
        this.undoCommands.push(prevCommand);
    }

    redo()
    {
        const redoCommand = this.undoCommands.pop();
        console.log(`Redoing ${redoCommand.name}`);
        redoCommand.execute();
        this.history.push(redoCommand);
    }

}

module.exports = new Conductor();
