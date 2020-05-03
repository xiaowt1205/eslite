// 捐款金額按鈕對應輸入框  
var nowDonate = document.getElementsByName('options');
var Donation_cost = document.querySelector('#Donation_cost');


nowDonate.forEach(element => {
    element.onclick = function () {
        Donation_cost.value = element.value
    }
});

Donation_cost.onfocus = function () {
    Donation_cost.onchange = function () {
        if (Donation_cost.value >= 100) {
            Donate_receipt.value = Donation_cost.value
        } else {
            alert("最低捐贈額度NT.100")
            Donation_cost.value = null
        }
    }
}



// 捐款收據
var need_receipt = document.querySelector('.need_receipt')
var receipt_ipt = document.getElementsByName('Receipt_needed')

receipt_ipt.forEach(element => {
    element.onchange = function () {
        if (element.value == "no") {
            need_receipt.innerHTML = ` `
        } else {
            need_receipt.innerHTML = `    <ul class="row justify-content-start">
            <li class="col-xl-3 col-12 name">
                <div>
                    捐款金額
                </div>
            </li>
            <li class="col-xl-9 col-12 form_input position-relative">
                <input id="Donate_receipt" type="number" name="text" placeholder=" ">
            </li>
        </ul>
        <ul class=" row justify-content-start">
            <li class="col-xl-3 col-12 name">
                <div>
                    <span>姓名</span>
                    <span>(或公司/團體)</span>
                </div>
            </li>
            <li class="col-xl-9 col-12 form_input">
                <input type="name" name="name" class="setName" placeholder=" ">
            </li>
        </ul>
        <ul class=" row justify-content-start">
            <li class="col-xl-3 col-12 name">
                <div>
                    <span>身分證字號/</span>
                    <span>或統一編號</span>
                </div>
            </li>
            <li class="col-xl-9 col-12 form_input">
                <input type="text" name="text" class="setIdNumber" placeholder=" ">
            </li>
        </ul>
        <ul class=" row justify-content-start">
            <li class="col-xl-3 col-12 name">
                <div>
                    收據類型
                </div>
            </li>
            <li class="col-xl-9 col-12 form_input">
                <div class="form-check">
                    <input class="form-check-input " type="radio" name="Receipt_type"
                        id="Receipt_type1" value="option1" checked>
                    <label class="form-check-label" for="Receipt_type1">
                        電子發票
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="Receipt_type"
                        id="Receipt_type2" value="option2">
                    <label class="form-check-label" for="Receipt_type2">
                        紙本收據
                    </label>
                </div>
                <div class="rt_mail form_input mt-3 ">
                    <input class="setEmail" type="email" name="email" placeholder="請輸入電子信箱">
                </div>
                <div class="rt_address form_input mt-3 d-none">
                    <input class="setAddress" type="text" name="email" placeholder="請輸入地址">
                </div>
            </li>
        </ul>`

            let Donate_receipt = document.querySelector('#Donate_receipt');
            Donate_receipt.value = Donation_cost.value
            Donate_receipt.onfocus = function () {
                Donate_receipt.onchange = function () {
                    if (Donate_receipt.value >= 100) {
                        Donation_cost.value = Donate_receipt.value
                    } else {
                        alert("最低捐贈額度NT.100")
                        Donation_cost.value = null
                        Donate_receipt.value = null
                    }
                }
            }

            let name = document.querySelector('.getName').value
            let idNum = document.querySelector('.getIdNumber').value
            let address = document.querySelector('.getAddress').value
            let email = document.querySelector('.getEmail').value

            document.querySelector('.setName').value = name
            document.querySelector('.setIdNumber').value = idNum
            document.querySelector('.setEmail').value = email

            let Receipt_type = document.getElementsByName('Receipt_type')
            let rt_mail = document.querySelector('.rt_mail')
            let rt_address = document.querySelector('.rt_address')

            Receipt_type.forEach(element => {
                element.onchange = function () {
                    if (element.value == "option1") {
                        rt_mail.classList.remove('d-none')
                        rt_address.classList.add('d-none')
                    } else {
                        rt_address.classList.remove('d-none')
                        rt_mail.classList.add('d-none')
                        document.querySelector('.setAddress').value = address
                    }
                }
            });
        }
    }
});


// 收據類型



// 捐款方式
var Donation_method = document.getElementsByName('Donation_method')
var credit = document.querySelector('.credit')
var atm = document.querySelector('.atm')
var atm_info = document.querySelector('.atm_info')


Donation_method.forEach(element => {
    element.onchange = function () {
        if (element.value == "option1") {
            credit.classList.remove('d-none')
            atm.classList.add('d-none')
            atm_info.innerHTML = ` `
        } else {
            credit.classList.add('d-none')
            atm.classList.remove('d-none')

            atm_info.innerHTML = `<ul class="row justify-content-start">
                            <li class="col-xl-3 col-12 name">
                                <div>
                                    匯款戶名
                                </div>
                            </li>
                            <li class="col-xl-9 col-12 form_input">
                                <input type="name" name="name" placeholder="凌網科技股份有限公司" required>
                            </li>
                        </ul>
                        <ul class="row justify-content-start">
                            <li class="col-xl-3 col-12 name">
                                <div>
                                    匯款銀行
                                </div>
                            </li>
                            <li class="col-xl-9 col-12 form_input">
                                <input type="name" name="name" placeholder="凌網科技股份有限公司" required>
                            </li>
                        </ul>
                        <ul class="row justify-content-start">
                            <li class="col-xl-3 col-12 name">
                                <div>
                                    <span>匯款帳號</span>
                                    <span>後五碼</span>
                                </div>
                            </li>
                            <li class="col-xl-9 col-12 form_input">
                                <input type="text" name="text" placeholder="請輸入帳號後五碼" required>
                            </li>
                        </ul>
                        <ul class="row justify-content-start">
                            <li class="col-xl-3 col-12 name">
                                <div>
                                    捐款金額
                                </div>
                            </li>
                            <li class="col-xl-9 col-12 form_input">
                                <div class="mask"></div>
                                <input id="Total_cost" type="text" name="text" required>
                            </li>
                        </ul>`
            let Total_ipt = document.querySelector('#Total_cost');
            Total_ipt.value = Donation_cost.value

            nowDonate.forEach(element => {
                element.onclick = function () {
                    Donation_cost.value = element.value
                    Donate_receipt.value = element.value
                    Total_ipt.value = element.value
                }
            });

            Donation_cost.onfocus = function () {
                Donation_cost.onchange = function () {
                    Donate_receipt.value = Donation_cost.value
                    Total_ipt.value = Donation_cost.value
                }
            }

            Donate_receipt.onfocus = function () {
                Donate_receipt.onchange = function () {
                    Donation_cost.value = Donate_receipt.value
                    Total_ipt.value = Donate_receipt.value
                }
            }
        }
    }
});
