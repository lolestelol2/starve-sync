module.exports = [
  {
    name: 'expose player',
    find: /(\w+)=new Player\(/,
    replace: 'window.__player=$1=new Player('
  },
  {
    name: 'zoom',
    find: /maxZoom\s*=\s*[\d.]+/,
    replace: 'maxZoom=3'
  }
  ];
