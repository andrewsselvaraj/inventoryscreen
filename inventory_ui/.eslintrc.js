const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
	fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
	parser: 'babel-eslint',
	extends: ['airbnb', 'prettier', 'prettier/react'],
	plugins: ['prettier', 'react', 'react-hooks', 'jsx-a11y'],
	env: {
		jest: true,
		browser: true,
		node: true,
		es6: true,
	},
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		aliases: {
			app: path.resolve(__dirname, 'src'),
			public: path.resolve(__dirname, 'public'),
			// todo add alias
			// components: './src/components',
			// modules: './src/modules',
			// utils: './src/utils',
			// store: './src/store',
			// images: 'public/images',
			// icons: 'public/icons',
			// apis: './src/apis',
			// actions: './src/actions',
			// reducers: './src/reducers',
			// constants: './src/constants',
		},
		'import/resolver': {
			alias: {
				map: [
					// todo add resolvers
					// ['app', './app'],
					// ['public', './public'],
					// ['components', './src/components'],
					// ['modules', './src/modules'],
					// ['utils', './src/utils'],
					// ['store', './src/store'],
					// ['apis', './src/apis'],
					// ['actions', './src/actions'],
					// ['reducers', './src/reducers'],
					// ['constants', './src/constants'],
					// ['images', './src/assets/images'],
					// ['icons', './src/assets/icons'],
				],
				extensions: ['.js', '.jsx', '.json'],
			},
		},
	},
	rules: {
		'prettier/prettier': ['error', prettierOptions],
		'react/button-has-type': 'off',
		'react/jsx-props-no-spreading': 'off',
		'import/no-cycle': 'off',
		'no-plusplus': 'off',
		'arrow-body-style': [2, 'as-needed'],
		'class-methods-use-this': 0,
		'import/imports-first': 0,
		'import/newline-after-import': 0,
		'import/no-dynamic-require': 0,
		'import/no-extraneous-dependencies': 0,
		'import/no-named-as-default': 0,
		'import/no-unresolved': 2,
		'import/no-webpack-loader-syntax': 0,
		'import/prefer-default-export': 0,
		'jsx-a11y/aria-props': 2,
		'jsx-a11y/heading-has-content': 0,
		'jsx-a11y/label-has-associated-control': [
			2,
			{
				// NOTE: If this error triggers, either disable it or add
				// your custom components, labels and attributes via these options
				// See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
				controlComponents: ['Input'],
			},
		],
		'jsx-a11y/label-has-for': 0,
		'jsx-a11y/mouse-events-have-key-events': 2,
		'jsx-a11y/role-has-required-aria-props': 2,
		'jsx-a11y/role-supports-aria-props': 2,
		'max-len': 0,
		'newline-per-chained-call': 0,
		'no-confusing-arrow': 0,
		'no-console': 1,
		'no-unused-vars': 2,
		'no-use-before-define': 0,
		'prefer-template': 2,
		'react/destructuring-assignment': 0,
		'react-hooks/rules-of-hooks': 'error',
		'react/jsx-closing-tag-location': 0,
		'react/forbid-prop-types': 0,
		'react/jsx-first-prop-new-line': [2, 'multiline'],
		'react/jsx-filename-extension': 0,
		'react/jsx-no-target-blank': 0,
		'react/jsx-uses-vars': 2,
		'react/require-default-props': 0,
		'react/require-extension': 0,
		'react/self-closing-comp': 0,
		'react/sort-comp': 0,
		'require-yield': 0,
	},
};
