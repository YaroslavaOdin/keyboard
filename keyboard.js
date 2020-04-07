alert('Welcome!');

document.write('<h1>virtual keyboard</h1>');

var keybRu = true; 

function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
	'(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {
	options = {
    path: '/',
	};

	if (options.expires instanceof Date) {
	options.expires = options.expires.toUTCString();
	}

	let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

	for (let optionKey in options) {
		updatedCookie += '; ' + optionKey;
		let optionValue = options[optionKey];
		if (optionValue !== true) {
			updatedCookie += '=' + optionValue;
		}
	}

	document.cookie = updatedCookie;
}

if(getCookie('keybRuCookie') != 'undefined'){
	if(getCookie('keybRuCookie') == 'true') {
		keybRu = true;
	} else {
		keybRu = false;
	}
} else {
	setCookie('keybRuCookie', keybRu, '');
}

var div1 = document.createElement('div');
var textInDiv1 = document.createTextNode('alt + shiftLeft - change language');
div1.appendChild(textInDiv1);
document.body.appendChild(div1);


var div2 = document.createElement('div');
var textInDiv2 = document.createTextNode('OS windows');
div2.appendChild(textInDiv2);
document.body.appendChild(div2);

var textArea = document.createElement('textarea');
textArea.id = 'txtAr1';
textArea.classList.add('textarea');
document.body.appendChild(textArea);

document.addEventListener('keydown', handle, false);
document.addEventListener('keypress', handle, false);
document.addEventListener('keyup', handle, false);

const keyboardKeysEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
        'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'del',
        'caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter',
        'shiftLeft', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shiftRight',  '↑',
        'ctrlLeft', 'win', 'alt', 'space', 'alt', 'ctrlRight', '←', '↓', '→',
        ];

const keyboardKeysRus = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
        'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'del',
        'caps', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter',
        'shiftLeft', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'shiftRight',  '↑',
        'ctrlLeft', 'win', 'alt', 'space', 'alt', 'ctrlRight', '←', '↓', '→',
		];
		
var indexBtn = 0;

var keysContainer = document.createElement('div');
this.keysContainer.classList.add('keyboard');
document.body.appendChild(this.keysContainer);

if(keybRu) {
	keyboardKeysRus.forEach(item => {
		const insertLineBreak = ['tab', 'caps', 'shiftLeft', 'ctrlLeft'].indexOf(item) !== -1;
		if (insertLineBreak) {
			this.keysContainer.appendChild(document.createElement('br'));
		}
		this.button = document.createElement('button');
		var textInBtn1 = document.createTextNode(item);
		this.button.appendChild(textInBtn1);
		this.button.id = indexBtn;
		this.button.classList.add('keyboard__key');
		if(indexBtn == 13 || indexBtn == 14 || indexBtn == 28 || indexBtn == 40 || indexBtn == 41 || indexBtn == 52 || indexBtn == 54 || indexBtn == 59){
			this.button.classList.add('keyboard__key--wide');
		}
		if(indexBtn == 57){
			this.button.classList.add('keyboard__key--extra-wide');
		}
		this.button.addEventListener('click', clickBtn);
		indexBtn++;
		this.keysContainer.appendChild(this.button);
	});
} else {
	keyboardKeysEng.forEach(item => {
		const insertLineBreak = ['tab', 'caps', 'shiftLeft', 'ctrlLeft'].indexOf(item) !== -1;
		if (insertLineBreak) {
			this.keysContainer.appendChild(document.createElement('br'));
		}
		this.button = document.createElement('button');
		var textInBtn1 = document.createTextNode(item);
		this.button.appendChild(textInBtn1);
		this.button.id = indexBtn;
		if(indexBtn == 13 || indexBtn == 14 || indexBtn == 28 || indexBtn == 40 || indexBtn == 41 || indexBtn == 52 || indexBtn == 54 || indexBtn == 59){
			this.button.classList.add('keyboard__key--wide');
		}
		if(indexBtn == 57){
			this.button.classList.add('keyboard__key--extra-wide');
		}
		this.button.addEventListener('click', clickBtn);
		indexBtn++;
		this.button.classList.add('keyboard__key');
		this.keysContainer.appendChild(this.button);
	});
}

