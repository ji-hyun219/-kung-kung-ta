const number = prompt('number?');


if(number) {     // Ȯ���� ������  --> ����
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
        /* 1. ���� $order ���� Ȯ���Ѵ�. 2
         * 2. number ���� Ȯ���Ѵ�. 3
         * 3. ���Ѵ�.
         * 4. $order < number => $order ���� +1
         * 5. ������ => $order ���� �ٽ� 1��
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

