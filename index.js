module.exports = () => {
    let count = 0;

    return (function f() {
        f.count = ++count;
        f.a = f;
        return f;
    })()
};