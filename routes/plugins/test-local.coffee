###
 Assemble <http://assemble.io>
 
 Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 Licensed under the MIT License (MIT).
 ###

'use strict'

console.log 'Loading the coffee-script plugin'

module.exports = (assemble) ->
  options = 
    events: [
      # assemble.config.plugins.stages.optionsBeforeConfiguration
      # assemble.config.plugins.stages.optionsAfterConfiguration
      'assemble:*:build'
    ]

  assemble.registerPlugin 'coffee-script-local-demo', 'This is a plugin written in coffee script', options, (params, next) ->
    console.log 'Options Plugin', params.event
    next()