var names=new Array();
names[0]="Yukta";
names[1]="John";
names[2]="Jay";
names[3]="jason";
names[4]="priya";
names[5]="farhan";
names[6]="lili";
names[7]="pooja";
names[8]="lav";
names[9]="jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}