.PHONY: all, clean, deploy-%

# Prevent deletion by rsync of several files
.PRECIOUS: build/%/screen.css build/%/images build/%/ads.txt

all: build/sail-guide_com build/schifferpatent_org

build/%: source/%/* build/%/screen.css build/%/ads.txt \
  build/%/images config.json
	npx wintersmith build \
		--locals $(<D)/locals.json \
		--templates $(<D)/templates \
		--contents $(<D)/pages \
		--output $@

build/%/screen.css: styles/screen.styl | build
	-mkdir -p $(@D)
	./node_modules/.bin/stylus $< \
		--compress \
		--out $@

build/%/images: images | build
	-mkdir -p $(@D)
	rsync --archive --delete $</ $@

build/%/ads.txt: ads.txt | build
	cp $< $@

build:
	-mkdir $@

deploy-%: build/%
	s3cmd sync --delete-removed $</ s3://$(subst _,.,$(<F))

# TODO: CSS must be generated differently first
# serve/%: source/%/*
# 	npx wintersmith preview \
# 		--locals $(<D)/locals.json \
# 		--templates $(<D)/templates \
# 		--contents $(<D)/pages

clean:
	rm -r build*