var flagShift = false;
var flagAlt = false;
var flagCapsLock = false;

function handle(event) {

	var testLetter = ['ё', 'Ё', '`', '~'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('ё', 'Ё', '`', '~', 0, event);
	}

	testLetter = ['1', '!', '1', '!'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('1', '!', '1', '!', 1, event);
	}

	testLetter = ['2', '"', '2', '@'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('2', '"', '2', '@', 2, event);
	}

	testLetter = ['3', '№', '3', '#'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('3', '№', '3', '#', 3, event);
	}

	testLetter = ['4', ';', '4', '$'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('4', ';', '4', '$', 4, event);
	}

	testLetter = ['5', '%', '5', '%'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('5', '%', '5', '%', 5, event);
	}

	testLetter = ['6', ':', '6', '^'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('6', ':', '6', '^', 6, event);
	}

	testLetter = ['7', '?', '7', '&'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('7', '?', '7', '&', 7, event);
	}

	testLetter = ['8', '*', '8', '*'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('8', '*', '8', '*', 8, event);
	}

	testLetter = ['9', '(', '9', '('].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('9', '(', '9', '(', 9, event);
	}

	testLetter = ['0', ')', '0', ')'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('0', ')', '0', ')', 10, event);
	}

	testLetter = ['-', '_', '-', '_'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('-', '_', '-', '_', 11, event);
	}

	testLetter = ['=', '+', '=', '+'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('=', '+', '=', '+', 12, event);
	}

    testLetter = ['й', 'Й', 'q', 'Q'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('й', 'Й', 'q', 'Q', 15, event);
	}

    testLetter = ['ц', 'Ц', 'w', 'W'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('ц', 'Ц', 'w', 'W', 16, event);
	}

	testLetter = ['у', 'У', 'e', 'E'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('у', 'У', 'e', 'E', 17, event);
	}

	testLetter = ['к', 'К', 'r', 'R'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('к', 'К', 'r', 'R', 18, event);
	}

	testLetter = ['е', 'Е', 't', 'T'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('е', 'Е', 't', 'T', 19, event);
	}

	testLetter = ['н', 'Н', 'y', 'Y'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('н', 'Н', 'y', 'Y', 20, event);
	}

	testLetter = ['г', 'Г', 'u', 'U'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('г', 'Г', 'u', 'U', 21, event);
	}

	testLetter = ['ш', 'Ш', 'i', 'I'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('ш', 'Ш', 'i', 'I', 22, event);
	}

	testLetter = ['щ', 'Щ', 'o', 'O'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('ш', 'Ш', 'o', 'O', 23, event);
	}

	testLetter = ['з', 'З', 'p', 'P'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('з', 'З', 'p', 'P', 24, event);
	}

	testLetter = ['х', 'Х', '[', '{'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('х', 'Х', '[', '{', 25, event);
	}

	testLetter = ['ъ', 'Ъ', ']', '}'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('ъ', 'Ъ', ']', '}', 26, event);
	}

	testLetter = ['ф', 'Ф', 'a', 'A'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('ф', 'Ф', 'a', 'A', 29, event);
	}

	testLetter = ['ы', 'Ы', 's', 'S'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('ы', 'Ы', 's', 'S', 30, event);
	}

	testLetter = ['в', 'В', 'd', 'D'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('в', 'В', 'd', 'D', 31, event);
	}

	testLetter = ['а', 'А', 'f', 'F'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('а', 'А', 'f', 'F', 32, event);
	}

	testLetter = ['п', 'П', 'g', 'G'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('п', 'П', 'g', 'G', 33, event);
	}

	testLetter = ['р', 'Р', 'h', 'H'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('р', 'Р', 'h', 'H', 34, event);
	}

	testLetter = ['о', 'О', 'j', 'J'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('о', 'О', 'j', 'J', 35, event);
	}

	testLetter = ['л', 'Л', 'k', 'K'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('л', 'Л', 'k', 'K', 36, event);
	}

	testLetter = ['д', 'Д', 'l', 'L'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('д', 'Д', 'l', 'L', 37, event);
	}

	testLetter = ['ж', 'Ж', ';', ':'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('ж', 'Ж', ';', ':', 38, event);
	}

	testLetter = ['э', 'Э', '\'', '\"'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('э', 'Э', '\'', '\"', 39, event);
	}

	testLetter = ['я', 'Я', 'z', 'Z'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('я', 'Я', 'z', 'Z', 42, event);
	}

	testLetter = ['ч', 'Ч', 'x', 'X'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('ч', 'Ч', 'x', 'X', 43, event);
	}

	testLetter = ['c', 'C', 'c', 'C'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('c', 'C', 'c', 'C', 44, event);
	}

	testLetter = ['м', 'М', 'v', 'V'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('м', 'М', 'v', 'V', 45, event);
	}

	testLetter = ['и', 'И', 'b', 'B'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('и', 'И', 'b', 'B', 46, event);
	}

	testLetter = ['т', 'Т', 'n', 'N'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('т', 'Т', 'n', 'N', 47, event);
	}

	testLetter = ['ь', 'Ь', 'm', 'M'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('ь', 'Ь', 'm', 'M', 48, event);
	}

	testLetter = ['б', 'Б', ',', '<'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('б', 'Б', ',', '<', 49, event);
	}

	testLetter = ['ю', 'Ю', '.', '>'].indexOf(event.key) !== -1;
	if (testLetter) {
		printAndColorBtn('ю', 'Ю', '.', '>', 50, event);
	}

	if(event.code == 'ControlLeft') {
		buttonActive = document.getElementById('54');
		buttonActive.classList.add('keyboard-key-pressed');
    	if(event.type == 'keyup') {
			buttonActive.classList.remove('keyboard-key-pressed');	
		}
	}

	if(event.code == 'ControlRight') {
		buttonActive = document.getElementById('59');
		buttonActive.classList.add('keyboard-key-pressed');
    	if(event.type == 'keyup') {
			buttonActive.classList.remove('keyboard-key-pressed');	
		}
	}

	if(event.code == 'ShiftRight') {
		buttonActive = document.getElementById('52');
		buttonActive.classList.add('keyboard-key-pressed');
    	if(event.type == 'keyup') {
			buttonActive.classList.remove('keyboard-key-pressed');	
		}
	}

	if(event.code == 'ArrowUp') {
		buttonActive = document.getElementById('53');
		buttonActive.classList.add('keyboard-key-pressed');
    	if(event.type == 'keydown') {
    		textArea.value = textArea.value + '↑';
    	}
    	if(event.type == 'keyup') {
			buttonActive.classList.remove('keyboard-key-pressed');
	    	
    	}
	}
	
	if(event.code == 'ArrowLeft') {
		buttonActive = document.getElementById('60');
		buttonActive.classList.add('keyboard-key-pressed');
    	if(event.type == 'keydown') {
    		textArea.value = textArea.value + '←';
    	}
    	if(event.type == 'keyup') {
			buttonActive.classList.remove('keyboard-key-pressed');
	    	
    	}
	}
	
	if(event.code == 'ArrowDown') {
		buttonActive = document.getElementById('61');
		buttonActive.classList.add('keyboard-key-pressed');
    	if(event.type == 'keydown') {
    		textArea.value = textArea.value + '↓';
    	}
    	if(event.type == 'keyup') {
			buttonActive.classList.remove('keyboard-key-pressed');
	    	
    	}
	}

	if(event.code == 'ArrowRight') {
		buttonActive = document.getElementById('62');
		buttonActive.classList.add('keyboard-key-pressed');
    	if(event.type == 'keydown') {
    		textArea.value = textArea.value + '→';
    	}
    	if(event.type == 'keyup') {
			buttonActive.classList.remove('keyboard-key-pressed');
	    	
    	}
	}

    if(event.code == 'ShiftLeft') {
		
    	var buttonActive = document.getElementById('41');
		buttonActive.classList.add('keyboard-key-pressed');
    	if(event.type == 'keydown') {
    		flagShift = true;
    		if(flagAlt) {
    			if(keybRu) {
					keybRu = false;
					setCookie('keybRuCookie', keybRu, '');
					renameBtn();
    			} else {
					keybRu = true;
					setCookie('keybRuCookie', keybRu, '');
					renameBtn();
    			}
    		}
    	}
    	if(event.type == 'keyup') {
			buttonActive.classList.remove('keyboard-key-pressed');
	    	flagShift = false;
    	}
    }

    if(event.code == 'AltLeft' || event.code == 'AltLeft') {
		buttonActive = document.getElementById('56');
		buttonActive.classList.add('keyboard-key-pressed');
    	if(event.type == 'keydown') {
    		flagAlt = true;
    	}
    	if(event.type == 'keyup') {
			buttonActive.classList.remove('keyboard-key-pressed');
	    	flagAlt = false;
    	}
    }

    if(event.code == 'CapsLock') {
		buttonActive = document.getElementById('28');
		if(event.type == 'keydown') {
    		if(flagCapsLock) {
    			flagCapsLock = false;
    			buttonActive.classList.remove('keyboard-key-pressed');
    		} else {
    			flagCapsLock = true;
    			buttonActive.classList.add('keyboard-key-pressed');
    		}
    	}
    }

    if(event.code == 'Backspace') {
		buttonActive = document.getElementById('13');
		buttonActive.classList.add('keyboard-key-pressed');
    	if(event.type == 'keydown') {
    		//flagAlt = true;
    	}
    	if(event.type == 'keyup') {
			buttonActive.classList.remove('keyboard-key-pressed');
    	}
	}

	if(event.code == 'Space') {
		buttonActive = document.getElementById('57');
		buttonActive.classList.add('keyboard-key-pressed');
    	if(event.type == 'keydown') {
    		textArea.value = textArea.value + ' ';
    	}
    	if(event.type == 'keyup') {
			buttonActive.classList.remove('keyboard-key-pressed');
	    }
	}
	
	if(event.code == 'Backspace') {
		buttonActive = document.getElementById('13');
		buttonActive.classList.add('keyboard-key-pressed');
    	if(event.type == 'keydown') {
    		if(textArea.value.length > 0) {
    			textArea.value = textArea.value.slice(0, -1);
    		}
    	}
    	if(event.type == 'keyup') {
			buttonActive.classList.remove('keyboard-key-pressed');
	    }
    }

    if(event.code == 'Tab') {
		buttonActive = document.getElementById('14');
		buttonActive.classList.add('keyboard-key-pressed');
    	if(event.type == 'keydown') {
    		textArea.value = textArea.value + '\t';
    	}
    	if(event.type == 'keyup') {
			buttonActive.classList.remove('keyboard-key-pressed');
	    }
    }

	if(event.code == 'Delete') {
		buttonActive = document.getElementById('27');
		buttonActive.classList.add('keyboard-key-pressed');
    	if(event.type == 'keyup') {
			buttonActive.classList.remove('keyboard-key-pressed');
	    }
	}
	
	if(event.code == 'altRight') {
		buttonActive = document.getElementById('58');
		buttonActive.classList.add('keyboard-key-pressed');
    	if(event.type == 'keyup') {
			buttonActive.classList.remove('keyboard-key-pressed');
	    }
	}
	
	if(event.code == 'OSLeft') {
		buttonActive = document.getElementById('55');
		buttonActive.classList.add('keyboard-key-pressed');
    	if(event.type == 'keyup') {
			buttonActive.classList.remove('keyboard-key-pressed');
	    }
	}

    if(event.code == 'Enter') {
		buttonActive = document.getElementById('40');
		buttonActive.classList.add('keyboard-key-pressed');
    	if(event.type == 'keydown') {
    		textArea.value = textArea.value + '\n';
    	}
    	if(event.type == 'keyup') {
			buttonActive.classList.remove('keyboard-key-pressed');
	    }
    }
}


