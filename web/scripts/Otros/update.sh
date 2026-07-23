#!/bin/sh

A1="$(CDPATH='' cd -- "$(dirname -- "$0")" && pwd)"

B1='
MiniSearch/index.js|https://cdn.jsdelivr.net/npm/minisearch@7/dist/umd/index.min.js
MarkDownIT/markdown-it.min.js|https://cdn.jsdelivr.net/npm/markdown-it@14/dist/markdown-it.min.js
MarkDownIT/markdownItAnchor.umd.min.js|https://cdn.jsdelivr.net/npm/markdown-it-anchor@9/dist/markdownItAnchor.umd.min.js
'

echo "$B1" | while IFS='|' read -r C1 C2; do
	[ -z "$C1" ] && continue
	echo "$C1"
	curl -fsSL "$C2" -o "$A1/$C1" || echo "Error: $C1"
done