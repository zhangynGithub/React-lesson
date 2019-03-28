require('../css/users.scss');

function fetchDatas(cb) {
    $.getJSON('/api/users').then(res => {
        if (!res.errcode) {
            cb(res.data)
        } else {
            alert(res.errmsg)
        }
    })
}

function getUserTpl(users) {
    let tpl = '';
    users.forEach(user => {
        tpl += `<li data-id="${user.id}">${user.name}</li>`;
    })
    return `<div class="comp-a"><h1>Hello Users</h1><ul>${tpl}</ul></div>`;
}

function bind() {
    $('.comp-a').on('click', 'ul li', function () {
        $(this).addClass('active').siblings().removeClass('active')
    })
}

function init() {
    fetchDatas(function(res){
        $('body').append(getUserTpl(res));
        bind();
    })
}

exports.init = init;