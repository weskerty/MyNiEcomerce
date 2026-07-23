#!/bin/bash

N=${1#--}
[ -z "$N" ] && { echo "Uso: $0 --cantidad"; exit 1; }

F="$(pwd)/data.json"
T="$F.tmp"

[ -f "$F" ] || { echo "No existe data.json"; exit 1; }

jq --argjson n "$N" '
def d:
  if type=="array" then
    . as $a |
    [range(0;$n) | $a[. % ($a|length)]] 
  elif type=="object" then
    with_entries(.value |= d)
  else . end;
.galleries |= d
' "$F" > "$T" && mv "$T" "$F"