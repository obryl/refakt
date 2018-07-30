export function translit(str) {
    str = str.toLowerCase().replace(/<.+>/, ' ').replace(/\s+/, ' ');
    const c = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'д': 'd', 'е': 'e', 'ё': 'jo', 'ж': 'zh', 'з': 'z', 'и': 'y', 'i': 'i', 'й': 'i', 'к': 'k',
        'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's',  'т': 't',  'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch',
        'ш': 'sh', 'щ': 'shch', 'ъ': '', 'ы': 'y', 'ь': '', 'є': 'ie', 'ї': 'i', 'ю': 'iu',  'я': 'ia', ' ': '-', ';': '', ':': '', ',': '',
        '—': '-',  '–': '-', '.': '', '«': '', '»': '', '"': '', '\'': '', '@': ''
    };
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        const ch = str.charAt(i);
        newStr += ch in c ? c[ch] : ch;
    }
    return newStr;
}
