function masukkanFunction(functionCallback) {
    const passParam = "hai";
    return functionCallback(passParam);
}

masukkanFunction(function (parameter) {
    console.log(parameter);
});