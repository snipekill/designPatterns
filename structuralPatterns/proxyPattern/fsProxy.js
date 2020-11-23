class FsProxy {

    constructor(fs_subject)
    {
        this.fs = fs_subject;
    }

    readFile(path, encoding, callback){
        if(path.endsWith('.md') || path.endsWith('.MD'))
        {
            this.fs.readFile(path, encoding, callback);
        }
        else
        {
            const error = new Error('can only read markdown files');
            callback(error);
        }
    }
}

module.exports = FsProxy;