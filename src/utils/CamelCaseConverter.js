const CamelCaseConverter = {
  fromTitleCase: (string) => {
    return string
      .replace(/\s/g, '')
      .replace(/^[A-Z]/, (g) => g.toLocaleLowerCase());
  },
  fromHyphenCase: (string) => {
    return string.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  },
};

export default CamelCaseConverter;
