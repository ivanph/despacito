#!/usr/bin/env node
const meow = require('meow');
const cli = meow({
  description: 'Play the song Despacito in your browser',
  help: `
  Usage
    $ despacito <options>

  Options
    --bieber, -b Play the remix feat. Justin Bieber
    --help, -h Show this help text

  Examples
    $ despacito --bieber`
}, {
  alias: {
    b: 'bieber',
    h: 'help'
  }
});
require('./index.js')(cli.flags);
