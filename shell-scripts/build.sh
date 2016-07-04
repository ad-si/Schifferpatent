#! /usr/bin/env bash

set -e

build_website () {
  local contentdir=$1
  local sourcedir="$contentdir-temp"
  local builddir="$contentdir-build"

  mkdir -p "$sourcedir"
  cp "$contentdir"/* "$sourcedir"
  cp -r styles "$sourcedir"/

  wintersmith build \
    --contents "$sourcedir" \
    --output "$builddir" \
    --clean

  cp -r images "$builddir/"

  rm -r "$sourcedir"
}


# Build websites from content directories
build_website 'schifferpatent-org'
build_website 'sailing-guide-website'
