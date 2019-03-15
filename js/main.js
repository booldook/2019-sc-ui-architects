var prjs = [];
for(var i=0; i<8; i++) {
	prjs[i] = [];
}
prjs[0][0] = 'Summer House';
prjs[1][0] = 'Brick House';
prjs[2][0] = 'Renovated';
prjs[3][0] = 'Barn House';
prjs[4][0] = 'Barn House';
prjs[5][0] = 'Renovated';
prjs[6][0] = 'Brick House';
prjs[7][0] = 'Summer House';

prjs[0][1] = '../img/house2.jpg';
prjs[1][1] = '../img/house3.jpg';
prjs[2][1] = '../img/house4.jpg';
prjs[3][1] = '../img/house5.jpg';
prjs[4][1] = '../img/house3.jpg';
prjs[5][1] = '../img/house4.jpg';
prjs[6][1] = '../img/house5.jpg';
prjs[7][1] = '../img/house2.jpg';

for(var i=0; i<8; i++) {
	var html = `<li class="prj">
		<img src="${prjs[i][1]}" alt="프로젝트사진" class="img">
		<div class="sub_tit">${prjs[i][0]}</div>
	</li>`;
	$(".prjs ul").append(html);
}
