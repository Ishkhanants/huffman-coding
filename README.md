# 🔐 Cryptography Algorithms

> Implementations of classical ciphers, symmetric encryption, public-key cryptography, and lossless compression — written across multiple programming languages for **Information Defence** at NPUA (Fall 2019).

---

## Table of Contents

- [Overview](#overview)
- [Algorithms](#algorithms)
  - [Caesar Cipher](#caesar-cipher)
  - [Vigenère Cipher](#vigenère-cipher)
  - [Pattern-based Cipher](#pattern-based-cipher)
  - [Row-column Cipher](#row-column-cipher)
  - [DES Algorithm](#des-algorithm)
  - [RSA Algorithm](#rsa-algorithm)
  - [Huffman Coding](#huffman-coding)
  - [Run-length Encoding](#run-length-encoding)
- [Concepts at a Glance](#concepts-at-a-glance)

---

## Overview

This repository is a hands-on journey through the history of cryptography — from Julius Caesar's battlefield cipher to the RSA public-key system that secures the modern internet. Each algorithm is implemented from scratch to build deep intuition about how data is protected, transformed, and compressed.

| Algorithm | Category | Key Size | Security Level |
|-----------|----------|----------|---------------|
| Caesar Cipher | Classical cipher | Shift value (1–25) | ❌ Trivial |
| Vigenère Cipher | Classical cipher | Keyword (variable) | ❌ Weak |
| Pattern-based Cipher | Substitution | Char mapping table | ❌ Weak |
| Row-column Cipher | Transposition | Grid dimensions | ❌ Weak |
| DES | Symmetric block cipher | 56 bits | ⚠️ Obsolete |
| RSA | Asymmetric / Public-key | 2048–4096 bits | ✅ Secure |
| Huffman Coding | Lossless compression | Frequency table | ➖ Not encryption |
| Run-length Encoding | Lossless compression | None | ➖ Not encryption |

---

## Algorithms

### Caesar Cipher

> *"If he had anything confidential to say, he wrote it in cipher — shifting each letter by three."* — Suetonius

One of the oldest known encryption techniques. Each letter in the plaintext is replaced by the letter a fixed number of positions further down the alphabet.

```
Plaintext:  HELLO WORLD
Shift:      +3
Ciphertext: KHOOR ZRUOG
```

**How it works:** Wrap around at Z → A. The entire key space is just 25 possibilities, making brute force trivial.

🔗 [Wikipedia: Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)

---

### Vigenère Cipher

An evolution of Caesar. Instead of one fixed shift, the key is a word — each letter of the keyword determines the shift for the corresponding plaintext letter.

```
Plaintext:  HELLO
Keyword:    LEMON  (repeats as needed)
Shifts:     +11 +4 +12 +14 +13
Ciphertext: LIQHB
```

**How it works:** Repeat the keyword over the plaintext, then apply a Caesar shift per character. Resisted cryptanalysis for centuries until the Kasiski examination cracked it.

🔗 [Wikipedia: Vigenère cipher](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher)

---

### Pattern-based Cipher

A monoalphabetic substitution cipher — each character in a defined input set maps 1:1 to a character in an output set. The entire mapping table is the key.

```
Input:  A B C D E F ... Z
Output: Z Y X W V U ... A   (Atbash variant)

Plaintext:  HELLO
Ciphertext: SVOOL
```

**How it works:** Vulnerable to frequency analysis — the most common ciphertext letter is almost certainly 'E' in English plaintext.

---

### Row-column Cipher

A transposition cipher that scrambles character *positions* without changing the characters themselves. The plaintext is written into a grid, and the columns are reordered according to a keyword.

```
Plaintext: HELLO WORLD
Grid (3 cols):
H E L
L O W
O R L
D _ _

Columnar reorder → transposed ciphertext
```

**How it works:** All original characters survive unchanged — only their positions shift. Combined with substitution, it forms the basis of most classical cryptosystems.

🔗 [Wikipedia: Transposition cipher](https://en.wikipedia.org/wiki/Transposition_cipher)

---

### DES Algorithm

The **Data Encryption Standard** — a landmark in modern cryptography. Adopted by NIST in 1977, DES defined how symmetric encryption should work for a generation of systems.

```
Block size: 64 bits
Key size:   56 bits (effectively)
Rounds:     16 Feistel rounds
```

**How it works:** DES splits each 64-bit block in half, runs 16 rounds of permutations, substitutions (S-boxes), and XOR operations using subkeys derived from the original key. It's a textbook Feistel cipher.

**Why it's obsolete:** 56-bit keys can be brute-forced in hours with modern hardware. Triple-DES (3DES) extended its life; AES replaced it entirely.

🔗 [Wikipedia: Data Encryption Standard](https://en.wikipedia.org/wiki/Data_Encryption_Standard)

---

### RSA Algorithm

> *"The security of RSA rests on the mathematical hardness of factoring large numbers."*

RSA (Rivest–Shamir–Adleman, 1977) is one of the first practical public-key cryptosystems. It powers HTTPS, digital signatures, and secure key exchange to this day.

```
Key generation:
  p, q  → large primes
  n     = p × q              (public modulus)
  φ(n)  = (p-1)(q-1)
  e     = 65537              (public exponent, typically)
  d     = e⁻¹ mod φ(n)      (private exponent)

Encryption:  c = mᵉ mod n
Decryption:  m = cᵈ mod n
```

**How it works:** Anyone can encrypt with the public key `(e, n)`. Only the holder of the private key `d` can decrypt. The trapdoor is that factoring `n` back into `p` and `q` is computationally infeasible at large bit lengths.

**Used in:** TLS/HTTPS, SSH, PGP, digital certificates, code signing.

🔗 [Wikipedia: RSA cryptosystem](https://en.wikipedia.org/wiki/RSA_(cryptosystem))

---

### Huffman Coding

Not encryption — but essential to information theory. Huffman coding assigns shorter bit sequences to more frequent characters, achieving optimal prefix-free lossless compression.

```
Text: AABBBBBCC

Frequencies: A=2, B=5, C=2
Huffman tree:
       (9)
      /   \
    (4)    B:5
   /   \
  A:2  C:2

Codes: A=00, C=01, B=1

Encoded: 00 00 1 1 1 1 1 01 01 → 9 bits (vs 18 with fixed 2-bit codes)
```

**How it works:** Build a priority queue of symbol frequencies, repeatedly merge the two lowest-frequency nodes, and assign 0/1 to left/right branches.

🔗 [Wikipedia: Huffman coding](https://en.wikipedia.org/wiki/Huffman_coding)

---

### Run-length Encoding

The simplest lossless compression: runs of repeated values are replaced by a (value, count) pair.

```
Input:  AAABBBBBCC
Output: 3A 5B 2C

Binary example:
Input:  000000001111000
Output: 8×0, 4×1, 3×0
```

**How it works:** Scan the input linearly, counting consecutive identical elements. Works exceptionally well on data with long runs (black-and-white bitmaps, simple sprites, fax transmission).

🔗 [Wikipedia: Run-length encoding](https://en.wikipedia.org/wiki/Run-length_encoding)

---

## Concepts at a Glance

```
CRYPTOGRAPHY
├── Classical (pre-computer)
│   ├── Substitution    → Caesar, Vigenère, Pattern-based
│   └── Transposition   → Row-column
│
├── Modern Symmetric
│   └── Block Cipher    → DES
│
├── Modern Asymmetric
│   └── Public-key      → RSA
│
└── Information Theory
    └── Compression     → Huffman, RLE
```

---

*Course: Information Defence · NPUA · Fall 2019*
