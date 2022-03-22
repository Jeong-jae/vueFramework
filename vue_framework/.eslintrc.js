module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ["plugin:vue/vue3-essential", "@vue/prettier"],
	rules: {
		"no-console": "off",
		"vue/no-v-model-argument": "off",
		"vue/no-unused-vars": "off",
		"prettier/prettier": ['error', {
			singleQuote: true,
			semi: true,
			useTabs: true,
			tabWidth: 1,
			trailingComma: 'all',
			printWidth: 110,
			bracketSpacing: true,
			arrowParens: 'avoid',
			endOfLine: 'auto'
		}]
	},
	parserOptions: {
		parser: '@babel/eslint-parser'
	},
	overrides: [{
		files: [
			"**/__tests__/*.{j,t}s?(x)",
			"**/tests/unit/**/*.spec.{j,t}s?(x)"
		],
		env: { jest: true }
	}]
};
