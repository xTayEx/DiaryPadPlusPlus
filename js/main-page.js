//let pic_ori_width = $('.odd-recommendation-pic').css('width');
//let pic_ori_height = $('.eve-recommendation-pic').css('height');

$('#to-edit-page').click(function(){
    window.location.href = './editor.html';
});

let top_pos = $('.tool').css('top');
top_pos = Number(top_pos.substring(0, top_pos.indexOf('p')));
window.onscroll = function(){
    let top = document.documentElement.scrollTop || document.body.scrollTop;
    $('.tool').css('top',top_pos + top + 'px');
};
