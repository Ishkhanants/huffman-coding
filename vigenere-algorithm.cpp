#include <iostream>
using namespace std;

int main()
{
	char mat[26][26];
	char symb = 'A';

	cout << "Vigenere's Matrix is:\n";

	for (int i = 0; i < 26; ++i) {
		cout << '\n';
		for (int j = 0; j < 26; ++j) {

			mat[i][j] = symb;
			cout << mat[i][j] << ' ';
			symb++;

			if (symb == '[') {
				symb -= 26;
			}

			if (j == 25) {
				symb++;
			}
		}
	}

	char cypher[6] = "LEMON";
	char source[13] = "ATTACKATDAWN";
	int j = 0;

	cout << "\n" << "\nEncrypted string is:" << endl;

	for (int i = 0; i < strlen(source); ++i) {
		source[i] = mat[source[i] - 65][cypher[j] - 65]; j++;
		cout << source[i] << ' ';
		if (j == 5) {
			j = 0;
		}
	}

	cout << '\n';
	j = 0;
	cout << "\nDecrypted string is:" << endl;

	for (int i = 0; i < strlen(source); ++i) {
		source[i] = ((source[i] - cypher[j] + 26) % 26) + 'A'; j++;
		cout << source[i] << ' ';
		if (j == 5) {
			j = 0;
		}
	}

	cout << '\n';
}




