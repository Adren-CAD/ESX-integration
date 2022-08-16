fx_version "cerulean"

description "Basic React (TypeScript) & Lua Game Scripts Boilerplate"
author "Project Error"
version '1.0.0'
repository 'https://github.com/project-error/fivem-react-boilerplate-lua'

lua54 'yes'

games {
  "gta5",
  "rdr3"
}


server_script '@mysql-async/lib/MySQL.lua'

server_script 'config.js'

server_script 'modules/*'
server_script 'utils/*'
server_script 'events/*'