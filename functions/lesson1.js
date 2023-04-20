let ask = (question, yes, no) => 0 ? yes() : no();
ask(
    'Ви погоджуєтесь?',
    function () {
        console.log('Ви погодились');
    },
    function () {
        console.log('Ви відмінили виконання');
    }
);