# Prevent deletion by rsync of several files
.PRECIOUS: build/%/screen.css build/%/images build/%/ads.txt build/%/CNAME


.PHONY: all
all: build/sail-guide_com build/schifferpatent_org


build/%: source/%/* build/%/screen.css build/%/ads.txt \
  build/%/images build/%/CNAME config.json
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


build/%/CNAME: build
	echo $(subst build/,,$(subst _,.,$(@D))) > $@


build: node_modules
	-mkdir $@


node_modules: package.json
	if test ! -d $@; then bun install; fi


# TODO: CSS must be generated differently first
# serve/%: source/%/*
# 	npx wintersmith preview \
# 		--locals $(<D)/locals.json \
# 		--templates $(<D)/templates \
# 		--contents $(<D)/pages


.PHONY: deploy
deploy:
	@echo "========================================================"
	@echo "Push code to GitHub for automatic deployment via Netlify"
	@echo "========================================================"


.PHONY: clean
clean:
	-rm -rf build
	-rm -rf node_modules
