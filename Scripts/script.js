onload = () => {
  SliderInit()
  MenuBtnInit()
}


const SliderInit = () => {
  const SLIDER_IMGS = document.querySelectorAll(`section#Home div.Carousal-container div.Slider img`)
  SLIDER_IMGS[0].style.display = `block`
  //counter

  let SlideCounter = 0

  //Buttons
  const NEXT_BTN = document.querySelector(`section#Home div.Carousal-container div.NextBtn`)
  const PREV_BTN = document.querySelector(`section#Home div.Carousal-container div.PrevBtn`)

  //Button Listener

  NEXT_BTN.addEventListener(`click`, () => {
    SlideCounter = RemoveSlide(SlideCounter, true)
    setTimeout(() => {
      if (SlideCounter > 5) {
        SLIDER_IMGS[SlideCounter - 1].style.display = `none`
        SlideCounter = 0
      }
      AddSlide(SlideCounter, true)
    }, 250);
  })


  PREV_BTN.addEventListener(`click`, () => {
    SlideCounter = RemoveSlide(SlideCounter, false)
    setTimeout(() => {
      if (SlideCounter < 0) {
        SlideCounter = 5
      }
      AddSlide(SlideCounter, false)
    }, 250);
  })


  const RemoveSlide = (x, dir) => {
    if (dir) {
      SLIDER_IMGS[x].style.animation = `FadeOff 0.25s linear`
      return ++x
    }

    if (!dir) {
      SLIDER_IMGS[x].style.animation = `FadeOff 0.25s linear`
      return --x
    }
  }


  const AddSlide = (x, dir) => {
    if (dir) {
      if (x > 0) {
        SLIDER_IMGS[x - 1].style.display = `none`
      }
      SLIDER_IMGS[x].style.display = `block`
      SLIDER_IMGS[x].style.animation = `FadeOn 0.25s linear`
    }

    if (!dir) {
      SLIDER_IMGS[x].style.display = `block`
      SLIDER_IMGS[x].style.animation = `FadeOn 0.25s linear`
      if (x < 5) {
        SLIDER_IMGS[x + 1].style.display = `none`
      }
      else {
        SLIDER_IMGS[0].style.display = `none`
      }
    }
  }
}

const MenuBtnInit = () => {
  const MENU_BTN = document.querySelector(`nav div.MenuBtn`)
  const MENU_BAR = document.querySelector(`body div.Menu`)
  const NAV_LINK = document.querySelectorAll(`body div.Menu a`)



  MENU_BTN.addEventListener(`click`, () => {
    MENU_BTN.classList.toggle(`Sliced`)
    MENU_BAR.classList.toggle(`Sliced`)
  })

  NAV_LINK.forEach(LINK => {
    LINK.addEventListener(`click`, () => {
      MENU_BTN.classList.toggle(`Sliced`)
      MENU_BAR.classList.toggle(`Sliced`)
    })
  });



  /*   MENU_BTN.addEventListener(`focusout`, () => {
    console.log(true)
    MENU_BTN.classList.remove(`Sliced`)
    MENU_BAR.classList.remove(`Sliced`)
  })
  */
 /*   const LINK = document.querySelectorAll(`header div.Menu a`)
  console.log(LINK)
  LINK.forEach(NavBtn => {
    NavBtn.addEventListener(`click`, () => {
      MENU_BTN.classList.toggle(`Sliced`)
      MENU_BAR.classList.toggle(`Sliced`)
    })
  });
*/}