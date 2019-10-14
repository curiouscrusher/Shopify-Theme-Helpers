export function weight(weight) {
    if (typeof weight !== 'number') {
        throw new TypeError(
            'Shopify Theme Helpers: weight must be a number'
        );
    }
}

export function time(time) {
    if (typeof time !== 'number') {
        throw new TypeError(
            'Shopify Theme Helpers: time must be a number'
        );
    }
}

export function str(str) {
    if (typeof str !== 'string') {
        throw new TypeError(
            'Shopify Theme Helpers: str must be a string'
        );
    }
}

export function maxLen(maxLen) {
    if (typeof maxLen !== 'number') {
        throw new TypeError(
            'Shopify Theme Helpers: maxLen must be a number'
        );
    }
}

export function char(char) {
    if (typeof char !== 'string' || char.length !== 1) {
        throw new TypeError(
            'Shopify Theme Helpers: char must be a single character string'
        );
    }
}

export function side(side) {
    if (typeof side !== 'string' && side == 'first' || side == 'last') {
        throw new TypeError(
            'Shopify Theme Helpers: side must be a string, either `first` or `last`'
        );
    }
}
