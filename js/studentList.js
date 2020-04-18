var student = document.querySelector('.student')
var i = 1;

// add student list
function addStudentList(){
    i+=1
    student.insertAdjacentHTML('beforeend',`<div class="row content student-list">
                    <div class="col-10 block px-md-0">
                        <div class="row justify-content-start mx-0">
                            <div class="col-xl-3 col-12 name px-md-0">
                                <div>名稱</div>
                            </div>
                            <div class="col-xl-9 col-12 form_input px-md-0">
                                <input type="text" name="title_name" placeholder="">
                            </div>
                            <div class="col-xl-3 col-12 name px-md-0">
                                <div>身分證字號</div>
                            </div>
                            <div class="col-xl-9 col-12 form_input px-md-0">
                                <input type="text" name="title_name" placeholder="">
                            </div>
                            <div class="col-xl-3 col-12 name px-md-0">
                                <div>生日</div>
                            </div>
                            <div class="col-xl-9 col-12 form_input px-md-0">
                                <input type="text" name="title_name" placeholder="年/月/日 ex.19850611">
                            </div>
                            <div class="col-xl-3 col-12 name px-md-0">
                                <div>電子郵件</div>
                            </div>
                            <div class="col-xl-9 col-12 form_input px-md-0">
                                <input type="text" name="title_name" placeholder="">
                            </div>
                        </div>
                    </div>
                    <div class="col-2 icon px-0">
                        <button type='button' class="add" onclick="addStudentList()"><span>＋</span></button>
                        <button type='button' class="del" onclick="delStudentList(${i})"><span>－</span></button>
                    </div>
                </div>`)
}


function delStudentList(index){
    let student_list = document.querySelectorAll('.student-list')
    student_list[index].remove()
}