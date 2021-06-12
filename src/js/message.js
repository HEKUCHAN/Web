window.onload = function () {
    var botton = document.getElementById('submit');
    var form = document.getElementById('form');
    var chat = document.getElementById('chatArea');
    var history = document.getElementsByClassName('user-last-message');

    var messageHistory = []

    function CreateMessage() {
        var today = new Date();
        var message  = form.value;
        form.value = '';
        if (message != "".replace(" ","")) {
            messageHistory.push('message')
            history.value = messageHistory[0];
            var date = today.getFullYear() + "/" + (today.getMonth() + 1) + '/' + today.getDate() + "  " + today.getHours() + ":" + today.getMinutes();
            chat.insertAdjacentHTML('beforeend', '<div class="my-message"><div class="message-case"><div class="my-message">' + message + '</div></div><p class="date">' + date + '</p></div>');
            chat.insertAdjacentHTML('beforeend', '<div class="person-message"><div class="user-icon"><img src="img/sozai_cman_jp_20210611230506.svg" class="user-icon"></div><div class="person-info"><div class="person-name">サイトの管理人</div><div class="person-inner-message"><p><span>' + message + '</span></p></div><div><p class="date">' + date + '</p></div></div></div>');
        }
    }
    botton.addEventListener('click',CreateMessage);
};