const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})


let btn = document.getElementById('button');
let div = document.getElementById('image');


const tabs = document.querySelectorAll('[data-tab-target]') 
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.tabTarget) 
        tabContents.forEach(tabContent =>  {
            tabContent.classList.remove('active')
        })
        target.classList.add('active')
    })
})

//navbar javascript
var tab = document.getElementById('btn')
var ta = document.getElementById('bt')
var tab1 = document.getElementById('btn1')
var tab2 = document.getElementById('btn2')
var tab3 = document.getElementById('btn3')
var tab4 = document.getElementById('btn4')

 tab.addEventListener('click', () => {
    tab.className = "active";
    ta.className = "";
    tab1.className = "";
    tab2.className = "";
    tab3.className = "";
 })

 tab1.addEventListener('click', () => {
    tab.className = "";
    ta.className = "";
    tab1.className = "active";
    tab2.className = "";
    tab3.className = "";
 })

 tab2.addEventListener('click', () => {
    tab.className = "";
    ta.className = "";
    tab1.className = "";
    tab2.className = "active";
    tab3.className = "";
 })

 tab3.addEventListener('click', () => {
    tab.className = "";
    ta.className = "";
    tab1.className = "";
    tab2.className = "";
    tab3.className = "active";
 })

 ta.addEventListener('click', () => {
    tab.className = "";
    ta.className = "active";
    tab1.className = "";
    tab2.className = "";
    tab3.className = "";
 })

 tab4.addEventListener('click', () => {
    tab.className = "active";
    ta.className = "";
    tab1.className = "";
    tab2.className = "";
    tab3.className = "";
 })

