//總共有以下六頁需要ajax

//一般頁面
//06-LP-Question
//07-LP-News
//08-LP-PhotoAlbum
//09-LP-Video

//特殊頁
//02-FormList-2Status
//02-FormList-form&replay



function getData(page_name){
    switch(page_name){
        case 'Question':        
            $.ajax({
                url:`https://run.mocky.io/v3/d2803eaa-5d63-4469-8be2-63dda7577032`,
                type:"POST",
                dataType:"json",
        
                success: function(results){
                    let innerBlock = document.querySelector(".QA-tab")
                    results.info.forEach(result => {
                        let question = result.question
                        let answer = result.answer
                        
                        innerBlock.innerHTML += `
                        <div class="QA">
                            <div class="query">
                                <span>
                                    ${question}
                                </span>
                                <i class="fas fa-chevron-up"></i>
                            </div>
                            <div class="answer">
                                ${answer}
                            </div>
                        </div>
                        `
                        $('.QA').click(function () {
                            $(this).toggleClass('active')
                        })
                    });
                },
        
                error: function(xhr, ajaxOptions, thrownError){
                    console.log(xhr.status);
                    console.log(thrownError);
                }
            })
        break;
        
        case 'News':
            $.ajax({
                url:`https://run.mocky.io/v3/f977bd53-df97-4bc5-9d80-f21a91363a39`,
                type:"POST",
                dataType:"json",
        
                success: function(results){
                    let innerBlock = document.querySelector(".news_list")
                    console.log(results.info.length);
                    results.info.forEach(result => {
                        let date = result.date
                        let title = result.title
                        let theme = result.theme
                        let place = result.place
                        
                        innerBlock.innerHTML += `
                        <div class="news">
                            <a href="">
                                <div class="date_area">
                                    <span class="date">${date}</span>
                                    <span class="title">${title}</span>
                                </div>
                                <div class="theme">${theme}</div>
                                <div class="place">${place}</div>
                            </a>
                            <div class="loadingarea">
                                <span>附件下載</span>
                                <div>
                                    <div class="loadingPoint"><a href="">PDF</a></div>
                                    <div class="loadingPoint"><a href="">XML</a></div>
                                    <div class="loadingPoint"><a href="">odt</a></div>
                                    <div class="loadingPoint"><a href="">doc</a></div>
                                    <div class="loadingPoint"><a href="">ods</a></div>
                                    <div class="loadingPoint"><a href="">odp</a></div>
                                </div>
                            </div>
                        </div>
                        `
                    });
                },
        
                error: function(xhr, ajaxOptions, thrownError){
                    console.log(xhr.status);
                    console.log(thrownError);
                }
            })
        break;

        case 'PhotoAlbum':
            $.ajax({
                url:`https://run.mocky.io/v3/546335cc-e1ae-4602-984a-1e5b0c67cd2b`,
                type:"POST",
                dataType:"json",
        
                success: function(results){
                    let innerBlock = document.querySelector(".cardBox-group")
                    results.info.forEach(result => {
                        let imgUrl = result.imgURL
                        let date = result.date
                        let title = result.title
                        
                        innerBlock.innerHTML += `
                        <div class="cardBox">
                            <div class="photo">
                                <a href="">
                                    <img src="${imgUrl}" alt="">
                                </a>
                            </div>
                            <p class="date">${date}</p>
                            <p class="title">${title}</p>
                        </div>
                        `
                    });
                },
        
                error: function(xhr, ajaxOptions, thrownError){
                    console.log(xhr.status);
                    console.log(thrownError);
                }
            })
        break;

        case 'Video':
            $.ajax({
                url:`https://run.mocky.io/v3/e30c63fa-4c01-48fe-be52-ab4cd7fa81a7`,
                type:"POST",
                dataType:"json",
        
                success: function(results){
                    let innerBlock = document.querySelector(".cardBox-group")
                    results.info.forEach(result => {
                        let imgUrl = result.imgURL
                        let title = result.title
                        
                        innerBlock.innerHTML += `
                        <div class="cardBox">
                            <a href="">
                                <div class="photo" style="background-image: url('${imgUrl}');">
                                    <div class="mask">
                                        <i class="fab fa-youtube"></i>
                                    </div>
                                </div>
                            </a>
                            <p class="title">${title}</p>
                        </div>
                        `
                    });
                },
        
                error: function(xhr, ajaxOptions, thrownError){
                    console.log(xhr.status);
                    console.log(thrownError);
                }
            })
        break;

        case '2Status':
            $.ajax({
                url:`https://run.mocky.io/v3/89eede57-376d-409d-b9ea-2564b41c23d7`,
                type:"POST",
                dataType:"json",
        
                success: function(results){
                    let innerBlock = document.querySelector(".news_list")
                    results.info.forEach(result => {
                        let start = result.start
                        let end = result.end
                        let classify = result.classify
                        let name = result.name
                        let status = result.status
                        
                        innerBlock.innerHTML += `
                        <div class="news">
                            <div class="datearea area">
                                <span>活動日期</span>
                                <span class="start-date">${start}</span>
                                <span class="end-date">${end}</span>
                            </div>

                            <div class="classarea area">
                                <span>活動分類</span>
                                <span>${classify}</span>
                            </div>

                            <div class="activityarea area">
                                <span>活動名稱</span>
                                <span>${name}</span>
                            </div>

                            <div class="takingarea area">
                                <span>正取名額</span>
                                <span>0</span>
                            </div>

                            <div class="Ingarea area">
                                <span>報名狀況</span>
                                <span>${status}</span>
                                <button class="btn-mob">登記候補</button>
                            </div>
                        </div>
                        `
                    });
                },
        
                error: function(xhr, ajaxOptions, thrownError){
                    console.log(xhr.status);
                    console.log(thrownError);
                }
            })
        break;

        case 'form&replay':
            $.ajax({
                url:`https://run.mocky.io/v3/9b6e4a6e-7ce3-4ff2-a375-304cf5bbd38d`,
                type:"POST",
                dataType:"json",
        
                success: function(results){
                    let innerBlock = document.querySelector(".news_list")
                    results.info.forEach(result => {
                        let start = result.start
                        let end = result.end
                        let classify = result.classify
                        let name = result.name
                        let quota = result.quota
                        let status = result.status
                        
                        innerBlock.innerHTML += `
                        <div class="news">
                            <div class="datearea area">
                                <span>活動日期</span>
                                <span class="start-date">${start}</span>
                                <span class="end-date">${end}</span>
                            </div>

                            <div class="classarea area">
                                <span>活動分類</span>
                                <span>${classify}</span>
                            </div>

                            <div class="activityarea area">
                                <span>活動名稱</span>
                                <span>${name}</span>
                            </div>

                            <div class="takingarea area">
                                <span>正取名額</span>
                                <span>${quota}</span>
                            </div>

                            <div class="Ingarea area">
                                <span>報名狀況</span>
                                <span>${status}</span>
                                <button class="btn-mob">登記候補</button>
                            </div>
                        </div>
                        `
                    });
                },
        
                error: function(xhr, ajaxOptions, thrownError){
                    console.log(xhr.status);
                    console.log(thrownError);
                }
            })
        break;
    }
}
