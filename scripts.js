/*    1
Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти
элементы на экран. */

let arr = [1, 2, 3, 4, 5];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

/*    2
Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут
быть положительными и отрицательными. Выведите на экран только отрицательные
числа, которые больше -10, но меньше -3. */

let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]; 

for(let i = 0; i < arr2.length; i++){
    if(arr2[i] >= -10 && arr2[i] <= -3) console.log(arr2[i]);
}