function printAndColorBtn(let11, let12, let22, let21, letIndex, event1) {
	var buttonActive = document.getElementById(letIndex);
	buttonActive.classList.add('keyboard-key-pressed');
	if(event1.type == 'keypress') {
		if(event1.key == let11 || event1.key == let22) {
			if(keybRu) {
				textArea.value += let11;
			} else {
				textArea.value += let22;
			}
		}
		if(flagShift) {
			if(event1.key == let12 || event1.key == let21) {
				if(keybRu) {
					textArea.value += let12;
				} else {
					textArea.value += let21;
				}
			}
		}
		if(flagCapsLock) {
			if(event1.key == let12 || event1.key == let21) {
				if(keybRu) {
					textArea.value += let12;
				} else {
					textArea.value += let21;
				}
			}
		}
	}
	if(event1.type == 'keyup') {
		buttonActive.classList.remove('keyboard-key-pressed');
	}
}


function clickBtn(event) {
	var arr0 =['ё', 'Ё', '`', '~'];
	var arr1 = ['1', '!', '1', '!'];
	var arr2 = ['2', '"', '2', '@'];
	var arr3 = ['3', '№', '3', '#'];
	var arr4 = ['4', ';', '4', '$'];
	var arr5 = ['5', '%', '5', '%'];
	var arr6 = ['6', ':', '6', '^'];
	var arr7 = ['7', '?', '7', '&'];
	var arr8 = ['8', '*', '8', '*'];
	var arr9 = ['9', '(', '9', '('];
	var arr10 = ['0', ')', '0', ')'];
	var arr11 = ['-', '_', '-', '_'];
	var arr12 = ['=', '+', '=', '+'];
	var arr13 = [''];
	var arr14 = [''];
	var arr15 = ['й', 'Й', 'q', 'Q'];
	var arr16 = ['ц', 'Ц', 'w', 'W'];
	var arr17 = ['у', 'У', 'e', 'E'];
	var arr18 = ['к', 'К', 'r', 'R'];
	var arr19 = ['е', 'Е', 't', 'T'];
	var arr20 = ['н', 'Н', 'y', 'Y'];
	var arr21 = ['г', 'Г', 'u', 'U'];
	var arr22 = ['ш', 'Ш', 'i', 'I'];
	var arr23 = ['щ', 'Щ', 'o', 'O'];
	var arr24 = ['з', 'З', 'p', 'P'];
	var arr25 = ['х', 'Х', '[', '{'];
	var arr26 = ['ъ', 'Ъ', ']', '}']
	var arr27 = [''];
	var arr28 = [''];
	var arr29 =  ['ф', 'Ф', 'a', 'A'];
	var arr30 = ['ы', 'Ы', 's', 'S'];
	var arr31 = ['в', 'В', 'd', 'D'];
	var arr32 = ['а', 'А', 'f', 'F'];
	var arr33 = ['п', 'П', 'g', 'G'];
	var arr34 = ['р', 'Р', 'h', 'H'];
	var arr35 = ['о', 'О', 'j', 'J'];
	var arr36 = ['л', 'Л', 'k', 'K'];
	var arr37 = ['д', 'Д', 'l', 'L'];
	var arr38 = ['ж', 'Ж', ';', ':'];
	var arr39 = ['э', 'Э', '', ''];  
	var arr40 = [''];
	var arr41 = [''];
	var arr42 = ['я', 'Я', 'z', 'Z'];
	var arr43 = ['ч', 'Ч', 'x', 'X'];
	var arr44 = ['c', 'C', 'c', 'C'];
	var arr45 = ['м', 'М', 'v', 'V'];
	var arr46 = ['и', 'И', 'b', 'B'];
	var arr47 = ['т', 'Т', 'n', 'N'];
	var arr48 = ['ь', 'Ь', 'm', 'M'];
	var arr49 = ['б', 'Б', ',', '<'];
	var arr50 = ['ю', 'Ю', '.', '>'];
	var arr51 = [''];
	var arr52 = [''];
	var arr53 = ['↑', '↑', '↑', '↑'];
	var arr54 = [''];
	var arr55 = [''];
	var arr56 = [''];
	var arr57 = [''];
	var arr58 = [''];
	var arr59 = [''];
	var arr60 = ['←', '←','←','←'];
	var arr61 = ['↓', '↓', '↓','↓'];
	var arr62 = ['→', '→', '→', '→'];

	var arrMain = [arr0, arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9, arr10, arr11, arr12, arr13, arr14, arr15, arr16,
		arr17, arr18, arr19, arr20, arr21, arr22, arr23, arr24, arr25, arr26, arr27, arr28, arr29, arr30, arr31, arr32, arr33,
		arr34, arr35, arr36, arr37, arr38, arr39, arr40, arr41, arr42, arr43, arr44, arr45, arr46, arr47, arr48, arr49, arr50,
		arr51, arr52, arr53, arr54, arr55, arr56, arr57, arr58, arr59, arr60, arr61, arr62
	];
	var indexArr = 0;
	if(this.id) {
		indexArr = this.id;
	}
	if(keybRu) {
		if(flagCapsLock || flagShift) {
			textArea.value += arrMain[indexArr][1];
		} else {
			textArea.value += arrMain[indexArr][0];
		}
	} else {
		if(flagCapsLock || flagShift) {
			textArea.value += arrMain[indexArr][3];
		} else {
			textArea.value += arrMain[indexArr][2];
		}
	}

		//backSpace
	if(indexArr == 13) {
		if(textArea.value.length > 0) {
			textArea.value = textArea.value.slice(0, -1);
		}
	}

	//Tab
	if(indexArr == 14) {
		textArea.value = textArea.value + '\t';
	}

	//Del
	if(indexArr == 27) {
		var positionCursor = getCaretPos('txtAr1');
		if(positionCursor < textArea.value.length) {
			textArea.value = textArea.value.substr(0, positionCursor) + textArea.value.substr(positionCursor+1, textArea.value.length-1);
			goTo(positionCursor);
		}
	}

	//Enter
	if(indexArr == 40) {
		textArea.value = textArea.value + '\n';
	}
}

