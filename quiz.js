function growTree(){
	var height = document.getElementById('tree-height').value;
	var character = document.getElementById('tree-character').value;
	if(height !== "" && character !== ""){
		tree({"height": height, "character": character});
	}else{
		alert("Both fields must have a value!");
	}
}

function tree (treeObj) {
	for (var x = 0; x < treeObj.height; x++) {
		var finalStr = "";
         for (var y = 0; y < treeObj.height-x-1; y++) {
             finalStr += " ";
         }
         for (var y = 0; y < x*2+1; y++) {
             finalStr += treeObj.character;
         }
         console.log(finalStr);
     }
}

document.getElementById("grow").addEventListener("click", function(){
    growTree();
});

document.getElementById('tree-height').addEventListener("keydown", function(){
    if(window.event.keyCode=='13'){
        growTree();
    }
}, false);

document.getElementById('tree-character').addEventListener("keydown", function(){
    if(window.event.keyCode=='13'){
        growTree();
    }
}, false);
