let sentenceBuilder = {
    subject: "I",
    verb: "am",
    object: "coding",
    buildSentence: function() {
        return (this.subject && this.verb && this.object)? this.subject + " " + this.verb + " " + this.object: "Incomplete sentence";
    },
    updateProperty: function(property, value) {
        return (this.hasOwnProperty(property))? (this[property] = value,sentenceBuilder.buildSentence()): "Invalid property";
    }
};
let res=sentenceBuilder.buildSentence()
console.log(res);
res=sentenceBuilder.updateProperty("verb", "am learning");
console.log(res)
res=sentenceBuilder.updateProperty("subject", "The cat");
console.log(res)
res=sentenceBuilder.updateProperty("mood", "happy");
console.log(res);
res=sentenceBuilder.updateProperty("verb", "");
console.log(res);