//ищем позицию курсора в textArea
function getCaretPos(objName) {
	var obj = document.getElementById(objName);
	obj.focus();
	if(document.selection) {
		var sel = document.selection.createRange();
		var clone = sel.duplicate();
		sel.collapse(true);
		clone.moveToElementText(obj);
		clone.setEndPoint('EndToEnd', sel);
		return clone.text.length;
	} else 
		if(obj.selectionStart !== false) return obj.selectionStart; 
		else return 0;
}

//после delete возвращаем курсор в место удаления
//если отключить функцию, то курсор всегда будет прходить в конец строки textArea
function goTo(n)
 {
    var o = document.getElementById('txtAr1');
    if(!document.all) {
        o.setSelectionRange(n,n); 
        o.focus(); 
    } else {     
        var r = o.createTextRange();     
        r.collapse(true);
        r.moveStart('character', n);
        r.moveEnd('character', 0);
        r.select();
    }
}

function renameBtn() {
	if(keybRu) {
		var indexBtn = 0;
		keyboardKeysRus.forEach(item => {
			var textInBtn1 = document.createTextNode(item);
			var buttonActive = document.getElementById(indexBtn);
			var tempText = document.getElementById(indexBtn).lastChild;
			buttonActive.removeChild(tempText);
			buttonActive.appendChild(textInBtn1);
			indexBtn++;
		});
	} else {
		indexBtn = 0;
		keyboardKeysEng.forEach(item => {
			var textInBtn1 = document.createTextNode(item);
			var buttonActive = document.getElementById(indexBtn);
			var tempText = document.getElementById(indexBtn).lastChild;
			buttonActive.removeChild(tempText);
			buttonActive.appendChild(textInBtn1);
			indexBtn++;
		});
	}
}