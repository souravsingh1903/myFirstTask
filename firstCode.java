# myFirstTask
  import java.util.*;


//========== User's Code Starts Here ==========

class Solution {
    public int perfect_team(int[] nums) {
        int counter = 0;
        int n = nums.length;
        int i,j,k;
        for( i =0 ; i<n; i++){
            for( j = i+1; j<n;j++){
                if((nums[i] + nums[j]) % 3 == 0 ){
                    counter++;
                }
            }
   
        }
         for( i =0 ; i<n; i++){
            for( j = i+1; j<n;j++){
                for( k = j+1;k<n; k++){
                    if((nums[i] + nums[j]+ nums[k]) % 3 ==0){
                        counter++;
                    }
                }

            }

    }
    
        return counter;
    }
}

//========== User's Code Ends Here ==========


public class Main
{
   
//    main class
     public static void main(String[]args)
    {
        Scanner sc=new Scanner(System.in);
        String y=sc.nextLine();
        String n =sc.nextLine();
        Solution s = new Solution();
        String s_arr[]=n.split(" ");
        int arr[]=new int[s_arr.length];
        for(int i=0;i<s_arr.length;i++)
        {
            arr[i]=Integer.parseInt(s_arr[i]);
        }
        
        int max= s.perfect_team(arr);
        
        System.out.println(max);
    }
}
