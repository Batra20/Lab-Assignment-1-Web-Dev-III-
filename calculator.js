 let num1 = Number(process.argv[2])

   let num2 = Number(process.argv[3])

   let operation = process.argv[4]

   if (operation === 'add') {
       console.log(num1 + num2)
   }else if (operation === 'sub') {
       console.log(num1 - num2)
   }else if (operation === 'multiply') {
       console.log(num1 * num2)
   }else if (operation === 'div') {
         console.log(num1 / num2)       
   }
