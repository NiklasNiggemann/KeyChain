const text = document.getElementById('text');
const key = document.getElementById('key');
const mode = document.getElementById('mode');

let keys;
function resetKeys() {
    keys = [
        'C ', 'C# ', 'D ', 'D# ', 'E ', 'F ', 'F# ', 'G ', 'G# ', 'A ', 'A# ', 'B ',
        'C ', 'C# ', 'D ', 'D# ', 'E ', 'F ', 'F# ', 'G ', 'G# ', 'A ', 'A# ', 'B '
    ];
}
let keyInterval;
let whatMode = 'major';
let root;

let C;
let Cs;
let D;
let Eb;
let E;
let F;
let Fs;
let G;
let Ab;
let A;
let Bb;
let B;

function itIsMajor() {
    whatMode = 'major';
    mode.innerHTML = 'major';
}

function itIsDorian() {
    whatMode = 'dorian';
    mode.innerHTML = 'dorian';
}

function itIsPhrygian() {
    whatMode = 'phrygian';
    mode.innerHTML = 'phrygian';
}

function itIsLydian() {
    whatMode = 'lydian';
    mode.innerHTML = 'lydian';
}

function itIsMixolydian() {
    whatMode = 'mixolydian';
    mode.innerHTML = 'mixolydian';
}

function itIsMinor() {
    whatMode = 'minor';
    mode.innerHTML = 'minor';
}

function itIsLocrian() {
    whatMode = 'locrian';
    mode.innerHTML = 'locrian';
}

