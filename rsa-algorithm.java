import java.math.BigInteger;
import java.util.Random;
import java.util.Scanner;

public class RSA {
    public static void main(String args[]){
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Enter the message to encrypt:");
        
        String inputMsg = scanner.nextLine();
        BigInteger input = new BigInteger(inputMsg.getBytes());

        //RSA algorithm
        Random r = new Random();
        BigInteger p = BigInteger.probablePrime(1024, r);
        BigInteger q = BigInteger.probablePrime(1024, r);
        BigInteger N = p.multiply(q);
        BigInteger Phi = p.subtract(BigInteger.ONE).multiply(q.subtract(BigInteger.ONE));
        BigInteger e = BigInteger.probablePrime(512, r);

        while (Phi.gcd(e).compareTo(BigInteger.ONE) > 0 && e.compareTo(Phi) < 0) {
            e.add(BigInteger.ONE);
        }

        BigInteger d = e.modInverse(Phi);

        //encryption
        BigInteger encrypted = input.modPow(e, N);
        System.out.println("Encrypted cypher by RSA:");
        System.out.println(encrypted);

        //decryption
        String decrypted = new String(encrypted.modPow(d, N).toByteArray());
        System.out.println("Dncrypted text by RSA:");
        System.out.println(decrypted);
    }
}
