{print} = require 'util'
{spawn, exec} = require 'child_process'

build = (watch, cb)->
  if typeof watch is 'function'
    cb = watch
    watch = false
  options = ['-c', '-o', 'lib', 'src']
  options.unshift '-w' if watch

  coffee = spawn 'coffee', options
  coffee.stdout.on 'data', (data)-> print data.toString()
  coffee.stderr.on 'data', (data)-> print data.toString()
  coffee.on 'exit', (status)-> cb?() if status is 0

task 'watch', 'Watch for changes and rebuild', ->
  build true

task 'build', 'Build coffeescript src to javascript', ->
  build()

task 'test', 'Run mocha specs', ->
  exec 'mocha -r should', (err, stdout, stderr)->
    print stdout if stdout?
    print stderr if stderr?
