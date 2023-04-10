function answer(url) {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}

process.stdin.on('data', (data) => {
    const input = data.toString();
    const result = answer(input);
    console.log(result);
});