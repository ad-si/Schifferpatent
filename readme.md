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

1. Change `"filenameTemplate": ":file"` to `"filenameTemplate": ":file.html"`
  in `config.json`.
1. `make`
1. Serve the `build/*` directories
    (e.g. with `php -S localhost:1234` or `python3 -m http.server`)


## Deployment

1. Change `"filenameTemplate": ":file.html"` to `"filenameTemplate": ":file"`
    in `config.json`.
1. Build the website and sync it to AWS:
    ```shell
    make deploy-schifferpatent_org
    ```
1. Check if website is properly deployed:
    http://schifferpatent.org.s3-website.eu-central-1.amazonaws.com
1. Invalidate the cache on [cloudfront].

[cloudfront]: https://console.aws.amazon.com/cloudfront
