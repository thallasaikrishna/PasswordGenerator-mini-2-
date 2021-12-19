@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap');  
*{  
  box-sizing: border-box;  
}  
body{  
  margin: 0;  
  font-family: "Poppins", sans-serif;  
 background-color: rgb(181, 194, 135);  
 color: #eee;  
 display: flex;  
 align-items: center;  
 justify-content: center;  
 min-height: 100vh;  
  }  
  .pw-container{  
    width: 400px;  
    background-color: rgb(36, 202, 64);  
    box-shadow: 0 4px 10px rgba(0,0,0,0.6);  
  }  
   .pw-header{  
    padding: 1rem;  
   }  
 .pw{  
   width: 100%;  
   height: 70px;  
   background-color: rgb(72, 214, 219);  
   display: flex;  
   align-items: center;  
   position: relative;  
   font-size: 1.5rem;  
   padding: 1rem;  
   /* overflow: auto; */  
 }  
 .pw button{  
   position: absolute;  
   top: 0;  
   right: 0;  
   transform: translate(0, 50%);  
   transition: opacity 0.2s ease, transform 0.2s ease;  
   opacity: 0;  
   background-color: rgb(28, 252, 21);  
   padding: 0.25rem 1rem;  
   font-family: inherit;  
   font-weight: bold;  
   color: #fff;  
   border: none;  
   cursor: pointer;  
  }  
  .pw:hover button{  
    opacity: 1;  
    transform: translate(0,-80%);  
  }  
   .pw-body{  
    padding: 0 1rem 1rem;  
   }  
 .form-control{  
   color: #eee;  
 display: flex;  
 justify-content: space-between;  
 margin: 0.75rem 0;  
 }  
 .generate{  
   display: block;  
   background-color: #ecb602;  
   color: rgb(70, 29, 255);  
   font-weight: bold;  
   padding: 1rem;  
   font-size: 1.5rem;  
   margin-top: 1rem;  
   border: none;  
   width: 100%;  
   cursor: pointer;  
 }  
