exports.supportedLanguageIds = [
  'javascript',
  'javascriptreact',
  'json',
  'json5',
  'typescript',
  'css',
  'scss',
  'less',
  'graphql',
  'markdown',
  'mdx',
  'html',
  'vue',
  'yaml',
  'mdx',
  'flow',
  'angular'
]

exports.getPrettierParser = languageId => {
  if (['javascript', 'javascriptreact'].includes(languageId)) return 'babel'
  if (['typescript', 'typescriptreact'].includes(languageId)) return 'typescript'
  return languageId
}
