# Schifferpatent

Alles Wissenswerte für die theoretische und praktische Prüfung
des Bodenseeschifferpatents sowie die amtlichen Prüfungsfragen mit Antworten.


## Installation

```shell
npm install
```

or

```shell
yarn install
```


## Testing

- Change `"filenameTemplate": ":file"` to `"filenameTemplate": ":file.html"`
  in `config.json`.
- `make`
- Serve the `build/*` directories
  (e.g. with `php -S localhost:1234` or `python3 -m http.server`)


## Deployment

Change `"filenameTemplate": ":file.html"` to `"filenameTemplate": ":file"`
in `config.json`.

Build the website and sync it to AWS:

```shell
make deploy-schifferpatent_org
```

Finally invalidate the cache on [cloudfront].

[cloudfront]: https://console.aws.amazon.com/cloudfront