function showKey(root) {

    keyInterval = setInterval(whichKey, 1);

    function whichKey() {
        switch (whatMode) {
            case 'major':
                text.innerHTML = keys[root] + keys[root + 2] + keys[root + 4] + keys[root + 5] + keys[root + 7] + keys[root + 9] + keys[root + 11];
                if (C) {
                    mode.innerHTML = 'major';
                } else if (Cs) {
                    keys[5] = 'E# ';
                    keys[12] = 'B# ';
                    mode.innerHTML = 'major';
                } else if (D) {
                    mode.innerHTML = 'major';
                } else if (Eb) {
                    keys[3] = 'Eb ';
                    keys[8] = 'Ab ';
                    keys[10] = 'Bb ';
                    mode.innerHTML = 'major';
                } else if (F) {
                    keys[10] = 'Bb ';
                    mode.innerHTML = 'major';
                } else if (E) {
                    mode.innerHTML = 'major';
                } else if (Fs) {
                    keys[17] = 'E# ';
                    mode.innerHTML = 'major';
                } else if (G) {
                    mode.innerHTML = 'major';
                } else if (Ab) {
                    keys[8] = 'Ab ';
                    keys[10] = 'Bb ';
                    keys[13] = 'Db ';
                    keys[15] = 'Eb ';
                    mode.innerHTML = 'major';
                } else if (A) {
                    mode.innerHTML = 'major';
                } else if (Bb) {
                    keys[10] = 'Bb ';
                    keys[15] = 'Eb ';
                    mode.innerHTML = 'major';
                } else if (B) {
                    mode.innerHTML = 'major';
                }
                break;
            case 'dorian':
                text.innerHTML = keys[root] + keys[root + 2] + keys[root + 3] + keys[root + 5] + keys[root + 7] + keys[root + 9] + keys[root + 10];
                if (C) {
                    keys[3] = 'Eb ';
                    keys[10] = 'Bb ';
                } else if (Eb) {
                    keys[3] = 'Eb ';
                    keys[6] = 'Gb ';
                    keys[8] = 'Ab ';
                    keys[10] = 'Bb ';
                    keys[13] = 'Db ';
                } else if (F) {
                    keys[8] = 'Ab ';
                    keys[10] = 'Bb ';
                    keys[15] = 'Eb ';
                } else if (G) {
                    keys[10] = 'Bb ';
                } else if (Ab) {
                    keys[11] = 'Cb ';
                    keys[18] = 'Gb ';
                } else if (Bb) {
                    keys[10] = 'Bb ';
                    keys[15] = 'Eb ';
                    keys[13] = 'Db ';
                    keys[20] = 'Ab ';
                } 
                break;
            case 'phrygian':
                text.innerHTML = keys[root] + keys[root + 1] + keys[root + 3] + keys[root + 5] + keys[root + 7] + keys[root + 8] + keys[root + 10];
                if (C) {
                    keys[1] = 'Db ';
                    keys[3] = 'Eb ';
                    keys[8] = 'Ab ';
                    keys[10] = 'Bb ';
                } else if (Cs) {
                    keys[5] = 'E# ';
                    keys[12] = 'B# ';
                } else if (D) {
                    keys[3] = 'Eb ';
                    keys[10] = 'Bb ';
                } else if (Eb) {           
                    keys[3] = 'Eb ';
                    keys[4] = 'Fb ';
                    keys[6] = 'Gb ';
                    keys[8] = 'Ab ';
                    keys[10] = 'Bb ';
                    keys[11] = 'Cb ';
                    keys[13] = 'Db '; 
                } else if (F) {
                    keys[6] = 'Gb ';
                    keys[8] = 'Ab ';
                    keys[10] = 'Bb ';
                    keys[13] = 'Db '; 
                    keys[15] = 'Eb ';
                } else if (Fs) {
                    keys[17] = 'E# ';
                } else if (G) {            
                    keys[8] = 'Ab ';
                    keys[10] = 'Bb ';
                    keys[15] = 'Eb ';
                } else if (Ab) {          
                    keys[8] = 'Ab ';
                    keys[9] = 'Bbb ';
                    keys[11] = 'Cb ';
                    keys[16] = 'Fb ';
                    keys[18] = 'Gb ';
                } else if (A) {            
                    keys[10] = 'Bb ';
                } else if (Bb) {            
                    keys[10] = 'Bb ';
                    keys[11] = 'Cb ';
                    keys[13] = 'Db ';
                    keys[15] = 'Eb ';
                    keys[18] = 'Gb ';
                    keys[20] = 'Ab ';
                } 
                break;
            case 'lydian':
                text.innerHTML = keys[root] + keys[root + 2] + keys[root + 4] + keys[root + 6] + keys[root + 7] + keys[root + 9] + keys[root + 11];
                if (Cs) {            
                    
                } else if (Fs) {
                    keys[17] = 'E# ';
                    keys[12] = 'B# ';
                } else if (Ab) {
                    keys[8] = 'Ab ';
                    keys[10] = 'Bb ';
                    keys[13] = 'Db ';
                    keys[15] = 'Eb ';
                } else if (Bb) {
                    keys[10] = 'Bb ';
                    keys[15] = 'Eb ';
                } else if (B) {       
                    keys[17] = 'E# ';
                }
                break;
            case 'mixolydian':
                text.innerHTML = keys[root] + keys[root + 2] + keys[root + 4] + keys[root + 5] + keys[root + 7] + keys[root + 9] + keys[root + 10];
                if (C) {            
                    keys[10] = 'Bb ';
                } else if (Cs) {
                    keys[5] = 'E# ';
                    keys[12] = 'B# ';
                } else if (Eb) {            
                    keys[3] = 'Eb ';
                    keys[8] = 'Ab ';
                    keys[10] = 'Bb ';
                    keys[13] = 'Db ';
                } else if (F) {            
                    keys[10] = 'Bb ';
                    keys[15] = 'Eb ';
                } else if (Ab) {            
                    keys[8] = 'Ab ';
                    keys[10] = 'Bb ';
                    keys[13] = 'Db ';
                    keys[15] = 'Eb ';
                    keys[18] = 'Gb ';
                } else if (Bb) {            
                    keys[10] = 'Bb ';
                    keys[15] = 'Eb ';
                    keys[20] = 'Ab ';
                } 
                break;
            case 'minor':
                text.innerHTML = keys[root] + keys[root + 2] + keys[root + 3] + keys[root + 5] + keys[root + 7] + keys[root + 8] + keys[root + 10];
                if (C) {            
                    keys[3] = 'Eb ';
                    keys[8] = 'Ab ';
                    keys[10] = 'Bb ';
                } else if (D) {            
                    keys[10] = 'Bb ';
                } else if (Eb) {            
                    keys[3] = 'Eb '; 
                    keys[6] = 'Gb ';
                    keys[8] = 'Ab '; 
                    keys[10] = 'Bb '; 
                    keys[11] = 'Cb ';
                    keys[13] = 'Db ';
                } else if (F) {            
                    keys[10] = 'Bb '; 
                    keys[8] = 'Ab ';
                    keys[13] = 'Db ';
                    keys[15] = 'Eb ';
                } else if (Fs) {
                    keys[17] = 'E# '; 
                } else if (G) {            
                    keys[10] = 'Bb ';
                    keys[15] = 'Eb ';
                } else if (Ab) {            
                    keys[8] = 'Ab '; 
                    keys[10] = 'Bb '; 
                    keys[11] = 'Cb ';
                    keys[13] = 'Db '; 
                    keys[15] = 'Eb '; 
                    keys[16] = 'Fb ';
                    keys[18] = 'Gb ';
                } else if (Bb) {            
                    keys[10] = 'Bb ';
                    keys[13] = 'Db ';
                    keys[15] = 'Eb ';
                    keys[18] = 'Gb ';
                    keys[20] = 'Ab ';
                } 
                break;
            case 'locrian':
                text.innerHTML = keys[root] + keys[root + 1] + keys[root + 3] + keys[root + 5] + keys[root + 6] + keys[root + 8] + keys[root + 10];
                if (C) {            
                    keys[1] = 'Db ';
                    keys[3] = 'Eb ';
                    keys[6] = 'Gb ';
                    keys[8] = 'Ab ';
                    keys[10] = 'Bb ';
                } else if (D) {          
                    keys[3] = 'Eb ';
                    keys[8] = 'Ab ';
                    keys[10] = 'Bb ';
                } else if (Eb) {            
                    keys[4] = 'Fb ';
                    keys[6] = 'Gb ';
                    keys[9] = 'Bbb ';
                    keys[11] = 'Cb ';
                    keys[13] = 'Db ';
                } else if (F) {           
                    keys[6] = 'Gb ';
                    keys[8] = 'Ab ';
                    keys[10] = 'Bb ';
                    keys[11] = 'Cb ';
                    keys[13] = 'Db ';
                    keys[15] = 'Eb '; 
                } else if (E) {            
                    keys[10] = 'Bb ';
                } else if (G) {
                    keys[8] = 'Ab ';
                    keys[10] = 'Bb ';
                    keys[13] = 'Db ';
                    keys[15] = 'Eb ';
                } else if (Ab) {            
                    keys[8] = 'Ab ';
                    keys[9] = 'Bbb ';
                    keys[11] = 'Cb ';
                    keys[13] = 'Db ';
                    keys[14] = 'Ebb ';
                    keys[16] = 'Fb ';
                    keys[18] = 'Gb ';
                } else if (A) {            
                    keys[10] = 'Bb ';
                    keys[15] = 'Eb ';
                } else if (Bb) {            
                    keys[10] = 'Bb ';
                    keys[11] = 'Cb ';
                    keys[13] = 'Db ';
                    keys[15] = 'Eb ';
                    keys[16] = 'Fb ';
                    keys[18] = 'Gb ';
                    keys[20] = 'Ab ';
                } 
                break;
        }
    }
    key.innerHTML = keys[root];
    if (Eb) {
        key.innerHTML = 'Eb ';
    } else if (Ab) {
        key.innerHTML = 'Ab ';
    } else if (Bb) {
        key.innerHTML = 'Bb ';
    }
}

