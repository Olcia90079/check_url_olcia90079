function answer(url) {
    try {
        new URL(url);
        return "true";
    } catch (error) {
        return "false";
    }
}

module.exports = answer