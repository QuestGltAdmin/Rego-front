
/**
 * Helper Function to slugify a string with provided symbol.
 * @param str String to slugify
 * @param symbol slugifying symbol "-, /"
 * @returns slugified string
 */
 export default function slugify(str:string, symbol:string="-"){
    return str.replace(/[^a-zA-Z0-9-]/g,symbol).toLowerCase();
}