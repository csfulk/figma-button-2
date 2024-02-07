require('dotenv').config();

exports.handler = async (event, context) => {
  const figmaToken = process.env.FIGMA_ACCESS_TOKEN;
  const figmaFileId = 'bZm0V473X3N2qB1nw0yaGg';
  const url = `https://api.figma.com/v1/files/${figmaFileId}`;

  try {
    const fetch = (await import('node-fetch')).default;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Figma-Token': figmaToken
      }
    });
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: error.message })
    };
  }
};
