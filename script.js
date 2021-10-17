const number = prompt('number?');


if(number) {     // 확인을 누를때  --> 실행
    let word;
    let newWord;
    let $word = document.querySelector('#word');
    let $input = document.querySelector('input');
    const $button = document.querySelector('button');
    let $order = document.querySelector('#order');



    function onInput(e) {
        newWord = e.target.value;
    }



    function nextPerson() {
        /* 1. 현재 $order 값을 확인한다. 2
         * 2. number 값을 확인한다. 3
         * 3. 비교한다.
         * 4. $order < number => $order 값이 +1
         * 5. 같으면 => $order 값이 다시 1로
         */

        let order = parseInt($order.textContent);
        if (order === parseInt(number)) {
            order = 1;
        }
        else {
            order++;
        }
        $order.textContent = order;

    }



    function onClickButton(e) {
        if (newWord.length === 3 && (!word || word[word.length - 1] === newWord[0])) {
            word = newWord;
            $word.textContent = word;
            nextPerson();
        }
        else {
            alert('try agin');
        }
        $input.value = '';
    }




    $input.addEventListener('input', onInput);
    $button.addEventListener('click', onClickButton);



}

