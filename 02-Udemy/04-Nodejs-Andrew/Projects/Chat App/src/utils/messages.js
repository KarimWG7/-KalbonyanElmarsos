const generateMessage = (username, text) => {
  return {
    text,
    createdAt: new Date().getTime(),
    username
  };
};

const generateLocationMessages = (username, url) => {
  return {
    url,
    createdAt: new Date().getTime(),
    username
  };
};

module.exports = {
  generateMessage,
  generateLocationMessages,
};
