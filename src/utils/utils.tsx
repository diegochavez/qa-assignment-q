export default (function Utils() {
    const e2eString = (str: string) => str.replace(/\s+/g, '-').toLowerCase();
    return {
        e2eString
    }
})();
