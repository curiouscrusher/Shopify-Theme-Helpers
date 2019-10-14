/**
 * Shopify Utilities
 * ------------------------------------------------------------------------------
 * A collection of useful utilities for developing Shopify storefront themes.
 *
 */

import * as validate from './validate';

/**
 * Grams To Pounds
 * @param {integer} weight Item weight in grams
 * @returns {integer} Item weight in lbs
 *
 */
export function gramsToPounds(weight) {
    validate.weight(weight);

    return (weight * 0.00220462262185).toFixed(3);
}

/**
 * Debounce
 * @param {function} func The function to execute
 * @param {integer} time Delay before next execution
 *
 */
export function debounce(func, time) {
    validate.time(time);

    let timeout;
    return function() {
        const functionCall = () => func.apply(this, arguments);

        clearTimeout(timeout);
        timeout = setTimeout(functionCall, time);
    }
}

/**
 * Handleize
 * @param {string} str The string to handleize
 * @returns {string} String converted to a handle
 *
 */
export function handleize(str) {
    validate.str(str);

    return str.toLowerCase().replace(/[^\w\u00C0-\u024f]+/g, "-").replace(/^-+|-+$/g, "");
}

/**
 * Truncate Words
 * @param {string} str The string to truncate
 * @param {integer} maxLen Max number of characters the returned string can contain
 * @returns {string} Original string truncated by specified word count
 *
 */
export function truncateWords(str, maxLen) {
    validate.str(str);
    validate.maxLen(maxLen);

    if (str.split(` `).length <= maxLen) return str;
    return `${str.split(` `).splice(0,maxLen).join(` `)}...`;
}

/**
 * Split
 * @param {string} str The string to split
 * @param {string} char The character to split at
 * @param {string} side Return the first or last portion of the string
 * @returns {string} The string minus characters on the other side of the split
 *
 */
export function split(str, char, side = `first` ) {
    validate.str(str);
    validate.char(char);
    validate.side(side);

    if (side === `first`) {
        const newString = str.split(char);
        return newString[0].trim();
    } else {
        const newString = str.split(char);
        return newString[1].trim();
    }
}
