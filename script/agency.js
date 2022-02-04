(($, window, document, undefined) => {

    class Agency {
        init(){
            this.header();
            this.section1();
            this.section2();
            this.section3();
            this.section4();
            this.section5();
            this.section6();
            this.section7();
            this.section8();
            this.section9();
            this.section10();
            this.footer();
        }
        header(){
            // 메인버튼 이벤트
            const mainBtn = $('.main-btn');
            const sub = $('.sub');
            const nav = $('#nav');
            const subBtn = $('.sub-btn');
            const subSub = $('.sub-sub');


            mainBtn.on({
                mouseenter(){
                    const $this = $(this);
                    sub.stop().fadeOut(100);
                    $this.next().stop().fadeIn(300);
                },
                focusin(){
                    const $this = $(this);
                    sub.stop().fadeOut(100);
                    $this.next().stop().fadeIn(300);
                },
            });
            nav.on({
                mouseleave(){
                    sub.stop().fadeOut(300);
                    subSub.stop().fadeOut(300);
                }
            });
            subBtn.on({
                mouseenter(){
                    const $this = $(this);
                    subSub.stop().fadeOut(100);
                    $this.next().stop().fadeIn(300);
                },
                focusin(){
                    const $this = $(this);
                    subSub.stop().fadeOut(100);
                    $this.next().stop().fadeIn(300);
                }
            });
        }
        section1(){
            // 슬라이드 관련된 모든 변수 등록
            const slideWrap = $('.slide-wrap');
            const slideView = $('.slide-view');
            let cnt = 0;

            function mainSlide(){
                slideWrap.stop().animate({left: -1874*cnt}, 600, 'easeInOutExpo', function(){
                    if(cnt>2){cnt=0}
                    if(cnt<0){cnt=2}
                    slideWrap.stop().animate({left: -1874*cnt}, 0);
                });
            }
            function nextCount(){
                cnt++;
                mainSlide();
            }
            function prevCount(){
                cnt--;
                mainSlide();
            }
            // setInterval(prevCount, 3000);

            // 스와이프 (좌우터치 이벤트)
            // 오른쪽에서 왼쪽으로 터치 : 다음 슬라이드 0 >
            // 왼쪽에서 오른쪽으로 터치 : 이전 슬라이드 < 0
            let touchStart = null;  // 터치 시작 좌표값
            let touchEnd = null;    // 터치 종료 좌표값
            let dragStart = null;   // 드래그 시작
            let dragEnd = null;     // 드래그 끝
            let mouseDown = null;   // 마우스 다운
            slideView.on({
                mousedown(event){
                    touchStart = event.clientX;
                    dragStart = event.clientX - slideWrap.offset().left-1874;
                    mouseDown = true;
                },
                mouseup(event){
                    touchEnd = event.clientX;
                    mouseDown = false;
                    if(touchStart-touchEnd > 0 ){   // 시작 좌표 - 종료 좌표 > 0 보다 크면 다음 슬라이드
                        nextCount();
                    }
                    if(touchStart-touchEnd < 0 ){   // 시작 좌표 - 종료 좌표 < 0 보다 작으면 이전 슬라이드
                        prevCount();
                    }
                },                    // 드래그 앱 드롭 (물체를 잡고 끌고(드래그) 놓기(드롭)를 실제로 구현)
                mousemove(event){     // 슬라이드를 잡고 끌고 가서 넘기는 이벤트
                    // 반드시 마우스 다운(mouseDown)이 이루어져야 실행된다.
                    if(!mouseDown){return}        // !mouseDown => mouseDown!==true (마우스 다운이 true가 아니면)
                    dragEnd = event.clientX;
                    slideWrap.css({left: dragEnd - dragStart});
                }
            });
        }
        section2(){

        }
        section3(){

        }
        section4(){

        }
        section5(){

        }
        section6(){

        }
        section7(){

        }
        section8(){

        }
        section9(){

        }
        section10(){

        }
        footer(){

        }
    }

    const newAgency = new Agency();
    newAgency.init();

})(jQuery, window, document);