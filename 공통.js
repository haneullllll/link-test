// ===== 공통 스크립트  =====


const clock = document.createElement("div");
clock.id = "clock";

// 네비게이션 컨테이너 안에 시계를 추가
const navContainer = document.querySelector('.nav-container');
if (navContainer) {
    navContainer.appendChild(clock); 
}

setInterval(function(){
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();  
}, 1000);


// 반응형 햄버거 버튼
 const hamburgerMenu = document.querySelector('.hamburger-menu');
 const navMenu = document.querySelector('.menu');

  hamburgerMenu.addEventListener('click', function() {
  hamburgerMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
});


//had부분 페이지 입장 시 메인글 애니메이션 효과

    window.onload = function () {
      //had부분 페이지 오픈시 애니메이션 효과
     const had = document.querySelector(".had");
     had.style.opacity = 0; 

     //0.1초후 opacity값 1을주고 2.5초동안 애니메이션 효과 적용
      setTimeout(function () {
      had.style.transition = "opacity 2.5s"; 
      had.style.opacity = 1;
     }, 100);  
    }