
test:
	@mocha \
		--require should \
		--timeout 10s \
		--slow 3s \
		--bail \
		--reporter spec \
		--ui bdd \
		--watch

# test-remotes:
# 	@$(MAKE) test SCRIPTS=test/remotes.js

.PHONY: test
