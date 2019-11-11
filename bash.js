let pwd = require('./pwd.js')
let ls = require('./ls.js')

process.stdout.write('prompt > ')

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim()
  if (cmd === 'pwd') {
    process.stdout.write(pwd());
  }
  if (cmd === 'ls') {
    ls();
  }
  else {
    process.stdout.write('You typed: ' + cmd)

  }
  process.stdout.write('\nprompt > ')

})
