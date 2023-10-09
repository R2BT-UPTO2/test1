let img_num = 0;
const first_bridge = 15;
let user_score = 50;

let next_bt_click = () => {
    img_num++;
    // document. img 주소 변경
    if (img_num == 10){
        document.querySelector('.all_container').style.display = 'none';
        document.querySelector('.full_logo_container').style.display = 'block';
        document.querySelector('.full_logo_container').style.animationName = 'init_full_logo_container';
        document.querySelector('body').style.animationName = 'full_logo_body';
        setTimeout(()=>{
            document.querySelector('.all_container').style.display = 'block';
            document.querySelector('.full_logo_container').style.display = 'none';
        }, 5000);
    }

    if (img_num == 15){
        document.querySelector('.main_container').style.animationName = 'cardNews_main_container';
        document.querySelector('#main_img').style.height = '400px';
        document.querySelector('.bt_container').style.animationName = 'cardNews_bt_container';
    }

    if (img_num < 15){
        document.querySelector('#main_img').src = `img/story${img_num}.png`;
    }

    if ((img_num >= 15) && (img_num<18)){
        document.querySelector('#main_img').src = `img/cardNews${img_num-first_bridge}.png`;
    }

    if (img_num == 18){
        document.querySelector('.main_container').style.animationName = 'quiz_main_container';
        document.querySelector('#main_img').style.display = 'none';
        document.querySelector('.quiz_container').innerHTML += `
            <h1 style = "font-size: 50px; color: #1c387d;">블록체인에 대한 설명으로 올바른 것은?</h1><br>
            <h4 id = "aa1" style = "font-size: 30px" class = "ans" onclick = "quiz0_answer(this.id)">1. 누구나 열람할 수 있는 장부에 거래 내역을 투명하게 공개한다.</h4>
            <h4 id = "aa2" style = "font-size: 30px" class = "ans" onclick = "quiz0_answer(this.id)">2. 여러 대의 컴퓨터에 복제하는 것을 막고 한 대의 컴퓨터에 저장하는 데이터 저장 기술이다.</h4>
            <h4 id = "aa3" style = "font-size: 30px" class = "ans" onclick = "quiz0_answer(this.id)">3. 거래 때마다 모든 거래 참여자들이 정보 공유하는 것을 방지하여 거래 내역 유출을 막을 수 있다.</h4>
            <h4 id = "aa4" style = "font-size: 30px" class = "ans" onclick = "quiz0_answer(this.id)">4. 블록체인은 가상화폐를 만들기 위해 제작된 기술로 가상통화에만 사용된다.</h4>
        `;
        document.querySelector('.bt_container').style.display = 'none';
    }

    if (img_num == 19){
        console.log('0');
        document.querySelector('.main_container').style.animationName = 'init_main_container';
        document.querySelector('.quiz_container').innerHTML = '';
        document.querySelector('#main_img').style.display = 'inline';
        document.querySelector('#main_img').src = `img/story${img_num}.png`;
        document.querySelector('#main_img').style.height = '500px';
        document.querySelector('.bt_container').style.display = 'block';
        document.querySelector('.bt_container').style.animationName = 'basic_bt_container';
    }
    
    if (img_num > 19){
        document.querySelector('#main_img').src = `img/story${img_num}.png`;
    }
};

let quiz0_answer = (x) => { // x는 선지 id
    if (x.split('')[2] == 1){
        next_bt_click();
    }else{
        window.alert('이건 아니었던 것 같아..');
    }
};

let score_down = () => {
    if (!(user_score == 0)){
        user_score -= 10;
    }
};

let score_up = () => {
    if (!(user_score == 100)){
        user_score += 100;
    }
}