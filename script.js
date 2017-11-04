var id_menu = new Array('sub_menu_1','sub_menu_2','sub_menu_3','sub_menu_4','sub_menu_5','sub_menu_6','sub_menu_7','sub_menu_8','sub_menu_9','sub_menu_11','sub_menu_12','sub_menu_13');
startList = function allclose() {
	for (i=0; i < id_menu.length; i++){
		document.getElementById(id_menu[i]).style.display = "none";
	}
}
function openMenu(id){
	
	for (i=0; i < 3; i++){
		if (id != id_menu[i] &&( id == 'sub_menu_1' || id == 'sub_menu_2' || id == 'sub_menu_3' )){
			document.getElementById(id_menu[i]).style.display = "none";
		}
	}
    for (i=3; i < 6; i++){
		if (id != id_menu[i] &&( id == 'sub_menu_4' || id == 'sub_menu_5' || id == 'sub_menu_6' )){
			document.getElementById(id_menu[i]).style.display = "none";
		}
	}
	for (i=6; i < 9; i++){
		if (id != id_menu[i] &&( id == 'sub_menu_7' || id == 'sub_menu_8' || id == 'sub_menu_9' )){
			document.getElementById(id_menu[i]).style.display = "none";
		}
	}
	for (i=9; i < 12; i++){
		if (id != id_menu[i] &&( id == 'sub_menu_11' || id == 'sub_menu_12' || id == 'sub_menu_13' )){
			document.getElementById(id_menu[i]).style.display = "none";
		}
	}
	if (document.getElementById(id).style.display == "block"){
		document.getElementById(id).style.display = "none";
	}else{
		document.getElementById(id).style.display = "block";
	}
}
window.onload=startList;
