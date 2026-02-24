// There are two type of Type covrestion

// 1:-Implicit
console.log("Implicit Example");
console.log("8" - 2); 

// 2:-Explicit
console.log("Explicit Example");
console.log("4" + 5);


console.log("Example 1:", Number("25"));          
console.log("Example 2:", Number("25.5"));        
console.log("Example 3:", Number("   40 "));      
console.log("Example 4:", Number(""));           
console.log("Example 5:", Number("abc"));        

console.log("Example 6:", Number(true));         
console.log("Example 7:", Number(false));        
console.log("Example 8:", Number(null));          
console.log("Example 9:", Number(undefined));     
console.log("Example 10:", Number(NaN));          

console.log("Example 11:", Number("10abc"));     
console.log("Example 12:", Number("0010"));       
console.log("Example 13:", Number("0xF"));        
console.log("Example 14:", Number("0b101"));      
console.log("Example 15:", Number("0o11"));       

console.log("Example 16:", Number([]));         
console.log("Example 17:", Number([7]));        
console.log("Example 18:", Number([1,2]));        
console.log("Example 19:", Number({}));           
console.log("Example 20:", Number({a:5}));     

console.log("Example 21:", Number("Infinity")); 
console.log("Example 22:", Number("-Infinity"));  
console.log("Example 23:", Number("+12"));       
console.log("Example 24:", Number("-8"));      
console.log("Example 25:", Number("1e3"));      

console.log("Example 26:", Number("1e-2"));      
console.log("Example 27:", Number("   "));     
console.log("Example 28:", Number("\n"));       
console.log("Example 29:", Number("08"));       
console.log("Example 30:", Number(".75"));       

console.log("Example 31:", Number("5."));       
console.log("Example 32:", Number("0009.5"));  
console.log("Example 33:", Number("NaN"));     
console.log("Example 34:", Number("false"));    
console.log("Example 35:", Number("true"));      

console.log("Example 36:", Number(0));           
console.log("Example 37:", Number(10));           
console.log("Example 38:", Number(-5.5));          
console.log("Example 39:", Number("99.99"));      
console.log("Example 40:", Number(" 100 "));       

console.log("Example 41:", Number([0]));           
console.log("Example 42:", Number([null]));        
console.log("Example 43:", Number([undefined]));   
console.log("Example 44:", Number([true]));        
console.log("Example 45:", Number([false]));      

console.log("Example 46:", Number("0"));           
console.log("Example 47:", Number("000"));        
console.log("Example 48:", Number("+0"));      
console.log("Example 49:", Number("-0"));        
console.log("Example 50:", Number("  -25.5  "));
