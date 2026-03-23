public class des {
    public static int F(int L, int n){
        return (L+n)%256;
    }

    public static void encrypt(int L, int R){
        int buf;
        for(int i=0; i<3; ++i){
            if(i==2){
                System.out.println("L after encryption: " + L);
                R = R^F(L,i+1);
                System.out.println("R after encryption: " + R);
                break;
            }
            buf = L;
            L = R^F(L, i+1);
            R = buf;
        }
    }

    public static void decrypt(int L, int R){
        int buf;
        for(int i=3; i>0; --i){
            if(i==1){
                System.out.println("L after decryption: " + L);
                R = R^F(L,i);
                System.out.println("R after decryption: " + R);
                break;
            }
            buf = L;
            L = R^F(L, i);
            R = buf;
        }
    }

    public static void main(String args[]){
        int L = 100;
        int R = 200;
        //
        encrypt(L,R);
        //
        L = 203;
        R = 99;
        decrypt(L,R);
    }
}
