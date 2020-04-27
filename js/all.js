
// 命名
$('h2').addClass('max1200 titleName');


$('header li').addClass('navItem');
$('.headerText h2').removeClass('max1200 titleName');


$('.serviceList li').addClass('serviceListItem');
$('.serviceList li h3').addClass('serviceListItemTitle');
$('.serviceList li p').addClass('serviceListItemText');


$('.customer li').addClass('customerListCard');
$('.customer li p').addClass('cardText');
$('.customer li span').addClass('cardUpdateTime');


// $('.footerFlex li').addClass('footerNavItem');


$('.classic .classicName').each(function(i){
    n=i+1;
    $(this).addClass('classicNameIcon_'+n);
});