// Reformats strings to lower case and removes accents
export const stringReformat = (string) => {
    let stringReformated = string.toLowerCase();
    stringReformated = stringReformated.replace(/[éèêë]/g, "e");
    stringReformated = stringReformated.replace(/[àâ]/g, "a");
    stringReformated = stringReformated.replace(/[ùû]/g, "u");
    stringReformated = stringReformated.replace(/[îï]/g, "i");
    stringReformated = stringReformated.replace(/[ç]/g, "c");
    return stringReformated;
};