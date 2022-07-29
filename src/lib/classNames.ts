/**
 * Helper Function to combine class names conditionally
 * @param classes 
 * @returns 
 */
 export default function classNames(...classes:unknown[]){ //:unknown[]
    return classes.filter(Boolean).join("")
}