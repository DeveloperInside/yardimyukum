module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module:react-native-dotenv'],
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.jsx', '.js', '.json', '.ts', '.tsx'],
        alias: {}
      }
    ],
    'react-native-reanimated/plugin'
  ]
}
