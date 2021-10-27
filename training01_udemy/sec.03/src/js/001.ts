/* 001_変数と型
 * 変数宣言の際にコロンに続けて型名を指定できる
 * let {変数名}: {型名} = {値}
 * 宣言時に指定した方以外のデータ型を代入しようとするとエラーになる
 */
export module exec {
	/* 文字列型: string */
	let str: string = "hello world"
	console.log(`typeof str is: ${typeof str}`) // -> string

	/* string にnumber を代入しようとするとエラーが出る:
	 *   Type 'number' is not assignable to type 'string'.
	 */
	// str = 100

	/* 数値型: number */
	let num: number = 42
	console.log(`typeof num is: ${typeof num}`) // -> number

	/* 真偽値型: boolean */
	let tf: boolean = true
	console.log(`typeof tf is: ${typeof tf}`) // -> boolean

	/* 配列は、{型名}[]で宣言する */
	let arr: number[] = [1, 2, 3] /* number 型のみ受け入れる配列 */
	console.log(`typeof arr is: ${typeof arr}`) // -> object

	/* 複数の型を受け取るためには、型を| で区切って宣言する */
	let arr_2: (number|string)[] = ["1", 2, `3`, 4.0]
	console.log(`tyoeof arr_2 is: ${typeof arr_2}`) // -> object


	/* タプル: データの指定の要素番号に何が入るかを指定できる */
	let tup: [number, string, boolean] = [1, 'user_001', true];
	console.log(`typeof tup is: ${typeof tup}`) // -> object

	/* 要素が足りなかったり、異なるデータ型が代入されるとエラー
	 *   Type '[]' is not assignable to type '[number, string, boolean]'.
	 *   Source has 0 element(s) but target requires 3
	 */
	// tup = [];

	/* オブジェクト型: key, value それぞれに型を指定できる */
	let obj: {[key: string]: string} = {
		id: "2",
		name: "user_002",
		is_adminer: "false",
	};
	console.log(`typeof obj is: ${typeof tup}`) // -> object

}