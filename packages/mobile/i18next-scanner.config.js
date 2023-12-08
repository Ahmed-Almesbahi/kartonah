const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const typescript = require('typescript');

module.exports = {
  input: [
    'App/**/*.{ts,tsx}',
    // Use ! to filter out files or directories
    '!App/**/*.spec.{js,jsx}',
    '!App/i18n/**',
    '!App/utils/**',
    '!App/typescript/**',
    '!**/node_modules/**',
  ],
  output: './App/i18n/lang',
  // output: './',hommk
  options: {
    debug: true,
    func: {
      list: ['i18next.t', 'i18n.t', 't'],
      extensions: ['.js', '.jsx'],
    },
    trans: {
      component: 'Trans',
      i18nKey: 'i18nKey',
      defaultsKey: 'defaults',
      extensions: ['.js', '.jsx'],
      fallbackKey: function (ns, value) {
        return value;
      },
      acorn: {
        ecmaVersion: 10, // defaults to 10
        sourceType: 'module', // defaults to 'module'
        // Check out https://github.com/acornjs/acorn/tree/master/acorn#interface for additional options
      },
    },
    lngs: ['en', 'ar', 'tr'],
    ns: ['locale', 'resource'],
    defaultLng: 'en',
    defaultNs: 'resource',
    defaultValue: '__STRING_NOT_TRANSLATED__',
    resource: {
      loadPath: 'App/i18n/{{lng}}.json',
      savePath: 'App/i18n/{{lng}}.json',
      jsonIndent: 2,
      lineEnding: '\n',
    },
    nsSeparator: false, // namespace separator
    keySeparator: false, // key separator
    interpolation: {
      prefix: '{{',
      suffix: '}}',
    },
  },
  transform: function customTransform(file, enc, done) {
    'use strict';

    const {base, ext} = path.parse(file.path);

    if (['.ts', '.tsx'].includes(ext) && !base.includes('.d.ts')) {
      if (
        file.path.includes('App/utils') ||
        file.path.includes('App/theme') ||
        file.path.includes('App/typescript')
      ) {
        //do nothing
      } else {
        const content = fs.readFileSync(file.path, enc);

        const {outputText} = typescript.transpileModule(content, {
          compilerOptions: {target: 'es2018'},
          fileName: path.basename(file.path),
        });

        this.parser.parseTransFromString(outputText);
        this.parser.parseFuncFromString(outputText);
      }
    }

    // console.log('file.path', file.path);
    // const parser = this.parser;
    // let content = fs.readFileSync(file.path, enc);
    // let count = 0;

    // const options = {
    //   presets: ['babel-preset-stage-2'],
    //   plugins: ['babel-plugin-syntax-jsx'],
    // };

    // let code = require('babel-core').transform(content, options).code;

    // content = typescript.transpileModule(content, {
    //   compilerOptions: {
    //     // module: typescript.ModuleKind.CommonJS,
    //     // module: typescript.ModuleKind.AMD,
    //     target: 'es2018',
    //   },

    //   fileName: path.basename(file.path),
    // }).outputText;

    // parser.parseFuncFromString(
    //   content,
    //   {list: ['i18next._', 'i18next.__', 't']},
    //   (key, options) => {
    //     parser.set(
    //       key,
    //       Object.assign({}, options, {
    //         nsSeparator: false,
    //         keySeparator: false,
    //       }),
    //     );
    //     ++count;
    //   },
    // );

    // if (count > 0) {
    //   console.log(
    //     `i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(
    //       JSON.stringify(file.relative),
    //     )}`,
    //   );
    // }

    done();
  },
};
