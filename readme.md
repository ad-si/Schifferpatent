# Schifferpatent

Alles Wissenswerte für die theoretische und praktische Prüfung des Bodenseeschifferpatents
sowie die amtlichen Prüfungsfragen mit Antworten.


## Installation

```shell
npm install
```

## Testing

- Change `"filenameTemplate": ":file"` to `"filenameTemplate": ":file.html"`
  in `config.json`.
- `npm run build`
- Serve the `*-build` directories
  (e.g. `php -S localhost:1234` or `python3 -m http.server`)


## Deployment

```shell
npm run build
```

Now you can host the `*-build` directories on
a static website hoster.

For example Amazon S3:
```shell
s3cmd sync ./schifferpatent-org-build/ s3://schifferpatent.org
```
