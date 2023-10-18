let img_num = 0;
const first_bridge = 15;
let user_score = 50;
let clear = 0;
let stage_num = 0;
let stage_now = [0,0,0,0,0];

let next_bt_click = () => {
    img_num++;
    document.querySelector('#main_img').style.animationName = 'init_main_img';
    console.log(img_num);

    if (img_num == 10){
        document.querySelector('.all_container').style.display = 'none';
        document.querySelector('.full_logo_container').style.display = 'block';
        document.querySelector('.full_logo_container').style.animationName = 'init_full_logo_container';
        document.querySelector('body').style.animationName = 'full_logo_body';
        setTimeout(()=>{
            document.querySelector('.all_container').style.display = 'block';
            document.querySelector('.full_logo_container').style.display = 'none';
            document.querySelector('#second_logo').src = 'img/logo_black.png';
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
        document.querySelector('.main_container').style.animationName = 'init_main_container';
        document.querySelector('.quiz_container').innerHTML = '';
        document.querySelector('#main_img').style.display = 'inline';
        document.querySelector('#main_img').src = `img/story${img_num}.png`;
        document.querySelector('#main_img').style.height = '500px';
        document.querySelector('.main_container').style.animationName = 'cardToInit_main_container';
        document.querySelector('.bt_container').style.display = 'block';
        document.querySelector('.bt_container').style.animationName = 'basic_bt_container';
    }
    
    if ((img_num > 19) && (img_num <= 26)){
        document.querySelector('#main_img').src = `img/story${img_num}.png`;

        if (img_num == 22){
            document.querySelector('#main_img').src = `img/story${img_num}.gif`;
        }
    }

    if (img_num == 27){
        document.querySelector('.main_container').style.backgroundImage = `url('img/map_bg.png')`;
        document.querySelector('.main_container').style.backgroundRepeat = 'no-repeat';
        document.querySelector('.main_container').style.backgroundSize = 'cover';
        
        document.querySelector('#second_logo').src = 'img/logo_white_real.png';
        document.querySelector('body').style.animationDuration = '5s';
        document.querySelector('body').style.animationName = 'map_body';
        document.querySelector('#main_img').style.display = 'none';
        document.querySelector('.bt_container').style.display = 'none';
        document.querySelector('.main_container').style.border = 'none';
        document.querySelector('.main_container').innerHTML += `
            <div class = "explain_container">
                <div class = "black_sub">  
                    <h1 style = "color: white;">" 각 스테이지로 이어진 포탈을 클릭해 흩어진 블록을 찾자! "</h1><br>
                </div>
                <div class="button_base b07_3d_double_roll" onclick = "next_bt_click()" style = "margin-top: 0;">
                        <div>다음</div>
                        <div>다음</div>
                        <div>다음</div>
                        <div>다음</div>
                </div>
            </div>
            <div class = "door_box" style = "display: none;">
                <img src = "img/door.gif" id = "map_door0" value = "zero" class = "map_door" onclick = "stage_0();"><br>
                <img src = "img/door.gif" id = "map_door1" value = "first" class = "map_door" onclick = "alert('1');"><br>
                <img src = "img/door.gif" id = "map_door2" value = "second" class = "map_door" onclick = "alert('2');"><br>
                <img src = "img/door.gif" id = "map_door3" value = "third" class = "map_door" onclick = "alert('3');">
                <img src = "img/door.gif" id = "map_door4" value = "fourth" class = "map_door" onclick = "alert('4');">
            </div>
        `;
    }

    if (img_num == 28){
        document.querySelector('.explain_container').style.display = 'none';
        document.querySelector('.door_box').style.display = 'block';
    }

    setTimeout(()=>{
        document.querySelector('#main_img').style.animationName = 'main_img_basic';
    },500); 
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
};

let stage_0 = () => {
    stage_now = [1,0,0,0,0]; // 마지막에 초기화 시키기
    stage_num++;
    if (stage_num == 1){
        document.querySelector('.main_container').style.display = 'none';
        document.querySelector('.each_stage_container').style.display = 'block';
        document.querySelector('.each_stage_container').style.animationName = 'init_each_stage_container';
        document.querySelector('.text_space').innerHTML += `<h1 style = "color: white;">
            "<br>
            이 곳은 디지털 자산 마을이야!<br>
            <br>
            마을 곳곳에 디지털 자산과 관련된 안내 포스터가 붙어있어..<br>
            <br>
            안내 포스터를 천천히 읽어보며 블록을 찾아보자!
            <br>
            "</h1>
        `;
    }
    if (stage_num == 2){
        document.querySelector('.explain_box').style.display = 'none';
        document.querySelector('.each_stage_container').style.animationName = 'up_each_stage_container';
        setTimeout(() => {
            document.querySelector('#stage_img').style.display = 'inline';
            document.querySelector('#stage_img').src = `img/stageBgzero.png`;
            document.querySelector('.bt_container_2').style.display = 'block';
        }, 2000);
    }

    if (stage_num == 3){
        document.querySelector('.each_stage_container').style.animationName = 'init_each_stage_container';
        document.querySelector('#stage_img').src = `img/stage0_card${stage_num}.png`;
    }

    if (stage_num > 3){
        document.querySelector('#stage_img').src = `img/stage0_card${stage_num}.png`;
    }

    if (stage_num == 7){
        //여기 해야됨 1:22
    }
};

let check_stage = () => {
    for (let i = 0; i < stage_now.length; i++){
        if (stage_now[i] == 1){
            if (i==0) stage_0();
            else if (i==1) stage_1();
            else if (i==2) stage_2();
            else if (i==3) stage_3();
            else if (i==4) stage_4();
        }
    }
};