# Wdrożenie obrazów — Harbor Legal

## Krok 1: Skopiuj pliki do projektu

```bash
cd "/Users/przemyslawkolakowski/Library/Mobile Documents/com~apple~CloudDocs/Documents/Harbor Legal/harbor-legal-3uslugi"
unzip -o ~/Downloads/harbor-images-deploy.zip
```

## Krok 2: Dodaj CSS do strony

W pliku `css/style.css` — na samym końcu pliku dodaj zawartość `css/images.css`.

Lub dodaj nowy link w `<head>` każdej strony (po components.css):
```html
<link rel="stylesheet" href="/css/images.css">
```

## Krok 3: Wdróż i wypushuj

```bash
git add images/ css/images.css
git commit -m "feat: dodano obrazy i CSS do wdrożenia wizualnego"
git push origin main
```

## Krok 4: Modyfikacja HTML stron (kolejny etap z Claude)

Zaktualizuj HTML podstron — wzorce w strategii.
