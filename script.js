
const tablinkSkill = document.getElementsByClassName('tab-link-1')[0]
const tablinkExperience = document.getElementsByClassName('tab-link-2')[0]
const tablinkEducation = document.getElementsByClassName('tab-link-3')[0]
const contactlinkSkill = document.getElementsByClassName('skill')[0]
const contactTabExperience = document.getElementsByClassName('experience')[0]
const contactTabEducation = document.getElementsByClassName('education')[0]

tablinkExperience.addEventListener("click",()=>{
  if(!contactTabExperience.classList.contains('hiden')){
    return;
  }
  contactTabExperience.classList.toggle('hiden');
  tablinkExperience.classList.add('active-link');
  if(!contactlinkSkill.classList.contains('hiden')){
    contactlinkSkill.classList.add('hiden');
    tablinkSkill.classList.remove('active-link');
  } 
  if(!contactTabEducation.classList.contains('hiden')){
    contactTabEducation.classList.add('hiden');
    tablinkEducation.classList.remove('active-link');
  } 
   
})

tablinkEducation.addEventListener("click",()=>{
  if(!contactTabEducation.classList.contains('hiden')){
    return;
  }
  contactTabEducation.classList.toggle('hiden');
  tablinkEducation.classList.add('active-link');
  if(!contactlinkSkill.classList.contains('hiden')){
    contactlinkSkill.classList.add('hiden');
    tablinkSkill.classList.remove('active-link');
  } 
  if(!contactTabExperience.classList.contains('hiden')){
    contactTabExperience.classList.add('hiden');
    tablinkExperience.classList.remove('active-link');
  } 
   
})

tablinkSkill.addEventListener("click",()=>{
  if(!contactlinkSkill.classList.contains('hiden')){
    return;
  }
  contactlinkSkill.classList.toggle('hiden');
  tablinkSkill.classList.add("active-link");
  if(!contactTabEducation.classList.contains('hiden')){
    contactTabEducation.classList.add('hiden');
    tablinkEducation.classList.remove('active-link');
  } 
  if(!contactTabExperience.classList.contains('hiden')){
    contactTabExperience.classList.add('hiden');
    tablinkExperience.classList.remove('active-link');
  } 
   
})


// ShowMore And LessMore Button
var showMores = document.getElementsByClassName('showmore');
var showMoreButton = document.getElementsByClassName('btn-more')[0];
var showLessButton = document.getElementsByClassName('btn-less')[0];

function showMore(event){
    // alert('show more');
    for(var showMore of showMores){
        
      showMore.style.display = 'block'
        // showMoreButton.style.display = 'none'
    }
    showMoreButton.style.display = 'none'
  showLessButton.style.display = 'block'
}

function showLess(event) {
    // alert('less ');
    console.log(showMores);
    for (var showMore of showMores) {
      showMore.style.display = 'none'
    }
    showMoreButton.style.display = 'block'
    showLessButton.style.display = 'none'
  }

  // for sending contact message to google sheet

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyaMTI8W4sRxrUhmqAbg1_obEiTFetXu81zk5dODQrvSbiwBqkiOq8_qRwW_e6cSxke/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })