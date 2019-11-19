install:
	npm install

start:
	npx babel-node src/bin/brain-games.js

start1:
	npx babel-node src/bin/brain-even.js

start2:
	npx babel-node src/bin/brain-calc.js

publish:
	npm publish --dry-run

lint:
	npx eslint
