

const form = document.querySelector('.signup-form');


// エラーメッセージ

const contentsFeedback = document.querySelector('.contents_feedback');
const companyFeedback = document.querySelector('.company_feedback');
const zipFeedback = document.querySelector('.zip_feedback');
const tellphoneFeedback = document.querySelector('.tellphone_feedback');
const urlFeedback = document.querySelector('.url_feedback');
const firstNameFeedback = document.querySelector('.firstName_feedback');
const lastNameFeedback = document.querySelector('.lastName_feedback');
const departmentFeedback = document.querySelector('.department_feedback');
const userphoneFeedback = document.querySelector('.userphone_feedback');
const mailFeedback = document.querySelector('.mail_feedback');


// バリデーションパターン

const contentsPattern = /^[a-zA-Z亜-黑ぁ-んァ-ンヴー0-9!-{}~]{1,1000}$/;
const companyPattern = /^[a-zA-Z亜-黑ぁ-んァ-ンヴー0-9!-{}~]{1,100}$/;
const zipPattern = /^[0-9]{3}-[0-9]{4}|^[ 　]*$/;
const tellphonePattern = /^0\d(-\d{4}|\d-\d{3}|\d\d-\d\d|\d{3}-\d)-\d{4}|0[789]0-\d{4}-\d{4}/;
const urlPattern = /^(https|http):\/\/|^[ 　]*$/;
const firstNamePattern = /^[a-zA-Z亜-黑ぁ-んァ-ンヴー]{1,10}$/;
const lastNamePattern = /^[a-zA-Z亜-黑ぁ-んァ-ンヴー]{1,10}$/;
const departmentPattern = /^[a-zA-Z亜-黑ぁ-んァ-ンヴー0-9!-{}~]{0,10}$/;
const userphonePattern = /^0\d(-\d{4}|\d-\d{3}|\d\d-\d\d|\d{3}-\d)-\d{4}|0[789]0-\d{4}-\d{4}|^[ 　]*$/;
const mailPattern = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;


// 送信ボタン入力後のエラー表示

form.addEventListener('submit', e => {

    const contents = form.contents.value;
    const company = form.company.value;
    const zip = form.zip.value;
    const tellphone = form.tellphone.value;
    const url = form.url.value;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const department = form.department.value;
    const userphone = form.userphone.value;
    const mail = form.mail.value;

    if(contents!="") {
        contentsFeedback.innerText = ' ';

        if(!contentsPattern.test(contents)) {
            contentsFeedback.textContent = '未対応の入力があります';
        }
    } else {
        contentsFeedback.textContent = '入力は必須です';
    }
    
    if(company!="") {
        companyFeedback.innerText = ' ';

        if(!companyPattern.test(company)) {
            companyFeedback.textContent = '未対応の入力があります';
        }
    } else {
        companyFeedback.textContent = '入力は必須です';
    }

    if(zipPattern.test(zip)) {
        zipFeedback.innerText = ' ';
    } else {
        zipFeedback.textContent = 'ハイフン込みの郵便番号を入力してください';
    }

    if(tellphone!="") {
        tellphoneFeedback.innerText = ' ';

        if(!tellphonePattern.test(tellphone)) {
            tellphoneFeedback.textContent = '電話番号は半角ハイフン込みで入力してください';
        }
    } else {
        tellphoneFeedback.textContent = '入力は必須です';
    }

    if(urlPattern.test(url)) {
        urlFeedback.innerText = ' ';
    } else {
        urlFeedback.textContent = 'http://もしくはhttps://形式で入力してください';
    }

    if(firstName!="") {
        firstNameFeedback.innerText = ' ';

        if(!firstNamePattern.test(firstName)) {
            firstNameFeedback.textContent = '数字、記号は入力できません';
        }
    } else {
        firstNameFeedback.textContent = '入力は必須です';
    }

    if(lastName!="") {
            lastNameFeedback.innerText = ' ';

        if(!lastNamePattern.test(lastName)) {
            lastNameFeedback.textContent = '数字、記号は入力できません';
        }
    } else {
        lastNameFeedback.textContent = '入力は必須です';
    }

    if(departmentPattern.test(department)) {
        departmentFeedback.innerText = ' ';
    } else {
        departmentFeedback.textContent = '入力エラー：対応していない文字が入力されています';
    }

    if(userphonePattern.test(userphone)) {
        userphoneFeedback.innerText = ' ';
    } else {
        userphoneFeedback.textContent = '電話番号を半角ハイフン込みで入力してください';
    }

    if(mail!="") {
        mailFeedback.innerText = ' ';

        if(!mailPattern.test(mail)) {
            mailFeedback.textContent = 'アドレスの形式が違います';
        }
    } else {
        mailFeedback.textContent = '入力は必須です';
    }

    if(contentsPattern.test(contents)==true&&companyPattern.test(company)==true&&zipPattern.test(zip)==true&&tellphonePattern.test(tellphone)==true&&urlPattern.test(url)==true&&firstNamePattern.test(firstName)==true&&lastNamePattern.test(lastName)==true&&departmentPattern.test(department)==true&&userphonePattern.test(userphone)==true&&mailPattern.test(mail)==true) {
        
    } else {
        e.preventDefault();
    }
    
});


// 入力確認色枠

form.contents.addEventListener('keyup', e => {
    if(contentsPattern.test(e.target.value)){
        form.contents.setAttribute('class', 'success');
    }else{
        form.contents.setAttribute('class', 'error'); 
    }
});
form.company.addEventListener('keyup', e => {
    if(companyPattern.test(e.target.value)){
        form.company.setAttribute('class', 'success');
    }else{
        form.company.setAttribute('class', 'error'); 
    }
});
form.zip.addEventListener('keyup', e => {
    if(zipPattern.test(e.target.value)){
        form.zip.setAttribute('class', 'zip-success');
    }else{
        form.zip.setAttribute('class', 'zip-error'); 
    }
});
form.tellphone.addEventListener('keyup', e => {
    if(tellphonePattern.test(e.target.value)){
        form.tellphone.setAttribute('class', 'success');
    }else{
        form.tellphone.setAttribute('class', 'error'); 
    }
});
form.url.addEventListener('keyup', e => {
    if(urlPattern.test(e.target.value)){
        form.url.setAttribute('class', 'success');
    }else{
        form.url.setAttribute('class', 'error'); 
    }
});
form.firstName.addEventListener('keyup', e => {
    if(firstNamePattern.test(e.target.value)){
        form.firstName.setAttribute('class', 'success');
    }else{
        form.firstName.setAttribute('class', 'error'); 
    }
});
form.lastName.addEventListener('keyup', e => {
    if(lastNamePattern.test(e.target.value)){
        form.lastName.setAttribute('class', 'success');
    }else{
        form.lastName.setAttribute('class', 'error'); 
    }
});
form.department.addEventListener('keyup', e => {
    if(departmentPattern.test(e.target.value)){
        form.department.setAttribute('class', 'success');
    }else{
        form.department.setAttribute('class', 'error'); 
    }
});
form.userphone.addEventListener('keyup', e => {
    if(userphonePattern.test(e.target.value)){
        form.userphone.setAttribute('class', 'success');
    }else{
        form.userphone.setAttribute('class', 'error'); 
    }
});
form.mail.addEventListener('keyup', e => {
    if(mailPattern.test(e.target.value)){
        form.mail.setAttribute('class', 'success');
    }else{
        form.mail.setAttribute('class', 'error'); 
    }
});
