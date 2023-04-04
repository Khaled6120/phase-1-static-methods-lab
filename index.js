class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(str) {
    const exceptArr = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    const words = str.split(' ');
    const titleizedWords = words.map((word, i) => {
      if (i === 0) {
        return this.capitalize(word);
      } else {
        if (exceptArr.includes(word)) {
          return word;
        } else {
          return this.capitalize(word);
        }
      }
    });
    return titleizedWords.join(' ');
  }

}

//console.log(Formatter.titleize("hi, I'm from syria"))