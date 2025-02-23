const url = ['https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/', '.png'];

const sizes = ['260x190/', '520x380/', '1040x760/'];

const toUrl = (id, size) => url[0] + sizes[size - 1] + id + url[1];

const toImg = (id, size) => {
  const img = document.createElement('img');
  img.src = toUrl(id, size);
  return img;
};

module.exports = { toImg };
