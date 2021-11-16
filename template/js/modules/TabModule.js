export default function TabModule() {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const tabs = $$('.tab-title');
    const panes = $$('.tab-content-box');
    
    if (tabs) {

        tabs.forEach((tab, index) => {
            const pane = panes[index];
            tab.onclick = function () {
                $('.tab-title.active').classList.remove('active');
                $('.tab-content-box.active').classList.remove('active');

                this.classList.add('active');
                pane.classList.add('active');
            }
        })

        // tabs.each(function (tab, index) {
        //     const pane = panes[index];
        //     $(tab).click(function () {
        //         $('.tab-title.active').removeClass('active');
        //         $('.tab-content-box.active').removeClass('active');

        //         $(this).addClass('active');
        //         $(pane).addClass('active');
        //     });
        // });
       
        
    }

    const tabs_ft = $$('.ft-tab-title');
    const panes_ft = $$('.ft-tab-content');

    if (tabs_ft) {
        tabs_ft.forEach((tab, index) => {
            const pane = panes_ft[index];
            tab.onclick = function () {
                $('.ft-tab-title.active').classList.remove('active');
                $('.ft-tab-content.active').classList.remove('active');

                this.classList.add('active');
                pane.classList.add('active');
            }
        })

      
        
    }

 
      
   
}