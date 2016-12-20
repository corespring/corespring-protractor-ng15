
    if(!customElements){
      throw new Error('Custom Elements arent supported');
    }
    //
    
        import Controller from 'pie-controller';
        window.pie = window.pie || {};
        window.pie.Controller = Controller;
import PiePlayer from 'pie-player';
customElements.define('pie-player', PiePlayer);
import PieControlPanel from 'pie-control-panel';
customElements.define('pie-control-panel', PieControlPanel);
import CorespringProtractorNg15 from 'corespring-protractor-ng15';
customElements.define('corespring-protractor-ng15', CorespringProtractorNg15);
import CorespringTextEntryNg15 from 'corespring-text-entry-ng15';
customElements.define('corespring-text-entry-ng15', CorespringTextEntryNg15);
    