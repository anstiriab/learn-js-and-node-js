var util = require('util');

var phrases = {
    "Hello" : "Привіт",
    "world" : "світ"
};


function PhraseError(message) {
    this.message = message;
    Error.captureStackTrace(this, PhraseError);
}
util.inherits(PhraseError, Error);
PhraseError.prototype.name = 'PhraseError';

function HttpError(status, message) {
    this.status = status;
    this.message = message;
    Error.captureStackTrace(this, HttpError);
}
util.inherits(HttpError, Error);
HttpError.prototype.name = 'HttpError';


function getPhrase(name) {
    if (!phrases[name]) {
        throw new PhraseError("There is no such phrase: " + name);
    }
    return phrases[name];
}


function makePage(url) {
    if (url !== 'index.html') {
        throw new HttpError(400, "There is no such page");
    }
    return util.format("%s, %s!", getPhrase("Hello"), getPhrase("world"));
}

try {
    var page = makePage('index.html');
    console.log(page);
} catch (e) {
    if (e instanceof HttpError) {
        console.log(e.status, e.message);
    } else {
        console.error("Error %s\n message: %s\n stack: %s",
            e.name, e.message, e.stack);
    }
}