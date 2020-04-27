
// 命名
$('header li').addClass('navItem');

$('.serviceList li').addClass('serviceListItem');
$('.serviceList li h3').addClass('serviceListItemTitle');
$('.serviceList li p').addClass('serviceListItemText');

$('.customer li').addClass('customerListCard');
$('.customer li p').addClass('cardText');
$('.customer li span').addClass('cardUpdateTime');

$('.footerFlex li').addClass('footerNavItem');

$('h2').addClass('max1200 titleName');

$('.classic .classicName').each(function(i){
    n=i+1;
    $(this).addClass('classicNameIcon_'+n);
});