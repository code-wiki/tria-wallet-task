const StringGeneratorAPI = (enteredUsrName) => {
    const randomNames = [1, 2, 3].map(
        (elem) =>
            enteredUsrName + Math.floor(Math.random() * (999 - 100 + 1) + 100)
    );
    return randomNames;
};
export default StringGeneratorAPI;
