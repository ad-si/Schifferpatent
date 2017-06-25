#! /usr/bin/env bash

set -e

build_website () {
  local contentdir="source/$1"
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
build_website 'schifferpatent_org'
build_website 'sail-guide_com'
