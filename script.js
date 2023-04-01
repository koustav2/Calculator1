(function () {
     const screen = document.querySelector('.screen');
        const buttons = document.querySelectorAll('.key');
        const equalBtn = document.querySelector('.equal');
        const clearBtn = document.querySelector('.clear');

        buttons.forEach(function (button) {
            button.addEventListener('click', function (e) {
                let value = e.target.dataset.num;
                screen.value += value;
            });
        });

        equalBtn.addEventListener('click', function (e) {
            if (screen.value === '') {
                screen.value = 'Please enter a value';
            } else {
                let answer = eval(screen.value);
                screen.value = answer;
            }
        });


        clearBtn.addEventListener('click', function (e) {
            screen.value = '';
        }
        );


})();


