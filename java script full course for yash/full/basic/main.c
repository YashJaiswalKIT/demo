#include<stdio.h>
int main(){
    int i,num=200;
    for(i=200;i<=300;i++){
        if(i%1==0){
          printf("%d is prime numbers",i);
        }
        if(i%i==0){
          printf(" %d is prime numbers \n",i);
        }
        else
            printf("\n%d is not prime number",i);
    
        printf("%d ",i);
    }
    return 0;
}