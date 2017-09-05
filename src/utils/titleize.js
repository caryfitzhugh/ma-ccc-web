//Read more at http://grammar.yourdictionary.com/capitalization/rules-for-capitalization-in-titles.html#6ZqCmVrU4Ab2wZhU.99
export default (slug) => {
    let words = slug.split(' ');
    let skipped = ["a", "an", "the", "at", "by",
      "for", "in", "of", "on", "to", "up", "and", "as", "but",
      "or", "nor"];
    let states = [ 'al', 'ak', 'as', 'az', 'ar', 'ca', 'co', 'ct', 'de', 'dc', 'fm', 'fl',
    'ga', 'gu', 'hi', 'id', 'il', 'in', 'ia', 'ks', 'ky', 'la', 'me', 'mh', 'md', 'ma', 'mi',
    'mn', 'ms', 'mo', 'mt', 'ne', 'nv', 'nh', 'nj', 'nm', 'ny', 'nc', 'nd', 'mp', 'oh', 'ok', 'or',
    'pw', 'pa', 'pr', 'sc', 'sd', 'tn', 'vt', 'vi', 'va', 'wa', 'wv', 'wi', 'wy' ];

    return words.map((word) => {
      if (states.includes(word)) {
        return word.toUpperCase();
      } else if (skipped.includes(word)) {
        return word.toLowerCase();
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    }).join(' ');

}
