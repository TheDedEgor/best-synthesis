import pluginVue from 'eslint-plugin-vue';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
    ...pluginVue.configs['flat/recommended'],
    eslintConfigPrettier,
    {
        rules: {
            'vue/multi-word-component-names': 0,
            'vue/max-attributes-per-line': [
                'error',
                {
                    singleline: { max: 1 },
                    multiline: { max: 1 }
                }
            ],
            'vue/html-indent': [
                'error',
                4,
                {
                    attribute: 1,
                    baseIndent: 1,
                    closeBracket: 0,
                    alignAttributesVertically: true,
                    ignores: []
                }
            ],
            'vue/html-closing-bracket-newline': [
                'error',
                {
                    singleline: 'never',
                    multiline: 'always',
                    selfClosingTag: {
                        singleline: 'never',
                        multiline: 'always'
                    }
                }
            ],
            'vue/html-closing-bracket-spacing': [
                'error',
                {
                    startTag: 'never',
                    endTag: 'never',
                    selfClosingTag: 'always'
                }
            ],
            'vue/html-self-closing': [
                'error',
                {
                    html: {
                        void: 'never',
                        normal: 'always',
                        component: 'always'
                    },
                    svg: 'always',
                    math: 'always'
                }
            ],
            'vue/multiline-html-element-content-newline': [
                'error',
                {
                    ignoreWhenEmpty: true,
                    ignores: ['pre', 'textarea'],
                    allowEmptyLines: false
                }
            ],
            'vue/mustache-interpolation-spacing': ['error', 'always'],
            'vue/no-multi-spaces': [
                'error',
                {
                    ignoreProperties: false
                }
            ],
            'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
            'vue/prop-name-casing': ['error', 'camelCase'],
            'vue/require-explicit-emits': [
                'error',
                {
                    allowProps: false
                }
            ],
            'vue/require-prop-types': ['error'],
            'vue/v-bind-style': [
                'error',
                'shorthand',
                {
                    sameNameShorthand: 'ignore'
                }
            ]
        }
    }
];