//  0     1      2     3      4     5     6      7     8      9     10     11   
// 'C ', 'C# ', 'D ', 'D# ', 'E ', 'F ', 'F# ', 'G ', 'G# ', 'A ', 'A# ', 'B '
//  12    13     14    15     16    17    18     19    20     21    22     23 
// 'C ', 'C# ', 'D ', 'D# ', 'E ', 'F ', 'F# ', 'G ', 'G# ', 'A ', 'A# ', 'B '

function showC() {
    C = true;
    Cs = false;
    D = false;
    Eb = false;
    E = false;
    F = false;
    Fs = false;
    G = false;
    Ab = false;
    A = false;
    Bb = false;
    B = false;
    resetKeys();
    clearInterval(keyInterval);
    showKey(0);
}

function showCs() {
    C = false;
    Cs = true;
    D = false;
    Eb = false;
    E = false;
    F = false;
    Fs = false;
    G = false;
    Ab = false;
    A = false;
    Bb = false;
    B = false;
    resetKeys();
    clearInterval(keyInterval);
    showKey(1);
}

function showD() {
    C = false;
    Cs = false;
    D = true;
    Eb = false;
    E = false;
    F = false;
    Fs = false;
    G = false;
    Ab = false;
    A = false;
    Bb = false;
    B = false;
    resetKeys();
    clearInterval(keyInterval);
    showKey(2);
}

