export const titleCase = (str:string) => {
    var splitStr = str.toLowerCase().split(' ')
    for (var i = 0; i < splitStr.length; i++) 
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
    return splitStr.join(' '); 
}

export const reduceWords = (text: string, max:number) => {
    return text && text.length > max ? text.substring(0, max).concat('...') : text
}

export const trimWords = (string: string, maxWords: number) => {       
    var strippedString = string.trim();      
    var array = strippedString.split(" ");
    var wordCount = array.length;
    var string = array.splice(0, maxWords).join(" ");

    if(wordCount > maxWords) {
        string += "...";
    }

    return string
}