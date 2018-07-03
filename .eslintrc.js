module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "es6": true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {"jsx": true},
        "sourceType": "module",
        "ecmaVersion": 8
    },
    "rules": {
      "indent": ["warn", 2],
      "linebreak-style": ["warn", "unix"],
      "quotes": ["warn", "single"],
      "semi": ["warn", "never"]
    },
    "globals": {
      "expect": true,
      "done": true
    }
}