function showEb() {
    C = false;
    Cs = false;
    D = false;
    Eb = true;
    E = false;
    F = false;
    Fs = false;
    G = false;
    Ab = false;
    A = false;
    Bb = false;
    B = false;
    resetKeys();
    clearInterval(keyInterval);
    showKey(3);
}

function showE() {
    C = false;
    Cs = false;
    D = false;
    Eb = false;
    E = true;
    F = false;
    Fs = false;
    G = false;
    Ab = false;
    A = false;
    Bb = false;
    B = false;
    resetKeys();
    clearInterval(keyInterval);
    showKey(4);
}

function showF() {
    C = false;
    Cs = false;
    D = false;
    Eb = false;
    E = false;
    F = true;
    Fs = false;
    G = false;
    Ab = false;
    A = false;
    Bb = false;
    B = false;
    resetKeys();
    clearInterval(keyInterval);
    showKey(5);
}

function showFs() {
    C = false;
    Cs = false;
    D = false;
    Eb = false;
    E = false;
    F = false;
    Fs = true;
    G = false;
    Ab = false;
    A = false;
    Bb = false;
    B = false;
    resetKeys();
    clearInterval(keyInterval);
    showKey(6);
}

function showG() {
    C = false;
    Cs = false;
    D = false;
    Eb = false;
    E = false;
    F = false;
    Fs = false;
    G = true;
    Ab = false;
    A = false;
    Bb = false;
    B = false;
    resetKeys();
    clearInterval(keyInterval);
    showKey(7);
}

function showAb() {
    C = false;
    Cs = false;
    D = false;
    Eb = false;
    E = false;
    F = false;
    Fs = false;
    G = false;
    Ab = true;
    A = false;
    Bb = false;
    B = false;
    resetKeys();
    clearInterval(keyInterval);
    showKey(8);
}

function showA() {
    C = false;
    Cs = false;
    D = false;
    Eb = false;
    E = false;
    F = false;
    Fs = false;
    G = false;
    Ab = false;
    A = true;
    Bb = false;
    B = false;
    resetKeys();
    clearInterval(keyInterval);
    showKey(9);
}

function showBb() {
    C = false;
    Cs = false;
    D = false;
    Eb = false;
    E = false;
    F = false;
    Fs = false;
    G = false;
    Ab = false;
    A = false;
    Bb = true;
    B = false;
    resetKeys();
    clearInterval(keyInterval);
    showKey(10);
}

function showB() {
    C = false;
    Cs = false;
    D = false;
    Eb = false;
    E = false;
    F = false;
    Fs = false;
    G = false;
    Ab = false;
    A = false;
    Bb = false;
    B = true;
    resetKeys();
    clearInterval(keyInterval);
    showKey(11);
}

