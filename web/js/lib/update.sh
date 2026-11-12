#!/bin/sh

A1="$(CDPATH='' cd -- "$(dirname -- "$0")" && pwd)"
S1="$A1/../../../sw.js"
T1="$(mktemp)"
trap 'rm -f "$T1"' EXIT
trap 'rm -f "$T1"; exit 1' INT TERM

B1='
MiniSearch/index.js|https://cdn.jsdelivr.net/npm/minisearch@7/dist/umd/index.min.js
MarkDownIT/markdown-it.min.js|https://cdn.jsdelivr.net/npm/markdown-it@15/dist/browser/markdown-it.umd.min.js
MarkDownIT/markdownItAnchor.umd.min.js|https://cdn.jsdelivr.net/npm/markdown-it-anchor@10/dist/markdownItAnchor.umd.js
MarkDownIT/LICENCE.md|https://cdn.jsdelivr.net/npm/markdown-it@15/LICENSE
PwaInstall/pwa-install.bundle.js|https://cdn.jsdelivr.net/npm/@khmyznikov/pwa-install@latest/dist/pwa-install.bundle.js
EasyMDE/easymde.min.js|https://cdn.jsdelivr.net/npm/easymde@2/dist/easymde.min.js
EasyMDE/easymde.min.css|https://cdn.jsdelivr.net/npm/easymde@2/dist/easymde.min.css
DOMPurify/purify.min.js|https://cdn.jsdelivr.net/npm/dompurify@3/dist/purify.min.js
Leaflet/leaflet.js|https://cdn.jsdelivr.net/npm/leaflet@1/dist/leaflet.js
Leaflet/leaflet.css|https://cdn.jsdelivr.net/npm/leaflet@1/dist/leaflet.css
Cropper/cropper.min.js|https://cdn.jsdelivr.net/npm/cropperjs@1/dist/cropper.min.js
Cropper/cropper.min.css|https://cdn.jsdelivr.net/npm/cropperjs@1/dist/cropper.min.css
Html5Qrcode/html5-qrcode.min.js|https://cdn.jsdelivr.net/npm/html5-qrcode@2/html5-qrcode.min.js
'

echo "$B1" | while IFS='|' read -r C1 C2; do
	[ -z "$C1" ] && continue
	D1="$A1/$C1"
	if ! curl -fsSL "$C2" -o "$T1" || [ ! -s "$T1" ]; then echo "ERROR        $C1"; continue; fi
	if cmp -s "$T1" "$D1"; then echo "igual        $C1"; continue; fi
	mkdir -p "$(dirname "$D1")"
	cat "$T1" > "$D1"
	[ "$(id -u)" = 0 ] && chown --reference="$A1" "$(dirname "$D1")" "$D1"
	if grep -qF "lib/$C1'" "$S1"; then echo "ACTUALIZADO  $C1 -> subir PERM_C en sw.js"; else echo "ACTUALIZADO  $C1 -> subir V en sw.js"; fi
done
