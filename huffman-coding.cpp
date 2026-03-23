#include <iostream>
#include <string>
#include <queue>
#include <unordered_map>

using namespace std;

struct Node {
	char ch;
	int freq;
	Node *left, *right;
};

Node* getNode(char ch, int freq, Node* left, Node* right) {
	Node* node = new Node();

	node->ch = ch;
	node->freq = freq;
	node->left = left;
	node->right = right;

	return node;
}

struct comp {
	bool operator()(Node* l, Node* r) {
		return l->freq > r->freq;
	}
};

priority_queue<Node*, vector<Node*>, comp> pq;

void buildHuffmanTree(string text) {
	unordered_map<char, int> freq;
	for (char ch : text) {
		freq[ch]++;
	}

	for (auto pair : freq) {
		pq.push(getNode(pair.first, pair.second, nullptr, nullptr));
	}

	while (pq.size() != 1) {
		Node* left = pq.top(); pq.pop();
		Node* right = pq.top();	pq.pop();

		int sum = left->freq + right->freq;
		pq.push(getNode('\0', sum, left, right));
	}
}

void encode(Node* root, string str, unordered_map<char, string> &huffmanCode) {
	if (root == nullptr)
		return;

	if (!root->left && !root->right) {
		huffmanCode[root->ch] = str;
	}

	encode(root->left, str + "0", huffmanCode);
	encode(root->right, str + "1", huffmanCode);
}

void decode(Node* root, int &index, string str) {
	if (root == nullptr) {
		return;
	}

	if (!root->left && !root->right)
	{
		cout << root->ch;
		return;
	}

	index++;

	if (str[index] =='0')
		decode(root->left, index, str);
	else
		decode(root->right, index, str);
}

int main() {
	string text = "Yev sirel bakhty parz u yerknayin!";
        buildHuffmanTree(text);
	
	//Encoding
	unordered_map<char, string> huffmanCode;
	Node* root = pq.top();
	encode(root, "", huffmanCode);

	cout << "Codes:\n";
	for (auto pair : huffmanCode) {
		cout << pair.first << " " << pair.second << '\n';
	}

	string str = "";
	for (char ch : text) {
		str += huffmanCode[ch];
	}

	cout << "\nEncoded string:\n" << str << '\n';

	//Decoding
	int index = -1;
	cout << "\nDecoded string:\n";
	while (index < (int)str.size() - 2) {
		decode(root, index, str);
	}
	cout << endl;
}
