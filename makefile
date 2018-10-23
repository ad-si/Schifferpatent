.PHONY: all, clean, deploy-%

# Prevent deleting of CSS files and images
.PRECIOUS: build/%/screen.css build/%/images

all: build/sail-guide_com build/schifferpatent_org

build/%: source/%/* build/%/screen.css build/%/images config.json
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

build:
	-mkdir $@

clean:
	rm -r build*

deploy-%: build/%
	s3cmd sync --delete-removed $</ s3://$(subst _,.,$(<F))
