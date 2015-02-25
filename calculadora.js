 var numero1=0;
 var numero2=0; 
 var numMuestra=""; 
 signo=0;
 prueba=0; 
  
function calculo(a){ 
  switch (a){ 
    case 1: 
      signo=1 
      document.form.res.value="+"; 
      break; 
    case 2: 
      signo=2 
      document.form.res.value="-"; 
      break; 
    case 3: 
      signo=3 
      document.form.res.value="*"; 
      break; 
    case 4: 
      signo=4 
      document.form.res.value="/"; 
      break; 
    default: 
    break; 
  } 
  numMuestra=""; 
  prueba=1; 
} 

function proceso(a){ 
  numMuestra=numMuestra+a; 
  document.form.res.value=numMuestra; 
  if(prueba==0){ 
    numero1=parseFloat(numMuestra); 
  }
  else if(prueba==1){ 
    numero2=parseFloat(numMuestra); 
} 
} 

function resultado(){ 
  switch (signo){ 
    case 1: 
      document.form.res.value=numero1+numero2; 
      break; 
    case 2: 
      document.form.res.value=numero1-numero2; 
      break; 
    case 3: 
      document.form.res.value=numero1*numero2; 
      break; 
    case 4: 
      document.form.res.value=numero1/numero2; 
      break; 
      default: 
    break;  
  } 
  numero1=parseFloat(document.form.res.value); 
  numMuestra=""; 
} 