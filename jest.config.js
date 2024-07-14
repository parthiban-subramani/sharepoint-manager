module.exports = {
    transformIgnorePatterns: [
        "/node_modules/(?!axios).+\\.js$"
    ],
    transform: {
        "^.+\\.js$": "babel-jest",
        "^.+\\.jsx$": "babel-jest"
    },
    moduleFileExtensions: ["js", "jsx"]
};