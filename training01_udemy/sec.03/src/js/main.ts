import yargs from 'yargs/yargs';

/* args でコマンドライン引数を展開 */
const argv = yargs(process.argv.slice(2)).options({
	run: { type: 'string', default: "" },
}).parseSync();

if (argv.run === "") {
	console.log(
		"実行するファイルが指定されていません。コマンドライン引数 run でファイル名を指定してください\n" + 
		"ファイル src/js/001.ts を実行する場合: npm start -- --run 001.ts"
	)
} else {
	/* 指定されたファイルをモジュールとして読み込み */
	try{
		import("./test");
	}catch(e){
		console.error("error");
	}
}