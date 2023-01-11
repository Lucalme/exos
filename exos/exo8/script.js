function isPalindrome(mot) {
    mot = mot.toLowerCase();

    var motInverse = mot.split('').reverse().join('');

    if (mot === motInverse) {
        return true;
    }
    return false;
}
