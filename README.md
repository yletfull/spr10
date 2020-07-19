# Регулярные выражения и валидация
# Валидация полей формы 

## 1 Описание :
**Реализовано :**

1. Name validation;
 - только кириллица;
 - первая буква заглавная;
 - можно ввести от 2 до 20 символов — это можно задать в атрибутах minlength и maxlength;
 - шаблон должен находить имена таких форматов:
2. Mail validation
 - только латиница;
 - «собака» `@`— обязательный символ;
 - `.` обязательный символ;
 - цифры, подчерк, тире — разрешённые символы;

3. Phone number validation
 - *+7(925)900-90-90*
 - *+7(925) 900-90-90*
 - *+7 925-900-90-90*
 - *+79259009090*
 - *89259009090*  
  
4. Url validation
- начинаться с `http://` или `https://`;
- затем `www.` — это необязательная группа;
- IP-адрес — 255.255.255.255 или доменное имя — ya.ru;
- порт — тоже необязательная группа. Порт начинается с двоеточия, за которым идут от 2 до 5 цифр. Например: :8080;
- путь — последовательность из цифр, слешей и латинских букв, на конце которого может стоять решётка #;

## 2  About author : 
Andrey Korlyakov, Yandex Praktikum student.  


## 3 Demo :
| Description    | Version   |
|:------------------:| -----:|
| interface is released| v0.0.1 |
| Name field validation is released| v0.0.2 |
| Mail field validation is released| v0.0.3 |
| Phone field validation is released| v0.0.4 |
| Url field validation is released| v0.0.5 |
| [The first working version](https://yletfull.github.io/spr10/)  | v0.1.0 |
| [The second working version](https://yletfull.github.io/spr10/)  | v0.1.1 |
| [The third working version](https://yletfull.github.io/spr10/)  | v0.1.2 |

## 4 GitHub Pages :
[***Actual Version***](https://yletfull.github.io/spr10/)
