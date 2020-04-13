const form = document.querySelector('.form');
const input = form.url;
const regEx = /^(https?:\/{2})?((?:www\.)|(?!www\.))(((([a-zA-Z0-9]+[-_.]?[a-zA-Z0-9]+|[a-z]{0,})+(?<=[a-z])\.[a-z]{2,5})(:([1-5][1-9]{4}|[6][0-5][0-5][0-3][0-5]|[1-9][0-9]{0,3}))?(\/[a-zA-Z0-9#.\?_-]*\/?)*)|((([0-1][0-9]{2}|[2][0-5]{2}|[0-9]){0,2}(\.|\:)){3}(\d{0,3}(:([1-5][1-9]{4}|[6][0-5][0-5][0-3][0-5]|[1-9][0-9]{0,3}))?)(\/[a-zA-Z0-9#.\?_-]+\/?)*)\/?#?)+$/;

const validation = function (event){
    if(regEx.test(event.target.value)){input.setAttribute('pattern',`${input.value}`);
    }
    else{input.setAttribute('pattern',`${input.value}abc`);
    };
};

input.addEventListener('input', validation);
